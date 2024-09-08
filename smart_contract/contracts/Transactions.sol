// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@chainlink/contracts/src/v0.8/CCIPReceiver.sol";
// import "@chainlink/contracts/src/v0.8/CCIPSender.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface LinkTokenInterface {
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 value) external returns (bool);
    function balanceOf(address owner) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

contract CrossChainLending is Ownable {
    struct Loan {
        uint256 amount;
        uint256 collateral;
        address borrower;
        uint256 interestRate;
        uint256 duration;
        uint256 startTime;
        bool isRepaid;
    }

    enum LoanState { Active, Repaid, Defaulted }

    mapping(uint256 => Loan) public loans;
    mapping(uint256 => LoanState) public loanState;
    uint256 public loanCounter;
    
    IERC20 public collateralToken;
    IERC20 public lendingToken;
    LinkTokenInterface public linkToken;

    event LoanCreated(uint256 loanId, address borrower, uint256 amount, uint256 collateral);
    event LoanRepaid(uint256 loanId, address borrower);
    event LoanDefaulted(uint256 loanId, address borrower);

    constructor(address _collateralToken, address _lendingToken, address _linkToken) {
        collateralToken = IERC20(_collateralToken);
        lendingToken = IERC20(_lendingToken);
        linkToken = LinkTokenInterface(_linkToken);
    }

    modifier onlyBorrower(uint256 _loanId) {
        require(loans[_loanId].borrower == msg.sender, "You are not the borrower");
        _;
    }

    modifier loanIsActive(uint256 _loanId) {
        require(loanState[_loanId] == LoanState.Active, "Loan is not active");
        _;
    }

    function createLoan(
        uint256 _amount,
        uint256 _collateral,
        uint256 _interestRate,
        uint256 _duration
    ) external {
        require(_collateral >= _amount, "Collateral must be greater than or equal to the loan amount");

        require(collateralToken.transferFrom(msg.sender, address(this), _collateral), "Collateral transfer failed");

        loans[loanCounter] = Loan({
            amount: _amount,
            collateral: _collateral,
            borrower: msg.sender,
            interestRate: _interestRate,
            duration: _duration,
            startTime: block.timestamp,
            isRepaid: false
        });

        loanState[loanCounter] = LoanState.Active;

        require(lendingToken.transfer(msg.sender, _amount), "Loan token transfer failed");

        emit LoanCreated(loanCounter, msg.sender, _amount, _collateral);
        loanCounter++;
    }

    function repayLoan(uint256 _loanId) external onlyBorrower(_loanId) loanIsActive(_loanId) {
        Loan storage loan = loans[_loanId];
        require(block.timestamp <= loan.startTime + loan.duration, "Loan has expired");

        uint256 repaymentAmount = loan.amount + (loan.amount * loan.interestRate / 100);

        require(lendingToken.transferFrom(msg.sender, address(this), repaymentAmount), "Repayment transfer failed");

        require(collateralToken.transfer(loan.borrower, loan.collateral), "Collateral transfer failed");

        loan.isRepaid = true;
        loanState[_loanId] = LoanState.Repaid;

        emit LoanRepaid(_loanId, loan.borrower);
    }

    function checkForDefault(uint256 _loanId) external onlyOwner loanIsActive(_loanId) {
        Loan storage loan = loans[_loanId];
        require(block.timestamp > loan.startTime + loan.duration, "Loan has not expired");

        if (!loan.isRepaid) {
            loanState[_loanId] = LoanState.Defaulted;

            emit LoanDefaulted(_loanId, loan.borrower);
        }
    }

    function transferAssets(
        address _destination,
        uint256 _amount,
        address _token
    ) external onlyOwner {
        IERC20(_token).transfer(_destination, _amount);
    }

    function getLoanDetails(uint256 _loanId) external view returns (Loan memory, LoanState) {
        return (loans[_loanId], loanState[_loanId]);
    }
}

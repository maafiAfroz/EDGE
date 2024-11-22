const api = {
    balance: 0,
    totalDeposit: 0,
    totalWithdraw: 0,
    deposit: function (amount) {
      this.balance += amount;
      this.totalDeposit += amount;
      return this.balance;
    },
    withdraw: function (amount) {
      if (amount > this.balance) {
        return { success: false, message: "Insufficient funds" };
      }
      this.balance -= amount;
      this.totalWithdraw += amount;
      return { success: true, balance: this.balance };
    },
  };
  
  const totalDepositEl = document.getElementById("totalDeposit");
  const totalWithdrawEl = document.getElementById("totalWithdraw");
  const balanceEl = document.getElementById("balance");
  const depositInput = document.getElementById("depositInput");
  const withdrawInput = document.getElementById("withdrawInput");
  const depositButton = document.getElementById("depositButton");
  const withdrawButton = document.getElementById("withdrawButton");
  
  depositButton.addEventListener("click", () => {
    const amount = parseFloat(depositInput.value);
    if (amount && amount > 0) {
      api.deposit(amount);
      updateUI();
      depositInput.value = ""; 
    } else {
      alert("Please enter a valid deposit amount.");
    }
  });
  
  withdrawButton.addEventListener("click", () => {
    const amount = parseFloat(withdrawInput.value);
    if (amount && amount > 0) {
      const result = api.withdraw(amount);
      if (result.success) {
        updateUI();
        withdrawInput.value = ""; 
      } else {
        alert(result.message);
      }
    } else {
      alert("Please enter a valid withdraw amount.");
    }
  });
  
  function updateUI() {
    totalDepositEl.textContent = `$${api.totalDeposit.toFixed(2)}`;
    totalWithdrawEl.textContent = `$${api.totalWithdraw.toFixed(2)}`;
    balanceEl.textContent = `$${api.balance.toFixed(2)}`;
  }
  
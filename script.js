
document.getElementById('calculate').addEventListener('click', function () {
  const foodInput = document.getElementById('food-cost');
  const foodValue = parseFloat(foodInput.value);
  console.log(foodValue);
  const rentInput = document.getElementById('rent-cost');
  const rentValue = parseFloat(rentInput.value);
  console.log(rentValue);
  const clothesInput = document.getElementById('cothes-cost');
  const clothesValue = parseFloat(clothesInput.value);
  console.log(clothesValue);
  const totalText = document.getElementById('total-Expenses');
  const totalValue = totalText.innerText;
  const totalCost = foodValue + rentValue + clothesValue;
  totalText.innerText = totalCost;
  const incomeInput = document.getElementById('inocome-input').value;
  const incomeValue = parseFloat(incomeInput);
  const saveBalnce = document.getElementById('cost-end-blance');
  const saveBalnceText = parseFloat(saveBalnce.innerText);
  const totalCostBlance = incomeValue - totalCost;
  saveBalnce.innerText = totalCostBlance;
});
document.getElementById('save-button').addEventListener('click', function () {
  const mainBlanceInput = document.getElementById('inocome-input');
  const mainBlance = parseFloat(mainBlanceInput.value);
  const saveInput = document.getElementById('save-input');
  const saveBlance = parseFloat(saveInput.value);
  const totalSavingBlance = mainBlance * saveBlance / 100;
  const savingParcentageBlance = document.getElementById('saving-blance');
  const savingParcentageText = parseFloat(savingParcentageBlance.innerText);
  savingParcentageBlance.innerText = totalSavingBlance;
  const remainingInput = document.getElementById('remaining-blance');
  const remainingText = parseFloat(remainingInput.innerText);
  const savingBalanceRemainig = document.getElementById('saving-blance');
  const saveremain = parseFloat(savingBalanceRemainig.innerText);
  const subTotalBlance = document.getElementById('cost-end-blance');
  const subTotalremain = parseFloat(subTotalBlance.innerText);
  const totalremaining = subTotalremain - saveremain;
  remainingInput.innerText = totalremaining;

});


function deletAllData() {

  document.getElementById('inocome-input').value = '';
  document.getElementById('food-cost').value = '';
  document.getElementById('rent-cost').value = '';
  document.getElementById('cothes-cost').value = '';
  document.getElementById('save-input').value = '';

}
const navLinkEls = document.querySelectorAll(".nav-link");
const donationSection = document.getElementById("donation");
const historySection = document.getElementById("history");
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const inpNoakhali = document.getElementById("inp-noakhali");
const inpFeni = document.getElementById("inp-feni");
const inpQuota = document.getElementById("inp-quota");
const donateNoakhaliBtn = document.getElementById("donate-noakhali");
const donateFeniBtn = document.getElementById("donate-feni");
const donateQuotaBtn = document.getElementById("donate-quota");
const noakhaliBalance = document.getElementById("noakhali-balance");
const feniBalance = document.getElementById("feni-balance");
const quotaBalance = document.getElementById("quota-balance");
const userBalance = document.getElementById("user-balance");
const confirmationMsg = document.getElementById("confirmation_msg");

navLinkEls.forEach((navlinkEl) => {
  navlinkEl.addEventListener("click", function () {
    document.querySelector(".btn-color").classList.remove("btn-color");
    navlinkEl.classList.add("btn-color");
  });
});
historyBtn.addEventListener("click", () => {
  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});
donationBtn.addEventListener("click", () => {
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");
 
});

function addMoney(input, balance) {
  let newbalance = Number(balance.innerText) + Number(input.value);
  balance.innerText = newbalance;
  input.value = "";
}
function decreaseUserBalance(input) {
  let userNewBalance = Number(userBalance.innerText) - Number(input.value);

  userBalance.innerText = userNewBalance;
}
function isValidMoney(input) {
  if (
    isNaN(input.value) ||
    Number(input.value) > Number(userBalance.innerText) ||
    input.value == false
  ) {
    input.value = "";
     alert("not a valid amount")
     return false
  }
  return true
}

donateNoakhaliBtn.addEventListener("click", () => {
  if (isValidMoney(inpNoakhali)) {
    confirmationMsg.showModal();
    decreaseUserBalance(inpNoakhali);
    const div = document.createElement("div");
    div.className = "border w-4/5 md:w-3/5 px-4 py-6 mb-5 mx-auto rounded-lg ";
    div.innerHTML = `<h4 class="font-bold mb-2"> ${
      inpNoakhali.value
    } Taka is Donated for famine-2024 at Feni,Bangladesh </h4>
      <p class="text-gray-500 text-sm">Date:${new Date()}</p>`;
  
    historySection.appendChild(div);
    addMoney(inpNoakhali, noakhaliBalance);
  }
 
});

donateFeniBtn.addEventListener("click", () => {
    if (isValidMoney(inpFeni)) {
        confirmationMsg.showModal();
        decreaseUserBalance(inpFeni);
        const div = document.createElement("div");
        div.className = "border w-4/5 md:w-3/5 px-4 py-6 mb-5 mx-auto rounded-lg ";
        div.innerHTML = `<h4 class="font-bold mb-2"> ${
            inpFeni.value
        } Taka is Donate for Flood Relief in Feni,Bangladesh </h4>
          <p class="text-gray-500 text-sm">Date:${new Date()}</p>`;
      
        historySection.appendChild(div);
        addMoney(inpFeni, feniBalance);
      }
});
donateQuotaBtn.addEventListener("click", () => {
    if (isValidMoney(inpQuota)) {
        confirmationMsg.showModal();
        decreaseUserBalance(inpQuota);
        const div = document.createElement("div");
        div.className = "border w-4/5 md:w-3/5 px-4 py-6 mb-5 mx-auto rounded-lg ";
        div.innerHTML = `<h4 class="font-bold mb-2"> ${
            inpQuota.value
        } Taka is Donated for Aid for Injured in the Quota Movement </h4>
          <p class="text-gray-500 text-sm">Date:${new Date()}</p>`;
      
        historySection.appendChild(div);
        addMoney(inpQuota, quotaBalance);
      }
});

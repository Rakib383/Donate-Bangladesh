const navLinkEls = document.querySelectorAll('.nav-link')
const donationSection = document.getElementById('donation')
const historySection = document.getElementById('history')
const donationBtn =document.getElementById('donation-btn')
const historyBtn =document.getElementById('history-btn')
const inpNoakhali =document.getElementById('inp-noakhali')
const donateNoakhaliBtn =document.getElementById('donate-noakhali')
const inpFeni =document.getElementById('inp-feni')
const donateFeniBtn =document.getElementById('donate-feni')
const inpQuota =document.getElementById('inp-quota')
const donateQuotaBtn =document.getElementById('donate-quota')
const noakhaliBalance = document.getElementById('noakhali-balance')
const feniBalance = document.getElementById('noakhali-balance')
const quotaBalance = document.getElementById('noakhali-balance')
const userBalance = document.getElementById('user-balance')
const confirmationMsg = document.getElementById('confirmation_msg')


navLinkEls.forEach(navlinkEl => {
    navlinkEl.addEventListener('click',function () {
        document.querySelector('.btn-color').classList.remove('btn-color')
        navlinkEl.classList.add('btn-color')
        
    })

})
historyBtn.addEventListener('click',()=>{
    
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
    
})
donationBtn.addEventListener('click',()=>{
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    console.log('his')
})


function addMoney (input,balance) {

    let newbalance = Number(balance.innerText) + Number(input.value)
    balance.innerText = newbalance
   input.value = ''


}
function decreaseUserBalance(input) {
   
let userNewBalance = Number(userBalance.innerText) - Number(input.value)

userBalance.innerText = userNewBalance

}


donateNoakhaliBtn.addEventListener('click',()=> {
    console.log(parseFloat(inpNoakhali.value))
    if (isNaN(inpNoakhali.value) || Number(inpNoakhali.value) > Number(userBalance.innerText) || inpNoakhali.value == false) {
        inpNoakhali.value = ''
        return alert('not a valid amount')
      }
    decreaseUserBalance(inpNoakhali)
    const div=document.createElement('div')
    div.className="border w-4/5 md:w-3/5 px-4 py-6 mb-5 mx-auto rounded-lg "
    div.innerHTML = `<h4 class="font-bold mb-2"> ${inpNoakhali.value} Taka is Donated for famine-2024 at Feni,Bangladesh </h4>
    <p class="text-gray-500 text-sm">Date:${new Date()}</p>`
    confirmationMsg.showModal()
    historySection.appendChild(div)
    addMoney(inpNoakhali,noakhaliBalance)

    

    
})

// donateFeni.addEventListener('click',()=> {
//     console.log('ok')
//     addMoney(inpFeni,fe)
// })
// donateQuota.addEventListener('click',()=> {
//     console.log('ok')
//     addMoney(inpNoakhali,noakhaliBalance)
// })
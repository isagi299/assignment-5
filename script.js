function calculateDonation(currentDonationId, donateValue){
    let currentDonation = document.getElementById(currentDonationId);
  
    currentDonation.innerText = `${Number(currentDonation.innerText) + Number(donateValue)}`;

}

function calculateBalance( currentBalanceId,donateValue){

    let currentBalance = document.getElementById(currentBalanceId);
    if(Number(donateValue) > Number(currentBalance.innerText)){
        alert('Insufficient balance');
        return 'Insufficient balance';
    }
    currentBalance.innerText = `${Number(currentBalance.innerText) - Number(donateValue)}`;
}

// donation 1 --> Flood at Noakhali, Bangladesh
const donateNow = document.getElementById('donateNow1');
donateNow.addEventListener('click', function() {
    let donateAmount = document.getElementById('donateAmount1');
    let donateValue = donateAmount.value;
    if(isNaN(donateValue) || donateValue === '' || Number(donateValue)<0) {
        alert('please input right value')
        return;
    }



    const a = calculateBalance('currentBalance',donateValue);
    if(a==='Insufficient balance')
        return;

    calculateDonation('currentDonation1',donateValue);

    donateNow.onclick = my_modal_1.showModal();
    let date = new Date()

document.getElementById('history').innerHTML += `<div class="w-[80%] mx-auto border-2 rounded-2xl p-8 space-y-5 mt-6">
                <h2 class="text-[#111111] text-xl font-bold">${donateValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
                <h3 class="text-[#111111] font-light text-opacity-70">Date : ${date}</h3>

            </div>`
        
            donateAmount.value = ''
});

// donation 2 --> Flood Relief in Feni,Bangladesh
const donateNow1 = document.getElementById('donateNow2');
donateNow1.addEventListener('click', function() {
    let donateAmount = document.getElementById('donateAmount2');
    let donateValue = donateAmount.value;
    if(isNaN(donateValue) || donateValue === ''|| Number(donateValue)<0) {
        alert('please input right value1')
        
        return;
    }



    const a = calculateBalance('currentBalance',donateValue);
    if(a==='Insufficient balance')
        return;
    calculateDonation('currentDonation2',donateValue);
    donateNow.onclick = my_modal_2.showModal();
    let date = new Date()
    document.getElementById('history').innerHTML += `            <div class="w-[80%] mx-auto border-2 rounded-2xl p-8 space-y-5 mt-6">
                <h2 class="text-[#111111] text-xl font-bold">${donateValue} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
                <h3 class="text-[#111111] font-light text-opacity-70">Date : ${date}</h3>

            </div>`
            donateAmount.value = ''

});





// donation 3 -->  Injured in the Quota Movement
const donateNow2 = document.getElementById('donateNow3');
donateNow2.addEventListener('click', function() {
    let donateAmount = document.getElementById('donateAmount3');
    let donateValue1 = donateAmount.value;
    if(isNaN(donateValue1) || donateValue1 === ''|| Number(donateValue1)<0) {
        alert('please input right value')
        return;
    }



    const a = calculateBalance('currentBalance',donateValue1);
    if(a==='Insufficient balance')
        return;
    calculateDonation('currentDonation3',donateValue1);
    donateNow.onclick = my_modal_3.showModal();
    let date = new Date()
    document.getElementById('history').innerHTML += `            <div class="w-[80%] mx-auto border-2 rounded-2xl p-8 space-y-5 mt-6">
    <h2 class="text-[#111111] text-xl font-bold">${donateValue1} Taka is Donated for Aid for Injured in the Quota Movement</h2>
    <h3 class="text-[#111111] font-light text-opacity-70">Date : ${date}</h3>

</div>`
donateAmount.value = ''


});

// history section 
let historyButton = document.getElementById('historyButton');
let donationButton = document.getElementById('donationButton');
historyButton.addEventListener('click', function(){
    historyButton.classList.remove('opacity-70');
    historyButton.classList.remove('bg-transparent');
    historyButton.classList.add('bg-[#b4f461]');

    donationButton.classList.add('opacity-70');
    donationButton.classList.add('bg-transparent');
    donationButton.classList.remove('bg-[#b4f461]');

    document.getElementById('history').style.display = 'block';
    document.getElementById('main').style.display = 'none';
})

donationButton.addEventListener('click', function(){
    historyButton.classList.add('opacity-70');
    historyButton.classList.add('bg-transparent');
    historyButton.classList.remove('bg-[#b4f461]');

    donationButton.classList.remove('opacity-70');
    donationButton.classList.remove('bg-transparent');
    donationButton.classList.add('bg-[#b4f461]');

    document.getElementById('history').style.display = 'none';
    document.getElementById('main').style.display = 'block';
})

// go to blog page 
function blog(){
    window.location.href = "/blog.html";
}


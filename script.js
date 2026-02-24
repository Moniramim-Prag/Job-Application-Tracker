let interviewingList=[];
let rejectingList=[];
let currentStatus='all';
let total = document.getElementById('total');
let interviewingCount = document.getElementById('interviewing-count');
let rejectingCount = document.getElementById('rejecting-count');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewingFilterBtn = document.getElementById('interviewing-filter-btn');
const rejectingFilterBtn = document.getElementById('rejecting-filter-btn');
const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewingCount.innerText = interviewingList.length;
    rejectingCount.innerText = rejectingList.length;
   
}
calculateCount()


function toggleStyle(id){
allFilterBtn.classList.add('bg-gray-300','text-black')
interviewingFilterBtn.classList.add('bg-gray-300','text-black')
rejectingFilterBtn.classList.add('bg-gray-300','text-black')

allFilterBtn.classList.remove('bg-blue-800','text-white')
interviewingFilterBtn.classList.remove('bg-blue-800','text-white')
rejectingFilterBtn.classList.remove('bg-blue-800','text-white')
const selected = document.getElementById(id)
currentStatus = id
console.log(currentStatus)
selected.classList.remove('bg-gray-300','text-black')
selected.classList.add('bg-blue-800','text-white')

if(id== 'interviewing-filter-btn'){
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterviewing()
}
else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
}
else if (id=='rejecting-filter-btn'){
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejecting()
}

}
mainContainer.addEventListener('click',function(event){

   
    if(event.target.classList.contains('interviewing-btn')){
    const parenNode = event.target.parentNode.parentNode;
    const companyName = parenNode.querySelector('.company').innerText
    const roleName = parenNode.querySelector('.role').innerText
    const detailsName= parenNode.querySelector('.details').innerText
    const statusName = parenNode.querySelector('.status').innerText
    const notesName = parenNode.querySelector('.notes').innerText
    parenNode.querySelector('.status').innerText= 'Interview'

    const cardInfo = {
        companyName,
        roleName,
        detailsName,
        statusName:'Interview',
        notesName

        


    }
    console.log(cardInfo)
    const companyExist = interviewingList.find(item => item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        interviewingList.push(cardInfo)
    }
    rejectingList= rejectingList.filter(item=>item.companyName !=cardInfo.companyName)
    calculateCount()
    if(currentStatus=='rejecting-filter-btn'){
       renderRejecting()
    }
    
    }
    else if(event.target.classList.contains('rejecting-btn')){
    const parenNode = event.target.parentNode.parentNode;
    const companyName = parenNode.querySelector('.company').innerText
    const roleName = parenNode.querySelector('.role').innerText
    const detailsName= parenNode.querySelector('.details').innerText
    const statusName = parenNode.querySelector('.status').innerText
    const notesName = parenNode.querySelector('.notes').innerText
    parenNode.querySelector('.status').innerText= 'Rejected'

    const cardInfo = {
        companyName,
        roleName,
        detailsName,
        statusName:'Rejected',
        notesName

        


    }
    console.log(cardInfo)
    const companyExist = rejectingList.find(item => item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        rejectingList.push(cardInfo)
    }
    interviewingList = interviewingList.filter(item=>item.companyName !=cardInfo.companyName)
    if(currentStatus== "interviewingFilterBtn"){
        renderInterviewing()
    }
        
    calculateCount()
    // renderRejecting()
    }
    
})


function renderInterviewing(){

    filterSection.innerHTML = '';

    if(interviewingList.length === 0){
        renderEmptyState("No Interview jobs available");
        return;
    }

    for(let interview of interviewingList){
        let div = document.createElement('div');
        div.className='job-card border space-y-3 relative p-3';

        div.innerHTML = `
        <div class="company text-3xl font-bold">${interview.companyName}</div>
        <div class="role">${interview.roleName}</div>
        <div class="details">${interview.detailsName}</div>
        <span class="status bg-green-100 rounded-2xl p-2">${interview.statusName}</span>
        <div class="notes">${interview.notesName}</div>
        <br>
            <div>
                <button class="interviewing-btn border-green-600 border bg-amber-50 p-2 text-green-500 font-bold cursor-pointer">Interview</button>
                <button class="rejecting-btn border-red-400 border bg-amber-50 p-2 text-red-500 font-bold cursor-pointer">Rejected</button>
            </div>
        `;

        filterSection.appendChild(div);
    }
}

function renderRejecting(){

    filterSection.innerHTML = '';

    if(rejectingList.length === 0){
        renderEmptyState("No Rejected jobs available");
        return;
    }

    for(let reject of rejectingList){
        let div = document.createElement('div');
        div.className='job-card border space-y-3 relative p-3';

        div.innerHTML = `
        <div class="company text-3xl font-bold">${reject.companyName}</div>
        <div class="role">${reject.roleName}</div>
        <div class="details">${reject.detailsName}</div>
        <span class="status bg-red-100 rounded-2xl p-2">${reject.statusName}</span>
        <div class="notes">${reject.notesName}</div>
        <br>
            <div>
                <button class="interviewing-btn border-green-600 border bg-amber-50 p-2 text-green-500 font-bold cursor-pointer">Interview</button>
                <button class="rejecting-btn border-red-400 border bg-amber-50 p-2 text-red-500 font-bold cursor-pointer">Rejected</button>
            </div>
        `;

        filterSection.appendChild(div);
    }
}
 function renderEmptyState(message){

    filterSection.innerHTML = `
     <div class="bg-gray-100 rounded-2xl p-16 text-center">
         <div class="text-6xl text-blue-500 mb-4">
             <i class="fa-solid fa-file-lines"></i>
         </div>
         <h2 class="text-2xl font-bold mb-2">${message}</h2>
         <p class="text-gray-500">Check back soon for new job opportunities</p>
     </div>
     `;
 }


const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function(button){
    button.addEventListener("click", function(){
        button.parentElement.remove();
        updateNumbers();
    });
});

function updateNumbers(){
    const totalCards = document.querySelectorAll(".job-card").length;
    document.getElementById("total").innerText = totalCards;
    document.getElementById("jobCount").innerText = totalCards + " cards";
}

    

    
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
    filterSection.innerHTML= ''
    for(let interview of interviewingList){
       
        let div = document.createElement('div');
        div.className='job-card border space-y-3 relative p-3'
        div.innerHTML=`<div class="delete-btn absolute right-2.5 top-2.5 cursor-pointer text-[16px]" onclick="deleteCard(this)"><i class="fa-solid fa-trash-can" style="color: rgb(177, 151, 252);"></i></div>
            <div class="company text-3xl font-bold ">${interview.companyName}</div>
            <div class="role">React Native Developer</div>
            <div class="details">Remote • Full-time • $130k - $175k</div>
             <span class="status bg-slate-300 rounded-2xl p-2">${interview.statusName}</span>
             <div class="notes" >Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</div>
            <br>
            <div>
                <button class="interviewing-btn border-green-600 border bg-amber-50 p-2 text-green-500 font-bold cursor-pointer">Interview</button>
                <button class="rejecting-btn border-red-400 border bg-amber-50 p-2 text-red-500 font-bold cursor-pointer">Rejected</button>
            </div> 
        </div>
        `
        filterSection.appendChild(div)
    }
}
function renderRejecting(){
    filterSection.innerHTML= ''
    for(let reject of rejectingList){
       
        let div = document.createElement('div');
        div.className='job-card border space-y-3 relative p-3'
        div.innerHTML=`<div class="delete-btn absolute right-2.5 top-2.5 cursor-pointer text-[16px]" onclick="deleteCard(this)"><i class="fa-solid fa-trash-can" style="color: rgb(177, 151, 252);"></i></div>
            <div class="company text-3xl font-bold ">${reject.companyName}</div>
            <div class="role">React Native Developer</div>
            <div class="details">Remote • Full-time • $130k - $175k</div>
             <span class="status bg-slate-300 rounded-2xl p-2">${reject.statusName}</span>
             <div class="notes" >Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</div>
            <br>
            <div>
                <button class="interviewing-btn border-green-600 border bg-amber-50 p-2 text-green-500 font-bold cursor-pointer">Interview</button>
                <button class="rejecting-btn border-red-400 border bg-amber-50 p-2 text-red-500 font-bold cursor-pointer">Rejected</button>
            </div> 
        </div>
        `
        filterSection.appendChild(div)
    }
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

    

    
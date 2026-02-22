const deleteButtons = document.querySelectorAll(".delete-btn");
const jobCount = document.getElementById("jobCount");
deleteButtons.forEach(function(button) {
button.addEventListener("click" , function(){
    const card = this.parentElement;
    card.remove();
    updateCount();
})
})
function updateCount(){
    const cards = document.querySelectorAll(".job-card");
    jobCount.innerText = cards.length +  " Jobs";
}
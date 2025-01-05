
const accoHeading = [...document.querySelectorAll('.acco-heading')];




const onAccordianClick = (eve)=>{
    accoHeading.forEach(div => div.classList.remove('active'));
    eve.traget.classList.add('active')

}








accoHeading.forEach(accHead =>{
    accHead.addEventListener("click", onAccordianClick);
})

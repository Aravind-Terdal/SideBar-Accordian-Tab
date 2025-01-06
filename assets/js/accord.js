
const accoHeading = [...document.querySelectorAll('.acco-heading')];




const onAccordianClick = (eve)=>{
    accoHeading.forEach(div => div.classList.remove("active") );
    eve.target.classList.toggle('active')
    // cl(eve.target)
    
    
}








accoHeading.forEach(accHead => {
    accHead.addEventListener("click", onAccordianClick);
})

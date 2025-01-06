const tabHeadding = document.querySelectorAll('.tabHeadding li');
const tabPanel = document.querySelectorAll('.tabPanel');



const onTabHeadClick =(eve) => {
    eve.stopPropagation()
    let getId = eve.target.getAttribute('data-id');

    tabPanel.forEach(tabPan => {
        tabPan.classList.remove('active')
    })
    
    document.getElementById(getId).classList.add('active');
    
    tabHeadding.forEach(li => li.classList.remove('active'));

    eve.target.classList.add('active');
}




tabHeadding.forEach(li =>{
    li.addEventListener("click", onTabHeadClick);
})

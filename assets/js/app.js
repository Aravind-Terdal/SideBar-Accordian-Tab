const cl = console.log;


const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sideBarClose = document.getElementById('sideBarClose');
const backDrop = document.getElementById('backDrop');





const onsidebarToggle = () => {
    sidebar.classList.toggle('show')
    backDrop.classList.toggle('d-none')
    
}






sidebarToggle.addEventListener('click', onsidebarToggle);
sideBarClose.addEventListener('click', onsidebarToggle);
backDrop.addEventListener('click', onsidebarToggle);







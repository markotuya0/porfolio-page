const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => 
    n.addEventListener('click', () =>  {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

const buttons = document.querySelectorAll('.btn');
const closeModal = document.querySelector('.close');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('my-modal').style.display = 'block';
    const index = parseInt(button.getAttribute('data-id'), 10);
    document.querySelector("#my-modal h2").innerHTML = projectArr[index].projectListHeadLine;
  })
});
closeModal.addEventListener('click', () => {
  document.getElementById('my-modal').style.display = 'none';
})
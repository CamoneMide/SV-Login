const eshow = document.querySelector('.fa-eye');
const enshow = document.querySelector('.fa-eye-slash');


eshow.addEventListener('click', () =>{
    document.getElementById("inpute").type = "password";
    eshow.style.display = 'none';
    enshow.style.display = 'flex';
    
});

enshow.addEventListener('click', () =>{
    document.getElementById("inpute").type = "text";
    enshow.style.display = 'none';
    eshow.style.display = 'flex';
});
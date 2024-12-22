const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.theme');

const enableDarkStyle = () =>{
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode','dark');
}
const disableDarkstyle = () =>{
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', null)
}
styleToggle.addEventListener('click', () =>{
    styleMode = localStorage.getItem('styleMode');
    if(styleMode !== 'dark'){
        enableDarkStyle();
    } else {
        disableDarkstyle();
    }
})
if (styleMode === 'dark'){
    enableDarkStyle();
}
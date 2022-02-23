const morebtn = document.querySelector('.titleAndbtn .morebtn');
const title = document.querySelector ('.titleAndbtn .title');

morebtn.addEventListener('click', () => {
    morebtn.classList.toggle ('clicked');
    title.classList.toggle ('clamp');
});
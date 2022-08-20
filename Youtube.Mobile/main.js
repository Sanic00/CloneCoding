const moreBtn = doucument.querySelector('.info .metadata .moreBtn');
const title = doucument.querySelector('.info .metadata. .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('cliked');
    title.classList.toggle('clamp');
})
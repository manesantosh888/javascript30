window.addEventListener("keydown",(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.flex-items[data-key="${e.keyCode}"]`);
    if(!audio) return; 
    audio.currentTime=0; //rewind to the start.
    audio.play();
    key.classList.add('playing');
});
const keys = document.querySelectorAll('.flex-items');
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
keys.forEach(key => key.addEventListener(`transitionend`,removeTransition));
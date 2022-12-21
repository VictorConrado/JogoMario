const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
 mario.classList.add('jump');

 setTimeout(() => {

    mario.classList.remove('jump');

 }, 500);
}

const loop = setInterval(() => {
    
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(pipePosition) //print de posição do pipe

  if(pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation='none';
    pipe.style.left= `${pipePosition}px`;

    mario.style.animation='none';
    mario.style.bottom= `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width= '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);
    //diz que se a posição esquerda do pipe for menor que 120 a animação acaba 
    //que se o bottom do mario for menor que 80 a animação acaba
    //ali em baixo mostra as condições para animação parar
    //implementa a imagem de game over do mario
    //clearInterval(loop) para finalizar a contagem

  }

}, 10);

document.addEventListener('keydown', jump);
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let myTimer = null
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    myTimer = setInterval(()=> {
        let secondsThis = seconds%60
        let minutes = seconds/60%60 
        let hour = seconds/60/60%60 
        if (seconds < 0) {
            clearInterval(myTimer);
        } else { 
            let timerElValue = `${Math.trunc(hour) < 10 ? '0' + Math.trunc(hour) : Math.trunc(hour)}:${Math.trunc(minutes) < 10 ? '0' + Math.trunc(minutes) : Math.trunc(minutes)}:${secondsThis < 10 ? '0' + secondsThis : secondsThis}`;
            timerEl.innerText = timerElValue;
        }
        seconds--; 
  }, 1000)
    }
  };

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {

  const seconds = Number(inputEl.value);

  if(myTimer) clearInterval(myTimer);
  animateTimer(seconds);
  
  inputEl.value = '';
});

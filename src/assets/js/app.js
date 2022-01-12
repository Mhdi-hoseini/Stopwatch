const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const time = document.getElementsByTagName('span');

// Calculate time & display it
const timerHandler = (startBtn, stopBtn, resetBtn, outputEl) => {
  let timer;
  let isStop = false;
  let s = 0;
  let m = 0;

  // Calculate secondes & minutes
  const startTimer = () => {
    timer = setInterval(() => {
      ++s;
      if (s == 60) {
        s = 0;
        ++m;
      }
      outputEl.textContent = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }, 1000);
  };
  // Disable the passed button
  const disabledBtn = (el) => {
    switch (el) {
      case 'startBtn':
        startBtn.setAttribute('disabled', '');
        stopBtn.removeAttribute('disabled', '');
        break;
      case 'stopBtn':
        stopBtn.setAttribute('disabled', '');
        startBtn.removeAttribute('disabled', '');
        break;
      case 'none':
        stopBtn.removeAttribute('disabled', '');
        startBtn.removeAttribute('disabled', '');
        break;
    }
  };
  // reset time & output content
  const reset = () => {
    outputEl.textContent = '00:00';
    s = 0;
    m = 0;
  };

  startBtn.addEventListener('click', () => {
    if (outputEl.textContent === '00:00' || isStop) {
      disabledBtn('startBtn');
      startTimer();
      isStop = false;
    }
  });
  stopBtn.addEventListener('click', () => {
    if (outputEl.textContent != '00:00') {
      disabledBtn('stopBtn');
      clearInterval(timer);
      isStop = true;
    }
  });
  resetBtn.addEventListener('click', () => {
    disabledBtn('none');
    clearInterval(timer);
    reset();
  });
};

timerHandler(startBtn, stopBtn, resetBtn, time[0]);

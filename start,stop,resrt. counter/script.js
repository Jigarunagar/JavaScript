let one = 0;
let time;

function start() {
  if (!time) { 
    time = setInterval(() => {
      one++;
      document.getElementById('counter').innerHTML = one;
    }, 100); 
  }
}

function stop() {
  clearInterval(time);
  time = null;
}

function reset() {
  stop();
  one = 0;
  document.getElementById('counter').innerHTML = one;
}

let x = 0;
//repeats action every second
let interval = setInterval(() => {
  //changes the percentage value every second
  document.querySelector("#percentage").textContent = x + "%";
  //increases the width of the bar every second
  document.querySelector("#progress-in").style.width = x + "%";
  //stops the interval
  if (x == 100) clearInterval(interval);
  //counts to hundred
  x++;
}, 1000);
let x = 0;

let interval = setInterval(() => {
  
  document.querySelector("#percentage").textContent = x + "%";
 
  document.querySelector("#progress-in").style.width = x + "%";
  
  if (x == 100) clearInterval(interval);
  
  x++;
}, 1000);
let counter = document.querySelector('h1');
let count = 0;

setInterval(()=>{

  counter.innerText = count;
  if (count > 1) {
  count--;
  // You put your URL where it says location.replace in the quotes.
  } else if (count < 1) location.replace('https://notaddons.github.io/')
  },1000)

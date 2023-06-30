const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {

  const current = new Date();
  let hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

   hours = hours % 12;
   hours = hours ? hours : 12;
  
  countdown.innerHTML = `
    <div data-content="Hours">${hours < 10 ? `0${hours}` : hours}</div>
    <div data-content="Minutes">${minutes < 10 ? `0${minutes}` : minutes}</div>
    <div data-content="Seconds">${seconds < 10 ? `0${seconds}` : seconds}</div>
    <div data-content="Seconds">${hours >= 12 ? 'PM' : 'AM'}</div>
    `
}, 1000);

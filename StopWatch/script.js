const countDown = document.querySelector('#countDown');
const resetValue = document.querySelector('.resetValue')

let startCount = 0;
let intervalId ;


//EventListener
document.querySelector('.startBtn').addEventListener('click', startTimer )

document.querySelector('.resetBtn').addEventListener('click', resetTimer )

document.querySelector('.stopBtn').addEventListener('click', stopTimer )

document.querySelector('.timeBtn').addEventListener('click', getTime )

document.querySelector('.clearBtn').addEventListener('click', celarAll )


//functions

function startTimer ()  {
    console.log('CountDown Start');

    intervalId = setInterval( () => {
        countDown.innerHTML = startCount++;
    },1000)
}

function resetTimer ()  {
    console.log('CountDown reset');

    startCount = 0;
    countDown.innerHTML = startCount;
    clearInterval(intervalId);
}

function stopTimer ()   {
    console.log('CountDown stopped');
    clearInterval (intervalId);
}

function getTime () {
    const newPara = document.createElement("p");
    newPara.innerText =    `The stop time is ${startCount}`;
    console.log(newPara);
    resetValue.appendChild(newPara);
}


function celarAll ()    {
    resetValue.innerHTML = "";
    startCount = 0;
    countDown.innerHTML = startCount;   
    clearInterval(intervalId);
}
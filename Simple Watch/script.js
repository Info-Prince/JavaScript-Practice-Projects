const timeField = document.getElementById('watch-para');

function updateTime ()  {
    const curTime = new Date().toLocaleTimeString();
    timeField.innerHTML = curTime;
}
const intervalId = setInterval(() => {
    updateTime();
}, 1000);

// setTimeout(() => {
//     clearTimeout(intervalId)
// }, 6000);
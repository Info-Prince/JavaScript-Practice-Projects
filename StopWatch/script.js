const countDown = document.querySelector('#countDown');
const resetValue = document.querySelector('.resetValue')

let updateCount = 2;
countDown.innerHTML = `${updateCount}`
console.log(countDown);
countDown.setInterval(() => {
    updateCount++;
}, 1000);
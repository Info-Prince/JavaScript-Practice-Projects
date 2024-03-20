const periodicTable = document.querySelector('.periodicTable')

for (let i = 1; i <= 50; i++) {

    const tableElem = createPerodicElement(`Elem ${i}`, i, `Element ${i}`)
    periodicTable.appendChild(tableElem);
}


function createPerodicElement(symbol, atomicNumber, name) {
    let tableElem = document.createElement('div');
    tableElem.setAttribute('class', 'flex');
    
    tableElem.innerHTML = symbol;

    tableElem.setAttribute('data-element-name', name)
    tableElem.setAttribute('data-atomic-number', atomicNumber)

    // periodicTable.addEventListener ( 'click', handleEvent)

    return tableElem;
}

periodicTable.addEventListener ('click', (e) => {
    console.log(e.target);
    const targetElem = e.target;
    const alertMsg1 = (targetElem.getAttribute('data-element-name'));
    const alertMsg2 = (targetElem.getAttribute('data-atomic-number'));
    alert(`Atomic name: ${alertMsg1} \nAtomic number: ${alertMsg2}`)

})

// const handleEvent =( (event) => {
//     // console.log(event.target.className);
//     const target = event.target;

//     if (target.classList.contains("element")) {
//         const atomicNumber = target.getAttribute('data-atomic-number')
//         const atomicName = target.getAttribute('data-element-name')

//         alert(`Atomic Number : ${atomicNumber} \nAtomic Name : ${element}`);
//     }
// });
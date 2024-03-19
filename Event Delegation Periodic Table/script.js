const periodicTable = document.querySelector('.periodicTable')
        let i = 1
        for ( i = 1; i <= 50 ; i++) {
            
            const tableElem= createPerodicElement(`Elem ${i}`, i, `Element ${i}`)
            periodicTable.appendChild(tableElem);
        }

        periodicTable.addEventListener ('click', (event) => {
            console.log(event.target);
            const target = event.target;
            event.target.contains ('element')
            if (target.classList.contains("element")) {
                const atomicNumber = target.getAttribute ('data-atomic-number')
                const atomicName = target.getAttribute ('data-element-name')

                alert(`Atomic Number : ${atomicNumber} \nAtomic Name : ${element}`);
            }
        })

        function createPerodicElement(symbol, atomicNumber, name)     {
            let tableElem = document.createElement ('div');
            tableElem.setAttribute ('class', 'flex');
            tableElem.innerHTML = symbol;

            tableElem.setAttribute('data-atomic-number', atomicNumber)
            tableElem.setAttribute('data-element-name', name)
            return tableElem;
        }

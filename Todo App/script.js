const inputElem = document.querySelector ('#inputField');
let todoBtn = document.querySelector ('.todoBtn')

function createElem ()  {
    inputValue = inputElem.value;
    const newDiv = document.createElement('div')
    newDiv.setAttribute ('class', 'newDiv')
    newDiv.innerHTML = `
        <ul class='list' style="width: 14rem; height: 2rem; display: flex; align-items: center; justify-content: start; gap: 6rem; border-radius: 5px; ">
            <li>${inputValue}</li>
            <button class= 'deleteItem' style = " min-width: 5rem;
            height: 2rem;
            border-radius: 2rem;
            border: transparent;
            background-color: yellow;
            cursor: pointer;">Delete</button>
        </ul>
    `;

    let containerDiv = document.querySelector('.conatainer')
    containerDiv.appendChild (newDiv)
    console.log(newDiv);
}


todoBtn.addEventListener ( 'click', (e)  => {
    e.preventDefault() ;
    let userInput = inputElem.value;
    if (userInput === '') {
        alert("please enter something")
    } else {
        createElem();
        inputElem.value = "";
    }


    deleteItem();
    
})

function deleteItem ()  {
    const deleteElem = document.querySelector('.newDiv');
    deleteElem.addEventListener ('click', (e) => {
        e.preventDefault();
        console.log(((e.target).parentNode).parentNode)
        console.log(e.target);
        // const deleteDiv = document.querySelector('.list')
        // deleteDiv.remove();
    })
}
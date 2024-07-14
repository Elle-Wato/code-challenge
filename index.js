
const itemListEle = document.getElementById("itemList");
const addItemButton = document.getElementById("addItemBtn");



addItemButton.addEventListener('click', function(event){
    event.preventDefault()
    const itemNameInput = document.querySelector('input[name = "itemName"]');
    const markPurchasedBtn = document.getElementById(`markPurchasedBtn`);
    const clearListBtn = document.getElementById(`clearListBtn`);
    

    const itemName = itemNameInput.value;
    const newItem = document.createElement("li");
    newItem.innerText = itemNameInput.value;
    itemListEle.appendChild(newItem);
    
})

document.querySelector('#markPurchasedBtn').addEventListener('click',() => alert('Already purchased'))


document.querySelector('#clearListBtn').addEventListener('click', () =>('Clear list'))

// Grabs button and deletes parent Node
function addEventListenerToClearButtons(){
     console.log(document.getElementById('#addItemBtn'))
}
addEventListenerToClearButtons()



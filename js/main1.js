let form = document.querySelector("#form");
let ul = document.querySelector(".list")
let meva = document.querySelector(".meva")
let arr = []
function add() {
    form.style.display = "block";
}

function ok() {
    if (meva.value == "")
        alert("MEVANI KIRITING")
    else {
        arr.push({ "id": Date.now(), "name": meva.value });
        displayContent()
    }
    meva.value = " ";
    form.style.display = "none";
}



function edite(e) {
    let news = prompt(e.parentElement.innerText);
    let item = arr.find(function (i) {
        return i.id == e.parentElement.dataset.id;
    })
    item.name = news;
    console.log(arr);
    displayContent()
}

function displayContent() {
    let htmlContent = ''
    for (const i of arr) {
        htmlContent += `
        <li data-id=${i.id} class="item">${i.name} 
            <a class="list_btn edite" onclick="edite(this)" type="button">
                <i class="fas fa-pen"></i>
            </a> 
            <a class="list_btn delete" onclick="deleteItem(this)" type="button">
                <i class="fas fa-trash"></i>
            </a>
        </li>`;
    }
    ul.innerHTML = htmlContent;
}
displayContent()
function deleteItem(e) {
    let foundedItemIndex
    arr.find(function (i, index) {
        foundedItemIndex = index
        return i.id == e.parentElement.dataset.id
    })
    let deletedArray = arr.splice(foundedItemIndex, 1);
    console.log(arr, deletedArray, foundedItemIndex);
    displayContent()
}



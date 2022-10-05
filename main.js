const todoBoxInput = document.getElementById("todo-input");
const ulist = document.querySelector("ul");
let myStorage = window.localStorage;


todoBoxInput.addEventListener("keypress", e => {
    const text = todoBoxInput.value;

    if (e.key === "Enter" && text !== '') {
        e.preventDefault();


        const li = document.createElement("li");
        const divcheckbox = document.createElement("div");
        divcheckbox.className = "btn-check";
        const labl = document.createElement("label");
        labl.textContent = text;

        const buttoncheck = addCheckbox();


        divcheckbox.appendChild(buttoncheck);

        li.appendChild(divcheckbox);
        li.appendChild(labl);
        li.appendChild(addDeleteIcon());

        ulist.appendChild(li);

        buttoncheck
            .onclick = function () {
            if (!buttoncheck.checked) {
                labl.style.textDecoration = "none";
            } else {
                labl.style.textDecoration = "line-through";
            }
        }
        todoBoxInput.value = '';
    }

});

function addDeleteIcon() {
    const deleteXBotton = document.createElement('button');
    deleteXBotton.textContent = 'x';
    deleteXBotton.className = "btn-delete";

    deleteXBotton.addEventListener('click', event => {
        const item = event.target.parentElement; //para agarrar el ul
        ulist.removeChild(item);
    });
    return deleteXBotton;

}


function addCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = "checkbox-style";
    return checkbox;
}


// function addFilters() {
//     const divFilters = document.createElement("div");
//     divFilters.className = "filters";
//     const pItemsLeft = document.createElement("p");
//     pItemsLeft.textContent
//
// }






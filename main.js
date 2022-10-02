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

        divcheckbox.appendChild(addCheckbox());
        li.appendChild(divcheckbox);
        li.appendChild(labl);
        li.appendChild(addDeleteIcon());

        ulist.appendChild(li);


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

    console.log(checkbox.spellcheck);
    return checkbox;
}





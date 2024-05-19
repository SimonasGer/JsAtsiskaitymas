let subject = document.querySelector("#subject");
let dueDate = document.querySelector("#date");
let subjectAdd = document.querySelector("#create");
let subjectRows = document.querySelector("#rows");
// localStorage.clear()
for (subjects in localStorage){
    if (localStorage.getItem(subjects) != undefined && localStorage.getItem(subjects) !== "honey:core-sdk:*"){
        let properties = localStorage[subjects].split(",");
        addItems(properties[0], properties[1], properties[2]);
    }
}


function addItems(subject, priority, date){
    let row = document.createElement("tr");
    let checkElement = document.createElement("td");
    let subjectElement = document.createElement("td");
    let priorityElement = document.createElement("td");
    let dateElement = document.createElement("td");
    let deleteButton = document.createElement("td");
    let deleteButtonB = document.createElement("button")
    deleteButtonB.className += `btn btn-primary float-end delete ${subject}`;
    row.className += `${subject}`;
    checkElement.className += "check"
    subjectRows.appendChild(row);
    row.appendChild(checkElement).innerHTML = "&#10003;";
    row.appendChild(subjectElement).innerHTML = subject;
    row.appendChild(priorityElement).innerHTML = priority;
    row.appendChild(dateElement).innerHTML = date;
    row.appendChild(deleteButton);
    deleteButton.appendChild(deleteButtonB).innerHTML = "Delete";
    localStorage.setItem(subject, [subject, priority, date]);
    document.querySelectorAll(".delete").forEach(item => {
        item.addEventListener("click", ()=>{
            localStorage.removeItem(item.parentElement.parentElement.childNodes[1].innerHTML);
            item.parentElement.parentElement.remove();
        })
    });
    document.querySelectorAll(".check").forEach(item => {
        item.addEventListener("click", ()=>{
            item.style.color = "green";
            item.parentElement.childNodes[1].style.textDecoration = "line-through";
        })
    });

}

subjectAdd.addEventListener("click", () => {
    event.preventDefault();
    let priority = document.querySelector('input[name="priority"]:checked').value;
    console.log(localStorage.Math)
    if (subject.value !== "" && dueDate.value.length > 9 && localStorage[subject.value] === undefined){
        addItems(subject.value, priority, dueDate.value);
    }
})
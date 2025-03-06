let listitem = JSON.parse(localStorage.getItem("arr")) || [
  { task: "ES6", completed: false },
  { task: "react", completed: false },
  { task: "next", completed: false },
];
generateHTML();
function add() {
  let txt = document.querySelector("#inputField");
  let todoname = txt.value;
  if (todoname === "") {
    alert("please enter something");
  } else {
    listitem.push({
      task: todoname,
      completed: false,
    });

    localStorage.setItem("arr", JSON.stringify(listitem));
    generateHTML();

    txt.value = "";
  }
}
function generateHTML() {
  let acumelatorPattern = "";
  for (let i = 0; i < listitem.length; i++) {
    let list = listitem[i];

    let completedClass = list.completed ? "completed" : "";
    let html = `<li class="list-li ${completedClass}"><span>${list.task}</span><button class="li-delete">Delete</button></li>`;

    acumelatorPattern += html;
  }
  document.querySelector("#list-ul").innerHTML = acumelatorPattern;

  let deleteitems = document
    .querySelectorAll(".li-delete")
    .forEach((delbtn, index) => {
      delbtn.addEventListener("click", () => {
        listitem.splice(index, 1);

        localStorage.setItem("arr", JSON.stringify(listitem));

        generateHTML();
      });
    });

  let listLi = document
    .querySelectorAll(".list-li")
    .forEach((linethrough, index) => {
      linethrough.addEventListener("click", () => {
        if (listitem[index]) {

          listitem[index].completed = !listitem[index].completed;

          localStorage.setItem("arr", JSON.stringify(listitem));

          linethrough.classList.toggle("completed");
        }
      });
    });
}
let addbtn = document.querySelector("#btn").addEventListener("click", add);

generateHTML();

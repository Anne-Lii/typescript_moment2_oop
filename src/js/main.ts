import { ToDoList, ToDo } from "./class"; //importerar interface och klass från class.ts filen

//kontrollerar att all HTML kod är laddad innan koden körs
document.addEventListener("DOMContentLoaded", () => {



    const todoList = new ToDoList();

    //funktion för att ladda upp alla uppgifter till sidan
    function showTasks() {

        //hämta listelementet från HTML koden och rensa listan från eventuella uppgifter
        const todoullistEl = document.getElementById("todoullist");
        if (todoullistEl) {
            todoullistEl.innerHTML = "";
        }

        //loopa igenom todos och skapa <li> element
        todoList.getTodos().forEach((todo, index) => {
            const todoItem = document.createElement("li");

            //skapa en knapp till varje uppgift för att bocka av som avklarad
            const completeBtn = document.createElement("button");
            completeBtn.innerText = "Markera som avklarad";
            completeBtn.addEventListener("click", () => {
                todoList.markTodoCompleted(index);
                showTasks(); //uppdaterar listan efter att ha markerat en uppgift som avklarad

            });

            todoItem.innerHTML = `
        ${todo.task} (Prioritet: ${todo.priority})
        `;

            //skriv ut till DOM
            todoItem.appendChild(completeBtn);
            todoullistEl?.appendChild(todoItem);

        });

    }


    //hämtar input från formuläret
    const todoformEl = document.getElementById("todoform");//hämtar element från HTMLkoden

    //eventlyssnare vid klick på Lägg till uppgift-knappen
    todoformEl?.addEventListener("submit", function (event) {
        event.preventDefault();

        const task = (document.getElementById("task") as HTMLInputElement).value;
        const priority = parseInt((document.getElementById("prio") as HTMLInputElement).value, 10);

        if (todoList.addToDo(task, priority)) {
            showTasks();
            (document.getElementById("todoform") as HTMLFormElement).reset();
        } else {
            alert("vänligen fyll i alla fält korrekt");
        }
    });

    //uppdaterar todos vid sidladdning
    showTasks();

});
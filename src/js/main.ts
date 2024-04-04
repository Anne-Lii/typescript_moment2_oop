import { ToDoList, ToDo } from "./class"; //importerar interface och klass från class.ts filen

//kontrollerar att all HTML kod är laddad innan koden körs
document.addEventListener("DOMContentLoaded", () => {



    const todoList = new ToDoList();

    //funktion för att ladda upp alla uppgifter till sidan
    function showTasks() {

        //hämta listelementet från HTML koden och rensa listan från eventuella uppgifter
        const todoullistEl = document.getElementById("todoullist");
        if (todoullistEl) {
            todoullistEl.innerHTML = "";//rensar listan
        }

        const todos = todoList.getTodos();

        //sortera listan enligt prioritering 1 viktigast (högst upp)
        todos.sort((a,b)=> a.priority - b.priority);

        //loopa igenom todos och skapa <li> element
        todos.forEach((todo, index) => {
            const todoItem = document.createElement("li");

            //skapa en knapp till varje uppgift för att bocka av som avklarad
            const completeBtn = document.createElement("button");
            completeBtn.innerText = "Markera som avklarad";
            completeBtn.setAttribute("data-index", index.toString());//sätter ett data-attribut för att ha koll på index

            completeBtn.addEventListener("click", (event) => {            
                const dataIndex = (event.target as HTMLButtonElement).getAttribute("data-index");
                if(dataIndex!== null) {
                    const index = parseInt(dataIndex,10);
                    todoList.markTodoCompleted(index);
                    showTasks(); //uppdaterar listan efter att ha markerat en uppgift som avklarad
                }

            });

            todoItem.innerHTML = `
                ${todo.completed ? `<span class="completed-task">&#10004; </span>${todo.task}` : todo.task} (Prioritet: ${todo.priority})
                `;

            //lägg till klassen completed till uppgiften om complete===true   
            if(todo.completed) {
                todoItem.classList.add("completed");
            }

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
//definiera ett interface och exportera denna
export interface ToDo {
    task: string;
    completed: boolean;
    priority: number;
}

//implementering av ToDoList klassen och exportera denna
export class ToDoList {

    //array med todos
    todos: ToDo[] = [];

    //metod för att lägga till nya todos med prioritet. Returnera true om korrekta värden matats in för task och priority, annars false)
    addToDo(task: string, priority: number): boolean {
        if (task.trim() ==='' || priority < 1 || priority >3) {//trim() tar bort t ex eventuella mellanslag, whitespace eller tab i en string.
            return false;
        }

        //variabel med ny uppgift objekt från interfacet ToDo
        const newToDo: ToDo = {
            task: task,
            completed:false,
            priority: priority
        };

        this.todos.push(newToDo); //lägger till nya todo-objektet längst bak i arrayen
        this.saveToLocalStorage(); //sparar den uppdaterade listan i localstorage
        return true;

        
    }

    constructor() {
        this.loadFromLocalStorage();
    }

    //metod för att markera todos som klara
    markTodoCompleted(todoIndex: number): void {
        if (todoIndex >= 0 && todoIndex < this.todos.length) {

            this.todos[todoIndex].completed = true;//sätter completed till true istället
            this.saveToLocalStorage();//sparar till localstorage
        }
    }

    //metod för att hämta hela listan av todos
    getTodos(): ToDo[] {
        return this.todos;
    }

    //metod för att spara todos till LocalStorage. ingen retur
    saveToLocalStorage(): void {
        localStorage.setItem('todos', JSON.stringify(this.todos));

    }

    //metod för att hämta todos från LocalStorage. ingen retur
    loadFromLocalStorage(): void {
        const savedToDos = localStorage.getItem('todos');
        if(savedToDos) {
            this.todos = JSON.parse(savedToDos);
        }
    }
}





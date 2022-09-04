// const errorClass ="error";

// function getErrorElement(message){
//     const errorMsg = document.createElement("p");
//     errorMsg.classList.add("errorText")
//     errorMsg.textContent = message;

//     return errorMsg;
// }

// function  addErrorMessege(inputElemnt, message){
//     inputElemnt.classList.add(errorClass);
//     const error = getErrorElement(message);
//     inputElemnt.closest(".fieldWrapper").append(error); 

// }

// const form = document.forms["shipment"]
// form.addEventListener("submit", function (event){
//     event.preventDefault();
//     if (!form.name.value.trim().length){
    

//      addErrorMessege(form.name, "field must not be empty!");
//     }

//     if (!form.address.value.trim().length){
//         addErrorMessege(form.address, "field must not be empty!");
//     }
// })










function createNote (tagName, attributes){
    const el = document.createElement(tagName);
    attributes.forEach(({name, value}) => {
        el.setAttribute(name, value)
    });
    return el;
}


const todoForm = document.forms.todo;
const taskList = document.querySelector(".taskList");

todoForm.elements.task.addEventListener("input", function(){
    this.classList.remove(errorClass);
    this.closest(".fildWrapper")
    .querySelectorAll('.errorText')
    .forEach((error) => error.remove());
});

const tasksArray = [];
// {
//     id,
//     text,
//     isDone
// }



todoForm,addEventListener("submit", function(event){
    event.preventDefault();
    if (todoForm.elements.task.value.trim() === ""){
        addErrorMessege(todoForm.elements.task, "type something");
        return;
    }

    const newTask = {
        id: tasksArray.length === 0 ? 0 : tasksArray[tasksArray.length - 1].id + 1,
        name: todoForm.elements.task.value,
        isDone: false,
    };

    tasksArray.push(newTask);

    console.log(tasksArray);

    const taskWrapper = document.createElement("div");
    taskWrapper.classList.add("taskWrapper");
    taskWrapper.setAttribute("data-id", newTask.id);

    const text = document.createElement("p");
    text.textContent = todoForm.elements.task.value.trim();

    // const checkbox = document.createElement("input");
    // checkbox.setAttribute("type", "checkbox");
    // checkbox.setAttribute("value", "isDone");

    const checkbox = createNote("input", [
        {name: "type", value:  "checkbox"},
        {name: "value", value:  "isDone"}])



    taskWrapper.append(checkbox);
    taskWrapper.append(text);



    taskList.append(taskWrapper);


    checkbox.addEventListener("change", function(){
        const wrapper = this.closest(".taskWrapper");
        const id = wrapper.getAttribute("data-id");

        const task = tasksArray.find((taskItem) =>  taskItem.id === id);
        task.isDone = this.checked;

        if (this.checked) {
            wrapper.querySelector("p").classList.add("doneTask");
            return;

        } 
         wrapper.querySelector("p").classList.remove("doneTask");
        
    });

    
});


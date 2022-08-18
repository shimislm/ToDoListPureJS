import { addTask, deleteAll } from "./todoManger.js";

export const declareEvents = () => { 
    let form = document.querySelector("#id_form");
    let delAll =document.querySelector("#delAll_btn");
    form.addEventListener("submit",e =>{
        let task = document.querySelector("#id_task");
        let time = document.querySelector("#id_time");
        e.preventDefault();

        if(task.value.length<2){
            alert("The task name should be at list 2 letters!")
            return;
        }
        if(time.value.length<5){
            alert("Invalid time!")
            return;
        }
        let currentTime = Date.now();
        let obj = {
            "task" : task.value,
            "time" : time.value,
            "id" : currentTime
        }
        addTask(obj);
    })
    delAll.addEventListener("click",()=>{
        deleteAll();
    })
}
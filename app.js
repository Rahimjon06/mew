const tasks = [
    {title: "посуда шуштан",done:true},
    {title: "кор кадан",done:false},
    {title: "вазифа кадан",done:false},
    {title: "посуда шуштан",done:false},
]
function renderTasks(){
    const tasklist = document.getElementById("taskList")
    tasklist.innerHTML = tasks.map((task,index) => `
        <li class="${task.done === true ? 'completed' : 'notdone'}" onClick=(toggleTasks(${index}))>${task.title}<li>`
    ).join( '')
}
function toggleTasks(index){
    tasks[index].done = !tasks[index].done
    renderTasks()
}
renderTasks()
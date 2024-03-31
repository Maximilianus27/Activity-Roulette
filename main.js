let txt      = document.querySelector("#displayText");
let newTasks = document.querySelector("#addTasks");
let boxList  = document.querySelector("#list-tasks");
let popUpBox = document.querySelector("#actions-pop-up");
let tasks    = [];


document.addEventListener("dblclick", (event)=>{randomTask();})
document.addEventListener("keydown", (event)=>{ if(event.key == " "){randomTask();}})
newTasks.addEventListener("keydown", (event)=>{ if(event.key == "Enter"){addTasks();}})
newTasks.addEventListener("keydown", (event)=>{ 
    if(newTasks.value !== "")
    {document.querySelector("#btn-addTasks").classList.add("active");}
    else
    {document.querySelector("#btn-addTasks").classList.remove("active");}
})


function save(){
    localStorage.setItem("savedList", JSON.stringify(tasks));
    // popUp("Save berhasil dilakukan.", "info")
}

function load(){
    tasks.splice(1, tasks.length);
    let load = JSON.parse(localStorage.getItem("savedList"));
    load.forEach((e)=>{
        tasks.push(e);
    })
    // popUp("Load berhasil dilakukan.", "info")
    updateList();
}

function randomTask() {
    let randNum = Math.floor(Math.random() * tasks.length);

    txt.textContent = tasks[randNum];
}

function updateList() {
    
    boxList.textContent = "";
    let pIndex = 0;
    tasks.forEach(element => {
        let p = document.createElement("p");
        p.id = pIndex;
        p.innerHTML = `<button onclick='delTasks(this)' id='${pIndex}'>-</button>${element}`;
        boxList.appendChild(p);
        pIndex++;
    });
    newTasks.value = ""
}

function addTasks() {
    if (newTasks.value !== "") {
        tasks.push(newTasks.value);
        popUp(`${newTasks.value} berhasil di tambahkan!`, "succed")
        updateList();
        save()
    }else{
        popUp("Isi dulu!","info")
    }

}

function delTasks(e) {
    console.log(e.parentNode.remove(e));
    popUp(`${tasks.splice(e.id, 1)} berhasil di hapus`, "danger");
    updateList();
    save()
}

function popUp(txt, type){
    let p = document.createElement("p");
    p.id = type;
    p.innerHTML = `<button onclick='delPopUp(this)''>x</button>${txt}`;
    popUpBox.appendChild(p);
}
function delPopUp(e){
    e.parentNode.remove(e);
}

updateList();
load();
let txt = document.querySelector("#displayText");
let newTasks = document.querySelector("#addTasks");
let boxList = document.querySelector("#list-tasks");

const tasks = [
    "Ngoding",
    "Work Ot",
    "Belajar Financial",
    "Hapus ini",
    "Gambar Animek"
];


document.addEventListener("dblclick", (event)=>{randomTask();})
document.addEventListener("keydown", (event)=>{ if(event.key == " "){randomTask();}})
newTasks.addEventListener("keydown", (event)=>{ if(event.key == "Enter"){addTasks();}})

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
        console.log(newTasks.value + " Berhasil di tambahkan")
        updateList();
    }else{
        console.log("Isi dulu!")
    }

}

function delTasks(e) {
    console.log(e.parentNode.remove(e));
    console.log(tasks.splice(e.id, 1) + " Berhasil di hapus");
    updateList();
}

updateList();
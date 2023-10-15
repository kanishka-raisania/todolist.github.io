const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");

function addtask(){
    if(inputBox.value==''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listCont.appendChild(li);
        inputBox.value='';
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    savedata();
}

listCont.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listCont.innerHTML);

}

function showtask(){
    listCont.innerHTML=localStorage.getItem("data");
}

showtask();
const inputBox=document.getElementById("task");
const listContainer=document.getElementById("Task_list");

function newElement()
 {
     let li=document.createElement("li");
     li.innerHTML=inputBox.value;
     listContainer.appendChild(li);
     inputBox.value=" ";

     let del=document.createElement("button");
     del.innerHTML="Delete";
     li.appendChild(del);   

 }


listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("done");
    }
    else if (e.target.tagName ==="BUTTON")
    {
        e.target.parentElement.remove();
    }
},false);









   


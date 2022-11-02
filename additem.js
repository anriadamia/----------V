let inputWrapper=document.querySelector(".input-form");
let addButton=document.querySelector(".add-button");
let ul=document.querySelector(".ul-list");
let clearList=document.querySelector(".clearList")
let formElement=document.querySelector(".form-wrapper")

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    let inputValue=inputWrapper.value;
    if(inputValue==" "){
        return;
    }
    let li=document.createElement("li");
    li.textContent=inputValue;
    ul.appendChild(li);
    inputWrapper.value= " "
    let newI=document.createElement("i");
        newI.classList.add("fa-solid", "fa-trash");
        newI.addEventListener("click",()=>{
            li.remove();
        })
        li.appendChild(newI);
        ul.appendChild(li);
clearList.addEventListener("click",()=>{
    ul.innerHTML=" "
    inputWrapper.value=" "
})
})



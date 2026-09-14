let textarea_input = document.querySelector("textarea");
let counter = document.querySelector(".counter");
let h5 = document.querySelector("h5");

textarea_input.addEventListener("input", (evt) =>{
    counter.textContent = evt.target.value.length;

    if(evt.target.value.length > 250){
        h5.classList.add("restriction");
        textarea_input.classList.add("restriction");
    } else {
        h5.classList.remove("restriction");
        textarea_input.classList.remove("restriction");
    }
})
let tabs = document.querySelectorAll("button")
let contents = document.querySelectorAll("article")
let underline = document.querySelector(".underline")
tabs.forEach((clicked_tab, tab_index) => {
    clicked_tab.addEventListener("click", ()=>{
        contents.forEach((content, content_index) =>{
            if(tab_index === content_index){
                content.style.display = "block"
            }else{
                content.style.display = "none"
            }
        })
        
        underline.style.left = clicked_tab.offsetLeft + "px"
        underline.style.width = clicked_tab.offsetWidth + "px"

    })
})
let accordions = document.querySelectorAll('.accordions');
let allDescriptions = document.querySelectorAll('.description')

accordions.forEach((element) => {
    element.addEventListener("click", () => {
        let article = element.parentElement;
        let description = article.querySelector(".description");
        let wasOpen = description.classList.contains("show");

        allDescriptions.forEach((element) => {
            if (element.classList.contains("show")) {
                element.classList.remove("show")
                element.parentElement.querySelector(".symbol").classList.remove("arrow")
            }
        })

        if (!wasOpen) {
            description.classList.add("show");
            article.querySelector(".symbol").classList.add("arrow")
        }
    });
});
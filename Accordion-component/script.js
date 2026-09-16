let accordions = document.querySelectorAll('.accordions');

accordions.forEach((element) => {
    element.addEventListener("click", () => {
        let article = element.parentElement;
        let description = article.querySelector('.description');
        description.classList.toggle("show");
    });
});
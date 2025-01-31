document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");
    const items = document.querySelectorAll(".mainSection");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Adiciona a classe quando entra na tela
            }
        });
    }, { threshold: 0.2 }); // Ativa quando 20% do item estiver visível
    cards.forEach(item => observer.observe(item));
    items.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Adiciona a classe quando entra na tela
            }
        });
    }, { threshold: 0.2 }); // Ativa quando 20% do item estiver visível

    items.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar ícones Lucide
    lucide.createIcons();

    // Configuração do Intersection Observer para as animações de scroll
    const observerOptions = {
        root: null, // usa o viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% do elemento precisa estar visível para disparar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe is-visible quando entra na tela
                entry.target.classList.add('is-visible');
                // Opcionalmente, podemos parar de observar o elemento após a animação acontecer uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que possuem a classe animate-on-scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Observa cada elemento
    animatedElements.forEach(el => observer.observe(el));
});

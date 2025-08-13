let hover_texts = document.querySelectorAll(".interactive-text");

hover_texts.forEach(ht =>{
    ht.addEventListener('mouseenter' , function(){
        ht.style.color = 'cyan';
        ht.style.transform = 'scale(1.2)';
    });
    ht.addEventListener('mouseleave' , function(){
        ht.style.color = 'white';
        ht.style.transform = 'scale(1)';
    });

});


document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // run only once
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});

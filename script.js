document.addEventListener('DOMContentLoaded', function() {
    // Animação suave ao rolar para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de fade-in para as seções
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Manipulação do botão CTA
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function() {
        // Substitua esta URL pela URL do seu checkout
        window.location.href = 'https://seu-link-de-checkout.com';
    });

    // Manipulação do vídeo
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    videoPlaceholder.addEventListener('click', function() {
        // Aqui você pode adicionar a lógica para abrir o vídeo em um modal
        // ou substituir o placeholder pelo player de vídeo
        alert('Abrindo o vídeo da mentoria...');
    });

    // Contador de tempo limitado para os bônus
    const bonusSection = document.querySelector('.bonus');
    const bonusTitle = bonusSection.querySelector('h2');
    
    // Adiciona um contador regressivo ao título dos bônus
    function updateBonusTimer() {
        const now = new Date();
        const endDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 horas a partir de agora
        
        const timer = setInterval(() => {
            const currentTime = new Date();
            const timeLeft = endDate - currentTime;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                bonusTitle.textContent = 'Bônus Exclusivos';
                return;
            }
            
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            bonusTitle.textContent = `Bônus Exclusivos – Apenas ${hours}h ${minutes}m ${seconds}s restantes!`;
        }, 1000);
    }
    
    updateBonusTimer();
}); 
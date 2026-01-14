// Archivo: navbar.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Definimos el HTML del Navbar
    const navHTML = `
        <div class="home-container" style="padding: 0; display: flex; justify-content: space-between; align-items: center;">
            <a href="index.html" class="nav-logo">
                <img src="./assets/img/logo.png" alt="JungleClick" style="height: 58px;">
            </a>

            <div class="nav-links-container">
                <a href="index.html" class="nav-link-item">Services</a>
                <a href="results.html" class="nav-link-item">Results</a>
                <a href="https://calendly.com/start-jungleclickppc/30-minute-ppc-audit-with-jungleclick" target="_blank" class="nav-cta-btn">
                    Get in Touch <span>&rarr;</span>
                </a>
            </div>
        </div>
    `;

    // 2. Inyectar HTML
    const navPanel = document.querySelector('.nav-panel');
    if (navPanel) {
        navPanel.innerHTML = navHTML;

        // 3. Lógica Active
        const path = window.location.pathname;
        const page = path.split("/").pop();
        const links = document.querySelectorAll('.nav-link-item');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === page || ((page === '' || page === 'index.html') && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // 1. Definimos el HTML del Footer y del Modal
    const footerHTML = `
    <footer style="background-color: #1a2a3a; color: white">
        <div class="home-container" style="padding: 2rem 0; width: 90%; max-width: 1200px; margin: 0 auto;">
            
            <div style="margin-bottom: 3rem;">
                <a href="index.html" style="display: inline-block; margin-bottom: 1rem;">
                    <img src="./assets/img/logo.png" alt="Turning Passion Into Profits" style="height: 4rem;" />
                </a>
                <p style="font-size: 0.875rem; line-height: 1.5; max-width: 500px;">
                    At JungleClick, we focus on results, working exclusively with brands
                    where we know we can deliver exceptional outcomes.
                </p>
            </div>

            <div class="footer-columns-wrapper">
                
                <div class="footer-col-left">
                    <h3 class="footer-heading">Links</h3>
                    <ul class="footer-list">
                        <li><a href="index.html" class="footer-link">Home</a></li>
                        <li><a href="#" class="footer-link contact-trigger">Contact</a></li>
                        <li><a href="index.html#why-jungleclick" class="footer-link">About Us</a></li>
                        <li><a href="index.html#process" class="footer-link">Services</a></li>
                        <li><a href="results.html" class="footer-link">Success Stories</a></li>
                    </ul>
                </div>

                <div class="footer-col-right">
                    
                    <div style="margin-bottom: 2rem;">
                        <h3 class="footer-heading">Legal Notice</h3>
                        <ul class="footer-list">
                            <li><a href="privacy-policy.html" class="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="footer-heading">Follow Us!</h3>
                        <div class="footer-socials">
                            <a href="#" target="_blank"><img src="./assets/svg/linkedin.svg" alt="LinkedIn" /></a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
        <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); margin-top: 2rem;">
            <div class="home-container" style="padding: 1.5rem 0; width: 90%; max-width: 1200px; margin: 0 auto;">
                <p style="text-align: center; font-size: 0.875rem; color: rgba(255,255,255,0.6);">
                    All rights reserved © JungleClick, 2026
                </p>
            </div>
        </div>
    </footer>

    <div id="contactModal" class="contact-modal">
        <div class="contact-modal-content">
            <span class="contact-close">×</span>
            <h3 class="contact-title">Contact Us</h3>
            
            <div class="contact-item">
                <div class="contact-info">
                    <span class="contact-label">Phone Number</span>
                    <span class="contact-value">+1 564-226-2549</span>
                </div>
                <a href="https://wa.me/+15642262549" target="_blank" class="contact-btn">
                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
            </div>

            <div class="contact-item">
                <div class="contact-info">
                    <span class="contact-label">Email Address</span>
                    <span class="contact-value">growth@jungleclickppc.com</span>
                </div>
                <a href="mailto:growth@jungleclickppc.com" class="contact-btn">
                    <i class="fas fa-envelope"></i> Send Email
                </a>
            </div>

            <div class="contact-item">
                <div class="contact-info">
                    <span class="contact-label">Address</span>
                    <span class="contact-value">123 Amazon Ave, Ecom City</span>
                </div>
                <a href="https://maps.google.com/?q=123+Amazon+Ave,+Ecom+City" target="_blank" class="contact-btn">
                    <i class="fas fa-map-marker-alt"></i> Open Maps
                </a>
            </div>

            <div style="margin-top: 25px; text-align: center;">
                <p style="margin-bottom: 20px; font-weight: 500; color: black">Ready to scale? Book a free audit:</p>
                <a href="https://calendly.com/start-jungleclickppc/30-minute-ppc-audit-with-jungleclick" target="_blank" class="contact-btn audit">
                    <i class="fas fa-calendar-check"></i> Book Your Free Audit
                </a>
            </div>
        </div>
    </div>
    `;

    const footerPlaceholder = document.querySelector('.footer-panel');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
        initContactModal();
    }
});

// Lógica del Modal
function initContactModal() {
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.contact-close');
    
    document.addEventListener('click', function(e) {
        if (e.target.matches('.contact-trigger') || e.target.closest('.contact-trigger')) {
            e.preventDefault();
            openModal();
        }
    });

    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    window.onclick = function(event) {
        if (event.target == contactModal) {
            closeModal();
        }
    }

    function openModal() {
        contactModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.openContactModal = function(event) {
    if(event) event.preventDefault();
    const modal = document.getElementById('contactModal');
    if(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};
// Team Data - Add new objects here to create new team members
const teamData = [
    {
        nombre: "Valentina Rodriguez",
        especialidad: "Especialista en Uñas & Nail Art",
        imagen: "https://images.unsplash.com/photo-1494790108755-2616c5a4e18b?w=300&h=300&fit=crop&crop=face",
        descripcion: "Con más de 8 años de experiencia en el diseño de uñas, Valentina es nuestra experta en nail art y técnicas de extensión. Su pasión por los detalles la convierte en la favorita para diseños únicos.",
        experiencia: "8+ años de experiencia | Certificada en Gel y Acrílico",
        portfolio: [
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1619451683788-f04725249b8f?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1609188179554-b5e6be4c5bbb?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1601049708688-c8e30b0ed7f7?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1595220312469-52d5ddfb9c1a?w=300&h=250&fit=crop"
        ]
    },
    {
        nombre: "Sofia Martinez",
        especialidad: "Maquilladora Profesional",
        imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        descripcion: "Sofia se especializa en maquillaje para novias y eventos especiales. Su técnica impecable y ojo artístico garantizan looks que realzan la belleza natural de cada cliente.",
        experiencia: "6+ años de experiencia | Especialista en Maquillaje de Novias",
        portfolio: [
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=300&h=250&fit=crop"
        ]
    },
    {
        nombre: "Isabella Torres",
        especialidad: "Estilista & Diseño de Cejas",
        imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        descripcion: "Isabella combina su talento para el diseño de cejas con técnicas avanzadas de estilismo. Su enfoque personalizado asegura que cada cliente salga sintiéndose completamente renovada.",
        experiencia: "5+ años de experiencia | Especialista en Microblading",
        portfolio: [
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1595475038665-8de80bd75d2f?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=250&fit=crop",
            "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=250&fit=crop"
        ]
    }
];

// Featured Services Data - Add new objects here to create new service cards
const featuredServices = [
    {
        titulo: "Uñas",
        descripcion: "Manicura y diseño personalizado con productos de alta calidad para uñas perfectas.",
        imagen: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=200&fit=crop",
        link: "#servicios"
    },
    {
        titulo: "Maquillaje",
        descripcion: "Maquillaje profesional para cada ocasión, desde looks naturales hasta alta glamour.",
        imagen: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=200&fit=crop",
        link: "#servicios"
    },
    {
        titulo: "Diseño de Cejas",
        descripcion: "Perfilado y diseño de cejas que enmarcan perfectamente tu rostro.",
        imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop",
        link: "#servicios"
    },
    {
        titulo: "Peinado y Estilismo",
        descripcion: "Cortes modernos y peinados que complementan tu estilo personal.",
        imagen: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop",
        link: "#servicios"
    }
];

// Detailed Services Data - Add new objects to each array to create new services
const servicesData = {
    nails: [
        { nombre: "Manicura clásica", duracion: "45 min", descripcion: "Limado, cutícula y esmaltado tradicional" },
        { nombre: "Manicura semipermanente", duracion: "60 min", descripcion: "Esmaltado de larga duración hasta 3 semanas" },
        { nombre: "Soft gel", duracion: "75 min", descripcion: "Extensión natural con gel suave y flexible" },
        { nombre: "Uñas esculpidas", duracion: "90 min", descripcion: "Extensión y diseño personalizado con acrílico" },
        { nombre: "Nail art", duracion: "30 min", descripcion: "Diseños artísticos y decoración especializada" }
    ],
    makeup: [
        { nombre: "Maquillaje social", duracion: "45 min", descripcion: "Look natural y elegante para el día a día" },
        { nombre: "Maquillaje de novias", duracion: "90 min", descripcion: "Maquillaje especial con prueba previa incluida" },
        { nombre: "Maquillaje editorial", duracion: "60 min", descripcion: "Looks creativos y de alta moda para sesiones" },
        { nombre: "Maquillaje de noche", duracion: "50 min", descripcion: "Glamour y sofisticación para eventos especiales" },
        { nombre: "Automaquillaje", duracion: "60 min", descripcion: "Aprende técnicas personalizadas para tu rostro" }
    ],
    eyebrows: [
        { nombre: "Diseño de cejas", duracion: "30 min", descripcion: "Perfilado profesional según tu tipo de rostro" },
        { nombre: "Perfilado con hilo", duracion: "20 min", descripcion: "Técnica precisa y delicada con hilo oriental" },
        { nombre: "Tinte de cejas", duracion: "25 min", descripcion: "Color personalizado para cejas más definidas" },
        { nombre: "Microblading", duracion: "120 min", descripcion: "Técnica de micropigmentación semi-permanente" },
        { nombre: "Laminado de cejas", duracion: "45 min", descripcion: "Tratamiento para cejas más voluminosas y definidas" }
    ],
    styling: [
        { nombre: "Corte de cabello", duracion: "60 min", descripcion: "Corte personalizado según tu estilo y rostro" },
        { nombre: "Peinado de fiesta", duracion: "75 min", descripcion: "Peinados elegantes para eventos especiales" },
        { nombre: "Brushing", duracion: "45 min", descripcion: "Secado profesional con brushing y finalización" },
        { nombre: "Tratamiento capilar", duracion: "90 min", descripcion: "Hidratación y reparación profunda del cabello" },
        { nombre: "Peinado de novias", duracion: "120 min", descripcion: "Peinado especial con prueba previa incluida" }
    ]
};

// Combos Data - Add new objects here to create new combos
const combosData = [
    {
        titulo: "Glow Up",
        servicios: ["Manicura semipermanente", "Maquillaje social", "Diseño de cejas"],
        descuento: "20% OFF"
    },
    {
        titulo: "Perfect Pair",
        servicios: ["Uñas esculpidas", "Peinado de fiesta"],
        descuento: "15% OFF"
    },
    {
        titulo: "Bride Ready",
        servicios: ["Maquillaje de novias", "Peinado de novias", "Manicura clásica"],
        descuento: "25% OFF"
    },
    {
        titulo: "Natural Beauty",
        servicios: ["Tinte de cejas", "Maquillaje social", "Brushing"],
        descuento: "18% OFF"
    }
];

// Hero Carousel Variables
let currentSlide = 0;
const totalSlides = 3;

// Generate Team Grid
function generateTeam() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;

    teamGrid.innerHTML = teamData.map((member, index) => `
        <div class="team-member" data-member-index="${index}">
            <img src="${member.imagen}" alt="${member.nombre}" class="team-member-image" />
            <h3>${member.nombre}</h3>
            <p class="team-specialty">${member.especialidad}</p>
            <button class="team-button">Ver perfil</button>
        </div>
    `).join('');

    // Add event listeners after generation
    document.querySelectorAll('.team-member').forEach((member, index) => {
        member.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openTeamModal(index);
        });
    });
}

// Open Team Modal
function openTeamModal(memberIndex) {
    const member = teamData[memberIndex];
    const modal = document.getElementById('team-modal');
    
    document.getElementById('modal-image').src = member.imagen;
    document.getElementById('modal-image').alt = member.nombre;
    document.getElementById('modal-name').textContent = member.nombre;
    document.getElementById('modal-specialty').textContent = member.especialidad;
    document.getElementById('modal-description').textContent = member.descripcion;
    document.getElementById('modal-experience').textContent = member.experiencia;
    
    // Generate portfolio carousel
    const portfolioContainer = document.getElementById('portfolio-container');
    portfolioContainer.innerHTML = member.portfolio.map(img => `
        <img src="${img}" alt="Trabajo de ${member.nombre}" class="portfolio-image" />
    `).join('');
    
    // Reset portfolio scroll
    portfolioContainer.scrollLeft = 0;
    
    // Prevent background scroll - improved method
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.classList.add('modal-open');
    
    modal.style.display = 'block';
    
    // Store scroll position
    modal.setAttribute('data-scroll-y', scrollY);
}

// Close Team Modal
function closeTeamModal() {
    const modal = document.getElementById('team-modal');
    
    // Restore scroll position
    const scrollY = modal.getAttribute('data-scroll-y');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.classList.remove('modal-open');
    window.scrollTo(0, parseInt(scrollY || '0'));
    
    modal.style.display = 'none';
}

// Portfolio Carousel Navigation with Touch Support
function initPortfolioCarousel() {
    const prevBtn = document.getElementById('portfolio-prev');
    const nextBtn = document.getElementById('portfolio-next');
    const container = document.getElementById('portfolio-container');
    
    if (prevBtn && nextBtn && container) {
        prevBtn.addEventListener('click', () => {
            const isMobile = window.innerWidth <= 768;
            const scrollAmount = isMobile ? 215 : 265;
            container.scrollLeft -= scrollAmount;
        });
        
        nextBtn.addEventListener('click', () => {
            const isMobile = window.innerWidth <= 768;
            const scrollAmount = isMobile ? 215 : 265;
            container.scrollLeft += scrollAmount;
        });

        // Touch support for mobile swiping
        let startX = 0;
        let scrollLeft = 0;
        let isDown = false;

        container.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener('touchend', () => {
            isDown = false;
        });
    }
}

// Hero Carousel Functions with Touch Support
function initHeroCarousel() {
    // Auto advance carousel
    const autoAdvance = setInterval(nextSlide, 4000);
    
    // Indicator click handlers
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(autoAdvance);
            goToSlide(index);
            // Restart auto advance
            setTimeout(() => setInterval(nextSlide, 4000), 5000);
        });
    });

    // Touch support for hero carousel
    const heroSection = document.querySelector('.hero');
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    heroSection.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    heroSection.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });

    heroSection.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            clearInterval(autoAdvance);
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            // Restart auto advance
            setTimeout(() => setInterval(nextSlide, 4000), 5000);
        }
    });
}

function prevSlide() {
    currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function updateCarousel() {
    // Update slides
    document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Generate Featured Services Grid
function generateFeaturedServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = featuredServices.map(service => `
        <div class="service-card">
            <img src="${service.imagen}" alt="${service.titulo}" />
            <div class="service-card-content">
                <h3>${service.titulo}</h3>
                <p>${service.descripcion}</p>
                <button class="service-button" onclick="location.href='${service.link}'">Ver más</button>
            </div>
        </div>
    `).join('');
}

// Generate Services Tables
function generateServicesTable(tableId, services) {
    const tableBody = document.getElementById(tableId);
    if (!tableBody) return;

    tableBody.innerHTML = services.map(service => `
        <tr>
            <td><strong>${service.nombre}</strong></td>
            <td>${service.duracion}</td>
            <td>${service.descripcion}</td>
        </tr>
    `).join('');
}

// Generate Combos Grid
function generateCombos() {
    const combosGrid = document.getElementById('combos-grid');
    if (!combosGrid) return;

    combosGrid.innerHTML = combosData.map(combo => `
        <div class="combo-card">
            <h3 class="combo-title">${combo.titulo}</h3>
            <ul class="combo-services">
                ${combo.servicios.map(servicio => `<li>• ${servicio}</li>`).join('')}
            </ul>
            <div class="combo-discount">${combo.descuento}</div>
            <button class="combo-button">Obtener</button>
        </div>
    `).join('');
}

// Enhanced Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open on mobile
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced Contact Form Handler
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = '#eee';
                }
            });
            
            if (isValid) {
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                this.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });

        // Remove error styling on input
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#eee';
            });
        });
    }
}

// CTA Button Handler
function initCTAButtons() {
    document.querySelectorAll('.cta-button, .reserve-button, .vip-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('#contacto').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.value-item, .service-card, .combo-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateTeam();
    generateFeaturedServices();
    generateServicesTable('nails-services', servicesData.nails);
    generateServicesTable('makeup-services', servicesData.makeup);
    generateServicesTable('eyebrows-services', servicesData.eyebrows);
    generateServicesTable('styling-services', servicesData.styling);
    generateCombos();
    initMobileNavigation();
    initSmoothScrolling();
    initContactForm();
    initCTAButtons();
    initHeroCarousel();
    initPortfolioCarousel();
    
    // Modal close handlers with error checking
    const closeBtn = document.querySelector('.close');
    const modal = document.getElementById('team-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTeamModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeTeamModal();
        });
    }

    // Prevent modal content clicks from closing modal
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeTeamModal();
        }
    });
    
    // Initialize animations after a short delay to ensure elements are rendered
    setTimeout(initScrollAnimations, 100);
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});
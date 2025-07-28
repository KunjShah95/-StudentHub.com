// Student Benefits Data
const benefitsData = [
    {
        id: 1,
        title: "GitHub Student Developer Pack",
        description: "$200K worth of free software for all your development needs",
        category: "development",
        value: "$200,000 Value",
        tags: ["Development", "Version Control", "Open Source"],
        link: "https://education.github.com/pack",
        icon: "fab fa-github",
        benefits: [
            "GitHub Pro account",
            "Access to private repositories",
            "Advanced code review tools",
            "GitHub Actions minutes",
            "GitHub Pages hosting"
        ]
    },
    {
        id: 2,
        title: "Spotify Premium Student",
        description: "Student discount as low as INR66/month for music streaming",
        category: "entertainment",
        value: "50% Discount",
        tags: ["Music", "Streaming", "Entertainment"],
        link: "https://www.spotify.com/in-en/student/",
        icon: "fab fa-spotify",
        benefits: [
            "Ad-free music streaming",
            "Download music for offline listening",
            "High-quality audio",
            "Access to podcasts",
            "Spotify Connect"
        ]
    },
    {
        id: 3,
        title: "Visual Studio Enterprise",
        description: "Complete development environment with advanced debugging tools",
        category: "development",
        value: "Free License",
        tags: ["IDE", "Development", "Microsoft"],
        link: "https://visualstudio.microsoft.com/students/",
        icon: "fas fa-code",
        benefits: [
            "Full Visual Studio IDE",
            "Advanced debugging tools",
            "IntelliCode AI assistance",
            "Azure DevOps integration",
            "Xamarin mobile development"
        ]
    },
    {
        id: 4,
        title: "AWS Educate",
        description: "Starter account worth $100 in AWS credits for cloud computing",
        category: "cloud",
        value: "$100 Credits",
        tags: ["Cloud", "AWS", "Infrastructure"],
        link: "https://aws.amazon.com/education/awseducate/",
        icon: "fab fa-aws",
        benefits: [
            "$100 AWS credits",
            "Access to AWS services",
            "Cloud computing courses",
            "Hands-on labs",
            "Career resources"
        ]
    },
    {
        id: 5,
        title: "Notion Pro",
        description: "Lifetime Notion Pro subscription for students",
        category: "productivity",
        value: "Lifetime Free",
        tags: ["Productivity", "Note Taking", "Organization"],
        link: "https://www.notion.so/product/notion-for-education",
        icon: "fas fa-sticky-note",
        benefits: [
            "Unlimited blocks",
            "File uploads",
            "Version history",
            "Advanced permissions",
            "API access"
        ]
    },
    {
        id: 6,
        title: "Adobe Creative Cloud",
        description: "60% discount on Adobe Creative Cloud suite",
        category: "design",
        value: "60% Discount",
        tags: ["Design", "Creative", "Adobe"],
        link: "https://www.adobe.com/creativecloud/buy/students.html",
        icon: "fab fa-adobe",
        benefits: [
            "Photoshop CC",
            "Illustrator CC",
            "Premiere Pro CC",
            "After Effects CC",
            "20GB cloud storage"
        ]
    },
    {
        id: 7,
        title: "JetBrains All Products",
        description: "Free license for all JetBrains development tools",
        category: "development",
        value: "Free License",
        tags: ["IDE", "Development", "JetBrains"],
        link: "https://www.jetbrains.com/education/",
        icon: "fas fa-laptop-code",
        benefits: [
            "IntelliJ IDEA Ultimate",
            "PyCharm Professional",
            "WebStorm",
            "PhpStorm",
            "All JetBrains tools"
        ]
    },
    {
        id: 8,
        title: "Microsoft Azure",
        description: "25+ Microsoft cloud services + $100 in Azure credits",
        category: "cloud",
        value: "$100 Credits",
        tags: ["Cloud", "Microsoft", "Azure"],
        link: "https://azure.microsoft.com/en-in/free/students/",
        icon: "fab fa-microsoft",
        benefits: [
            "$100 Azure credits",
            "25+ free services",
            "Virtual machines",
            "Databases",
            "AI/ML services"
        ]
    },
    {
        id: 9,
        title: "Unity Student",
        description: "Free Unity Pro license for game development",
        category: "development",
        value: "Free License",
        tags: ["Game Development", "Unity", "3D"],
        link: "https://unity.com/products/unity-student",
        icon: "fab fa-unity",
        benefits: [
            "Unity Pro features",
            "Cloud Build",
            "Unity Analytics",
            "Performance Reporting",
            "Priority customer service"
        ]
    },
    {
        id: 10,
        title: "Figma Pro",
        description: "Free Figma Pro license for UI/UX design",
        category: "design",
        value: "Free License",
        tags: ["UI/UX", "Design", "Prototyping"],
        link: "https://www.figma.com/education/",
        icon: "fab fa-figma",
        benefits: [
            "Unlimited projects",
            "Version history",
            "Team libraries",
            "Advanced prototyping",
            "Design system features"
        ]
    },
    {
        id: 11,
        title: "Digital Ocean",
        description: "$50 credit for cloud hosting and development",
        category: "cloud",
        value: "$50 Credits",
        tags: ["Cloud", "Hosting", "Development"],
        link: "https://www.digitalocean.com/github-students/",
        icon: "fab fa-digital-ocean",
        benefits: [
            "$50 platform credit",
            "Droplets (VMs)",
            "Kubernetes",
            "App Platform",
            "Managed databases"
        ]
    },
    {
        id: 12,
        title: "Heroku Student",
        description: "Free Hobby Dyno for web application hosting",
        category: "cloud",
        value: "Free Hosting",
        tags: ["Cloud", "Hosting", "Web Apps"],
        link: "https://www.heroku.com/students",
        icon: "fas fa-server",
        benefits: [
            "Free Hobby Dyno",
            "Custom domains",
            "SSL certificates",
            "Git-based deployment",
            "Add-ons marketplace"
        ]
    },
    {
        id: 13,
        title: "Canva Pro",
        description: "Free Canva Pro subscription for design work",
        category: "design",
        value: "Free License",
        tags: ["Design", "Graphics", "Templates"],
        link: "https://www.canva.com/education/",
        icon: "fas fa-palette",
        benefits: [
            "Premium templates",
            "Background remover",
            "Magic resize",
            "Brand kit",
            "100GB cloud storage"
        ]
    },
    {
        id: 14,
        title: "MongoDB Atlas",
        description: "$200 credit plus courses and certification",
        category: "development",
        value: "$200 Credits",
        tags: ["Database", "NoSQL", "Cloud"],
        link: "https://www.mongodb.com/students",
        icon: "fas fa-database",
        benefits: [
            "$200 Atlas credits",
            "MongoDB University courses",
            "Certification exams",
            "Community support",
            "Developer tools"
        ]
    },
    {
        id: 15,
        title: "Coursera Plus",
        description: "Free access to thousands of courses and specializations",
        category: "education",
        value: "Free Access",
        tags: ["Learning", "Courses", "Certification"],
        link: "https://www.coursera.org/student-help",
        icon: "fas fa-graduation-cap",
        benefits: [
            "7000+ courses",
            "University certificates",
            "Professional certificates",
            "Guided projects",
            "Unlimited access"
        ]
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const benefitsGrid = document.getElementById('benefitsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const exploreBtn = document.getElementById('exploreBtn');
const modal = document.getElementById('benefitModal');
const closeModal = document.querySelector('.close');

// State
let currentFilter = 'all';
let displayedBenefits = 6;
let isLoading = false;

// Initialize Everything
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    createAdvancedParticles();
    loadBenefits();
    setupEventListeners();
    animateStats();
    setupScrollEffects();
    setupIntersectionObserver();
    initialize4DEffects();
});

// Create Advanced Particle System
function createAdvancedParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 80;

    // Create floating particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `advancedParticleFloat ${Math.random() * 25 + 15}s linear infinite`;
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(255,255,255,0.5)`;
        container.appendChild(particle);
    }

    // Create energy trails
    for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'energy-trail';
        trail.style.position = 'absolute';
        trail.style.width = '2px';
        trail.style.height = '100px';
        trail.style.background = `linear-gradient(to bottom, transparent, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.6), transparent)`;
        trail.style.left = Math.random() * 100 + '%';
        trail.style.top = Math.random() * 100 + '%';
        trail.style.animation = `energyTrail ${Math.random() * 8 + 6}s ease-in-out infinite`;
        trail.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(trail);
    }

    // Add advanced CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes advancedParticleFloat {
            0% { 
                transform: translateY(100vh) translateX(0px) rotate(0deg) scale(0);
                opacity: 0;
            }
            10% { 
                opacity: 1;
                transform: translateY(90vh) translateX(10px) rotate(36deg) scale(1);
            }
            50% {
                transform: translateY(50vh) translateX(-20px) rotate(180deg) scale(1.2);
                opacity: 0.8;
            }
            90% { 
                opacity: 1;
                transform: translateY(10vh) translateX(15px) rotate(324deg) scale(0.8);
            }
            100% { 
                transform: translateY(-10vh) translateX(0px) rotate(360deg) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes energyTrail {
            0%, 100% { 
                opacity: 0;
                transform: translateY(0px) scaleY(0);
            }
            50% { 
                opacity: 1;
                transform: translateY(-50px) scaleY(1);
            }
        }
        
        .dynamic-particle {
            filter: blur(0.5px);
            transition: all 0.3s ease;
            pointer-events: none;
        }
        
        .dynamic-particle:hover {
            transform: scale(2) !important;
            filter: blur(0px);
        }
    `;
    document.head.appendChild(style);
}

// Initialize 4D Effects
function initialize4DEffects() {
    // Advanced mouse interaction for realistic 3D cube
    const cubeContainer = document.querySelector('.cube-container');
    const cube4D = document.querySelector('.cube-4d');
    const lightSources = document.querySelectorAll('.light-source');
    const cubeShadow = document.querySelector('.cube-shadow');
    const faces = document.querySelectorAll('.face');

    if (cubeContainer && cube4D) {
        let mouseX = 0;
        let mouseY = 0;
        let isInteracting = false;

        cubeContainer.addEventListener('mouseenter', () => {
            isInteracting = true;
            cube4D.style.animationPlayState = 'paused';

            // Enhance lighting on interaction
            lightSources.forEach((light, index) => {
                light.style.filter = 'blur(5px)';
                light.style.transform = `scale(1.5)`;
            });
        });

        cubeContainer.addEventListener('mouseleave', () => {
            isInteracting = false;
            cube4D.style.animationPlayState = 'running';
            cube4D.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

            // Reset lighting
            lightSources.forEach((light, index) => {
                light.style.filter = 'blur(10px)';
                light.style.transform = 'scale(1)';
            });
        });

        cubeContainer.addEventListener('mousemove', (e) => {
            if (!isInteracting) return;

            const rect = cubeContainer.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;

            const rotateX = mouseY * -30;
            const rotateY = mouseX * 30;
            const rotateZ = (mouseX + mouseY) * 10;

            cube4D.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

            // Dynamic lighting based on mouse position
            lightSources.forEach((light, index) => {
                const offsetX = mouseX * 20 * (index + 1);
                const offsetY = mouseY * 20 * (index + 1);
                light.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
            });

            // Dynamic shadow based on cube rotation
            if (cubeShadow) {
                const shadowOffsetX = mouseX * 15;
                const shadowSkew = mouseX * 5;
                cubeShadow.style.transform = `translateX(calc(-50% + ${shadowOffsetX}px)) skewX(${shadowSkew}deg)`;
                cubeShadow.style.opacity = 0.2 + Math.abs(mouseX) * 0.2;
            }
        });

        // Add face-specific interactions for realism
        faces.forEach((face, index) => {
            face.addEventListener('mouseenter', () => {
                // Create ripple effect on face hover
                createFaceRipple(face, event);

                // Enhance face lighting
                const highlight = face.querySelector('.face-highlight');
                if (highlight) {
                    highlight.style.opacity = '0.8';
                    highlight.style.transform = 'scale(1.1)';
                }
            });

            face.addEventListener('mouseleave', () => {
                const highlight = face.querySelector('.face-highlight');
                if (highlight) {
                    highlight.style.opacity = '0.3';
                    highlight.style.transform = 'scale(1)';
                }
            });

            face.addEventListener('click', () => {
                // Create explosion effect on click
                createFaceExplosion(face);
            });
        });
    }

    // Advanced button interactions
    const morphingButtons = document.querySelectorAll('.morphing-button');
    morphingButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            triggerButtonParticles(button);
        });
    });

    // Title glitch effect on scroll
    const titleContainer = document.querySelector('.title-container');
    if (titleContainer) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled > 100 && scrolled < 500) {
                triggerGlitchEffect();
            }
        });
    }

    // Morphing shapes interaction
    const morphShapes = document.querySelectorAll('.morph-shape');
    morphShapes.forEach((shape, index) => {
        shape.addEventListener('click', () => {
            triggerShapeExplosion(shape, index);
        });
    });
}

// Create Face Ripple Effect
function createFaceRipple(face, event) {
    const ripple = document.createElement('div');
    const rect = face.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;

    face.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Create Face Explosion Effect
function createFaceExplosion(face) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 50 + Math.random() * 30;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 107, 107, 0.8);
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 15;
            box-shadow: 0 0 10px rgba(255, 107, 107, 0.6);
        `;

        face.appendChild(particle);

        particle.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

// Trigger Button Particles
function triggerButtonParticles(button) {
    const particles = button.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        setTimeout(() => {
            particle.style.animation = 'none';
            particle.offsetHeight; // Trigger reflow
            particle.style.animation = `particleMove 3s linear infinite`;
        }, index * 100);
    });
}

// Trigger Glitch Effect
function triggerGlitchEffect() {
    const glitchLayers = document.querySelectorAll('.glitch-layer');
    glitchLayers.forEach((layer, index) => {
        layer.style.animation = 'none';
        layer.offsetHeight; // Trigger reflow
        layer.style.animation = `glitch4D 6s ease-in-out infinite`;
        layer.style.animationDelay = `${index * 0.1}s`;
    });
}

// Trigger Shape Explosion
function triggerShapeExplosion(shape, index) {
    // Create explosion particles
    for (let i = 0; i < 12; i++) {
        const explosionParticle = document.createElement('div');
        explosionParticle.style.position = 'absolute';
        explosionParticle.style.width = '6px';
        explosionParticle.style.height = '6px';
        explosionParticle.style.background = `rgba(255, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
        explosionParticle.style.borderRadius = '50%';
        explosionParticle.style.top = '50%';
        explosionParticle.style.left = '50%';
        explosionParticle.style.pointerEvents = 'none';
        explosionParticle.style.animation = `explode 1s ease-out forwards`;
        explosionParticle.style.animationDelay = `${i * 0.05}s`;

        shape.appendChild(explosionParticle);

        setTimeout(() => {
            explosionParticle.remove();
        }, 1500);
    }

    // Add explosion animation
    const explosionStyle = document.createElement('style');
    explosionStyle.textContent = `
        @keyframes explode {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(explosionStyle);

    setTimeout(() => {
        explosionStyle.remove();
    }, 2000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            currentFilter = e.target.dataset.filter;
            displayedBenefits = 6;
            loadBenefits();
        });
    });

    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            if (!isLoading) {
                loadMoreBenefits();
            }
        });
    }

    // Explore button scroll
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('benefits').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Modal events
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const filterBtn = document.querySelector(`[data-filter="${category}"]`);
            if (filterBtn) {
                filterBtn.click();
                document.getElementById('benefits').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });
}

// Load Benefits
function loadBenefits() {
    let filteredBenefits = benefitsData;

    if (currentFilter !== 'all') {
        filteredBenefits = benefitsData.filter(benefit => benefit.category === currentFilter);
    }

    const benefitsToShow = filteredBenefits.slice(0, displayedBenefits);

    if (benefitsGrid) {
        benefitsGrid.innerHTML = '';

        benefitsToShow.forEach((benefit, index) => {
            const benefitCard = createBenefitCard(benefit);
            benefitCard.style.animationDelay = `${index * 0.1}s`;
            benefitsGrid.appendChild(benefitCard);
        });

        // Update load more button
        if (loadMoreBtn) {
            if (displayedBenefits >= filteredBenefits.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }

        // Animate cards
        setTimeout(() => {
            document.querySelectorAll('.benefit-card').forEach(card => {
                card.classList.add('loaded');
            });
        }, 100);
    }
}

// Create Benefit Card
function createBenefitCard(benefit) {
    const card = document.createElement('div');
    card.className = 'benefit-card loading';
    card.dataset.benefitId = benefit.id;
    card.innerHTML = `
        <div class="benefit-header">
            <div class="benefit-logo">
                <i class="${benefit.icon}"></i>
            </div>
            <div class="benefit-title">${benefit.title}</div>
        </div>
        <div class="benefit-description">${benefit.description}</div>
        <div class="benefit-tags">
            ${benefit.tags.map(tag => `<span class="benefit-tag">${tag}</span>`).join('')}
        </div>
        <div class="benefit-footer">
            <div class="benefit-value">${benefit.value}</div>
            <a href="${benefit.link}" target="_blank" class="benefit-link-btn">
                <span>Get Benefit</span>
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (e.target.closest('.benefit-link-btn')) {
            e.stopPropagation();
            return;
        }
        openModal(benefit);
    });

    return card;
}

// Load More Benefits
function loadMoreBenefits() {
    isLoading = true;
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<span>Loading...</span><i class="fas fa-spinner fa-spin"></i>';
    }

    setTimeout(() => {
        displayedBenefits += 6;
        loadBenefits();
        isLoading = false;
        if (loadMoreBtn) {
            loadMoreBtn.innerHTML = '<span>Load More Benefits</span><i class="fas fa-chevron-down"></i>';
        }
    }, 1000);
}

// Open Modal
function openModal(benefit) {
    if (modal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalLink = document.getElementById('modalLink');
        const benefitsList = document.getElementById('modalBenefits');

        if (modalTitle) modalTitle.textContent = benefit.title;
        if (modalDescription) modalDescription.textContent = benefit.description;
        if (modalLink) modalLink.href = benefit.link;

        if (benefitsList) {
            benefitsList.innerHTML = '';
            benefit.benefits.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                benefitsList.appendChild(li);
            });
        }

        modal.style.display = 'block';
    }
}

// Animate Statistics
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');

    const animateNumber = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);

            if (current >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 20);
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

// Setup Scroll Effects
function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Setup Intersection Observer for animations
function setupIntersectionObserver() {
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

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section, .category-card, .stat-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize Animations
function initializeAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .benefit-card.loading {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .benefit-card.loaded {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease;
        }
    `;
    document.head.appendChild(style);
}

// Add floating action button
function addFloatingActionButton() {
    const fab = document.createElement('div');
    fab.innerHTML = `
        <div id="fab" style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; 
                            background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border-radius: 50%; 
                            display: flex; align-items: center; justify-content: center; color: white; 
                            font-size: 1.5rem; cursor: pointer; box-shadow: 0 10px 30px rgba(255,107,107,0.3); 
                            transition: all 0.3s ease; z-index: 1000; opacity: 0; transform: scale(0);">
            <i class="fas fa-arrow-up"></i>
        </div>
    `;
    document.body.appendChild(fab);

    const fabElement = document.getElementById('fab');

    if (fabElement) {
        fabElement.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                fabElement.style.opacity = '1';
                fabElement.style.transform = 'scale(1)';
            } else {
                fabElement.style.opacity = '0';
                fabElement.style.transform = 'scale(0)';
            }
        });
    }
}

// Initialize FAB after DOM load
setTimeout(addFloatingActionButton, 2000);

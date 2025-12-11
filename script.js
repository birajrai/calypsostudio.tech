// ============================================
// CALYPSO STUDIO - GLOBAL CONFIGURATION
// ============================================

const SITE_CONFIG = {
    siteName: "Calypso Studio",
    logo: "assets/logo.png",
    primaryColor: "#3b82f6",
    secondaryColor: "#6366f1",
    accentColor: "#f59e42",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
    heroHeading: "Creative Digital Solutions",
    heroSubheading: "Web, Design, Gaming & More",
    heroImage: "https://placehold.co/600x400/3b82f6/ffffff?text=Hero+Image",
    contactEmail: "hello@calypsostudio.tech",
    socialLinks: {
        twitter: "https://twitter.com/calypsostudio",
        discord: "https://discord.gg/example",
        github: "https://github.com/birajrai/calypsostudio.tech"
    }
};

// ============================================
// CALYPSO STUDIO - TESTIMONIALS DATA
// ============================================

const TESTIMONIALS = [
    {
        name: "John Miller",
        role: "E-commerce Owner",
        text: "Calypso Studio exceeded my expectations! They built a beautiful website that increased my sales by 40%.",
        rating: 5
    },
    {
        name: "Sarah Anderson",
        role: "Community Manager",
        text: "The Discord bot transformed how we manage our community. Highly professional team!",
        rating: 5
    },
    {
        name: "Michael King",
        role: "Startup Founder",
        text: "Amazing logo design! They captured our brand perfectly. Will hire again!",
        rating: 5
    }
];
// ============================================
// CALYPSO STUDIO - ABOUT SECTION DATA
// ============================================

const ABOUT_CALYPSO = {
    heading: `About ${SITE_CONFIG.siteName}`,
    paragraphs: [
        `${SITE_CONFIG.siteName} is a creative development agency specializing in comprehensive digital solutions. With over 5 years of experience, we've helped numerous businesses establish their digital presence.`,
        "Our team of skilled developers, designers, and strategists work collaboratively to deliver exceptional results across web development, gaming, and design projects."
    ],
    stats: [
        { label: "Projects Done", value: "50+" },
        { label: "Happy Clients", value: "40+" },
        { label: "Years Experience", value: "5+" },
        { label: "Support", value: "24/7" }
    ],
    image: SITE_CONFIG.heroImage
};
// Source text for Monkeytype-style typing in About section
const ABOUT_TYPING_TEXT = ABOUT_CALYPSO.paragraphs.join(' ');
// ============================================
// CALYPSO STUDIO - SERVICES DATABASE
// ============================================

// Services Array - Manage all services here
const SERVICES = [
    {
        id: 1,
        title: "Custom Website",
        description: "Modern, responsive websites built for your business.",
        icon: "fas fa-globe"
    },
    {
        id: 2,
        title: "Discord Bots",
        description: "Custom bots for moderation and community engagement.",
        icon: "fas fa-robot"
    },
    {
        id: 3,
        title: "Logo & Design",
        description: "Creative branding and graphic design services.",
        icon: "fas fa-palette"
    },
    {
        id: 4,
        title: "SEO Optimization",
        description: "Boost your online visibility and rankings.",
        icon: "fas fa-search"
    },
    {
        id: 5,
        title: "News Portal",
        description: "Complete news website setup with CMS.",
        icon: "fas fa-newspaper"
    },
    {
        id: 6,
        title: "Minecraft Services",
        description: "Plugins, texture packs, and server setup.",
        icon: "fas fa-cube"
    },
    {
        id: 7,
        title: "Bug Fix & Support",
        description: "Expert debugging and technical support.",
        icon: "fas fa-bug"
    },
    {
        id: 8,
        title: "Technical Consulting",
        description: "Expert advice for your digital projects.",
        icon: "fas fa-wrench"
    }
];
// ============================================
// CALYPSO STUDIO - PROJECTS DATABASE
// ============================================

// Projects Array - Manage all projects here
const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration and inventory management.",
        image: "https://placehold.co/400x250/3b82f6/ffffff?text=E-Commerce+Platform",
        demoLink: "https://example.com/ecommerce",
        tags: ["Web Development", "Full-Stack"]
    },
    {
        id: 2,
        title: "Discord Bot",
        description: "Custom moderation bot with advanced features for community management and engagement.",
        image: "https://placehold.co/400x250/6366f1/ffffff?text=Discord+Bot",
        demoLink: "https://example.com/discordbot",
        tags: ["Discord", "Bot Development"]
    },
    {
        id: 3,
        title: "Brand Identity Design",
        description: "Complete branding package including logo, guidelines, and visual identity system.",
        image: "https://placehold.co/400x250/3b82f6/ffffff?text=Brand+Identity",
        demoLink: "https://example.com/branding",
        tags: ["Design", "Branding"]
    },
    {
        id: 4,
        title: "News Portal",
        description: "Content management system with article publishing, categories, and user dashboard.",
        image: "https://placehold.co/400x250/6366f1/ffffff?text=News+Portal",
        demoLink: "https://example.com/newsportal",
        tags: ["CMS", "Web Development"]
    },
    {
        id: 5,
        title: "Minecraft Server Setup",
        description: "Fully configured server with custom plugins, texture packs, and optimization.",
        image: "https://placehold.co/400x250/3b82f6/ffffff?text=Minecraft+Server",
        demoLink: "https://example.com/minecraft",
        tags: ["Minecraft", "Server Setup"]
    },
    {
        id: 6,
        title: "SEO Optimization",
        description: "Complete SEO strategy implementation resulting in 200% increase in organic traffic.",
        image: "https://placehold.co/400x250/6366f1/ffffff?text=SEO+Campaign",
        demoLink: "https://example.com/seo",
        tags: ["SEO", "Marketing"]
    }
];

// ============================================
// PROJECT MANAGEMENT FUNCTIONS
// ============================================

/**
 * Get all projects
 * @returns {Array} Array of all projects
 */
function getAllProjects() {
    return PROJECTS;
}

/**
 * Get project by ID
 * @param {number} id - Project ID
 * @returns {Object} Project object or null
 */
function getProjectById(id) {
    return PROJECTS.find(project => project.id === id) || null;
}

/**
 * Get projects by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Filtered projects
 */
function getProjectsByTag(tag) {
    return PROJECTS.filter(project => project.tags.includes(tag));
}

/**
 * Add new project
 * @param {Object} project - Project object
 * @returns {boolean} Success status
 */
function addProject(project) {
    if (!project.title || !project.description) {
        console.error('Project must have title and description');
        return false;
    }
    
    const newId = Math.max(...PROJECTS.map(p => p.id), 0) + 1;
    project.id = newId;
    PROJECTS.push(project);
    return true;
}

/**
 * Update project by ID
 * @param {number} id - Project ID
 * @param {Object} updates - Fields to update
 * @returns {boolean} Success status
 */
function updateProject(id, updates) {
    const project = getProjectById(id);
    if (project) {
        Object.assign(project, updates);
        return true;
    }
    return false;
}

/**
 * Delete project by ID
 * @param {number} id - Project ID
 * @returns {boolean} Success status
 */
function deleteProject(id) {
    const index = PROJECTS.findIndex(p => p.id === id);
    if (index > -1) {
        PROJECTS.splice(index, 1);
        return true;
    }
    return false;
}

/**
 * Render projects to HTML
 * @param {string} containerId - ID of container element
 * @param {Array} projects - Projects to render (optional, defaults to all)
 */
function renderProjects(containerId = 'projects-container', projects = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }

    const projectsToRender = projects || PROJECTS;
    
    container.innerHTML = projectsToRender.map(project => `
        <div class="bg-white rounded-xl overflow-hidden border border-gray-200 hover-lift">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="font-bold text-gray-900 mb-2">${project.title}</h3>
                <p class="text-sm text-gray-600 mb-3">${project.description}</p>
                <div class="flex flex-wrap gap-1 mb-4">
                    ${project.tags.map(tag => `
                        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View Demo →
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Get project statistics
 * @returns {Object} Statistics object
 */
function getProjectStats() {
    return {
        total: PROJECTS.length,
        byTag: PROJECTS.reduce((acc, p) => {
            p.tags.forEach(tag => {
                acc[tag] = (acc[tag] || 0) + 1;
            });
            return acc;
        }, {})
    };
}

/**
 * Search projects by title or description
 * @param {string} query - Search query
 * @returns {Array} Matching projects
 */
function searchProjects(query) {
    const lowerQuery = query.toLowerCase();
    return PROJECTS.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery)
    );
}

// ============================================
// INITIALIZATION & EXPORTS
// ============================================

// Export for use in other scripts or as module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        TESTIMONIALS,
        ABOUT_CALYPSO,
        SERVICES,
        PROJECTS,
        getAllProjects,
        getProjectById,
        getProjectsByTag,
        addProject,
        updateProject,
        deleteProject,
        renderProjects,
        getProjectStats,
        searchProjects
    };
}


// =============================
// RENDERING FUNCTIONS
// =============================

// CALYPSO STUDIO - TEAM DATA
const TEAM = [
    { name: "Nabaraj Rai", role: "Lead Designer", image: "https://placehold.co/200x200/3b82f6/ffffff?text=NR", github: "#", facebook: "#", website: "#" },
    { name: "Gaurav Uchil", role: "Lead Developer", image: "https://placehold.co/200x200/6366f1/ffffff?text=GU", github: "#", facebook: "#", website: "#" },
    { name: "Biraj Rai", role: "DevOps & Developer", image: "https://placehold.co/200x200/3b82f6/ffffff?text=BR", github: "#", facebook: "#", website: "#" },
    { name: "Samita Rai", role: "Project Manager", image: "https://placehold.co/200x200/6366f1/ffffff?text=SR", github: "#", facebook: "#", website: "#" },
    { name: "Sudarshan Gautam", role: "SEO Specialist", image: "https://placehold.co/200x200/3b82f6/ffffff?text=SG", github: "#", facebook: "#", website: "#" },
    { name: "You?", role: "???", image: "https://placehold.co/200x200/6366f1/ffffff?text=YOU", github: "#", facebook: "#", website: "#" },
];
function renderNavigation() {
    const nav = document.getElementById('nav-container');
    if (!nav) return;
    nav.innerHTML = `
    <div class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="/" class="flex items-center gap-2 hover:opacity-80 transition">
                    <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.siteName} Logo" class="h-10 w-auto rounded-lg">
                </a>
                <div class="hidden md:flex gap-8">
                    <a href="#services-container" class="text-gray-700 hover:text-blue-600 transition text-sm">Services</a>
                    <a href="#projects-container" class="text-gray-700 hover:text-blue-600 transition text-sm">Projects</a>
                    <a href="#team-container" class="text-gray-700 hover:text-blue-600 transition text-sm">Team</a>
                    <a href="#about-container" class="text-gray-700 hover:text-blue-600 transition text-sm">About</a>
                    <a href="#footer-container" class="text-gray-700 hover:text-blue-600 transition text-sm">Contact</a>
                </div>
                <a href="#footer-container" class="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                    Get Started
                </a>
                <button class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </div>
    `;
}

function renderHero() {
    const hero = document.getElementById('hero-container');
    if (!hero) return;
    hero.innerHTML = `
    <section class="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 class="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                        ${SITE_CONFIG.heroHeading}<br>
                        <span class="gradient-text">${SITE_CONFIG.heroSubheading}</span>
                    </h1>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button class="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition" onclick="document.getElementById('footer-container').scrollIntoView({behavior: 'smooth'})">
                            Start Your Project
                        </button>
                        <button class="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition" onclick="document.getElementById('projects-container').scrollIntoView({behavior: 'smooth'})">
                            View Our Work
                        </button>
                    </div>
                </div>
                <div>
                    <img src="${SITE_CONFIG.heroImage}" alt="${SITE_CONFIG.heroHeading}" class="w-full rounded-2xl shadow-lg">
                </div>
            </div>
        </div>
    </section>
    `;
}

function renderServices() {
    const servicesSection = document.getElementById('services-container');
    if (!servicesSection) return;
    servicesSection.innerHTML = `
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
                <p class="text-gray-600">Comprehensive solutions for your digital needs</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                ${SERVICES.map(service => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-200 hover-lift p-6 flex flex-col items-center text-center">
                        <i class="${service.icon} text-3xl text-blue-600 mb-4"></i>
                        <h3 class="font-bold text-gray-900 mb-2">${service.title}</h3>
                        <p class="text-sm text-gray-600 mb-3">${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

function renderTeam() {
    const teamSection = document.getElementById('team-container');
    if (!teamSection) return;
    teamSection.innerHTML = `
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-2">Our Team</h2>
                <p class="text-gray-600">Meet the people behind ${SITE_CONFIG.siteName}</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${TEAM.map(m => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-200 hover-lift p-6 flex flex-col items-center text-center">
                        <img src="${m.image}" alt="${m.name}" class="w-24 h-24 rounded-full object-cover mb-4">
                        <h3 class="font-bold text-gray-900 mb-1">${m.name}</h3>
                        <p class="text-sm text-gray-600">${m.role}</p>
                        <div class="flex gap-4 mt-3">
                            ${m.github ? `<a href="${m.github}" target="_blank" rel="noopener noreferrer" aria-label="${m.name} GitHub" class="text-gray-500 hover:text-gray-900 transition"><i class="fab fa-github text-lg"></i></a>` : ''}
                            ${m.facebook ? `<a href="${m.facebook}" target="_blank" rel="noopener noreferrer" aria-label="${m.name} Facebook" class="text-gray-500 hover:text-blue-600 transition"><i class="fab fa-facebook text-lg"></i></a>` : ''}
                            ${m.website ? `<a href="${m.website}" target="_blank" rel="noopener noreferrer" aria-label="${m.name} Website" class="text-gray-500 hover:text-blue-600 transition"><i class="fas fa-globe text-lg"></i></a>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

function renderProjects(containerId = 'projects-container', projects = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = `
    <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-2">Recent Projects</h2>
                <p class="text-gray-600">Showcase of our latest work</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${(projects || PROJECTS).map(project => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-200 hover-lift">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="font-bold text-gray-900 mb-2">${project.title}</h3>
                            <p class="text-sm text-gray-600 mb-3">${project.description}</p>
                            <div class="flex flex-wrap gap-1 mb-4">
                                ${project.tags.map(tag => `<span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">${tag}</span>`).join('')}
                            </div>
                            <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 hover:text-blue-700 font-medium">View Demo →</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

function renderAbout() {
    const aboutSection = document.getElementById('about-container');
    if (!aboutSection) return;
    aboutSection.innerHTML = `
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">${ABOUT_CALYPSO.heading}</h2>
                    <div id="about-typing-box" tabindex="0" class="outline-none">
                        <p class="text-gray-600 mb-4 leading-relaxed">
                            <span id="about-typing-line" class="whitespace-pre-wrap"></span>
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        ${ABOUT_CALYPSO.stats.map(stat => `
                            <div>
                                <p class="text-3xl font-bold text-blue-600">${stat.value}</p>
                                <p class="text-sm text-gray-600">${stat.label}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <img src="${ABOUT_CALYPSO.image}" alt="About Us" class="w-full rounded-2xl shadow-lg">
                </div>
            </div>
        </div>
    </section>
    `;
}

function renderTestimonials() {
    const testimonialsSection = document.getElementById('testimonials-container');
    if (!testimonialsSection) return;
    testimonialsSection.innerHTML = `
    <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-2">What Clients Say</h2>
                <p class="text-gray-600">Feedback from our satisfied customers</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                ${TESTIMONIALS.map(t => `
                    <div class="bg-white p-6 rounded-xl border border-gray-200">
                        <div class="flex gap-1 mb-4">
                            ${'<i class="fas fa-star text-blue-600 text-sm"></i>'.repeat(t.rating)}
                        </div>
                        <p class="text-gray-600 text-sm mb-4">"${t.text}"</p>
                        <p class="font-semibold text-gray-900 text-sm">${t.name}</p>
                        <p class="text-xs text-gray-500">${t.role}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

function renderFooter() {
    const footer = document.getElementById('footer-container');
    if (!footer) return;
    footer.innerHTML = `
    <footer class="bg-gray-900 text-gray-300 py-12 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.siteName} Logo" class="h-10 w-auto rounded-lg">
                        <span class="font-bold text-white">${SITE_CONFIG.siteName}</span>
                    </div>
                    <p class="text-xs text-gray-400">Your partner in digital transformation and creative excellence.</p>
                </div>
                <div>
                    <h4 class="font-semibold text-white mb-3 text-sm">Services</h4>
                    <ul class="space-y-2 text-xs">
                        ${SERVICES.map(s => `<li><a href="#services-container" class="hover:text-blue-400 transition">${s.title}</a></li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-white mb-3 text-sm">Company</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#about-container" class="hover:text-blue-400 transition">About Us</a></li>
                        <li><a href="#projects-container" class="hover:text-blue-400 transition">Portfolio</a></li>
                        <li><a href="#" class="hover:text-blue-400 transition">Blog</a></li>
                        <li><a href="#footer-container" class="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-white mb-3 text-sm">Legal</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#" class="hover:text-blue-400 transition">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-blue-400 transition">Terms of Service</a></li>
                        <li><a href="#" class="hover:text-blue-400 transition">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <p class="text-gray-400">&copy; 2025 ${SITE_CONFIG.siteName}. All rights reserved.</p>
                <div class="flex gap-4 mt-4 md:mt-0">
                    <a href="${SITE_CONFIG.socialLinks.discord}" class="text-gray-400 hover:text-blue-400 transition"><i class="fab fa-discord"></i></a>
                    <a href="${SITE_CONFIG.socialLinks.twitter}" class="text-gray-400 hover:text-blue-400 transition"><i class="fab fa-twitter"></i></a>
                    <a href="${SITE_CONFIG.socialLinks.github}" class="text-gray-400 hover:text-blue-400 transition"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// =============================
// INITIALIZE ALL SECTIONS
// =============================
document.addEventListener('DOMContentLoaded', function() {
    renderNavigation();
    renderHero();
    renderServices();
    renderProjects('projects-container');
    renderAbout();
    // Initialize Monkeytype-style typing after About renders
    initAboutTyping();
    renderTeam();
    renderTestimonials();
    renderFooter();
});

// Console logging for debugging
console.log(`${SITE_CONFIG.siteName} Projects Loaded:`, PROJECTS.length, 'projects');

function initAboutTyping() {
    const box = document.getElementById('about-typing-box');
    const lineEl = document.getElementById('about-typing-line');
    if (!box || !lineEl) return;

    // Render each character as a span for persistent correct/incorrect highlighting
    const chars = ABOUT_TYPING_TEXT.split('');
    const spans = chars.map(ch => {
        const s = document.createElement('span');
        s.textContent = ch;
        return s;
    });
    lineEl.innerHTML = '';
    spans.forEach(s => lineEl.appendChild(s));

    let index = 0;
    let startTime = null;
    let correctCount = 0;
    let finished = false;

    box.addEventListener('keydown', function (e) {
        if (finished) {
            if (e.key === ' ') e.preventDefault();
            return;
        }
        const nextChar = chars[index];

        if (e.key === 'Backspace') {
            if (index > 0) {
                index--;
                // Adjust correct count if reverting a correct char
                if (spans[index].classList.contains('text-blue-600')) {
                    correctCount = Math.max(0, correctCount - 1);
                }
                spans[index].classList.remove('text-blue-600', 'text-red-600', 'font-bold');
            }
            e.preventDefault();
            return;
        }

        if (!nextChar) return; // ignore if at end

        // Mark start time on first actual input
        if (startTime === null && (e.key.length === 1 || e.key === ' ')) {
            startTime = Date.now();
        }

        if (e.key === ' ') {
            const isCorrect = nextChar === ' ';
            if (isCorrect) {
                spans[index].classList.add('text-blue-600', 'font-bold');
                correctCount++;
            } else {
                spans[index].classList.add('text-red-600', 'font-bold');
            }
            index++;
            e.preventDefault();
        } else if (e.key && e.key.length === 1) {
            const isCorrect = e.key === nextChar;
            if (isCorrect) {
                spans[index].classList.add('text-blue-600', 'font-bold');
                correctCount++;
            } else {
                spans[index].classList.add('text-red-600', 'font-bold');
            }
            index++;
        }

        // If finished, compute WPM and show toast
        if (index >= chars.length && !finished) {
            finished = true;
            const elapsedMs = (startTime ? Date.now() - startTime : 0);
            const elapsedMin = Math.max(0.001, elapsedMs / 60000);
            const wpm = Math.round((correctCount / 5) / elapsedMin);
            const win = wpm > 49;
            const accuracy = Math.round((correctCount / chars.length) * 100);
            showResultToast(wpm, win, accuracy);
        }
    });

    // No auto-focus to avoid jumping on load
}

// Simple bottom-right toast for result
function showResultToast(wpm, win, accuracy) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm z-50';
    toast.textContent = `WPM: ${wpm} • Accuracy: ${accuracy}% — ${win ? 'You Won!' : 'You Lost'}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

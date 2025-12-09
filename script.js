// ============================================
// CALYPSO STUDIO - ABOUT SECTION DATA
// ============================================

const ABOUT_CALYPSO = {
    heading: "About Calypso Studio",
    paragraphs: [
        "Calypso Studio is a creative development agency specializing in comprehensive digital solutions. With over 5 years of experience, we've helped numerous businesses establish their digital presence.",
        "Our team of skilled developers, designers, and strategists work collaboratively to deliver exceptional results across web development, gaming, and design projects."
    ],
    stats: [
        { label: "Projects Done", value: "50+" },
        { label: "Happy Clients", value: "40+" },
        { label: "Years Experience", value: "5+" },
        { label: "Support", value: "24/7" }
    ],
    image: "https://placehold.co/500x400/3b82f6/ffffff?text=About+Us"
};
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

// Console logging for debugging
console.log('Calypso Studio Projects Loaded:', PROJECTS.length, 'projects');

const sectionIds = ['about', 'education', 'skills', 'projects', 'contact'];

const observerOptions = { threshold: [0, 0.6] };

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
};

// Create a single observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each section individually
sectionIds.forEach(id => {
    const section = document.getElementById(id);
    observer.observe(section);
});

// Additional function for smooth scrolling
function smoothScroll(target) {
    const targetElement = (target === '#header') ? document.body : document.querySelector(target);
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScroll(targetId);
    });
});

function scrollToEducation() {
    const educationSection = document.getElementById('education');

    if (educationSection) {
        educationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToSkills() {
    const skillsSection = document.getElementById('skills');

    if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToProjects() {
    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}
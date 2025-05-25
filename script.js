document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    });

    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close Menu When Clicking Nav Links
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Typing Animation
    const typed = new Typed('.typing', {
        strings: ['Web Developer', 'UI/UX Designer', 'Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed('.typing-2', {
        strings: ['Web Developer', 'UI/UX Designer', 'Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Scroll Up Button
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    window.addEventListener('scroll', () => {
        scrollUpBtn.classList.toggle('active', window.scrollY > 500);
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for All Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Sample projects data (replace with your actual projects)
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            category: 'web',
            image: 'https://via.placeholder.com/600x400'
        },
        {
            id: 2,
            title: 'Mobile App Design',
            category: 'app',
            image: 'https://via.placeholder.com/600x400'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            category: 'web',
            image: 'https://via.placeholder.com/600x400'
        },
        {
            id: 4,
            title: 'UI/UX Dashboard',
            category: 'design',
            image: 'https://via.placeholder.com/600x400'
        },
        {
            id: 5,
            title: 'Social Media App',
            category: 'app',
            image: 'https://via.placeholder.com/600x400'
        },
        {
            id: 6,
            title: 'Landing Page',
            category: 'web',
            image: 'https://via.placeholder.com/600x400'
        }
    ];

    // Function to render projects
    function renderProjects(filter = 'all') {
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = `project-item ${project.category}`;
            projectItem.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-overlay">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-link"></i></a>
                        <a href="#"><i class="fas fa-search"></i></a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectItem);
        });
    }

    // Initialize projects
    renderProjects();

    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter projects
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        console.log({ name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Animate Elements on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-content, .skills-content, .project-item, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.about-content, .skills-content, .project-item, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

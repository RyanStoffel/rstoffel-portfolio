const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;
const favicon = document.getElementById('favicon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    favicon.setAttribute("href", "/assets/favicon-dark.png");
} else {
    favicon.setAttribute("href", "/assets/favicon-light.png");
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        favicon.setAttribute("href", "/assets/favicon-dark.png");
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        favicon.setAttribute("href", "/assets/favicon-light.png");
    }
    
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

document.addEventListener("DOMContentLoaded", () => {
    const headerButton = document.querySelector('#headerName button');
    if (headerButton) {
        headerButton.addEventListener('click', function() {
            console.log('Button clicked!'); // Debug line
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Dropdown functionality
    const projectBoxes = document.querySelectorAll('.project-box');
    console.log('Found project boxes:', projectBoxes.length);
    
    projectBoxes.forEach(box => {
        box.addEventListener('click', function() {
            console.log('Project box clicked');
            const dropdown = this.querySelector('.dropdown');
            const dropdownBtn = this.querySelector('.dropdown-btn');
            const isActive = dropdown.classList.contains('active');
            
            console.log('Dropdown:', dropdown, 'Is active:', isActive);
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('active');
                d.querySelector('.dropdown-btn').textContent = 'Learn More ▼';
            });
            
            // Toggle current dropdown
            if (!isActive) {
                dropdown.classList.add('active');
                dropdownBtn.textContent = 'Learn More ▲';
                console.log('Dropdown activated');
            }
        });
    });
});

function scrollToTop() {
    console.log('scrollToTop function called!'); // Debug line
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
}
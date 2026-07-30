// Function to handle tab switching
function switchTab(tabId) {
    // Hide all tab pages
    const pages = document.querySelectorAll('.tab-page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove active status from top navbar links
    const topLinks = document.querySelectorAll('.top-nav .nav-link');
    topLinks.forEach(link => link.classList.remove('active'));

    // Remove active status from sidebar links
    const sideLinks = document.querySelectorAll('.side-menu li');
    sideLinks.forEach(link => link.classList.remove('active'));

    // Map special cases (e.g., 'more' and 'skills' routing to Education or Contact section dynamically)
    let targetPageId = `tab-${tabId}`;
    if (tabId === 'cv' || tabId === 'more') {
        targetPageId = 'tab-more';
    } else if (tabId === 'contact') {
        targetPageId = 'tab-contact';
    } else if (!document.getElementById(targetPageId)) {
        targetPageId = 'tab-home'; // Fallback to Home if content tab isn't isolated
    }

    // Display targeted section
    const targetSection = document.getElementById(targetPageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Highlight top nav tab
    const activeTopLink = document.querySelector(`.top-nav .nav-link[data-tab="${tabId}"]`);
    if (activeTopLink) activeTopLink.classList.add('active');

    // Highlight sidebar tab
    const activeSideLink = document.querySelector(`.side-menu li[data-tab="${tabId}"]`);
    if (activeSideLink) activeSideLink.classList.add('active');
}

// Attach Event Listeners to Navigations
document.addEventListener('DOMContentLoaded', () => {
    // Top Nav clicks
    document.querySelectorAll('.top-nav .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            switchTab(tab);
        });
    });

    // Sidebar clicks
    document.querySelectorAll('.side-menu li').forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.getAttribute('data-tab');
            switchTab(tab);
        });
    });
});

// Contact Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you ${name}! Your message has been sent successfully.`);
    document.getElementById('portfolio-form').reset();
}
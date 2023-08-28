// Function to adjust elements based on screen width
function adjustLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
        // Small screen (mobile)
        // Example: Modify navigation for mobile
        document.querySelector('.navbar-nav').classList.add('mobile-nav');
    } else {
        // Medium and large screens
        document.querySelector('.navbar-nav').classList.remove('mobile-nav');
    }

    if (screenWidth >= 992) {
        // Large screen (desktop)
        // Example: Adjust jumbotron height
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.style.height = '400px';
    } else {
        // Medium and small screens
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.style.height = 'auto';
    }
}

// Function to add click event for navigation toggle
function toggleNavigation() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');

    toggleButton.addEventListener('click', () => {
        navCollapse.classList.toggle('show');
    });
}

// Function to handle footer image animation
function animateFooterImage() {
    const footerImage = document.querySelector('footer img');

    footerImage.addEventListener('mouseover', () => {
        footerImage.style.transform = 'scale(1.1)';
    });

    footerImage.addEventListener('mouseout', () => {
        footerImage.style.transform = 'scale(1)';
    });
}

// Function to adjust card layout based on screen width
function adjustCardLayout() {
    const screenWidth = window.innerWidth;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (screenWidth < 576) {
            card.classList.add('small-screen-card');
        } else {
            card.classList.remove('small-screen-card');
        }
    });
}

// Function to handle scroll-to-top button
function scrollHandler() {
    const scrollButton = document.querySelector('#scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show-scroll-button');
        } else {
            scrollButton.classList.remove('show-scroll-button');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Call the functions initially and whenever the window is resized
adjustCardLayout();
scrollHandler();
window.addEventListener('resize', adjustCardLayout);


// Call the functions initially and whenever the window is resized
adjustLayout();
toggleNavigation();
animateFooterImage();
window.addEventListener('resize', adjustLayout);

// Function to adjust image height in mobile view
function adjustImageHeight() {
    const screenWidth = window.innerWidth;
    const image = document.querySelector('img');

    if (screenWidth < 576) {
        image.style.height = `${window.innerHeight}px`;
    } else {
        image.style.height = 'auto';
    }
}

// Call the function initially and whenever the window is resized
adjustImageHeight();
window.addEventListener('resize', adjustImageHeight);

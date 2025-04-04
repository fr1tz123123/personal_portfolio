
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const roles = ["Web Developer", "Manual/Automation QA Tester", "Web Designer"];
let currentRoleIndex = 0;
const roleElement = document.getElementById("role");

// Function to change the role text
function changeRole() {
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  roleElement.innerHTML = `I am a <span class="role-text">${roles[currentRoleIndex]}</span>`;
}

setInterval(changeRole, 2000);


//function download resume
document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    const downloadPDF = () => {
        const pdfFilePath = './assets/resume/resume-fritz.pdf';
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'fritz_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    downloadBtn.addEventListener('click', downloadPDF);
});

// about cert-education-exp function
document.querySelectorAll('.nav-btn').forEach(function(elem) {
    elem.addEventListener('click', function() {
        // Hide all collapse elements
        document.querySelectorAll('.collapse').forEach(function(collapse) {
            collapse.classList.remove('show');
        });

        // Show collapse element
        var targetId = this.getAttribute('data-bs-target'); 
        document.querySelector(targetId).classList.add('show');

        // Remove the active class from nav buttons
        document.querySelectorAll('.nav-btn').forEach(function(navBtn) {
            navBtn.classList.remove('active');
        });

        this.classList.add('active');
    });
});


//backtotopbtn
let backToTop = document.getElementById("backToTop");
        
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        };
        
        backToTop.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 150, behavior: "smooth" });
        });
        
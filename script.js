
// menu bar toggle 
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// adding scroll animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about');

    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
});



// service section script
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.services-container');
    
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});



// featured properties
document.addEventListener("DOMContentLoaded", function () {
    const propertiesContainer = document.getElementById("properties-list");

    // Your custom properties data
    const properties = [
        {
            image: "IMAGES/property1.jpg",
            title: "Luxury Villa",
            location: "Beverly Hills, CA",
            price: "$1,200,000"
        },
        {
            image: "IMAGES/property2.jpg",
            title: "Modern Apartment",
            location: "New York, NY",
            price: "$850,000"
        },
        {
            image: "IMAGES/property3.jpg",
            title: "Beachfront House",
            location: "Miami, FL",
            price: "$2,500,000"
        }
    ];

    // Generate property cards dynamically
    properties.forEach(property => {
        const propertyCard = document.createElement("div");
        propertyCard.classList.add("property-card");

        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-details">
                <h3>${property.title}</h3>
                <p>Location: ${property.location}</p>
                <p class="property-price">${property.price}</p>
                <a href="#" class="view-details">View Details</a>
            </div>
        `;

        propertiesContainer.appendChild(propertyCard);
    });
});


// testimonial section
let index = 0;
const slides = document.querySelectorAll(".testimonial-slide");

function showTestimonial(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === n) slide.classList.add("active");
    });
}

function nextTestimonial() {
    index = (index + 1) % slides.length;
    showTestimonial(index);
}

function prevTestimonial() {
    index = (index - 1 + slides.length) % slides.length;
    showTestimonial(index);
}

// Auto slide every 5 seconds
setInterval(nextTestimonial, 5000);

// Show first testimonial by default
showTestimonial(index);



// contact section
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});





// footer section
document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.querySelector(".footer-bottom p").innerHTML = `&copy; ${year} MBS. All Rights Reserved.`;
});




// modal section
<script>
function submitAppointment() {
    alert("Appointment request submitted successfully!");
    document.getElementById("appointmentForm").reset(); 
    $('#appointmentModal').modal('hide'); 
}
</script>

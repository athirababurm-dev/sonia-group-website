
/* =====================================
   SONIA GENERAL TRADING LLC
   WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   1. MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =====================================
   2. PRODUCT CATEGORY FILTER
===================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const productCards = document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // Activate selected button

        button.classList.add("active");


        // Get selected category

        const selectedCategory = button.dataset.filter;


        // Filter products

        productCards.forEach(card => {

            const productCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === productCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =====================================
   3. COMPANY WHATSAPP NUMBER
===================================== */

// IMPORTANT:
// Replace this with the actual company WhatsApp number.
// Include country code, without +, spaces or hyphens.
//
// Example format: 971501234567

const whatsappNumber = "971XXXXXXXXX";


/* =====================================
   4. INDIVIDUAL PRODUCT ENQUIRY
===================================== */

const productEnquiryLinks =
    document.querySelectorAll(".product-enquiry");


productEnquiryLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();


        // Get selected product name

        const productName = link.dataset.product;


        // Prepare WhatsApp message

        const message =
`Hello SONIA GENERAL TRADING LLC,

I am interested in the following product:

Product: ${productName}

Please share the available varieties,
packaging details, quantities and prices.

Thank you.`;


        // Create WhatsApp URL

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        // Open WhatsApp

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

});


/* =====================================
   5. CONTACT FORM
===================================== */

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    // Get customer information

    const name =
        document.getElementById("customerName").value.trim();

    const email =
        document.getElementById("customerEmail").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const product =
        document.getElementById("customerProduct").value;

    const message =
        document.getElementById("customerMessage").value.trim();


    // Prepare customer enquiry

    const whatsappMessage =
`Hello SONIA GENERAL TRADING LLC,

I would like to make a product enquiry.

CUSTOMER DETAILS

Name: ${name}

Email: ${email}

Phone: ${phone}

PRODUCT CATEGORY

${product}

ENQUIRY MESSAGE

${message}

Thank you for your assistance.`;


    // Generate WhatsApp link

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    // Open WhatsApp

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});


/* =====================================
   6. FOOTER CURRENT YEAR
===================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} SONIA GENERAL TRADING LLC. All Rights Reserved.`;

}

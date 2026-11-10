
/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});


/* =========================
   PRODUCT CATEGORY FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate selected button
        this.classList.add("active");

        const selectedCategory = this.dataset.filter;

        productCards.forEach(card => {

            const category = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === category
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


/* =========================
   WHATSAPP CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

// IMPORTANT: Replace with the company's WhatsApp number.
// Include country code, without + or spaces.
const whatsappNumber = "971XXXXXXXXX";

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

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


    const whatsappMessage =
`Hello SONIA GROUP - GENERAL TRADING LLC,

I would like to make a product enquiry.

Customer Name: ${name}

Email: ${email}

Phone: ${phone}

Product Category: ${product}

Enquiry Details:
${message}

Thank you.`;


    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});

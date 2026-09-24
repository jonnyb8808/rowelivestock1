// 🔥 BRANDING-IRON INFERNO — CURSOR TRAIL
document.addEventListener("mousemove", (e) => {
    const emberContainer = document.getElementById("ember-container");

    // --- EMBER PARTICLE ---
    const ember = document.createElement("div");
    ember.classList.add("ember");

    // Random ember size (4px–10px)
    const size = Math.random() * 6 + 4;
    ember.style.width = size + "px";
    ember.style.height = size + "px";

    // Random ember color flicker
    const hue = 20 + Math.random() * 20;
    ember.style.background = `radial-gradient(circle,
        hsl(${hue}, 100%, 70%),
        hsl(${hue - 10}, 100%, 55%),
        hsl(${hue - 20}, 90%, 40%)
    )`;

    // Position (viewport-based)
    ember.style.left = e.clientX + "px";
    ember.style.top = e.clientY + "px";

    // Random drift
    const driftX = (Math.random() - 0.5) * 30;
    const driftY = (Math.random() - 0.5) * 30;
    ember.style.transform = `translate(${driftX}px, ${driftY}px)`;

    emberContainer.appendChild(ember);

    setTimeout(() => ember.remove(), 800);


    // --- SMOKE TRAIL ---
    const smoke = document.createElement("div");
    smoke.classList.add("smoke");

    smoke.style.left = e.clientX + "px";
    smoke.style.top = e.clientY + "px";

    const smokeSize = Math.random() * 10 + 10;
    smoke.style.width = smokeSize + "px";
    smoke.style.height = smokeSize + "px";

    const smokeDriftX = (Math.random() - 0.5) * 20;
    const smokeDriftY = -Math.random() * 20;
    smoke.style.transform = `translate(${smokeDriftX}px, ${smokeDriftY}px)`;

    emberContainer.appendChild(smoke);

    setTimeout(() => smoke.remove(), 1200);
});



// 🔥 CLICK-BURST FIRE EXPLOSION
document.addEventListener("click", (e) => {
    const emberContainer = document.getElementById("ember-container");

    const burstCount = 25;

    for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement("div");
        burst.classList.add("burst");

        const size = Math.random() * 10 + 8;
        burst.style.width = size + "px";
        burst.style.height = size + "px";

        const hue = 20 + Math.random() * 20;
        burst.style.background = `radial-gradient(circle,
            hsl(${hue}, 100%, 70%),
            hsl(${hue - 10}, 100%, 55%),
            hsl(${hue - 20}, 90%, 40%)
        )`;

        burst.style.left = e.clientX + "px";
        burst.style.top = e.clientY + "px";

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 40 + 20;

        const driftX = Math.cos(angle) * speed;
        const driftY = Math.sin(angle) * speed;

        burst.style.transform = `translate(${driftX}px, ${driftY}px)`;

        emberContainer.appendChild(burst);

        setTimeout(() => burst.remove(), 900);
    }

    // Smoke burst
    for (let i = 0; i < 15; i++) {
        const smoke = document.createElement("div");
        smoke.classList.add("smoke");

        smoke.style.left = e.clientX + "px";
        smoke.style.top = e.clientY + "px";

        const smokeSize = Math.random() * 15 + 15;
        smoke.style.width = smokeSize + "px";
        smoke.style.height = smokeSize + "px";

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 25 + 10;

        const driftX = Math.cos(angle) * speed;
        const driftY = Math.sin(angle) * speed;

        smoke.style.transform = `translate(${driftX}px, ${driftY}px)`;

        emberContainer.appendChild(smoke);

        setTimeout(() => smoke.remove(), 1500);
    }
});



// CONTACT MODAL
const contactModal = document.getElementById("contactModal");
const contactClose = document.querySelector(".contact__close");

function openContactModal() {
    contactModal.style.display = "block";
}

contactClose.onclick = () => {
    contactModal.style.display = "none";
};

window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
});

const fadeUps=document.querySelectorAll('.testimonial__fadeUp');

const fadeObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('testimonial__visible');
    }
  });
},{threshold:0.2});

fadeUps.forEach(el=>fadeObserver.observe(el));

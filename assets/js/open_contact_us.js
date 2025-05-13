// open_contact_us.js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
  
    links.forEach(link => {
      if (link.href === "https://www.tejwin.com/en/contact/") {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
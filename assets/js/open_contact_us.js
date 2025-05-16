// open_contact_us.js
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    const targetUrls = [
      "https://www.tejwin.com/en/contact/",
      "https://www.tejwin.com/en/insight-category/data-analysis/"
    ];
    
    if (targetUrls.includes(link.href)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
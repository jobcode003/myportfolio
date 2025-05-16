let mn=document.getElementById("menu_bar");
let cl=document.getElementById("close_btn");
let head=document.getElementById("header");
mn.addEventListener("click",()=>{
head.style.left="0";
mn.style.visibility="hidden";
})
cl.addEventListener("click",()=>{
    head.style.left="-100%";
    mn.style.visibility="visible";
})


const sections = document.querySelectorAll(".fade-in-section");

const revealOnScroll = () => {
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if section is entering viewport from bottom (scrolling up)
    if (rect.top < windowHeight - 100 && rect.bottom > 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  }
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // run on page load
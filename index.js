// Navbar background on scroll
window.addEventListener("scroll",()=>{
  document.querySelector("header")
  .classList.toggle("sticky",window.scrollY>50);
});

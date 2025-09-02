/*
  script.js

  This file contains simple JavaScript to animate elements when they
  enter the viewport. It uses the IntersectionObserver API to
  observe elements with the 'hidden' class and adds a 'show'
  class when they become visible. Once an element has been
  animated, it is unobserved to prevent repeated triggers.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements that should be animated on scroll
  const hiddenElements = document.querySelectorAll('.hidden');

  // Define the observer callback
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  };

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(callback, {
    threshold: 0.2
  });

  // Observe each hidden element
  hiddenElements.forEach(el => observer.observe(el));
});
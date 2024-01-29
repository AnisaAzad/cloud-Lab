// script.js

// Function to change the background color of the hero section on mouseover
function changeHeroBackgroundColor() {
    const hero = document.querySelector('.hero');
    hero.style.backgroundColor = 'lightblue';
}

// Function to reset the background color of the hero section on mouseout
function resetHeroBackgroundColor() {
    const hero = document.querySelector('.hero');
    hero.style.backgroundColor = 'white';
}

// Event listeners to trigger the functions on mouseover and mouseout
const hero = document.querySelector('.hero');
hero.addEventListener('mouseover', changeHeroBackgroundColor);
hero.addEventListener('mouseout', resetHeroBackgroundColor);

// Function to add a border to the "View Details" buttons on product hover
function addBorderOnProductHover() {
    const productButtons = document.querySelectorAll('.product-button');
    productButtons.forEach(button => {
        button.style.border = '2px solid #ff6600';
    });
}

// Function to remove the border when the mouse leaves the product
function removeBorderOnProductHover() {
    const productButtons = document.querySelectorAll('.product-button');
    productButtons.forEach(button => {
        button.style.border = 'none';
    });
}

// Event listeners to trigger the button styling functions on product hover
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('mouseover', addBorderOnProductHover);
    product.addEventListener('mouseout', removeBorderOnProductHover);
});

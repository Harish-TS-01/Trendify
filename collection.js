// Search Functionality: Filter as user types
document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase(); // Get the typed input
    const products = document.querySelectorAll('.product'); // Select all products

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase(); // Get the product name

        if (productName.startsWith(searchTerm)) {
            product.style.display = 'block'; // Show the product if it matches
        } else {
            product.style.display = 'none'; // Hide the product if it doesn't match
        }
    });
});

//sidenav
var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
sidenav.style.left = "0"
}
function closeNavbar()
{
sidenav.style.left = "-80%"
}


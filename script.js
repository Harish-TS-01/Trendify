//shop now btn

function goToNextPage(){
    window.location.href ="collection.html";
}



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

// shop now button scroll

//function scrollToNewArrivals(){
//const arrivalsSection=document.getElementById('newarrivals');
//arrivalsSection.scrollIntoView({behavior:'smooth'})
//}

// Function to handle "Buy Now" button click

function buyNow(productid, productName, productImagePath, productPrice) {
    const deliveryCharge = 5; // Fixed delivery charge
    const totalPrice = productPrice + deliveryCharge;

    const popupId = 'popup-popup-1';
    const popupNameId = 'popup-name-1';
    const popupImageId = 'popup-image-1';
    const popupPriceId = 'popup-price-1';
    const popupDeliveryId = 'popup-delivery-1';
    const popupTotalId = 'popup-total-1';


    // Update popup content
    document.getElementById('popup-name-1').textContent ='Product: Stylish Shirt';
    document.getElementById('popup-image-1').src = "shirt1.jpg";
    document.getElementById('popup-price-1').textContent ='Price: ₹499';
    document.getElementById('popup-delivery-1').textContent ='Delivery Charge: ₹49';
    document.getElementById('popup-total-1').textContent ='Total: ₹548';

     // Show popup
    document.getElementById('popup-1').style.display = 'flex';
}

    // Function to close the popup
function closePopup() {
    document.getElementById('popup-1').style.display = 'none';
}

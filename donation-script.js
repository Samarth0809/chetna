// document.addEventListener("DOMContentLoaded", function () {
//     const donationForm = document.getElementById("donation-form");

//     donationForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent form submission
        
//         // Get user inputs
//         const name = document.getElementById("name").value.trim();
//         const amount = document.getElementById("amount").value.trim();
        
//         if (name === "" || amount === "" || isNaN(amount) || amount <= 0) {
//             alert("Please enter a valid name and donation amount.");
//             return;
//         }

//         // UPI Payment Details (Replace with actual UPI ID)
//         const upiId = "samarthjagakar2001-4@oksbi"; // Replace with your UPI ID
//         const payeeName = "samarth jagakar"; // Replace with your organization name
     
//         // Create the UPI Payment Link
//         const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&tn=Donation%20for%20Chetna%20Foundation&am=${amount}&cu=INR`;

//         // Open UPI app
//         window.location.href = upiLink;
//     });
// });

document.getElementById("open-qr-popup").addEventListener("click", function() {
    document.getElementById("qr-popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("qr-popup").style.display = "none";
});

window.onclick = function(event) {
    var popup = document.getElementById("qr-popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
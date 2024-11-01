//For tasks 2 and 3 for form entry validation
document.getElementById("getProductStatusID").addEventListener("submit", function(event) {
    const productStatusInput = document.getElementById("productStatusID").value.trim();
    if (productStatusInput === "") {
        event.preventDefault();
        console.log("ERROR: Please enter a Product Status ID before submitting."); //Creates an error line in the webpage console
        alert("Please enter a Product Status ID before submitting."); //Creates an error alert popup on the webpage
    }
});
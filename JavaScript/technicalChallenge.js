//API Key
const apiKey = "4d5b2f7f202a84775291884582c7dddc" //NOTE: No security tasks were mentioned leading to lower security in this task.

//For tasks 2 and 3 form entry validation
document.getElementById("getProductStatusID").addEventListener("submit", function(event) {
    const productStatusInput = document.getElementById("productStatusID").value.trim();
    event.preventDefault();
    if (productStatusInput === "") {
        console.log("ERROR: Please enter a Product Status ID before submitting."); //Creates an error line in the webpage console
        alert("Please enter a Product Status ID before submitting."); //Creates an error alert popup on the webpage
        return;
    }
    if (!Number.isInteger(Number(productStatusInput))) { //NOTE: Done as a separate if statement instead of as an or in the above if, so that the error message can be more unique.
        console.log("ERROR: Please enter a full number value for Product Status ID before submitting."); //Creates an error line in the webpage console
        alert("Please enter a full number value for Product Status ID before submitting."); //Creates an error alert popup on the webpage
        return;
    }

    //For task 6 requesting task IDs of a workflow - page 5 in SwiftCase API Documentation
    fetch(`https://demonstration.swiftcase.co.uk/api/v2/${apiKey}/status/${productStatusInput}.json`, {
            method: 'GET'
        })
        .then(response => {
            //Error handling
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        //Logs the data
        .then(data => console.log(data))
        //Error handling
        .catch(error => {
            console.error("Failed to fetch data:", error.message);
        })

});
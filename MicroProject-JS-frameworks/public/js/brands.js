document.addEventListener("DOMContentLoaded", function () {
    // Fetch the car data
    fetch("/api/cars")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON response
        })
        .then(function (cars) {
            // Extract unique brands manually
            var brands = [];
            for (var i = 0; i < cars.length; i++) {
                if (brands.indexOf(cars[i].make) === -1) {
                    brands.push(cars[i].make);
                }
            }

            // Populate the list
            var brandList = document.getElementById("brandContainer");
            brandList.innerHTML = ""; // Clear any existing content

            for (var j = 0; j < brands.length; j++) {
                // Create a card for each brand
                var brandCard = document.createElement("div");
                brandCard.className = "brand-card";

                // Add image for the brand
                var brandImage = document.createElement("img");
                brandImage.src = "/img/" + brands[j].toLowerCase() + ".jpg"; // Assuming image names are lowercase and match brand names
                brandImage.alt = brands[j] + " Logo";
                brandCard.appendChild(brandImage);

                // Add a title for the brand
                var brandTitle = document.createElement("h3");
                brandTitle.textContent = brands[j];
                brandCard.appendChild(brandTitle);

                // Add a link to the brand's page
                var link = document.createElement("a");
                link.href = "brands.html?brand=" + encodeURIComponent(brands[j]);
                link.textContent = "View Cars";
                brandCard.appendChild(link);

                // Append the card to the container
                brandList.appendChild(brandCard);
            }
        })
        .catch(function (error) {
            console.error("Error fetching brands:", error);
            document.getElementById("brandsContainer").innerHTML = "<p>Failed to load brands. Please try again later.</p>";
        });
});

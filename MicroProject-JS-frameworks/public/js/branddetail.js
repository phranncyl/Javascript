document.addEventListener("DOMContentLoaded", function () {
    // Get the brand parameter from the URL
    var params = new URLSearchParams(window.location.search);
    var brand = params.get("brand");
  
    if (brand) {
      // Fetch the car data
      fetch("/api/cars")
        .then(function (response) {
          return response.json(); // Parse the JSON response
        })
        .then(function (cars) {
          // Filter cars by brand
          var filteredCars = [];
          for (var i = 0; i < cars.length; i++) {
            if (cars[i].make === brand) {
              filteredCars.push(cars[i]);
            }
          }

  
          // Populate the carsContainer
          var container = document.getElementById("brandsContainer");
          if (filteredCars.length > 0) {
            for (var j = 0; j < filteredCars.length; j++) {
              var carCard = document.createElement("div");
              carCard.className = "car-card";
  
              var carImage = document.createElement("img");
              carImage.src = filteredCars[j].image;
              carImage.alt = filteredCars[j].make + " " + filteredCars[j].model;
              carCard.appendChild(carImage);
  
              var carTitle = document.createElement("h3");
              carTitle.textContent = filteredCars[j].model;
              carCard.appendChild(carTitle);
  
              var carYear = document.createElement("p");
              carYear.textContent = "Year: " + filteredCars[j].year;
              carCard.appendChild(carYear);
  
              var carPrice = document.createElement("p");
              carPrice.textContent = "Price: $" + filteredCars[j].price.toLocaleString();
              carCard.appendChild(carPrice);
  
              container.appendChild(carCard);
            }
          } else {
            container.innerHTML = "<p>No cars available for this brand.</p>";
          }
        })
        .catch(function (error) {
          console.error("Error fetching brand details:", error);
        });
    } else {
      document.getElementById("brandsContainer").innerHTML = "<p>Invalid brand selected!</p>";
    }
  });
  
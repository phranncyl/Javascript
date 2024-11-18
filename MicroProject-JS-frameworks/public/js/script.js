const getFetchButton = document.getElementById("getAsync");
const carTableContainer = document.getElementById("car-table-container");
const carTable = document.getElementById("car-table");

async function getDataFetch() {
    try {
        const response = await fetch('http://localhost:3000/api/cars');
        const data = await response.json();
        
        // Log the data for debugging
        console.log(data);

        // Show the car table container
        carTableContainer.style.display = 'block';

        // Clear the previous table content (if any)
        carTable.innerHTML = '';

        // Create the table headers
        const headers = ['ID', 'Make', 'Model', 'Price', 'Year', 'Image'];
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        carTable.appendChild(headerRow);

        // Create table rows for each car data
        data.forEach(car => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = car.id;
            row.appendChild(idCell);

            const makeCell = document.createElement('td');
            makeCell.textContent = car.make;
            row.appendChild(makeCell);

            const modelCell = document.createElement('td');
            modelCell.textContent = car.model;
            row.appendChild(modelCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = `$${car.price.toLocaleString()}`;  // Format price
            row.appendChild(priceCell);

            const yearCell = document.createElement('td');
            yearCell.textContent = car.year;
            row.appendChild(yearCell);

            const imageCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = car.image;
            img.alt = `${car.make} ${car.model}`;
            img.style.width = '100px';  // Set image size
            imageCell.appendChild(img);
            row.appendChild(imageCell);

            carTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error loading data');
    }
}

getFetchButton.addEventListener('click', getDataFetch);

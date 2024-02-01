var subjectArray = [
    {text:"The dog ",image:"img/dog.png"},
    {text:"The Exterminator ",image:"img/exterminator.png"},
    {text:"Madonna ",image:"img/Madonna.png"},
    {text:"The cat ",image:"img/cat.png"},
    {text:"Dracula ",image:"img/dracula.png",},
    {text:"Godzilla ",image:"img/godzilla.png"}
    // Add more subject pronouns as needed
];

var verbArray = [
    {text:"runs to ",image:"img/run.png"},
    {text:"eats with ",image:"img/eat.png"},
    {text:"plays with ",image:"img/play.png"},
    {text:"fights with ",image:"img/fight.png"},
    {text:"dances with ",image:"img/dance.png"}
    // Add more verbs as needed
];

var adjectiveArray = [
    {text:"a scary ",image:"img/scary.png"},
    {text:"a funny ",image:"img/clown.png"},
    {text:"an old ",image:"img/old.png"},
    {text:"an angry ",image:"img/angry.png"},
    {text:"a red ",image:"img/red.png"}
    // Add more adjectives as needed
];

var nounArray = [
   {text:"house ",image:"img/house.png"},
   {text:"whale ",image:"img/whale.png"},
   {text:"moon ",image:"img/moon.png"},
    {text:"flower ",image:"img/flower.png"},
    {text:"book ",image:"img/book.png"}
    // Add more nouns as needed
];

var placeArray = [
    { text:"on the park",image:"img/park.png"},
    { text:"at the beach",image:"img/beach.png"},
    { text:"on the mountain",image:"img/mountain.png"},
    { text:"in my soup",image:"img/soup.png"},
    { text:"in Saturn",image:"img/saturn.png"}
    // Add more places as needed
];

/*var subjectList = document.getElementById('subjectList');*/

function printArray (HTMLelement, array) {
	document.addEventListener('DOMContentLoaded', function() {

		// Get the UL element where we want to list the items
		var subjectList = document.getElementById(HTMLelement);
        
		// Loop through the array and create list items
		array.forEach(function(item) {
			// Create a new LI element
			var listItem = document.createElement('td');

			// Set the text content of the LI element to the array item
			listItem.textContent = item;

			// Append the LI element to the UL
            
			subjectList.appendChild(listItem);
		});
	});
}


function printArray2(targetId, dataArray) {
    // Check if dataArray is an array
    if (!Array.isArray(dataArray)) {
        console.error('printArray: dataArray is not an array');
        return; // Exit the function if dataArray is not an array
    }

    // Build the HTML string
    var resultHTML = dataArray.map(item => {
        result = "<img src="+item.image+"> "+item.text+"</img>";
        return result;
    }).join('');

    // Print the result to the HTML element with the specified targetId
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.innerHTML = resultHTML;
    } else {
        console.error('printArray: Target element not found with id', targetId);
    }
}
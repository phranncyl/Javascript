// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var storyButton = document.querySelector('#story');
var whoButton = document.querySelector('#who');
var verbButton = document.querySelector('#verb');
var adjButton = document.querySelector('#adj');
var nounButton = document.querySelector('#noun');
var whereButton = document.querySelector('#where');
var who = '';
var surpriseButton = document.querySelector('#surprise');



// Onclick handler for the button that speaks the text contained in the above var textToSpeak
storyButton.onclick = function () {
	var textToSpeak = who.text + verb.text + adjective.text + noun.text + place.text;
	speakNow(textToSpeak);
	document.getElementById('storyResult').innerHTML = textToSpeak;
}

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
surpriseButton.onclick = function () {
	var surpriseText = chooseStory2(subjectArray).text + chooseStory2(verbArray).text + chooseStory2(adjectiveArray).text + chooseStory2(nounArray).text + chooseStory2(placeArray).text;
	speakNow(surpriseText);
	document.getElementById('storyResult').innerHTML = surpriseText;
}

whoButton.onclick = function () {
	who = chooseStory2(subjectArray);
	speakNow(who.text);
	console.log(who);
}

verbButton.onclick = function () {
	verb = chooseStory2(verbArray);
	speakNow(verb.text);
}

adjButton.onclick = function () {
	adjective = chooseStory2(adjectiveArray);
	speakNow(adjective.text);
}

nounButton.onclick = function () {
	noun = chooseStory2(nounArray);
	speakNow(noun.text);
}

whereButton.onclick = function () {
	place = chooseStory2(placeArray);
	speakNow(place.text);
}



/* Functions

-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}




/* Functions to random 
-------------------------------------------------- */
function chooseStory(array) {
	// Generate a random index within the length of the array
	var randomIndex = Math.floor(Math.random() * array.length);

	// Return the item at the randomly chosen index
	return array[randomIndex];
}

function chooseStory2(array) {
    // Create a new array by mapping each item to an object with its index
    var indexedArray = array.map((text, image) => ({ text, image }));

    // Generate a random index within the length of the indexed array
    var randomIndex = Math.floor(Math.random() * indexedArray.length);

    // Return the item at the randomly chosen index from the original array
    return indexedArray[randomIndex].text;
}
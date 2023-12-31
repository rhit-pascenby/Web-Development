var rhit = rhit || {};
var apiURL = "https://64486933e7eb3378ca2e0f51.mockapi.io/api/users";

// Provided funtion to create random number for API ids
function getRandomInt() {
	// create a random number between 1 and 8 - we only have 8 API messages
	min = 1;
	max = 8;
	return Math.floor(Math.random() * (max - min + 1)) + min;
} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// TODO: Remove previous HTML content from the card text. The content should be "" 
function clearText() {
	// Your code
	document.querySelector("#name").innerHTML = ``;
	document.querySelector("#text").innerHTML = ``;
}

// TODO: replace period by exclamation signs, add a new line, return processed text
function processText(text){
      // Your Code
	  const processedText = text.replaceAll('.', '!!!\n');
	  
	  return processedText;
 }

   // TODO: split text by a new line, create an array of sentences, return array
function textToArray(text) {
	// Your Code
	const sentences = text.split('\n');
	
	console.log(sentences);
	return sentences;
}

 // TODO: create for loop over text array. Append span tag and update code
 function appendText (textArray){
    // Your Code
	let newParagraph = document.createElement('span');
	newParagraph.style.display = "block";

	for(let k=0; k<textArray.length; k++){
		let appen = (`${textArray[k]}`)
	
		 newParagraph.append(appen);
 }

 
 return newParagraph;
}



function updateClient( ) {

	let id = getRandomInt() // https://developer.mozilla.org/en-US/docs/Web/API/fetch
	 let title = '';
	 let cardText = '';
	 let cardImage = '';
	clearText(); 
	// PART 1. First just replace card title, card text and card image with new content
	
		fetch(apiURL)
		.then(response => response.json())
		.then(data => {
			// Use the data retrieved from the API
			// console.log(data[id].name);
		
		
			let title = data[id].name;
			
			cardText = data[id].message;
			cardImage = data[id].avatar;
			 cardText = processText(cardText);
			
			 cardText = textToArray(cardText);
			 cardText = appendText(cardText);
			
			

	appendText(cardText);	
			document.querySelector("#name").innerHTML = `${title}`;
			
			text.appendChild(cardText);
      
		document.querySelector('#image').src = `${cardImage}`;
			
		})
		.catch(error =>{
			console.error("There was an error fetching data:", error);
		});


		
	// PART 2. Text processing steps - processText, textToArraay, appendText

  
  }


/* Main */
rhit.main = function () {
	console.log("Ready");
	if (document.querySelector("#updateButton")) {
		document.querySelector("#updateButton").onclick = (event) => {
		  //NOTE must complete this method
		  updateClient();
		};
	}
};

rhit.main();
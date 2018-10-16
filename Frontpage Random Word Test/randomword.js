var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Wild"
words[2] = "Sad"
words[3] = "Crazy"
words[4] = "Beautiful"
words[5] = "Divine"
words[6] = "Special"
words[7] = "Fun"
words[8] = "Whole New"
words[9] = "Woman's"
words[10] = "Sick"
words[11] = "Small"
words[12] = "Wavy"
words[13] = "Different"
words[14] = "Dark"
words[15] = "Breath-Taking"
words[16] = "Digital"
words[17] = "Changing"
words[18] = "Capitalist"
words[19] = "Bright"
words[20] = "Happy"
words[21] = "Scared"
words[22] = "Hopeful"
words[23] = "Black"
words[24] = "Social"
words[25] = "Connected"
words[26] = "Complex"
words[27] = "Safe"
words[28] = "Bankrupt"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord() {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
document.getElementById("bob").innerHTML = "A " + words[rnd] + " World";

}

function WordCheck() {
var x = document.getElementById("bob").innerText;
	if (x== "A Different World") document.getElementById("bob").id = "two";

}
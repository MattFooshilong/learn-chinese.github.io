//Some variables to initialize and get the code to work
//below is to make displayWords() function work.
let table = document.getElementById('mainTable');

//below is to make storeInLocalStorage() function work
var localData;
//below is to drag out words from localStorage and put them into temporary memory so that I can push new words into the array. chineseWords is an array.
var chineseWords;
chineseWords = JSON.parse(localStorage.getItem('library'));
//below is to add rows so that words in the chineseWords object can be displayed into the table. They must be equal or else displayWords() function will fail. Put this at the start here to solve the problem of not being able to insert permanent rows into the table
while ((table.rows.length-1)<chineseWords.length) {
	addRow();
  }

/*
// Original 3 words. Was used to initialize by putting first 3 words into localStorage. After that the words just keep adding by calling the function in newWordBtn(). Keep for backup, in case for some error need to redo everything from start.
var chineseWords=[
	{
		"word":'燃烧', //chineseWords[0].word
		"pinyin":'Ran Shao' //chineseWords[0].pinyin
	},
	{
		"word":'我', //chineseWords[1].word
		"pinyin":'Wo'//chineseWords[1].pinyin
	},
	{
		"word":'英超', //chineseWords[2].word
		"pinyin":'yin chao'//chineseWords[2].pinyin
	}
]
*/

//executes when I press the submit button
function newWordBtn(){
	//Getting prepared to store data
	var word = document.getElementById('chineseWord_input').value;
	var pinyin = document.getElementById('pinyin_input').value;
	var newObj = {
		"word":word,
		"pinyin":pinyin
	}
	//Checking if word is in current list, if yes dont store, if no store
	for(var i=0;i<chineseWords.length;i++){
		if(chineseWords[i].word==word){
			document.getElementById('wordExist').innerHTML = 'This word already exists.';
		}
	}
	return chineseWords.push(newObj)+storeInLocalStorage()+addRow()+displayWords();
}//function newWord ends


//grabbed below code from stackOverFlow
function addRow() {
  // Get a reference to the table
  let tableRef = document.getElementById('mainTable');
  // Insert a row at the end of the table
  let newRow = tableRef.insertRow();
  // Insert a cell in the row at index 0
	for(var i=0;i<4;i++){
  var newCell = newRow.insertCell(0);
	}
  // Append a text node to the cell
  let newText = document.createTextNode('New bottom row');
  newCell.appendChild(newText);
}



//Below function displays all words into table
//1st loop is for going down each row and displaying in column 1 (cell 0)
//2nd loop is for going down each row and displaying in column 1 (cell 1)
function displayWords(){
for(var i=1;i<chineseWords.length+1;i++){
		table.rows[i].cells[0].innerHTML = chineseWords[i-1].word;
}
for(var i=1;i<chineseWords.length+1;i++){
		table.rows[i].cells[1].innerHTML = chineseWords[i-1].pinyin;
}
}
displayWords();

//1) takes the current chineseWords in memory and set into localStorage, name it library
//2) takes library from localStorage and assign it to var localData
function storeInLocalStorage(){
localStorage.setItem('library',JSON.stringify(chineseWords));
localData = JSON.parse(localStorage.getItem('library'));
}

/*** Potential remake of the table in the future so that I can edit the words and pinyin***/
/*Add button to create rows and columns*/
/*Put input field inside each cell, let user type the word and pinyin in each cell so that I can edit them*/
const test = 1;

console.log(test);



//Get words from user and stores in box
function submitButton(){
	var secondWord = document.getElementById('second_input').value;
	document.getElementById('item3').innerText = secondWord;

	var thirdWord = document.getElementById('third_input').value;
	document.getElementById('item5').innerText = thirdWord;

}


//Flips box 1 back and forth, with and without pinyin
document.getElementById('item1').addEventListener('click',clickMe1);
function clickMe1(){
	  if (this.innerHTML == "燃烧") {
	    this.innerHTML = "燃烧<br>Ran shao";
	    return;
	  }
	  if (this.innerHTML == "燃烧<br>Ran shao") {
	    this.innerHTML = "燃烧";
	    return;
		}
}


//Flips box 3 back and forth, with and without pinyin
//Refers to page2.js file
document.getElementById('item3').addEventListener('click',clickMe2);
function clickMe2(){
	  if (this.innerHTML == "我") {
	    this.innerHTML = chineseWords.word2[0]+"<br>"+chineseWords.word2[1];
	    return;
	  }
	  if (this.innerHTML == chineseWords.word2[0]+"<br>"+chineseWords.word2[1]) {
	    this.innerHTML = "我";
	    return;
		}
}
//Flips box 5 back and forth, with and without pinyin
document.getElementById('item5').addEventListener('click',clickMe3);
function clickMe3(){
	  if (this.innerHTML == "投降") {
	    this.innerHTML = chineseWords.word3+"<br>Tou Xiang";
	    return;
	  }
	  if (this.innerHTML == chineseWords.word3+"<br>Tou Xiang") {
	    this.innerHTML = "投降";
	    return;
		}
}

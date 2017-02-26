$(document).ready(function(){

var answer;
// generates random number between two numbers
function generateNumber(min,max){
	return Math.floor(Math.random() * max ) + min;
}

function generateNewAnswer(){
	$('#status').css('color','#000');
	$("#status").html("Write the answer in the text field");
	var firstNum = Math.ceil(generateNumber(10,90)/5)*5;
	var secondNum = generateNumber(1,98);
	answer = firstNum * secondNum / 100;
	$('#first_num').html(firstNum);
	$('#second_num').html(secondNum);
}

function checkAns(){
	var inputValue = document.getElementById('answer').value;
	if (parseFloat(inputValue) === answer) {
		$('#status').css('color','#4CAF50');
		$('#status').html("Correct! Get ready for another one!");
		setTimeout(function () {
			generateNewAnswer();
		}, 2000)
	}
}


generateNewAnswer();

$('#generate').click(function() {
	generateNewAnswer();
});

$('#answer').on("change paste keyup", function(){
	checkAns();
});

});
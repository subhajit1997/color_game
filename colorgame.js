var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");



easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none"

			}
		}
});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block"
		}
});
resetButton.addEventListener("click",function(){
	//generate all new colours
	colors=generateRandomColors(numSquares);
	//pic a new random colors from array
	pickedColor=pickColor();
	//change colourDisplay to macth picked colour
	colorDisplay.textContent=pickedColor;
	//change colours of square
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{

	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
		//compare colour of picked color

		if(clickedColor===pickedColor){
			messageDisplay.textContent="CORRECT"
			resetButton.textContent="PLAY AGAIN";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else
		{
			this.style.background="#232323";
			messageDisplay.textContent="try again";
		}

		
	});
}

function changeColors(color){
	//loop through all square
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() *colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	for(var i=0;i<num;i++){
		//get randomColours and push in array
		arr.push(randomColour())
	}
	//return that array
	return arr;
}
function randomColour(){
//pick a "red" from 0-255
var r=Math.floor(Math.random()*256);
//pick a "green" from 0-255
var g=Math.floor(Math.random()*256);
//pick a "blue" from 0-255
var b=Math.floor(Math.random()*256);
//"rgb(r,g,b)"
return "rgb("+r+", "+g+", "+b +")";
}
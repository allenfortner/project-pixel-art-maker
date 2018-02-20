// Select color input
var selectedColor = $("#colorPicker").val();

// Initialize grid height
var gridHeight = $("#inputHeight").val();

$("#inputHeight").change(function () {
	gridHeight = $(this).val();
	console.log("Height has changed!")
});

//Initialize grid width
var gridWidth = $("#inputWeight").val();

$("#inputHeight").change(function () {
	gridHeight = $(this).val();
	console.log("Height has changed!")
});

// Select submit button
var submitButton = $("input:submit");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	for (i = 0; i < gridHeight; i += 1) {
		$("#pixelCanvas").append("<tr>"happy birthday!"</tr>");
	}
	console.log("Grid complete!");
	console.log("Height: " + gridHeight);
	console.log("Width: " + gridWidth);
	console.log(typeof gridHeight);
}


submitButton.click(function() {
	makeGrid();
	event.preventDefault();
});
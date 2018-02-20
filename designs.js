// Declare height/width/color variables
var gridHeight, gridWidth;
var selectedColor = $("#colorPicker").val(); // Start with default color (black)

// Select submit button
var submitButton = $("input:submit");

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width, color) {
	for (i = 0; i < height; i += 1) {
		$("#pixelCanvas").append("<tr class=\"incomplete\"></tr>"); // For value of gridHeight, add one row
		
		for (w = 0; w < width; w += 1) {
			$("tr").not( $(".complete") ).append("<td></td>"); // For value of gridWidth, add one column, excluding rows that are already complete
		}
		$(".incomplete").attr("class", "complete")
	}
	//console.log("Grid complete!");
	//console.log("Height: " + height);
	//console.log("Width: " + width);
	//console.log("Color: " + color);
	
	$(".complete").removeClass(); // Remove "complete" class from rows since the whole grid is now complete
	
	$("td").mousedown(function() {
		event.preventDefault(); // Prevent browser from refreshing on mousedown
		$(this).css("background-color", selectedColor);
	});
}

// Automatically change selectedColor to currently selected color when changed
$("#colorPicker").change(function() {
	selectedColor = $("#colorPicker").val();
	//console.log("Color: " + selectedColor);
});

// Deletes the entire grid, initializes variables on button click, and then creates the grid
submitButton.click(function() {
	event.preventDefault(); // Prevent browser from refreshing on button submit
	if (confirm("Submitting a new grid size will clear the grid. Would you like to continue?")) {
	$("tr").remove(); // Delete all rows and columns
	
	gridHeight = Number($("#inputHeight").val()); // Set gridHeight to currently selected height
	gridWidth = Number($("#inputWeight").val()); // set gridWidth to currently selected height
	
	makeGrid(gridHeight, gridWidth, selectedColor);
	} else {
		return false;
	}
});

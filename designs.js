
	//Creating my functionGrid
	function makeGrid(){

		//Declaring my variables rows and columns
		var height = $('#input_height').val();
		var width = $('#input_width').val();

		//For loops to be used to create the grid from user's input
		for(var i = 1; i < height; i++){
			$('table').append('<tr></tr>');

		}
			//Inner loop to add width after each row using  variable j
			for(var j = 1; j < width; j++){
				$('table>tr').append('<td></td>');
			}

	}
	
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		$('#pixel_canvas').children().remove();
		makeGrid();
		event.preventDefault();
		});

		//When you click on each  cell you get color
		$('table').click(function(event){

			//New variable called paintTheTable which will select the colorPicker
			var paintTheTable = $('#colorPicker').val();

			//Returning an event to target and change the background-color and add a variable paintTheTable
			$(event.target).css('background-color', paintTheTable);
		});
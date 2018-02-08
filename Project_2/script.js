	var gridHeight = 400;
	var gridWidth = 400;
	var theGrid = createArray(gridWidth);	
	var mirrorGrid = createArray(gridWidth);
	var check;
	var size = 10;

	fillRandom(); //create the starting state for the grid by filling it with random cells

	//call main loop
	function auto_update(){
		check=1;
		drawGrid();
	  updateGrid();	    		
		requestAnimationFrame(tick);		
	}

	function custom_update(){
		check=0;
		drawGrid();
		updateGrid();		
	}

	function stop_update(){
		check=0;		
	}

	function reset_update(){
		check=0;		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
	  ctx.clearRect(0, 0, gridHeight, gridWidth);
		fillRandom();		
	}

	function tick() { //main loop	    
	    if(check===1){
				drawGrid();
				updateGrid();	    
				requestAnimationFrame(tick);
			}
	}

	function createArray(rows) { //creates a 2 dimensional array of required height
	    var arr = [];
	    for (var i = 0; i < rows; i++) {
	        arr[i] = [];
	    }
	    return arr;
	}

	function fillRandom() { //fill the grid randomly
	    for (var j = 0; j < gridHeight ; j+=size) { //iterate through rows
	        for (var k = 0; k < gridWidth ; k+=size) { //iterate through columns
	            theGrid[j][k] = Math.round(Math.random());
	        }
	    }
	}

	function drawGrid() { //draw the contents of the grid onto a canvas
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle = "darkturquoise";
		var liveCount = 0;
	    ctx.clearRect(0, 0, gridHeight, gridWidth); //this should clear the canvas ahead of each redraw
	    for (var j = 0; j < gridHeight; j++) { //iterate through rows
	        for (var k = 0; k < gridWidth; k++) { //iterate through columns
	            if (theGrid[j][k] === 1) {
	                ctx.fillRect(j, k, size, size);
                    liveCount++;
                    
	            }
	        }
	    }
        console.log(liveCount/100);
	}


	function updateGrid() { //perform one iteration of grid update
    	
			
	    for (var j = 0; j < gridHeight ; j+=size) { //iterate through rows
	        for (var k = 0; k < gridWidth ; k+=size) { //iterate through columns
	            var totalCells = 0;
	            //add up the total values for the surrounding cells
							if(j===0){
								if(k===0){
									totalCells += theGrid[j][size+k];
									totalCells += theGrid[j+size][k];
									totalCells += theGrid[j+size][size+k];
								}
								else if(k===gridWidth-size){									
									totalCells += theGrid[j][k-size];
									totalCells += theGrid[j+size][k];
									totalCells += theGrid[j+size][k-size];
								}
								else{									
									totalCells += theGrid[j][k-size];
									totalCells += theGrid[j][k+size];
									totalCells += theGrid[j+size][k];
									totalCells += theGrid[j+size][k-size];				totalCells += theGrid[j+size][k+size];
								}
							}
						 	else if(j===gridHeight-size){
								if(k===0){
									totalCells += theGrid[j][size+k];
									totalCells += theGrid[j-size][k];
									totalCells += theGrid[j-size][size+k];
								}
								else if(k===gridWidth-size){									
									totalCells += theGrid[j][k-size];
									totalCells += theGrid[j-size][k];
									totalCells += theGrid[j-size][k-size];
								}
								else{									
									totalCells += theGrid[j][k-size];
									totalCells += theGrid[j][k+size];
									totalCells += theGrid[j-size][k];
									totalCells += theGrid[j-size][k-size];				totalCells += theGrid[j-size][k+size];
								}
							}
							else{
								if(k==0){
									totalCells += theGrid[j][k+size];
									totalCells += theGrid[j-size][k];							totalCells += theGrid[j-size][k+size];
									totalCells += theGrid[j+size][k];							totalCells += theGrid[j+size][k+size];
								}
								else if(k===gridWidth-size){
									totalCells += theGrid[j][k-size];
									totalCells += theGrid[j-size][k];							totalCells += theGrid[j-size][k-size];
									totalCells += theGrid[j+size][k];							totalCells += theGrid[j+size][k-size];
								}
								else{
									totalCells += theGrid[j][k-size];
									totalCells += theGrid[j][k+size];
									totalCells += theGrid[j-size][k];
									totalCells += theGrid[j+size][k];
									totalCells += theGrid[j-size][k-size];
									totalCells += theGrid[j-size][k+size];
									totalCells += theGrid[j+size][k-size];				totalCells += theGrid[j+size][k+size];			
								}
							}

	            //apply the rules to each cell
	            switch (totalCells) {
	                case 2:
	                    mirrorGrid[j][k] = theGrid[j][k];         break;
	                case 3:
	                    mirrorGrid[j][k] = 1; //live
                      break;
	                default:
	                    mirrorGrid[j][k] = 0; //
	            }
	        }
	    }
			 for (j = 0; j < gridHeight; j+=size) { //iterate through rows
        for (k = 0; k < gridWidth; k+=size) { //iterate through columns
            theGrid[j][k] = mirrorGrid[j][k];
        }
    	}
	}
		
	    //mirror edges to create wraparound effect
//
//	    for (var l = 1; l < gridHeight - 1; l++) { //iterate through rows
//	        //top and bottom
//	        mirrorGrid[l][0] = mirrorGrid[l][gridHeight - 3];
//	        mirrorGrid[l][gridHeight - 2] = mirrorGrid[l][1];
//	        //left and right
//	        mirrorGrid[0][l] = mirrorGrid[gridHeight - 3][l];
//	        mirrorGrid[gridHeight - 2][l] = mirrorGrid[1][l];
//
//	    }


	    //swap grids
//	    var temp = theGrid;
//	    theGrid = mirrorGrid;
//	    mirrorGrid = temp;
	






function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
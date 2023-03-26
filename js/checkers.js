// This is an array of arrays to hold the default layout of the checkers pieces
board = [
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
]


function createBoard() 
{
    var theBoard = document.createElement('section');
    // Sets the id of the board to checkers
    theBoard.id = 'checkers';
    // Adds board to the body of the html page
    document.body.appendChild(theBoard);

    // Makes the chessboard
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var square = document.createElement('div');

            // Sets the CSS classname for each square
            square.classList.add("square");
            square.setAttribute("id", "div" + i + j);
            
            // Makes the black squares
            if ((i + j) % 2 == 1){
                // Makes the square background black
                square.classList.add("black");
                // Add an event listener for mouse click on square
                // Calls the movePiece function
                square.addEventListener("click", movePiece);
            }
            // Adds square to the board
            theBoard.appendChild(square);

            // If the value of the board[i][j] is not null, create a piece
            if (board[i][j]){
                // Creates piece: pass in the piece id, the class for whether the 
                // piece is black or white, the id of the square so we can add the piece to it
                createPiece("piece" + i + j, "checker-" + board [i][j], square)
            }
        }
    }
}

// This a pointer to the HTML element that stores the id of the piece that was clicked on
// This is the piece that will be moved to a new square. (Note to self: Pointers are actually useful, woah!)
const selValueElem = document.querySelector("#selectedSquare");

// Creates the checker pieces
function createPiece(id, pieceClass, theSquare){
    // Creates new div
    var newPiece = document.createElement('div');
    // Set the id so we can access the piece later
    newPiece.setAttribute("id", id);
    // Creates a round piece
    newPiece.classList.add("checker");
    // Determines the color
    newPiece.classList.add(pieceClass);
    // Adds event listner for mouse click when the piece is selected
    // Calls getPlayerPieces function
    newPiece.addEventListener("click", getPlayerPieces);
    // Add the piece to the square
    theSquare.appendChild(newPiece);
}

// Stores the selected piece id in the selectedSquare span
function getPlayerPieces(){
    // Writes to the console which piece id was selected
    console.log("piece selected=", event.target.id);

    // id of the piece
    var selectedPieceId = event.target.id;
    // remove the word piece
    selectedPieceId = selectedPieceId.replace("piece", "");

    // store the piece id in the span
    selValueElem.dataset.value = selectedPieceId;
}

// Moves our selected checker piece
function movePiece(){
    // Writes to the console which square id was selected
    console.log("square selected=", event.target.id);

    // New square that was clicked
    var newSquareId = event.target.id;
    // Remove the div and piece prefix, so we can only get the number of the square
    newSquareId = newSquareId.replace("div", "");
    newSquareId = newSquareId.replace("piece", "");

    // Gets the selected checkers piece id from the span
    var selectedPieceId = selValueElem.dataset.value;

    // If a different square is selected, then run the code to move the piece
    if (selectedPieceId != newSquareId){
        // Previous square
        var oldSquare = document.getElementById("div" + selectedPieceId);
        // Previous piece
        var oldPiece = document.getElementById("piece" + selectedPieceId);
        // Class that determines if this a white or black piece
        // Have to track to keep the same piece color
        var pieceClass = oldPiece.classList[1];

        // Remove original piece
        oldSquare.removeChild(oldPiece);

        // This is a pointer to the new squqare
        var newSquare = document.getElementById("div" + newSquareId);

        // Creates the piece in the new square
        createPiece("piece" + newSquareId, pieceClass, newSquare);

        // Clears the old piece id from the span to prevent issues.
        selValueElem.dataset.value = "";
    }
}
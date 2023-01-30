// Builds a three word crossword puzzle
function loadCrosswordPuzzle()
{
    // This is the table on the HTML pg
    var table = document.getElementById("puzzle");
    // An array holding three words for the puzzle
    var arrWords = new Array("JavaScript", "cascade", "html");

    // This is the 2nd row on the table
    var tr = table.rows[1];

    // For loop prints out the first word in the array on the 2nd row
    for(var i=0; i<arrWords[0].length; i++)
    {
        // This is the cell that will have a letter added to it
        var cell = tr.cells[i];
        // innerText allows you to change the text of the cell
        cell.innerText = arrWords[0][i];
    }
    // For loop prints out the second word in the array on the 2nd column
    for(var i=0; i<arrWords[1].length; i++)
    {
        // Each time the loop runs, we need to change the current row
        var trow = table.rows[i];
        // This is the 2nd column in the current row
        var cell = trow.cells[1];
        // 
        cell.innerText = arrWords[1][i];
    }
    // For loop prints out the third word in the array on the 2nd row
    for(var i=0; i<arrWords[2].length; i++)
    {
        // Each time the loop runs, we need to change the current row
        var trow = table.rows[i];
        // This is the 2nd column in the current row
        var cell = trow.cells[9];
        cell.innerText = arrWords[2][i];
    }
}
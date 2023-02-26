// This function gathers the input from the form and displays it
function processForm(){
    // Makes the div visible
    document.getElementById("playerInfo").style.display = "";
    // Displays the user input in the div
    document.getElementById("gamertag").innerHTML = document.getElementById("username").value;
    document.getElementById("userClass").innerHTML = document.getElementById("class").value;
    document.getElementById("userLevel").innerHTML = document.getElementById("level").value;
    document.getElementById("userGuild").innerHTML = document.getElementById("guild").value;
}
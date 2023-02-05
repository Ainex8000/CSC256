window.onload = initLinks;

var thePic = 0;
var arrMyPix = new Array("/img/babies.jpg", "/img/alfred.png", "/img/oliver.png", "/img/winston.png")

function initLinks(){
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processPrevious(){
    if (thePic == 0){
        thePic = arrMyPix.lngeth;
    }

    thePic--;
    document.getElementById("puppies").src = arrMyPix[thePic];
    return false;
}

function processNext(){
    thePic++;
    if (thePic == arrMyPix.length){
        thePic = 0;
    }

    document.getElementById("puppies").src = arrMyPix[thePic];
}
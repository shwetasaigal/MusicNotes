
function showMoreOrLess(thisObj,bonusContent){
    var caption = thisObj.innerHTML;
    //alert(caption);
    if ( caption == "Lyrics" ) {
        document.getElementById(bonusContent).style.display = "inline";
        thisObj.innerHTML = "Hide Lyrics";
    } else {
        document.getElementById(bonusContent).style.display = "none";
        thisObj.innerHTML = "Lyrics";
    }
}

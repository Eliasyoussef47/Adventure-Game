// JavaScript Document

//inventory code
var inventory = [];
document.getElementById("inventoryButton").onclick = function(){
    if (inventoryContainer.style.opacity === "1") {
        hideOpacityDisplay(pipBoy);
        hideOpacity(inventoryContainer);
        inventoryContainer.innerHTML = "";
    } else {
        showOpacityDisplay(pipBoy);
        inventoryContainer.style.opacity="1";
        for (var i = 0; i < inventory.length; i++) {
            var itemName = inventory[i];
            var div = document.createElement("div");
            div.setAttribute("class", "itemsContainers");
            var img = document.createElement("img");
            img.src = itemName + ".png";
            var p = document.createElement("p");
            p.setAttribute("class", "p");
            p.innerHTML = itemName;
            div.appendChild(img);
            div.appendChild(p);
            inventoryContainer.appendChild(div);
        };
    };
};
//player info
var name = "Elias";
var gender = "Male";
var talkerText = [];//the text that the speaker says
var talkerTextCount = 0;
//dialogue system
var afterFinishedDialogue ;
dialogueReadButton.onclick = function() {
    talkerTextCount++;
    if(talkerTextCount >= talkerText.length) {
        hideOpacityDisplay(dialogueContainer);
        hideOpacityDisplay(dialogueReadButton);
        hideOpacityDisplay(talkerName);
        afterFinishedDialogue();
    } else {
        dialogueContainer.innerHTML = talkerText[talkerTextCount];
    };
};
function hideOpacity(element) {
    element.style.opacity = "0";
};
function hideDisplay(element) {
    element.style.display = "none";
};
function hideOpacityDisplay(element) {
    element.style.opacity = "0";
    setTimeout(function(){
        element.style.display = "none";
    }, 800);
};
function showOpacity(element) {
    element.style.opacity = "1";
};
function showDisplay(element) {
    element.style.display = "block";
};
function showOpacityDisplay(element) {
    element.style.display = "block";
    setTimeout(function(){
        element.style.opacity = "1";
    }, 80);
};
function addItemToInventory(element) {
    element.style.display = "none";
    var itemName = element.title;
    inventory.push(itemName);
};
function changeBI(element, link) { //change background image
    element.style.backgroundImage = link;
};
function showOpacityDisplayF(element) {
    element.style.display = "flex";
    setTimeout(function(){
        element.style.opacity = "1";
    }, 80);
};

setTimeout(function() {
	pleasStandByVideo.style.opacity = "0";
}, 5000);







/*///---<<<begin>>>---///*/
pleasStandByVideoF();
function pleasStandByVideoF() {
	setTimeout(function(){
		startMenu();
	}, 4999);
};
/*///---<<<begin new level (startMenu)>>>---///*/
function startMenu() {
	hideOpacityDisplay(pleasStandByVideo);
	showOpacityDisplay(startMenuBody);
	fallout3Theme.play();
	var imageUrl = ["url('Graphics/Background Images/FO3_loading_screen1.jpg')", "url('Graphics/Background Images/FO3_loading_screen2.jpg')", "url('Graphics/Background Images/FO3_loading_screen3.jpg')", "url('../Background Images/FO3_loading_screen4.jpg')", "url('../Background Images/FO3_loading_screen5.jpg')"];
	var imageCount = "1";
	var backgroundImage = window.setInterval(function() {
		startMenuBody.style.backgroundImage=imageUrl[imageCount];
		imageCount++;
		if (imageCount > 4) {
		  imageCount = 0;
		}
	}, 5000);
	document.getElementById("quitGameButton").onclick = function(){
		document.getElementById("fuckOffThen").classList.remove("hidden");
		document.getElementById("closeFuckOffThen").classList.remove("hidden");
	};
	document.getElementById("closeFuckOffThen").onclick = function() {
		document.getElementById("fuckOffThen").className += "hidden";
		document.getElementById("closeFuckOffThen").className += "hidden";
	};
	startGameButton.onclick = function() {
		startGameIntro()
	}
};
/*///---<<<begin new level (startGameIntro)>>>---///*/
function startGameIntro() {
	
}
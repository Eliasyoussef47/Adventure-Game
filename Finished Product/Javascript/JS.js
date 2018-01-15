// JavaScript Document
var dialogueContainer = document.getElementById("dialogueContainer");
var dialogueReadButton = document.getElementById("dialogueReadButton");
var talkerName = document.getElementById("talkerName");
var objectPointingArrowGoBack = document.getElementById("objectPointingArrowGoBack");
var infoBoxTopLeft = document.getElementById("infoBoxTopLeft");
var youWon = document.getElementById("youWon");
var youDied = document.getElementById("youDied");
var inventoryButton = document.getElementById("inventoryButton");
var pipBoy = document.getElementById("pipBoy");
var inventoryContainer = document.getElementById("inventoryContainer");
var pleasStandByVideo = document.getElementById("pleasStandByVideo");
var startMenuBody = document.getElementById("startMenuBody");
var fallout3Theme = document.getElementById("fallout3Theme");
var startGameIntroBody = document.getElementById("startGameIntroBody");
var bosSoldierInFrontOfTheWasteland = document.getElementById("bosSoldierInFrontOfTheWasteland");
var bethesdaGameStudiosTitle = document.getElementById("bethesdaGameStudiosTitle");
var bethesdaGameStudiosTitleSpan = document.getElementById("bethesdaGameStudiosTitleSpan");
var bethesdaGameStudiosTitleSpanElias = document.getElementById("bethesdaGameStudiosTitleSpanElias");
var fallout3AdventureGameContainer = document.getElementById("fallout3AdventureGameContainer");
var fallout3AdventureGameTitleStartGameIntro = document.getElementById("fallout3AdventureGameTitleStartGameIntro");
var warWarNeverChanges = document.getElementById("warWarNeverChanges");
var vaultTecLogoStartGameIntro = document.getElementById("vaultTecLogoStartGameIntro");
var vaultTecLogoTitle = document.getElementById("vaultTecLogoTitle");
var vaultTecLogoSlogan = document.getElementById("vaultTecLogoSlogan");
var storyExplanationBody = document.getElementById("storyExplanationBody");
var storyExplanationReadButton = document.getElementById("storyExplanationReadButton");
var justBornBody = document.getElementById("justBornBody");
var genderChoiceMale = document.getElementById("genderChoiceMale");
var chooseGenderContainer = document.getElementById("chooseGenderContainer");
var chooseNameContainer = document.getElementById("chooseNameContainer");
var genderChoiceFemale = document.getElementById("genderChoiceFemale");
var genderChoiceApache = document.getElementById("genderChoiceApache");
var submitChosenName = document.getElementById("submitChosenName");
var nameInput = document.getElementById("nameInput");
var babyStepsBody = document.getElementById("babyStepsBody");
var afterOneYear = document.getElementById("afterOneYear");
var playpenSelectArea = document.getElementById("playpenSelectArea");
var infoBoxTopLeftDivider = document.getElementById("infoBoxTopLeftDivider");
var infoBoxTopLeftGeneral = document.getElementById("infoBoxTopLeftGeneral");
var infoBoxTopLeftSpecific = document.getElementById("infoBoxTopLeftSpecific");
var objectPointingArrow = document.getElementById("objectPointingArrow");
var vaultBoy = document.getElementById("vaultBoy");
var youDontHaveTheItemContainer = document.getElementById("youDontHaveTheItemContainer");
var youDontHaveTheItemOkButton = document.getElementById("youDontHaveTheItemOkButton");
var happy10thBirthdayBody = document.getElementById("happy10thBirthdayBody");
var afterNineYears = document.getElementById("afterNineYears");
var pipBoy3000 = document.getElementById("pipBoy3000");
var yourDadEscapedBody = document.getElementById("yourDadEscapedBody");
var afterNineYears2 = document.getElementById("afterNineYears2");
var objectPointingArrowYourDadEscapedToBBGun = document.getElementById("objectPointingArrowYourDadEscapedToBBGun");
var objectPointingArrowYourDadEscapedToBaseBallBat = document.getElementById("objectPointingArrowYourDadEscapedToBaseBallBat");
var objectPointingArrowYourDadEscapedOutOfTheRoom = document.getElementById("objectPointingArrowYourDadEscapedOutOfTheRoom");
var objectPointingArrowYourDadEscapedGoBackToSleep = document.getElementById("objectPointingArrowYourDadEscapedGoBackToSleep");
var pickUpItemYourDadEscapedBBGun = document.getElementById("pickUpItemYourDadEscapedBBGun");
var pickUpItemYourDadEscapedBaseBallBat = document.getElementById("pickUpItemYourDadEscapedBaseBallBat");
var escapeTheVaultBody = document.getElementById("escapeTheVaultBody");
var objectPointingArrowEscapeTheVaultToUnderTheOverseerOffice = document.getElementById("objectPointingArrowEscapeTheVaultToUnderTheOverseerOffice");
var escapeTheVaultToUnderTheOverseerOfficeDoorSelectArea = document.getElementById("escapeTheVaultToUnderTheOverseerOfficeDoorSelectArea");
var Radroach = document.getElementById("Radroach");
var vaultExitRoomDoorSwitchSelectArea = document.getElementById("vaultExitRoomDoorSwitchSelectArea");
var vaultDoorControlPanelSwitchSelectArea = document.getElementById("vaultDoorControlPanelSwitchSelectArea");
var objectPointingArrowEscapeTheVaultInVaultExitTunnelToOutside = document.getElementById("objectPointingArrowEscapeTheVaultInVaultExitTunnelToOutside");
var body = document.getElementById("body");
var outOfTheVaultBody = document.getElementById("outOfTheVaultBody");




//inventory code
var inventory = [];
inventoryButton.onclick = function(){
	"use strict";
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
        }
    }
};
//player info
var playerName = "";
var gender = "";
var talkerText = [];//the text that the speaker says
var talkerTextCount = 0;
//dialogue system
var afterFinishedDialogue ;
document.getElementById("dialogueReadButton").onclick = function() {
	"use strict";
    talkerTextCount++;
    if(talkerTextCount >= talkerText.length) {
        hideOpacityDisplay(dialogueContainer);
        hideOpacityDisplay(dialogueReadButton);
        hideOpacityDisplay(talkerName);
        afterFinishedDialogue();
    } else {
        dialogueContainer.innerHTML = talkerText[talkerTextCount];
    }
};
function hideOpacity(element) {
	"use strict";
    element.style.opacity = "0";
}
function hideDisplay(element) {
	"use strict";
    element.style.display = "none";
}
function hideOpacityDisplay(element) {
	"use strict";
    element.style.opacity = "0";
    setTimeout(function(){
        element.style.display = "none";
    }, 800);
}
function showOpacity(element) {
	"use strict";
    element.style.opacity = "1";
}
function showDisplay(element) {
	"use strict";
    element.style.display = "block";
}
function showOpacityDisplay(element) {
	"use strict";
    element.style.display = "block";
    setTimeout(function(){
        element.style.opacity = "1";
    }, 80);
}
function addItemToInventory(element) {
	"use strict";
    element.style.display = "none";
    var itemName = element.title;
    inventory.push(itemName);
}
function changeBI(element, link) { //change background image
	"use strict";
    element.style.backgroundImage = link;
}
function showOpacityDisplayF(element) {
	"use strict";
    element.style.display = "flex";
    setTimeout(function(){
        element.style.opacity = "1";
    }, 80);
}

setTimeout(function() {
	"use strict";
	pleasStandByVideo.style.opacity = "0";
}, 5000);







/*///---<<<begin>>>---///*//*///---<<<begin>>>---///*//*///---<<<begin>>>---///*//*///---<<<begin>>>---///*//*///---<<<begin>>>---///*//*///---<<<begin>>>---///*/
pleasStandByVideoF();
function pleasStandByVideoF() {
	"use strict";
	setTimeout(function(){
		startMenu();
	}, 4999);
}
/*///---<<<begin new level (startMenu)>>>---///*//*///---<<<begin new level (startMenu)>>>---///*//*///---<<<begin new level (startMenu)>>>---///*/
function startMenu() {
	"use strict";
	hideOpacityDisplay(pleasStandByVideo);
	showOpacityDisplay(startMenuBody);
	fallout3Theme.play();
	var imageUrl = ["url('Graphics/Background Images/FO3_loading_screen1.jpg')", "url('Graphics/Background Images/FO3_loading_screen2.jpg')", "url('Graphics/Background Images/FO3_loading_screen3.jpg')", "url('Graphics/Background Images/FO3_loading_screen4.jpg')", "url('Graphics/Background Images/FO3_loading_screen5.jpg')"];
	var imageCount = "1";
	window.setInterval(function() {
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
	document.getElementById("startGameButton").onclick = function() {
		startGameIntro();
		fallout3Theme.pause();
	};
}
/*///---<<<begin new level (startGameIntro)>>>---///*//*///---<<<begin new level (startGameIntro)>>>---///*//*///---<<<begin new level (startGameIntro)>>>---///*/
function startGameIntro() {
	"use strict";
	hideOpacityDisplay(startMenuBody);
	showOpacityDisplayF(startGameIntroBody);
	setTimeout(function(){ bosSoldierInFrontOfTheWasteland.style.opacity = (1); }, 500);
	setTimeout(function(){ bosSoldierInFrontOfTheWasteland.style.opacity = (0); a(); }, 3000);

	function a() {
		setTimeout(function(){ bethesdaGameStudiosTitle.style.opacity = (1); b(); }, 2000);
	}
	function b() {
		setTimeout(function(){ bethesdaGameStudiosTitleSpan.style.textDecoration = "line-through"; c(); }, 1500);
	}
	function c() {
		setTimeout(function(){ bethesdaGameStudiosTitleSpanElias.style.opacity = (1); e(); }, 300);
	}
	function e() {
		setTimeout(function(){ bethesdaGameStudiosTitleSpanElias.style.transition = "0.8s linear"; }, 1000);
		setTimeout(function(){ fallout3AdventureGameContainer.style.opacity = (1); }, 1000);
		setTimeout(function(){ fallout3AdventureGameTitleStartGameIntro.style.opacity = (1); f(); }, 2000);
	}
	function f() {
		setTimeout(function(){
			fallout3AdventureGameContainer.style.opacity = (0);
			bethesdaGameStudiosTitle.style.opacity = (0);
			g();
		}, 2000);
	}
	function g() {
		setTimeout(function(){ warWarNeverChanges.style.opacity = (1); h(); }, 1500);
	}
	function h() {
		setTimeout(function(){ warWarNeverChanges.style.opacity = (0); i(); }, 2000);
	}
	function i() {
		setTimeout(function(){ vaultTecLogoStartGameIntro.style.opacity = (1); }, 1500);
		setTimeout(function(){ vaultTecLogoTitle.style.opacity = (1); }, 2500);
		setTimeout(function(){ vaultTecLogoSlogan.style.opacity = (1); j(); }, 3500);
	}
	function j() {
		setTimeout(function(){
			vaultTecLogoStartGameIntro.style.opacity = (0);
			vaultTecLogoTitle.style.opacity = (0);
			vaultTecLogoSlogan.style.opacity = (0);
			storyExplanation();
		}, 2000);
	}
}

/*///---<<<begin new level (storyExplanation)>>>---///*//*///---<<<begin new level (storyExplanation)>>>---///*//*///---<<<begin new level (storyExplanation)>>>---///*/

function storyExplanation() {
	"use strict";
	hideOpacityDisplay(startGameIntroBody);
	showOpacityDisplayF(storyExplanationBody);
	storyExplanationReadButton.onclick = function() {
		justBorn();
	};
}

/*///---<<<begin new level (justBorn)>>>---///*//*///---<<<begin new level (justBorn)>>>---///*//*///---<<<begin new level (justBorn)>>>---///*/

function justBorn() {
	"use strict";
	hideOpacityDisplay(storyExplanationBody);
	showOpacityDisplayF(justBornBody);
	genderChoiceMale.onclick = function() {
		gender = "boy";
		chooseGenderContainer.style.display = "none";
		chooseNameContainer.style.display = "flex";
	};
	genderChoiceFemale.onclick = function() {
		gender = "girl";
		chooseGenderContainer.style.display = "none";
		chooseNameContainer.style.display = "flex";
	};
	genderChoiceApache.onclick = function() {
		gender = "apache helicopter";
		chooseGenderContainer.style.display = "none";
		chooseNameContainer.style.display = "flex";
	};
	submitChosenName.onclick = function() {
		playerName = nameInput.value;
		babySteps();
	};
}

/*///---<<<begin new level (babySteps)>>>---///*//*///---<<<begin new level (babySteps)>>>---///*//*///---<<<begin new level (babySteps)>>>---///*/ 

function babySteps() {
	"use strict";
	hideOpacityDisplay(pleasStandByVideo);
	hideOpacityDisplay(startMenuBody);
	hideOpacityDisplay(startGameIntroBody);
	hideOpacityDisplay(storyExplanationBody);
	hideOpacityDisplay(justBornBody);
	showOpacityDisplayF(babyStepsBody);
	setTimeout(function(){
		afterOneYear.style.opacity = "1";
	}, 1000);
	setTimeout(function(){
		afterOneYear.style.opacity = "0";
	}, 3000);
	setTimeout(function(){
		infoBoxTopLeft.style.opacity = "1";
		babyStepsBody.style.backgroundImage = "url('Graphics/Background Images/inPlaypen.bmp')";
		afterOneYear.style.display = "none";
		showDisplay(playpenSelectArea);
		showOpacityDisplay(infoBoxTopLeft);
		showOpacityDisplay(infoBoxTopLeftDivider);
	}, 4000);

	playpenSelectArea.onclick = function() {
		inTheMiddleOfTheRoom();
		infoBoxTopLeftGeneral.innerHTML = "Click on an arrow that's pointing at an object or an area to go to it";
		infoBoxTopLeftSpecific.innerHTML = "Click on the arrow that's pointing at the chest";
		objectPointingArrow.style.display = "block";
	};
	objectPointingArrow.onclick = function() {
		lookingAtTheChest();
		infoBoxTopLeftGeneral.innerHTML = "You can click on specific objects to pick them up";
		infoBoxTopLeftSpecific.innerHTML = "Click on the Vault Boy to pick it up";
	};

	function inTheMiddleOfTheRoom() {
		babyStepsBody.style.backgroundImage = "url('Graphics/Background Images/inTheMiddleOfTheRoom.bmp')";
		playpenSelectArea.style.display = "none";
		objectPointingArrow.style.display = "block";
		objectPointingArrow.setAttribute("class", "objectPointingArrowToTheChest pointerCursor");

		setTimeout(function(){
			objectPointingArrow.style.opacity = "1";
		}, 80);
		infoBoxTopLeftDivider.classList.remove("hidden");
	}
	function lookingAtTheChest() {
		babyStepsBody.style.backgroundImage = "url('Graphics/Background Images/lookingAtTheChest.bmp')";
		playpenSelectArea.style.opacity = "0";
		objectPointingArrow.setAttribute("class", "objectPointingArrowOutOfChest pointerCursor");
		vaultBoy.style.display = "block";

		objectPointingArrow.onclick = function() {
			if (inventory.includes("Vault Boy")) {
				inTheMiddleOfTheRoom();
				infoBoxTopLeftGeneral.innerHTML = "Click on an arrow that's pointing at an object or an area to go to it";
				infoBoxTopLeftSpecific.innerHTML = "Click on the arrow to face your father";
				objectPointingArrow.setAttribute("class", "objectPointingArrowAtFather pointerCursor");
				objectPointingArrow.onclick = function() {
					babyStepsBody.style.backgroundImage = "url('Graphics/Background Images/lookingAtFather.bmp')";
					objectPointingArrow.setAttribute("class", "objectPointingArrowGoToFather pointerCursor");
					infoBoxTopLeftSpecific.innerHTML = "Click on the arrow to go to your father";
					objectPointingArrow.onclick = function() {
						this.style.opacity = "0";
						infoBoxTopLeft.style.opacity = "0";
						setTimeout(function() {
							babyStepsBody.style.backgroundImage = "url('Graphics/Background Images/black.jpg')";
							happy10thBirthday();
						}, 1000);
						//NEXT LEVEL
					};
				};
			} else {
				youDontHaveTheItemContainer.style.display = "block";
				youDontHaveTheItemOkButton.onclick = function() {
					youDontHaveTheItemContainer.style.display = "none";
				};
			}
		};


		infoBoxTopLeftDivider.classList.remove("hidden");
		vaultBoy.onclick = function() {
			vaultBoy.setAttribute("class", "hidden");
			inventory.push("Vault Boy");
			infoBoxTopLeftGeneral.innerHTML = "Now you can click on the arrow to go back";
			infoBoxTopLeftSpecific.innerHTML = "";
			infoBoxTopLeftDivider.setAttribute("class", "hidden");
		};

		setTimeout(function(){
			vaultBoy.style.opacity = "1";
		}, 80);
		setTimeout(function(){
			playpenSelectArea.style.display = "none";
		}, 900);
	}
}

/*///---<<<begin new level (happy10thBirthday)>>>---///*//*///---<<<begin new level (happy10thBirthday)>>>---///*//*///---<<<begin new level (happy10thBirthday)>>>---///*/

function happy10thBirthday() {
	"use strict";
	hideOpacityDisplay(pleasStandByVideo);
	hideOpacityDisplay(startMenuBody);
	hideOpacityDisplay(startGameIntroBody);
	hideOpacityDisplay(storyExplanationBody);
	hideOpacityDisplay(justBornBody);
	hideOpacityDisplay(babyStepsBody);
	showOpacityDisplayF(happy10thBirthdayBody);
	inventory = [];
	talkerText = ['Happy birthday ' + playerName + ', you are a ten years old ' + gender +', and in vault 101 when you turn ten you get your very own Pip-Boy 3000.'];
	talkerTextCount = 0;
	setTimeout(function(){
		afterNineYears.style.opacity = "1";
	}, 1000);
	setTimeout(function(){
		afterNineYears.style.opacity = "0";
	}, 3000);
	setTimeout(function(){
		afterNineYears.style.display = "none";
		happy10thBirthdayBody.style.backgroundImage = "url('Graphics/Background Images/getPipboyFromOverseer.png')";
		pipBoy3000.style.opacity = "1";
		dialogueContainer.innerHTML = talkerText[talkerTextCount];
		showOpacityDisplay(dialogueContainer);
		hideOpacityDisplay(infoBoxTopLeftDivider);
		infoBoxTopLeftGeneral.innerHTML = "";
		infoBoxTopLeftSpecific.innerHTML = "Take the Pip-Boy 3000 from the overseer";
		infoBoxTopLeft.style.opacity = "1";
		talkerName.style.opacity = "1";
	}, 4000);
	pipBoy3000.onclick = function() {
		this.style.display = "none";
		dialogueContainer.style.opacity = "0";
		infoBoxTopLeft.style.opacity = "0";
		setTimeout(function() {
			happy10thBirthdayBody.style.backgroundImage = "url('Graphics/Background Images/black.jpg')";
			hideOpacityDisplay(dialogueContainer);
			hideOpacityDisplay(dialogueReadButton);
			hideOpacityDisplay(infoBoxTopLeft);
			hideOpacityDisplay(document.getElementById("inventoryButton"));
			yourDadEscaped();
		}, 1000);
	};
}

/*///---<<<begin new level (yourDadEscaped)>>>---///*//*///---<<<begin new level (yourDadEscaped)>>>---///*//*///---<<<begin new level (yourDadEscaped)>>>---///*/

function yourDadEscaped() {
	//level start
	"use strict";
	hideOpacityDisplay(pleasStandByVideo);
		hideOpacityDisplay(startMenuBody);
		hideOpacityDisplay(startGameIntroBody);
		hideOpacityDisplay(storyExplanationBody);
		hideOpacityDisplay(justBornBody);
		hideOpacityDisplay(babyStepsBody);
		hideOpacityDisplay(happy10thBirthdayBody);
		showOpacityDisplay(yourDadEscapedBody);
	setTimeout(function(){
		showOpacityDisplayF(afterNineYears2);
	}, 1000);
	setTimeout(function(){
		hideOpacityDisplay(afterNineYears2);
	}, 3000);
	setTimeout(function(){
		//dialogueWithAmata function	
		changeBI(yourDadEscapedBody, "url('Graphics/Background Images/dialogueWithAmata.png')");
		talkerTextCount = 0;
		talkerText = [
			"Wake up " + playerName, 
			", Your dad has escaped the vault", 
			"Quick you've got to escape too before the guards get you", 
			"Take whatever you need and go"
		];
		document.getElementById("dialogueContainer").innerHTML = talkerText[talkerTextCount];
		showOpacityDisplay(document.getElementById("dialogueContainer"));
		showOpacityDisplay(dialogueReadButton);
		showOpacityDisplay(talkerName);
		talkerName.innerHTML = "Amata";
		showOpacityDisplay(dialogueReadButton);
		showOpacityDisplay(document.getElementById("inventoryButton"));
		afterFinishedDialogue = finishedDialogueWithAmata;
	}, 4000);
	objectPointingArrowYourDadEscapedToBBGun.onclick = function() {lookingAtBBGun();};
	objectPointingArrowYourDadEscapedToBaseBallBat.onclick = function() {lookingAtBaseBallBat();};
	objectPointingArrowYourDadEscapedOutOfTheRoom.onclick = function() {
		hideOpacityDisplay(this);
		hideOpacity(document.getElementById("inventoryButton"));
		escapeTheVault();
	};
}

function finishedDialogueWithAmata() {
	"use strict";
	changeBI(yourDadEscapedBody, "url(finishedDialogueWithAmata.png)");
	showOpacityDisplay(objectPointingArrowYourDadEscapedToBBGun);
	showOpacityDisplay(objectPointingArrowYourDadEscapedToBaseBallBat);
	showOpacityDisplay(objectPointingArrowYourDadEscapedGoBackToSleep);
	hideOpacityDisplay(objectPointingArrowGoBack);
	hideOpacityDisplay(pickUpItemYourDadEscapedBBGun);
	hideOpacityDisplay(pickUpItemYourDadEscapedBaseBallBat);
	objectPointingArrowYourDadEscapedGoBackToSleep.onmouseover = function(){
		showDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "Go back to sleep";
	};
	objectPointingArrowYourDadEscapedGoBackToSleep.onmouseout = function(){
		hideDisplay(infoBoxTopLeft);
	};
	objectPointingArrowYourDadEscapedOutOfTheRoom.onmouseover = function(){
		showDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "Go to the next room";
	};
	objectPointingArrowYourDadEscapedOutOfTheRoom.onmouseout = function(){
		hideDisplay(infoBoxTopLeft);
	};
	if (inventory.includes("BB Gun")) {
		hideDisplay(objectPointingArrowYourDadEscapedToBBGun);
	}
	if (inventory.includes("Baseball bat")) {
		hideDisplay(objectPointingArrowYourDadEscapedToBaseBallBat);
	}
	if (inventory.includes("BB Gun") && inventory.includes("Baseball bat")) {
		showOpacityDisplay(objectPointingArrowYourDadEscapedOutOfTheRoom);
	}
	objectPointingArrowYourDadEscapedGoBackToSleep.onclick = function() {
		hideOpacityDisplay(this);
		hideOpacityDisplay(objectPointingArrowYourDadEscapedToBBGun);
		hideOpacityDisplay(objectPointingArrowYourDadEscapedToBaseBallBat);
		changeBI(yourDadEscapedBody, "url('Graphics/Background Images/black.jpg')");
		setTimeout(function(){
			infoBoxTopLeftSpecific.innerHTML = "The guards found you and killed you";
			showOpacityDisplay(infoBoxTopLeft);
		}, 900);
		showOpacityDisplay(youDied);
		hideOpacityDisplay(document.getElementById("inventoryButton"));
	};
}
function lookingAtBBGun() {
	"use strict";
	changeBI(yourDadEscapedBody, "url(lookingAtBBGun.png)");
	showOpacityDisplay(pickUpItemYourDadEscapedBBGun);
	showOpacityDisplay(objectPointingArrowGoBack);
	hideOpacityDisplay(objectPointingArrowYourDadEscapedToBBGun);
	hideOpacityDisplay(objectPointingArrowYourDadEscapedToBaseBallBat);
	hideOpacityDisplay(objectPointingArrowYourDadEscapedGoBackToSleep);
	pickUpItemYourDadEscapedBBGun.onclick = function() {addItemToInventory(this);};
	objectPointingArrowGoBack.onclick = function() {finishedDialogueWithAmata();};
	setTimeout(function(){
		showOpacityDisplay(objectPointingArrowGoBack);
//showOpacityDisplay(pickUpItemYourDadEscapedBBGun);
//this is a bug fix for for when the user clicks too fast on the arrow that he skips the animation and because of that it doesn't show the elements
	}, 1000);
}
function lookingAtBaseBallBat() {
	"use strict";
	changeBI(yourDadEscapedBody, "url(lookingAtBaseBallBat.png)");
	showOpacityDisplay(pickUpItemYourDadEscapedBaseBallBat);
	showOpacityDisplay(objectPointingArrowGoBack);
	hideOpacityDisplay(objectPointingArrowYourDadEscapedToBBGun);
	hideOpacityDisplay(objectPointingArrowYourDadEscapedToBaseBallBat);
	hideOpacityDisplay(objectPointingArrowYourDadEscapedGoBackToSleep);
	pickUpItemYourDadEscapedBaseBallBat.onclick = function() {addItemToInventory(this);};
	objectPointingArrowGoBack.onclick = function() {finishedDialogueWithAmata();};
	setTimeout(function(){
		showOpacityDisplay(objectPointingArrowGoBack);
//showOpacityDisplay(pickUpItemYourDadEscapedBaseBallBat);
//this is a bug fix for for when the user clicks too fast on the arrow that he skips the animation and because of that it doesn't show the elements
	}, 1000);
}
/*function skipYourDadEscapedBody() {
	"use strict";
	hideOpacityDisplay(document.getElementById("dialogueContainer"));
	hideOpacityDisplay(document.getElementById("dialogueReadButton"));
	hideOpacityDisplay(document.getElementById("talkerName"));
	inventory.push("BB Gun", "Baseball bat");
	changeBI(yourDadEscapedBody, "url(finishedDialogueWithAmata.png)");
	hideOpacityDisplay(objectPointingArrowGoBack);
	hideOpacityDisplay(pickUpItemYourDadEscapedBBGun);
	hideOpacityDisplay(pickUpItemYourDadEscapedBaseBallBat);
	if (inventory.includes("BB Gun")) {
		hideDisplay(objectPointingArrowYourDadEscapedToBBGun);
	}
	if (inventory.includes("Baseball bat")) {
		hideDisplay(objectPointingArrowYourDadEscapedToBaseBallBat);
	}
	if (inventory.includes("BB Gun") && inventory.includes("Baseball bat")) {
		showOpacityDisplay(objectPointingArrowYourDadEscapedOutOfTheRoom);
	}
}/*

/*///---<<<begin new level (escapeTheVault)>>>---///*//*///---<<<begin new level (escapeTheVault)>>>---///*//*///---<<<begin new level (escapeTheVault)>>>---///*/
function escapeTheVault() {
	//level start
	"use strict";
	hideOpacityDisplay(yourDadEscapedBody);
	showOpacityDisplay(escapeTheVaultBody);
	talkerTextCount = 0;
	setTimeout(function(){
		changeBI(escapeTheVaultBody, "url(inOverseerOffice.png)");
		showOpacity(document.getElementById("inventoryButton"));
		showOpacityDisplay(objectPointingArrowEscapeTheVaultToUnderTheOverseerOffice);
		objectPointingArrowEscapeTheVaultToUnderTheOverseerOffice.onclick = function() {
			underTheOverseerOffice();
		};
	}, 1000);

	function underTheOverseerOffice() {
		hideOpacityDisplay(objectPointingArrowEscapeTheVaultToUnderTheOverseerOffice);
		changeBI(escapeTheVaultBody, "url(underTheOverseerOffice.png)");
		showDisplay(escapeTheVaultToUnderTheOverseerOfficeDoorSelectArea);
		escapeTheVaultToUnderTheOverseerOfficeDoorSelectArea.onclick = function() {
			vaultExitRoom();
		};
	}
	function vaultExitRoom() {
		hideOpacityDisplay(escapeTheVaultToUnderTheOverseerOfficeDoorSelectArea);
		changeBI(escapeTheVaultBody, "url(vaultExitRoom.png)");
		showOpacityDisplay(Radroach);
		showOpacityDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "Kill the radroach to continue";
		Radroach.onclick = function() {
			hideDisplay(this);
			infoBoxTopLeftSpecific.innerHTML = "Click on the door switch";
			showDisplay(vaultExitRoomDoorSwitchSelectArea);
			vaultExitRoomDoorSwitchSelectArea.onclick = function() {
				vaultDoorInFrontOfControlPanel();
			};
		};
	}
	function vaultDoorInFrontOfControlPanel() {
		hideOpacityDisplay(vaultExitRoomDoorSwitchSelectArea);
		hideOpacityDisplay(infoBoxTopLeft);
		changeBI(escapeTheVaultBody, "url(vaultExitControlPanel.png)");
		showDisplay(vaultDoorControlPanelSwitchSelectArea);
		vaultDoorControlPanelSwitchSelectArea.onclick = function() {
			vaultExitTunnel();
		};
	}
	function vaultExitTunnel() {
		hideOpacityDisplay(vaultDoorControlPanelSwitchSelectArea);
		changeBI(escapeTheVaultBody, "url(vaultExitTunnel.png)");
		showOpacityDisplay(objectPointingArrowEscapeTheVaultInVaultExitTunnelToOutside);
		objectPointingArrowEscapeTheVaultInVaultExitTunnelToOutside.onclick = function() {
			hideOpacityDisplay(this);
			hideOpacity(inventoryButton);
			changeBI(body, "url(white.jpg)");
			outOfTheVault();
		};
	}
}

/*///---<<<begin new level (outOfTheVault)>>>---///*//*///---<<<begin new level (outOfTheVault)>>>---///*//*///---<<<begin new level (outOfTheVault)>>>---///*/
function outOfTheVault() {
	"use strict";
	hideOpacityDisplay(escapeTheVaultBody);
	showOpacityDisplay(outOfTheVaultBody);
	changeBI(outOfTheVaultBody, "url(white.jpg)");
	showOpacity(infoBoxTopLeft);
	setTimeout(function(){
		changeBI(outOfTheVaultBody, "url(outOfTheVault.png)");
		showOpacityDisplay(objectPointingArrowOutOfTheVaultBodyToVault112);
		showOpacityDisplay(objectPointingArrowOutOfTheVaultBodyToDangerousWasteland);
		showOpacity(inventoryButton);
		changeBI(body, "url('Graphics/Background Images/black.jpg')");
	}, 2000);
	objectPointingArrowOutOfTheVaultBodyToVault112.onmouseover = function(){
		showDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "Go to vault 112";
	};
	objectPointingArrowOutOfTheVaultBodyToVault112.onmouseout = function(){
		hideDisplay(infoBoxTopLeft);
	};
	objectPointingArrowOutOfTheVaultBodyToDangerousWasteland.onmouseover = function(){
		showDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "Explore the dangerous waste land";
	};
	objectPointingArrowOutOfTheVaultBodyToDangerousWasteland.onmouseout = function(){
		hideDisplay(infoBoxTopLeft);
	};
	objectPointingArrowOutOfTheVaultBodyToVault112.onclick = function() {
		hideOpacityDisplay(this);
		hideOpacity(inventoryButton);
		youFoundYourDadVault112();
	};
	objectPointingArrowOutOfTheVaultBodyToDangerousWasteland.onclick = function() {
		hideOpacityDisplay(this);
		hideOpacity(inventoryButton);
		meetDeathClawYouFuckedUp();
	};
}

/*///---<<<begin new level (youFoundYourDadVault112)>>>---///*//*///---<<<begin new level (youFoundYourDadVault112)>>>---///*//*///---<<<begin new level (youFoundYourDadVault112)>>>---///*/
function youFoundYourDadVault112() {
	"use strict";
	changeBI(body, "url('Graphics/Background Images/black.jpg')");
	hideOpacityDisplay(outOfTheVaultBody);
	showOpacityDisplayF(youFoundYourDadVault112Body);
	setTimeout(function(){
		changeBI(youFoundYourDadVault112Body, "url(youFoundYourDadVault112.png)");
		showOpacity(inventoryButton);
		showOpacityDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "You found your dad";
	}, 1000);
	setTimeout(function(){
		changeBI(youFoundYourDadVault112Body, "url('Graphics/Background Images/black.jpg')");
		hideOpacityDisplay(infoBoxTopLeft);
		showOpacityDisplay(youWon);
		hideOpacityDisplay(inventoryButton);
	}, 3800);
}

/*///---<<<begin new level (meetDeathClawYouFuckedUp)>>>---///*//*///---<<<begin new level (meetDeathClawYouFuckedUp)>>>---///*//*///---<<<begin new level (meetDeathClawYouFuckedUp)>>>---///*/
function meetDeathClawYouFuckedUp() {
	"use strict";
	changeBI(body, "url('Graphics/Background Images/black.jpg')");
	hideOpacityDisplay(outOfTheVaultBody);
	showOpacityDisplayF(meetDeathClawYouFuckedUpBody);
	setTimeout(function(){
		changeBI(meetDeathClawYouFuckedUpBody, "url(meetDeathClawYouFuckedUp.png)");
		showOpacity(inventoryButton);
		showOpacityDisplay(infoBoxTopLeft);
		infoBoxTopLeftSpecific.innerHTML = "You Fucked Up. You found a death claw that will kill you ";
	}, 1000);
	setTimeout(function(){
		changeBI(meetDeathClawYouFuckedUpBody, "url('Graphics/Background Images/black.jpg')");
		hideOpacityDisplay(infoBoxTopLeft);
		showOpacityDisplay(youDied);
		hideOpacityDisplay(inventoryButton);
	}, 4000);
}

(function(window, document, undefined) {
	var mainMenu = document.querySelector("nav.level-1"); //object
	var mainMenuArray = document.querySelectorAll(".itemLevel1"); //menu array
	var submenuArray = document.querySelectorAll("nav.level-2"); //array of objects
	var menuActiveItem = mainMenuArray[0]; //html object, menu li item, with default #1
	var submenuActive;

function handleMenuClicks(e) {
	//save this menu 1 item to var for styling
	menuActiveItem = e.target;
	//deactivate menu items and set clicked menu item as active
	deactivateItems("1");
	deactivateItems("2");
	menuActiveItem.classList.add("active");
	//find menu2 nav block with class built from menu 1 id
	let submenu = document.querySelector(".level-2.parent-" + menuActiveItem.id);

// REFACTOR ====================================================================
	//hiding all submenus and showing only one needed
	hideAllSubmenus();
	submenu.classList.add("show");
// REFACTOR ====================================================================

	//set active style to item #1 as default
	submenuActive = submenu.children[0];
	//save active submenu item into var for styling
	submenuActive.classList.add("active");
	//trigger border styling
	menuStyling("1");
	//show default article for selected menu
	showArticle(menuActiveItem.id, menuActiveItem.id + "-1");
}


function handleSubmenuClicks(e) {
	submenuActive = e.target;

	//reset active item
	deactivateItems("2");
	//set new item as active
	if (menuActiveItem.id <= submenuActive) {
		submenuActive.classList.add("active");
	} else {
		submenuActive.classList.add("active shadow");
	}
	//get submenu level from event and prepare string
	let x = e.target.id;
	x.split("-");
	//trigger border styling
	menuStyling(x[2]);
	//show article for selected submenu
	showArticle(menuActiveItem.id, submenuActive.id);
}


function menuStyling(submenuLevel){ //where x passed submenu level

	//clear old styling
	mainMenuArray.forEach(item => item.classList.remove("bordered"));
	//check condition a>b or a<b
	if (menuActiveItem.id > submenuLevel) {
		//add shadow style to submenu active item to overwrite border
		submenuActive.classList.add("shadow")
		for (let i = +menuActiveItem.id; i > submenuLevel ; i--) {
			mainMenuArray[i-1].classList.add("bordered");
		}
	} else if (menuActiveItem.id < submenuLevel) {
		for (let i = +menuActiveItem.id + 1; i <= submenuLevel; i++) {
			mainMenuArray[i-1].classList.add("bordered");
		}
	} else {
		console.log("MenuStyling(): Items are equal, idle...");
	}
}

function showArticle(menu, submenu) {
	let artGroup = document.querySelector("#Article-" + menu);
	let artSingle = document.querySelector("#Article-" + submenu);
	let allArticles = document.querySelectorAll(".article");

	//managing hide class
	allArticles.forEach( item => item.classList.add("hide"));
	artGroup.classList.remove("hide");
	artSingle.classList.remove("hide");
}

function deactivateItems(level) {
	let allMenuItems = document.querySelectorAll(".itemLevel" + level); //recieving 1 or 2
	allMenuItems.forEach( item => item.classList.remove("active", "shadow"));
}
function hideAllSubmenus() {
	let allSubmenus = document.querySelectorAll(".level-2");
	allSubmenus.forEach( item => item.classList.remove("show"));
}


//later
//combine loading with add event listener for 1 and 2 levels with set param #1

//Add listeners to menu blocks
mainMenu.addEventListener("click", handleMenuClicks);
	console.log("AddListener(): Menu listeners are added...");

submenuArray.forEach( item => item.addEventListener("click", handleSubmenuClicks));
	console.log("AddListener(): Submenu listeners are added...");

})(window, document);

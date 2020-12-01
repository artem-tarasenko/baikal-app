(function(window, document, undefined) {
   



var mainMenu = document.querySelector("nav.level-1"); //object
var mainMenuArray = document.querySelectorAll(".itemLevel1"); //menu array
var submenuArray = document.querySelectorAll("nav.level-2"); //array of objects
var menuActiveItem = mainMenuArray[0]; //html object, menu li item, with default #1
var submenuActive;


function handleMenuClicks(e) {
	if (e.target.classList.contains("itemLevel1")) {
		
		//save this menu 1 item to var for styling
		menuActiveItem = e.target;
		
		//deactivate menu items and set clicked menu item as active
		deactivateItems("1")
		menuActiveItem.classList.add("active");

		//find menu2 nav block with class built from menu 1 id
		let submenu = document.querySelector(".level-2.parent-" + menuActiveItem.id);
		
		//hiding all submenus and showing only one needed
		hideAllSubmenus();
		submenu.classList.add("show");

		//set active style to item #1 as default
		submenuActive = submenu.children[0];

		//save active submenu item into var for styling
		submenuActive.classList.add("active");
		
		console.log("handleMenuClicks(): " + menuActiveItem.id);
		//trigger border styling
	//  !!! for some reason cannot set higher var submenuActive so using def 1 instead
		menuStyling("1");
	}
}



function handleSubmenuClicks(e) {
	
	//reset active item
	deactivateItems("2");

	//set new item as active
	e.target.classList.add("active");
	
	//get submenu level from event and prepare string
	let x = e.target.id;
	x.split("-");
	
	console.log("handleSubmenuClicks(): " + menuActiveItem.id);

	//trigger border styling
	menuStyling(x[2]);
}

function menuStyling(submenuLevel){ //where x passed submenu level

	//clear old styling
	mainMenuArray.forEach(item => item.classList.remove("bordered"));

	//check condition a>b or a<b
	if (menuActiveItem.id > submenuLevel) {
		console.log("MenuStyling(): styling menu UP...");

		for (let i = +menuActiveItem.id; i > submenuLevel ; i--) {
			mainMenuArray[i-1].classList.add("bordered");
		}

	} else if (menuActiveItem.id < submenuLevel) {
		console.log("MenuStyling(): styling menu DOWN...");

		for (let i = +menuActiveItem.id + 1; i <= submenuLevel; i++) {
			mainMenuArray[i-1].classList.add("bordered");
		}

	} else {
		console.log("MenuStyling(): Items are equal, idle...");
	}
	//collect all menu items into array
	//select items in the array based on the condition
	// a<=b = a++ 
	//a>b = ++a

}


function deactivateItems(level) {
	let allMenuItems = document.querySelectorAll(".itemLevel" + level); //recieving 1 or 2
	allMenuItems.forEach( item => item.classList.remove("active"));
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






function logging() {
	// console.log("#######################");
	// console.log("menu active id / submenu active object");
	// console.log(menuActiveId);
	// console.log(submenuActive);
	// console.log("#######################");
}

console.log(mainMenuArray);


})(window, document);
var menuActiveId;
var sumbenuActive;



function hideAllSubmenus() {
	let allSubmenus = document.querySelectorAll(".level-2");
	allSubmenus.forEach( item => item.classList.remove("show"));
}

function addListenerL1() {
	let menuArray = document.querySelector("nav.level-1");
	menuArray.addEventListener("click", function(event) {
		if (event.target.classList.contains("itemLevel1")) {
			menuActiveId = event.target.id;
			//set this menu1 item as active
			//save this menu 1 item to var for styling
			//find menu2 array with class built from menu 1 id
			//add show class to all items in array
			//activate 1st items article
			//save 1st m2 item into var for styling
			//trigger add event listener l2
			submenuActive = document.querySelector("nav.parent-" + event.target.id + ".level-2");
			logging();
		}
	})
}

function addListenerL2() {

}

addListenerL1()
//later
//combine loading with add event listener for 1 and 2 levels with set param #1


function logging() {
	console.log("#######################");
	console.log("menu active id / submenu active object");
	console.log(menuActiveId);
	console.log(submenuActive);
	console.log("#######################");
}

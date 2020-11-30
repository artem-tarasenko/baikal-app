var menu_level1_id = 1;
var menu1active = 1;
var menu2active = 1;
var menu1element;

function navLevel1() {
  let menu1 = event.srcElement.id;
  if (menu1 != window.menu_level1_id) {
    window.menu_level1_id = menu1;

	//collecting active menu1 item for styling
	menu1active = menu1;
	menu1element = event.srcElement;


    //adding active style to parent (menu 1)
    let menuItemsL1 = document.getElementsByClassName("itemLevel1");
    for (let i = 0; i < menuItemsL1.length; i++) {
      menuItemsL1[i].classList.remove("active");
    }
    document.getElementById(menu1).classList.add("active");

    //showing menu 2 blocks
    let allsubmenus = document.getElementsByClassName("menulevel2");
    for (let i = 0; i < allsubmenus.length; i++) {
      allsubmenus[i].classList.add("hide"); //add hidden class to all containers
    }
    document.getElementById("submenu" + menu1).classList.remove("hide");

    textNavi(menu1, menu1 + "-1");

  } else {
	menu1active = menu1;
	menu1element = event.srcElement;
    console.log("do nothing...");
  }
}




function navLevel2() {
  let ArtId = event.srcElement.id;
  let MenuId = ArtId.split("-");

  //collecting active menu2 item for styling
  menu2active = MenuId[1];
  //calling a function to style menu
  stylingMenu();

  MenuId = MenuId[0];
  // console.log("func2 completed with ART-ID var: " + ArtId + " and MENU-ID: " + MenuId);

  textNavi(MenuId, ArtId);
}




function textNavi(MenuId, ArtId) {
  //setting active style to clicked submenu
  let itemsLevel2 = document.getElementsByClassName("menuItemL2");
  for (let i = 0; i < itemsLevel2.length; i++) {
    itemsLevel2[i].classList.remove("active");
  }
  document.getElementById(ArtId).classList.add("active");

  // get all containers to a massive to add hidden style to all of them before showing only one
  let alltexts = document.getElementsByClassName("container");
  for (let i = 0; i < alltexts.length; i++) {
    alltexts[i].classList.add("hide"); //add hidden class to all containers
    alltexts[i].classList.remove("active");
  }
  let Art = "Article" + ArtId; //build string
  document.getElementById("Article-" + MenuId).classList.remove("hide"); //show selected article by deleting hidden class
  document.getElementById("Article" + ArtId).classList.remove("hide");
  document.getElementById("Article-" + MenuId).classList.add("active"); //show selected article by deleting hidden class
  document.getElementById("Article" + ArtId).classList.add("active");

  //resetting level 2 menu
  // menu2active = 1;
  //calling a function to style menu
	stylingMenu();
}



//show color border to active menu
function stylingMenu() {
	let menu1Array = document.querySelectorAll(".itemLevel1");
	console.log("menu1active var: " + menu1active);
	console.log("menu2active var: " + menu2active);
	clearBorders();

	if (menu1active < menu2active) {
		console.log("StylingMenu: Adding borders down the menu");
		for (var i = menu1active; i <= menu2active; i++){
			console.log(i);
			menu1Array[i].classList.add("bordered");
		}
	} else if (menu1active > menu2active) {
		console.log("StylingMenu: Adding borders up the menu");
	} else {
		console.log("StylingMenu: no border required");
	}

}

function clearBorders() {
	let menu1Array = document.querySelectorAll(".itemLevel1");
	menu1Array.forEach(item => item.classList.remove("bordered"));
	console.log(menu1Array);
}

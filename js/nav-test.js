var menu_level1_id = 1;

function navLevel1() {
  var menu1 = event.srcElement.id;
  if (menu1 != window.menu_level1_id) {
    window.menu_level1_id = menu1;

    //adding active style to parent (menu 1)
    var menuItemsL1 = document.getElementsByClassName("itemLevel1");
    for (let i = 0; i < menuItemsL1.length; i++) {
      menuItemsL1[i].classList.remove("active");
    }
    document.getElementById(menu1).classList.add("active");

    //showing menu 2 blocks
    var allsubmenus = document.getElementsByClassName("menulevel2");
    for (let i = 0; i < allsubmenus.length; i++) {
      allsubmenus[i].classList.add("hide"); //add hidden class to all containers
    }
    document.getElementById("submenu" + menu1).classList.remove("hide");

    textNavi(menu1, menu1 + "-1");

  } else {
    console.log("do nothing...");
  }
}


function navLevel2() {
  var ArtId = event.srcElement.id;
  MenuId = ArtId.split("-");
  var MenuId = MenuId[0];
  console.log("func2 completed with ART-ID var: " + ArtId + "and MENU-ID: " + MenuId);

  textNavi(MenuId, ArtId);
}


function textNavi(MenuId, ArtId) {
  //setting active style to clicked submenu
  var itemsLevel2 = document.getElementsByClassName("menuItemL2");
  for (let i = 0; i < itemsLevel2.length; i++) {
    itemsLevel2[i].classList.remove("active");
  }
  document.getElementById(ArtId).classList.add("active");

  // get all containers to a massive to add hidden style to all of them before showing only one
  var alltexts = document.getElementsByClassName("container");
  for (let i = 0; i < alltexts.length; i++) {
    alltexts[i].classList.add("hide"); //add hidden class to all containers
    alltexts[i].classList.remove("active");
  }
  var Art = "Article" + ArtId; //build string
  document.getElementById("Article-" + MenuId).classList.remove("hide"); //show selected article by deleting hidden class
  document.getElementById("Article" + ArtId).classList.remove("hide");
  document.getElementById("Article-" + MenuId).classList.add("active"); //show selected article by deleting hidden class
  document.getElementById("Article" + ArtId).classList.add("active");
}

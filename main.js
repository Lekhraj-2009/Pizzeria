var menu_list_array = ["Margherita (Regular, Double Cheese)", "Veg Extravaganza", "Mexican Green Wave", "Cheese N Corn", "Pepperoni Pizza", "Paneer Pizza", "Veggie Paradise", "Indi Tandoori Paneer"];

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_list_array.sort();
    for(var i = 0; i < menu_list_array.length; i++){
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    item = document.getElementById("add_item").value;
    htmldata;
    menu_list_array.sort();
    htmldata = "<section class = 'cards'>";
    for(var i = 0; i < menu_list_array.length; i++){
        htmldata = htmldata + '<div class = "card">' + '<img id="pizza_logo" src="pizza.png">' + menu_list_array[i] + "</div>";
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;		
}

function add_top(){
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

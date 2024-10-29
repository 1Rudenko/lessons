let header_icon = document.querySelector(`.header__icon`);
let header_menu = document.querySelector(`.header__menu`);
let menu_item_arr = document.querySelectorAll(`.menu__item`);

function toggle_active () {
	header_icon.classList.toggle("active");
	header_menu.classList.toggle("active");
};

header_icon.onclick = toggle_active;

menu_item_arr.forEach((menu_item)=>{
	menu_item.onclick = toggle_active;
});

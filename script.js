var hiddenMenu = true;
console.log(hiddenMenu);
function showMenu(){
    if(hiddenMenu == true){
        document.getElementById('mobileNavItemsListID').style.display = 'block';
        hiddenMenu = false;
        console.log(hiddenMenu);
    }else{
        console.log(hiddenMenu);
        hideMenu();
    }
}

function hideMenu(){
    document.getElementById('mobileNavItemsListID').style.display = 'none';
    hiddenMenu = true;
}
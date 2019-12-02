(() => {

    document.querySelector("#hamMenu").onclick = function() {showMenu()};

    let menu = document.querySelector(".menu");

    function showMenu(){ //this is how the hamburger menu shows up
        menu.classList.toggle("show");
    }

})();
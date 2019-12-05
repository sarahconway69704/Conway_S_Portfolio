(() => {


    const activate = document.getElementById("gifProject");
    const popOver = document.querySelector('.popover');


    document.querySelector("#hamMenu").onclick = function() {showMenu()};

    let menu = document.querySelector(".menu");

    function showMenu(){ //this is how the hamburger menu shows up
        menu.classList.toggle("show");
    }

    function buildPopover(tbl_work, el) {
        popOver.querySelector(".workImage").src = `images/${tbl_work.Image}`;
          popOver.querySelector(".Title").textContent = `Title: ${tbl_work.Title}`;
          popOver.querySelector(".Description").textContent = `Description: ${tbl_work.Description}`;
          popOver.querySelector(".madeWith").textContent = `Made with: ${tbl_work.Madewith}`;

          popOver.classList.add('show-popover');
       
        el.appendChild(popOver);
    }

    function fetchData() {
        let targetEl = this, 
          url = `/portfolioData/${this.dataset.target}`;
      
            fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              buildPopover(data, targetEl);
            })
            .catch((err) => console.log(err));
      }



      activate.addEventListener("click", fetchData);

})();
(() => {

  console.log('fired');
  
    const melly = document.querySelector('.showit');
    const popOver = document.querySelector('.popover');
    const form = document.querySelector('form'), submit = form.querySelector('.submit-button');
    const hello = document.getElementById("#yay");

    function handleMail(event) {
        event.preventDefault();

        let formdata = new FormData(form),
            maildata = {};

        for (let [key, value] of formdata.entries()) {
            maildata[key] = value;
        }

        let url = `/mail`;

      
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },

            body: JSON.stringify(maildata)
        })
            .then(res => res.json())
            .then(data => {
                // remove this when testing is done and everything is working
                console.log(data);

                if (data.response.includes("OK")) {
                    
                    form.reset();
                    thanks();
                    //alert("email was sent!"); 
                }
            }) 
            .catch((err) => console.log(err));

        console.log('tried sending mail');
    }

    function thanks(){
        document.getElementById('yay').style.display = 'block';
    }
  


    document.querySelector("#hamMenu").onclick = function() {showMenu()};

    let menu = document.querySelector(".menu");

    function showMenu(){ 
        menu.classList.toggle("show");
    }



    function buildPopover(tbl_work, el) {
          popOver.querySelector(".workImage").src = `images/${tbl_work.Image}`;
          popOver.querySelector(".title").textContent = tbl_work.Title;
          popOver.querySelector(".description").textContent = tbl_work.Description;
          popOver.querySelector(".madeWith").textContent = `Made with: ${tbl_work.Madewith}`;
          popOver.querySelector(".link").textContent = tbl_work.links;

          popOver.classList.add('show-popover');
  
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
      

     
      document.querySelectorAll('.showit').forEach(item => {
        item.addEventListener("click", fetchData)});
        
      form.addEventListener('submit', handleMail);
     
     popOver.querySelector('.close').addEventListener('click', function() {
       popOver.classList.remove('show-popover');
  });

    document.querySelector('.sure').addEventListener('click', function() {
        document.getElementById('yay').style.display = 'none';
    });
    
    

   
    
      
})(); 
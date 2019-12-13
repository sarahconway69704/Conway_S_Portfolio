(() => {

  console.log('fired');
  
    const melly = document.querySelector('.showit');
    const popOver = document.querySelector('.popover');
    const form = document.querySelector('form'), submit = form.querySelector('.submit-button');
    const hello = document.getElementById("#yay");


    function parseUserData(person) { //person is the database result
        let targetDiv = document.querySelector('.lb-content'),
            targetImg = popOver.querySelector('img');

        let bioContent = `
            <p>${person.Title}</p>
            <p>${person.Description}</p> 
            <p>${person.Madewith}</p> 
            <p>${person.links}</p> 
        `;

        console.log(bioContent);

        targetDiv.innerHTML = bioContent;
        targetImg.src = person.imgsrc;

        popOver.classList.add('show-popover');
    }

    function getUserData(event) {
        event.preventDefault(); //kill the default tag behaviour (don't navigate anywhere)
        //debugger;
        //find the image closest to the anchor tag and get its src property
        // let imgSrc = this.previousElementSibling.getAttribute('src');

        let url = `/users/${this.getAttribute('href')}` //this will add a 1, 2, or 3 to our url

        fetch(url) //go get the data
            .then(res => res.json()) //parse the json results into a plain object that js can read
            .then(data => {
                console.log("my database result is: ", data)

                //data[0].imgsrc = imgSrc;
                parseUserData(data[0]); //take this and put it in the parseUserData function
            })
            .catch((err) => {
                console.log(err)
            });
    }

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



    

     
      document.querySelectorAll('.showit').forEach(item => {
        item.addEventListener("click", getUserData)});
        
      form.addEventListener('submit', handleMail);
     
     popOver.querySelector('.close').addEventListener('click', function() {
       popOver.classList.remove('show-popover');
  });

    document.querySelector('.sure').addEventListener('click', function() {
        document.getElementById('yay').style.display = 'none';
    });
    
    

   
    
      
})(); 
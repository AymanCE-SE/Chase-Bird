let start = document.getElementById("start");
let position = 0; // first position
let direction = 1; // front and back direction





start.addEventListener('click', () => {

        document.body.style.cursor= 'url(images/sniper2.png),auto' ;
        
        // move to game background
        document.body.style.backgroundImage = "url(images/bg.png)";
        // removing the button after click
        start.remove();

        //creating the bird image 
        let image = document.createElement("img");
        // image attributes
        image.src = "images/bird2.gif";
        image.id = "bird"
        image.style.position= "relative"
        image.style.width = "12%";
        image.style.height = "25%";
        //adding the bird gif to the document body
        document.body.appendChild(image);

        //display the score paragraph
        let score = document.querySelector("#score");
        score.style.display = "block";
        
        //score number selecting
        let acheive =  document.querySelector("#acheive") ;

        setInterval(function randomMove() {
            // Generate random x and y positions within the window size
            let randomX = Math.floor(Math.random() * (window.innerWidth - 200)); // window.innerWidth - width of the bird
            let randomY = Math.floor(Math.random() * (window.innerHeight - 200)); // window.innerHeight - height of the bird

            // Apply random position to the bird
            bird.style.left = randomX + "px";
            bird.style.top = randomY + "px";
        }, 1000);

        image.onclick = ()=>{

            let currentValue = parseInt(acheive.textContent);
            acheive.innerHTML = currentValue + 100;

            // Hide the image after 1 second
            setTimeout(() => {
                image.style.display = "none";
                // Show the image again after another second
                setTimeout(() => {
                    image.style.display = "block";
                }, 1000);
            });
        }
    
    
});



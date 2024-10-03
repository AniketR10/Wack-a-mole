const board = document.getElementById('grid');

const makeGrid = [
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
    {
         img: '/wack-a-mole/white.png' 
    },
   
];

let randomIdx =-1;
// Create the grid of images
makeGrid.forEach((_, index) => {
    const box = document.createElement('img');
    box.setAttribute('src', '/wack-a-mole/white.png');
    box.setAttribute('idx', index);
  //  box.setAttribute('color');
    box.addEventListener("click", clicked); // Add event listener for clicks
    board.appendChild(box);
});

let moleInterval;
let score =0;
let timings = 1000;
let currTime = 10;

    let currScore = document.getElementById('score');
    let timeRem = document.getElementById('timer');
    let image = document.querySelectorAll('#grid img');
    function clicked(e){
        let clickedIdx = parseInt(e.target.getAttribute('idx'));
       
        
        if(clickedIdx === randomIdx){
            
           image[clickedIdx].style.borderColor = 'green';
            score++;
            currScore.textContent = score;

        }
        else{

            image[clickedIdx].style.borderColor = 'red';
            score--;
            currScore.textContent = score;

        }
        if(score%5 == 0 && score>0){
            timings = Math.max(timings - 200,200);
            clearInterval(moleInterval);
            moleInterval = setInterval(moveToNew,timings);
        }
       

    }

    function countDown(){
        currTime--;
            timeRem.textContent = `${currTime}`;
        if(currTime <= 0){
            clearInterval(moleInterval);
            clearInterval(countdownInterval);

            alert(`TIMES UP!!! Your Score is ${score}`);
        }       

    }


function moveToNew() {
    // Clear all boxes to white
    
    document.querySelectorAll('#grid img').forEach(img => {
        img.setAttribute('src', '/wack-a-mole/white.png');
        img.style.borderColor = 'black';
    });

    // Select a random box and show the mole there
     randomIdx = Math.floor(Math.random() * makeGrid.length);
    const randomBox = document.querySelectorAll('#grid img')[randomIdx];

    // Set the mole image
    randomBox.setAttribute('src', '/wack-a-mole/mole.jpg');

}

moleInterval = setInterval(moveToNew,timings);
const countdownInterval = setInterval(countDown, 1000);

// Make the mole appear in a random spot every 1 second
/* setInterval(() => {
    moveToNew();
}, timings);
 */
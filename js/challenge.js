let counter = 0;
let likeCount = 0;
let isPaused = false;
let counterId;


// Start the counter
let counterInterval = 1000;
//window.addEventListener('load', function() {
    counterId = setInterval(increment, counterInterval);
 // });

function increment(){
    counter++;
    document.getElementById('counter').textContent = counter;
}
document.getElementById('plus').addEventListener('click', increment);
//
function decrement(){
    counter--;
    document.getElementById('counter').textContent = counter;
}
document.getElementById('minus').addEventListener('click', decrement);
//
function likeCounter(){
    likeCount++;
    document.getElementById('counter').textContent = likeCount;
}
document.getElementById('heart').addEventListener('click', likeCounter);
//
function startCounter() {
     counterId = setInterval(increment, 1000);
     isPaused = false
  document.getElementById('plus').disabled = false;
  document.getElementById('minus').disabled = false;
  document.getElementById('heart').disabled = false;
  document.getElementById('pause').textContent = 'Pause';
}

 function pauseCounter(){
    clearInterval(counterId);
  document.getElementById('plus').disabled = true;
  document.getElementById('minus').disabled = true;
  document.getElementById('heart').disabled = true;
  document.getElementById('pause').textContent = 'Resume';
  isPaused = true
}
document.getElementById('pause').addEventListener('click', toggle);

function toggle(){
    console.log(isPaused)

    if (isPaused){
        startCounter()
    } else {
        pauseCounter()
    }
     console.log(isPaused)
}

//Get the necessary elements from the HTML
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

// Add an event listener to the submit button
commentForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the value entered in the comment input field
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    // Create a new list item to represent the comment
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;

// Append the comment to the comment list
commentList.appendChild(commentItem);

// Clear the comment input field
commentInput.value = '';
}
});





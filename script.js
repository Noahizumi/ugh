var yesButton = document.getElementById('yesButton');
var gifImage = document.getElementById('gifImage');
var noButton = document.getElementById('noButton');
var loveMessage = document.getElementById('loveMessage');
var prompts = [
  "Are you sure?",
  "Really sure?",
  "Are you positive???",
  "Baby???????",
  "Okay this is the last one, No?",
  "Sike but cmoonnn",
  "Just think about it",
  "Think again",
  "If you say no, I'll be very sad",
  "Very very very veryyyyyyyy sad"
];
var promptIndex = 0;
var scaleFactor = 1;

function respondToProposal(response) {
  if (response === 'yes') {
    document.getElementById("response").innerText = "Yessssssssssssssssssss!!!!!!!!!!!!!!!!!!!! 💕";
    gifImage.style.display = 'block';
    noButton.style.display = 'none';
    loveMessage.style.display = 'block';
    loveMessage.innerHTML = "From the moment our paths crossed, my life has been brighter, warmer, and filled with more joy and love and caring. Your love is the melody that plays in my heart, and every day with you is a beautiful symphony and another chance to love you more and be loved by you and be your lover. I cherish the laughter we share, the adventures we embark on, the life we have, and the simple moments that make 'us' US. You are my greatest gift, my deepest joy, and my forever love. and lover I am grateful for you every day, every week, every month, every year, every second, every moment, and I love you more than words can express. I love you more than the soul can love, I love you with all my heart, I love you to the moon and back, I love you to the end and beyond.";
  }
}

function moveNoAway() {
  var newX = Math.floor(Math.random() * (window.innerWidth - 200));
  var newY = Math.floor(Math.random() * (window.innerHeight - 50));
  noButton.style.transform = `translate(${newX}px, ${newY}px)`;

  scaleFactor += 0.2;
  yesButton.style.transform = `scale(${scaleFactor})`;

  noButton.innerText = prompts[promptIndex];
  promptIndex = (promptIndex + 1) % prompts.length;
}

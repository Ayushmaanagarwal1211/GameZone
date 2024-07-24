document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    const timeDisplay = document.getElementById('time');
    let score = 0;
    let timeLeft = 30;
    let timer;
  
    // Function to generate random emojis
    function createEmoji() {
      const emojis = ['😀', '😍', '🚀', '🎉', '💡', '🌟', '🍕', '⚡️', '🎈', '🦄'];
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const emoji = document.createElement('div');
      emoji.textContent = emojis[randomIndex];
      emoji.className = 'emoji';
      emoji.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        gameArea.removeChild(emoji);
      });
      gameArea.appendChild(emoji);
    }
  
    // Function to start the game
    function startGame() {
      score = 0;
      scoreDisplay.textContent = score;
      timeLeft = 30;
      timeDisplay.textContent = timeLeft;
      gameArea.innerHTML = '';
      clearInterval(timer);
      timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timer);
          alert(`Game Over! Your score is ${score}`);
        } else {
          createEmoji();
        }
      }, 1000);
    }
  
    // Start the game when the page loads
    startGame();
  });
  
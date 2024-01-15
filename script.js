var velocity = 5;

document.addEventListener("click", function (event) {
  createBall(event.pageX, event.pageY);
});

function createBall(x, y) {
  var ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.width = getRandomSize() + "px";
  ball.style.backgroundColor = getRandomColor();
  document.body.appendChild(ball);

  var positionX = x;
  var positionY = y;
  var reverseX = false;
  var reverseY = false;

  function moveBall() {
    if (!reverseX) {
      positionX = positionX + velocity;
    } else {
      positionX = positionX - velocity;
    }

    if (!reverseY) {
      positionY = positionY + velocity;
    } else {
      positionY = positionY - velocity;
    }

    var maxX = window.innerWidth - ball.clientWidth;
    var maxY = window.innerHeight - ball.clientHeight;

    ball.style.left = Math.min(maxX, Math.max(0, positionX)) + "px";
    ball.style.top = Math.min(maxY, Math.max(0, positionY)) + "px";

    if (positionX >= maxX || positionX <= 0) {
      reverseX = !reverseX;
    }

    if (positionY >= maxY || positionY <= 0) {
      reverseY = !reverseY;
    }
  }

  setInterval(moveBall, 20);

  function getRandomSize() {
    return Math.floor(Math.random() * 100) + 5;
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
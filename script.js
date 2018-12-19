(function() {
  var canvas = document.getElementById('canvas')
  var cw = canvas.width = innerWidth
  var ch = canvas.height = innerHeight
  var ctx = canvas.getContext('2d')

  var colorArr = [
    '#1abc9c', '#16a085', '#2ecc71', '#27ae60',
    '#3498db', '#2980b9', '#9b59b6', '#8e44ad',
    '#34495e', '#2c3e50', '#f1c40f', '#f39c12',
    '#e67e22', '#d35400', '#e74c3c', '#c0392b',
    '#ecf0f1', '#bdc3c7', '#95a5a6', '#7f8c8d'
  ]

  var circleArr = []

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArr[Math.floor(Math.random() * colorArr.length)]

    this.draw = function() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
      ctx.fillStyle = this.color
      ctx.fill();
    }

    this.update = function() {
      if(this.x + this.radius >= cw || this.x - this.radius <= 0) {
        this.dx = -this.dx
      }
      if(this.y + this.radius >= ch || this.y - this.radius <= 0) {
        this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy

      this.draw();
    }
  }

  function generateCircles(n) {
    for(var i = 0; i < n; i++) {
      var radius = Math.random() * 50
      var x = Math.random() * (cw - radius * 2) + radius
      var y = Math.random() * (ch - radius * 2) + radius
      var dx = (Math.random() -0.5) * 8;
      var dy = (Math.random() -0.5) * 8;
      circleArr.push(new Circle(x, y, dx, dy, radius))
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, cw, ch)
    for(var i = 0; i < circleArr.length; i++) {
      circleArr[i].update();
    }
  }

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  generateCircles(getRandom(1,50))
  animate();

})();
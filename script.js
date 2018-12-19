(function() {
  var canvas = document.getElementById('canvas')
  var cw = canvas.width = innerWidth
  var ch = canvas.height = innerHeight
  var ctx = canvas.getContext('2d')

  var colorArr = [
    '#e67e22',
    '#2ecc71',
    '#f1c40f',
    '#e74c3c',
    '#9b59b6',
    '#95a5a6',
    '#3498db'
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
  generateCircles(15)
  animate();

})();
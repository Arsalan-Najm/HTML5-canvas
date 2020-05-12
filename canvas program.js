//main structure of HTML canvas.
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

//canvas rectangle examples.
// ctx.fillStyle = '#031320';
// ctx.fillRect(20,20,150,100);




// ctx.fillStyle = 'blue'
// ctx.fillRect(200 ,20,150,100);



// ctx.lineWidth = 5;
// ctx.strokeStyle = "red"
// ctx.strokeRect(20,200,150,100);

//canvas stroke examples.
// ctx.fillStyle = "green"; 
// ctx.font = "30px tahoma"
// ctx.fillText('hello world', 400,50)

// ctx.strokeStyle = "orange";
// ctx.lineWidth = 1;
// ctx.strokeText('hello world',400,100);

//canvas traiangle example.
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// ctx.lineTo(50,50);
// ctx.fillStyle = 'coral';
// ctx.fill();

//canvas simple circle example (smiley).
//smiley face.
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// ctx.arc(centerX,centerY,200,0,Math.PI*2);
// ctx.moveTo(centerX+100,centerY);
// ctx.fillStyle = 'yellow';
// ctx.fill();

//smiley mouth.
// ctx.arc(centerX,centerY,100,0,Math.PI,false);
// ctx.moveTo(centerX - 60 , centerY - 80);

//smiley eyes.
// ctx.arc(centerX - 80, centerY-80,20,0,Math.PI * 2);
// ctx.moveTo(centerX + 100 ,centerY - 80,);
// ctx.arc(centerX + 80, centerY - 80,20,0,Math.PI * 2);
// ctx.strokeSe = 'black';
// ctx.lineWidth = 5
// ctx.stroke();

//canvas circle movement example.
// const circle = {
// 	x: 200,
// 	y: 200,
// 	size: 30,
// 	dx: 5,
// 	dy: 4
// }

// function drawCircle() {
// 	ctx.beginPath();
// 	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
// 	ctx.fillStyle = 'blue';
// 	ctx.fill();
// }



// function draw() {
//     ctx.clearRect(0,0,canvas.width,canvas.height);

// 	drawCircle();

//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0 ) {
//     	circle.dx *= -1	;
    	
//     }

//         if(circle.y + circle.size > canvas.height|| circle.y - circle.size < 0 ) {
//     	circle.dy *= -1	;
    	
//     }

// 	requestAnimationFrame(draw);
// }

// draw();


//canvas game character example.
// const good = document.getElementById('source');

// const player = {
// 	w: 100,
// 	h: 100,
// 	x:20,
// 	y:200,
// 	speed:10,
// 	dx:0,
// 	dy:0
// };


// function drawPlayer() {
// 	ctx.drawImage(good,player.x,player.y,player.w,player.h);
// }

// function clear() {
// 	ctx.clearRect(0,0,canvas.width,canvas.height);
// }


// function setpos() {
// 	player.x += player.dx;
// 	player.y += player.dy;
// 	Detect();
// }

// function Detect() {
// 	if(player.x < 0) {
// 		player.x = 0;
// 	}

// 	if(player.x + player.w > canvas.width) {
// 		player.x = canvas.width - player.w;
// 	}

// 	if(player.y < 0) {
// 		player.y = 0;
// 	}

// 	if(player.y + player.h > canvas.height) {
// 		player.y = canvas.height - player.h;
// 	}
// }

// function update() {
// 	clear();
// 	drawPlayer();
// 	setpos();
// 	requestAnimationFrame(update);
// }

// function moveUp() {
// 	player.dy = -player.speed;
// }
// function moveDown() {
// 	player.dy = +player.speed;
// }
// function moveLeft() {
// 	player.dx = -player.speed;
// }
// function moveRight() {
// 	player.dx = +player.speed;
// }


// function keyDown(e) {
// 	if(e.key === 'ArrowRight' || e.key === 'Right') {
// 		moveRight();
// 	}else if(e.key === 'ArrowLeft' || e.key === 'Left') {
// 		moveLeft();
// 	}
// 	else if(e.key === 'ArrowUp' || e.key === 'Up') {
// 		moveUp();
// 	}
// 	else if(e.key === 'ArrowDown' || e.key === 'Down') {
// 		moveDown();
// 	}
// }

// function keyUp(e) {
// 	if (
// 		e.key == 'Right' ||
// 		e.key == 'ArrowRight' ||
// 		e.key == 'Left' ||
// 		e.key == 'ArrowLeft' ||
// 		e.key == 'Up' ||
// 		e.key == 'ArrowUp' ||
// 		e.key == 'Down' ||
// 		e.key == 'ArrowDown'
// 	)  {
// 		player.dx = 0;
// 	    player.dy = 0;
// 	}

// }

// update();

// document.addEventListener('keydown',keyDown);
// document.addEventListener('keyup',keyUp);


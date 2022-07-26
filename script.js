var eyeAnimation;
var eyeSprite;
var player;
var playerRightAnimation;
var playerLeftAnimation;
var playerIdleRightAnimation;
var playerIdleLeftAnimation;
var playerDirection = 'right';

function preload() {
  eyeAnimation = loadAnimation('eyeStuff/soron_eye_00.png', 'eyeStuff/soron_eye_03.png');
  playerRightAnimation = loadAnimation('shadowRight/shadow_00.png', 'shadowRight/shadow_10.png');
  playerLeftAnimation = loadAnimation('shadowLeft/shadow_left_00.png', 'shadowLeft/shadow_left_10.png');
  playerIdleRightAnimation = loadAnimation('shadowIdleRight/shadow_idle_right_0.png', 'shadowIdleRight/shadow_idle_right_5.png');
  playerIdleLeftAnimation = loadAnimation('shadowIdleLeft/shadow_idle_left_0.png', 'shadowIdleLeft/shadow_idle_left_5.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  eyeSprite = createSprite(100, 100);
  eyeSprite.addAnimation('idle', eyeAnimation);
  player = createSprite(10, windowHeight / 1.5);
  player.addAnimation('walkingRight', playerRightAnimation);
  player.addAnimation('walkingLeft', playerLeftAnimation);
  player.addAnimation('idleRight', playerIdleRightAnimation);
  player.addAnimation('idleLeft', playerIdleLeftAnimation);
  player.scale = .10;

}
function draw() {
  background(48, 25, 52, 80);
  drawSprites();
  playerControl();
}

function playerControl() {

  if (player.velocity.x == 0 && playerDirection == 'left') {
    player.changeAnimation('idleLeft');

  }
  if (player.velocity.x == 0 && playerDirection == 'right') {
    player.changeAnimation('idleRight');

  }



  if (keyDown('a')) {
    player.velocity.x = -3;
    player.changeAnimation('walkingLeft');
    playerDirection = 'left';
  }
  else if (keyDown('d')) {
    player.velocity.x = 3;
    player.changeAnimation('walkingRight');
    playerDirection = 'right';
  }
  else {
    player.velocity.x = 0;
  }

  if (player.position.y >= height) {
    player.position.y++;
  }
if (keyDown('o'))
    location.reload();

}

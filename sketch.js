var ghost,player;
var living_room_image,kitchenImage,bedroomImage,bedroom1Image,bedroom2Image,storeroomImage,lobbyImage,lobby1Image,room3Image,room4Image,room5Image,room6Image,room7Image,thestairsImage,scaryImage,windowImage,bathroomImage,bathroom1Image,chickendinnerImage,dinningtableImage,storeroom1,storerooom2,TheEndImage;
var ghostImage;
var level = 0;
function preload(){
  living_room_image = loadImage("living room.jpg");
  kitchenImage = loadImage("kitchen.jpg");
  bedroomImage = loadImage("bedroom.jpg");
  bathroomImage = loadImage("bathroom.jpg");
  bedroom1Image = loadImage("bedroom1.jpg");
  bedroom2Image = loadImage("bedroom2.jpg");
  storeroomImage = loadImage("storeroom.jpg");
  lobbyImage = loadImage("lobby.jpg");
  lobby1Image = loadImage("lobby1.jpg");
  room3Image = loadImage(" room3.jpg");
  room4Image = loadImage(" room4.jpg");
  room5Image = loadImage(" room5.jpg");
  bathroom1Image = loadImage("bathroom1.jpg");
  storeroom1Image = loadImage("storeroom.jpg");
  storeroom2Image = loadImage("storeroom2.jpg");
  thestairsImage = loadImage("thestairs.jpg");
  windowImage = loadImage("window.jpg");
  DinningtableImage = loadImage("Dinningtable.jpg");
  chickendinnerImage = loadImage("chickendinner.jpg");
  scaryImage = loadImage("scary.jpg");
  TheEndImage = loadImage("TheEnd.jpg");
  room6Image = loadImage("room6.jpg");
  room7Image = loadImage("room7.jpg");
  ghostImage = loadImage("Ghost1.png");
  ghost2Image = loadImage("ghost2.png");
  ghost3Image = loadImage("ghost3.png");
  playerImage = loadImage("Boy.png");

  
}

function setup() {
  createCanvas(1000,800);
  player = createSprite(500,700,30,30);
  player.scale = 0.5
  player.addImage("player",playerImage)
  ghostGroup = new Group();
  ghost2Group = new Group();
  ghost3Group = new Group();
}

function draw() {

  if(keyDown("UP_ARROW")) {
    player.velocityX = 0;
    player.velocityY = -5;
  }
  if(keyDown("DOWN_ARROW")) {
    player.velocityX = 0;
    player.velocityY = 5;
  }
  if(keyDown("RIGHT_ARROW")) {
    player.velocityX = 5;
    player.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")) {
    player.velocityX = -5;
    player.velocityY =  0;
  }

  if (level ===0) {
    background(living_room_image);

    spawnGhost();
    spawnGhost2();
    spawnGhost3();
    spawnGhost3();
    spawnGhost();
    spawnGhost2();
    spawnGhost();
    spawnGhost2();
    spawnGhost3();
    spawnGhost2(); 

    if(player.isTouching(ghostGroup)) {
      ghost2Group.destroyEach();
      ghost3Group.destroyEach();
      ghostGroup.destroyEach();
      level = 1
     
     }
    }

    if (level ===1) {
      background(kitchenImage);

      spawnGhost();
      spawnGhost2();
      spawnGhost();
      spawnGhost2();
      spawnGhost();
      spawnGhost();
      spawnGhost2();
      spawnGhost3();
    
    if(player.isTouching(ghost3Group)) {
      ghostGroup.destroyEach();
      ghost3Group.destroyEach();
      ghost2Group.destroyEach();
      level = 2
      
     }

    }

    if (level ===2) {
      background(bedroomImage);

      spawnGhost2();
      spawnGhost();
      spawnGhost2();
      spawnGhost();
      spawnGhost();
      spawnGhost3();
      spawnGhost3();

    if(player.isTouching(ghost2Group)) {
      ghostGroup.destroyEach();
      ghost3Group.destroyEach();
      ghost2Group.destroyEach();
      level = 3
      
     }

    }

    if (level ===3) {
      background(bathroomImage);
  
      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost3();
      spawnGhost3();
      spawnGhost3();
      
  
      if(player.isTouching(ghostGroup)) {
        ghostGroup.destroyEach();
        ghost3Group.destroyEach();
        ghost2Group.destroyEach();1 
        level = 4
        
       }
      }

      if (level ===4) {
        background(bedroom1Image);
    
        spawnGhost2();
        spawnGhost();
        spawnGhost();
        spawnGhost3();
        spawnGhost2();
        spawnGhost3();
    
        if(player.isTouching(ghost2Group)) {
          ghostGroup.destroyEach();
          ghost2Group.destroyEach();
          ghost3Group.destroyEach();
          level = 5
          
         }
        }

        if (level ===5) {
          background(bedroom2Image);
      
          spawnGhost();
          spawnGhost2();
          spawnGhost2();
          spawnGhost();
          spawnGhost3();
          spawnGhost3();
         
         
          if(player.isTouching(ghostGroup)) {
            ghostGroup.destroyEach();
            ghost2Group.destroyEach();
            ghost3Group.destroyEach();
            level = 6
            
           }
          }

          if (level ===6) {
            background(storeroomImage);
        
            spawnGhost();
            spawnGhost();
            spawnGhost();
            spawnGhost();
            spawnGhost3();
            spawnGhost3();
            spawnGhost3();
            
                  
            if(player.isTouching(ghost3Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 7
              
             }
            }

            if (level ===7) {
            background(lobbyImage);
        
            spawnGhost();
            spawnGhost();
            spawnGhost();
            spawnGhost();
            spawnGhost3();
            spawnGhost3();
            spawnGhost3();
            spawnGhost3();
                  
            if(player.isTouching(ghost3Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 8
              
             }
            }

            if (level ===8) {
            background(lobby1Image);
        
            spawnGhost2();
            spawnGhost(); 
            spawnGhost();
            spawnGhost2();
            spawnGhost();
            spawnGhost3();
            spawnGhost3();
                  
            if(player.isTouching(ghostGroup)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 9
              
             }
            }

            if (level ===9) {
            background(room3Image);
        
            spawnGhost();
            spawnGhost();
            spawnGhost2();
            spawnGhost();
            spawnGhost3();
           
                  
            if(player.isTouching(ghost2Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 10
              
             }
            }

            if (level ===10) {
            background(room4Image);
        
            spawnGhost3();
            spawnGhost3();
            spawnGhost();
            spawnGhost2();
           
                  
            if(player.isTouching(ghostGroup)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 11
              
             }
            }

            if (level ===11) {
            background(room5Image);
        
            spawnGhost3();
            spawnGhost();
            spawnGhost();
            spawnGhost2();
           
                  
            if(player.isTouching(ghost2Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 12
              
             }
            }

            if (level ===12) {
            background(thestairsImage);
        
            spawnGhost();
            spawnGhost2();
            spawnGhost();
            spawnGhost3();
                  
            if(player.isTouching(ghostGroup)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 13
              
             }
            }

            if (level ===13) {
            background(windowImage);
        
            spawnGhost2();
            spawnGhost3();
            spawnGhost3(); 
            spawnGhost(); 
           

            if(player.isTouching(ghostGroup)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 14
              
             }
            }

            if (level ===14) {
            background(DinningtableImage);
        
            spawnGhost3();
            spawnGhost2(); 
            spawnGhost();
            spawnGhost2();
        
            if(player.isTouching(ghost3Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 15
              
             }
            }

            if (level ===15) {
            background(chickendinnerImage);
        
            spawnGhost2();
            spawnGhost();
            spawnGhost2();
            spawnGhost3();
          
                  
            if(player.isTouching(ghost3Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 16
              
             }
            }

            if (level ===16) {
            background(bathroom1Image);
        
            spawnGhost2();
            spawnGhost();
            spawnGhost3();
            spawnGhost();
            
            if(player.isTouching(ghost2Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 17
              
             }
            }

            if (level ===17) {
            background(scaryImage);
        
            spawnGhost();
            spawnGhost();
            spawnGhost3();
    
            if(player.isTouching(ghostGroup)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 18
              
             }
            }

            if (level ===18) {
            background(room6Image);
        
            spawnGhost();
            spawnGhost3();
            spawnGhost3();
           
              
                  
            if(player.isTouching(ghost3Group)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 19
              
             }
            }

            if (level ===19) {
            background(room7Image);
        
            spawnGhost3();
            spawnGhost();
                  
            if(player.isTouching(ghostGroup)) {
              ghostGroup.destroyEach();
              ghost2Group.destroyEach();
              ghost3Group.destroyEach();
              level = 20
              
             }
            }

              if (level ===20) {
            background(TheEndImage);
              player.destroyEach();
             }
            

  drawSprites();
}

function spawnGhost() {
  if(frameCount %60===0) {
    var ghost = createSprite(500,50,50,50);
    ghost.addImage("Ghost",ghostImage);
    ghost.scale = 0.1;
    ghost.x = random(100,900);
    ghost.y = random(100,300);
    ghost.lifetime = 50;
    ghostGroup.add(ghost);
  }
}

function spawnGhost2() {
  if(frameCount %60===0) {
    var ghost2 = createSprite(500,50,50,50);
    ghost2.addImage("Ghost2",ghost2Image);
    ghost2.scale = 0.2;
    ghost2.x = random(100,900);
    ghost2.y = random(100,200);
    ghost2.lifetime = 50;
    ghost2Group.add(ghost2);
    
  }
}

function spawnGhost3() {
  if(frameCount %60===0) {
    var ghost3 = createSprite(500,50,50,50);
    ghost3.addImage("Ghost3",ghost3Image);
    ghost3.scale = 0.2;
    ghost3.x = random(100,900);
    ghost3.y = random(100,100);
    ghost3.lifetime = 50;
    ghost3Group.add(ghost3);
    
  }
}

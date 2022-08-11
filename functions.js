
const drawMap = () => {
    document.getElementById("game-board").innerHTML ="";
  
    //2. drow board

    
    for(let w = 0; w<tileMap01.mapGrid.length; w++)
    {
     
      const row = tileMap01.mapGrid[w]
      console.log(row);
      for(let x =0; x<row.length;x++)
      {

       
        let div = document.createElement("div");
        //every cells has it's unique id
        div.id = `${x},${w}`;
        //add list of classes for each cell

        
        div.classList.add("tile-space");   
       
        if(row[x][0] !==" "){
        
            div.classList.add( ...row[x][0].split(" ").map(tiles));
          }
         

        document.getElementById("game-board").appendChild(div);
      }    
    }
};

drawMap();


function tiles(value){
  switch(value){
    case "W":
      return Tiles.Wall;
      break;
    case " ":
      return Tiles.Space;
      break;
    case "G":
      return Tiles.Goal;
      break;    
    case "P":
      return Entities.Character;
      break;
  
    case "B":
      return Entities.Block;
      break;
    case "BD":
      return Entities.BlockDone;
      break;
    

}
}






 function movePlayer(a){
  if (a==='r') {
    let player = document.getElementsByClassName("entity-player");
    let playerPos = player[0];
    
    let playerXcoordinate = playerPos.id.split(',')[0];
    let playerYcoordinate = playerPos.id.split(',')[1];

    playerXcoordinate++;

    let blockXcoordinate = playerXcoordinate+1;
    let blockYcoordinate = playerYcoordinate;
    

    let nextId=playerXcoordinate +',' + playerYcoordinate;
    let nextTile = document.getElementById(nextId);
    let nextIdBlock=blockXcoordinate + ',' + blockYcoordinate;
    let nextTileBlock = document.getElementById(nextIdBlock);

    if (!nextTile.classList.contains('tile-wall')) {
      nextTile.classList.remove('tile-space');
      nextTile.classList.add('entity-player');
      playerPos.classList.remove('entity-player');
      playerPos.classList.add('tile-space');
      }

     

    if (nextTile.classList.contains('entity-block')) 
    {
      if (!nextTileBlock.classList.contains('tile-wall')){
        nextTile.classList.remove('tile-space');
        nextTile.classList.add('entity-player');
        nextTile.classList.remove('entity-block');
        playerPos.classList.remove('entity-player');
        playerPos.classList.add('tile-space');
        nextTileBlock.classList.remove('tile-space');
        nextTileBlock.classList.add('entity-block');
      }

      if (nextTileBlock.classList.contains('tile-goal')) 
      {
        console.log('Gul djävel');
        nextTileBlock.classList.remove('tile-goal');
        nextTileBlock.classList.add('entity-block');
      }

      }

  } // Move Player Right

  //  Move Player Up
  if (a==='u') {
    let player = document.getElementsByClassName("entity-player");
    let playerPos = player[0];
    let playerXcoordinate = playerPos.id.split(',')[0];
    let playerYcoordinate = playerPos.id.split(',')[1];
    
    playerYcoordinate--;

    let blockXcoordinate = playerXcoordinate;
    let blockYcoordinate = playerYcoordinate - 1;

    let nextId=playerXcoordinate+','+playerYcoordinate;
    let nextTile = document.getElementById(nextId);
    let nextIdBlock=blockXcoordinate + ',' + blockYcoordinate;
    let nextTileBlock = document.getElementById(nextIdBlock);

    if (!nextTile.classList.contains('tile-wall')) {
    nextTile.classList.remove('tile-space');
    nextTile.classList.add('entity-player');
    playerPos.classList.remove('entity-player');
    playerPos.classList.add('tile-space');
    }

    if (nextTile.classList.contains('entity-block')) 
    {
      if (!nextTileBlock.classList.contains('tile-wall')){
        nextTile.classList.remove('tile-space');
        nextTile.classList.add('entity-player');
        nextTile.classList.remove('entity-block');
        playerPos.classList.remove('entity-player');
        playerPos.classList.add('tile-space');
        nextTileBlock.classList.remove('tile-space');
        nextTileBlock.classList.add('entity-block');
      }
    }



  } // move Player Up

  if (a==='d') {
    let player = document.getElementsByClassName("entity-player");
    let playerPos = player[0];
    let playerXcoordinate = playerPos.id.split(',')[0];
    let playerYcoordinate = playerPos.id.split(',')[1];
    
    playerYcoordinate++;

    let blockXcoordinate = playerXcoordinate;
    let blockYcoordinate = playerYcoordinate + 1;

    let nextId=playerXcoordinate+','+playerYcoordinate;
    let nextTile = document.getElementById(nextId);
    let nextIdBlock=blockXcoordinate + ',' + blockYcoordinate;
    let nextTileBlock = document.getElementById(nextIdBlock);

    if (!nextTile.classList.contains('tile-wall')) {
    nextTile.classList.remove('tile-space');
    nextTile.classList.add('entity-player');
    playerPos.classList.remove('entity-player');
    playerPos.classList.add('tile-space');
    }

    if (nextTile.classList.contains('entity-block')) 
    {
      if (!nextTileBlock.classList.contains('tile-wall')){
        nextTile.classList.remove('tile-space');
        nextTile.classList.add('entity-player');
        nextTile.classList.remove('entity-block');
        playerPos.classList.remove('entity-player');
        playerPos.classList.add('tile-space');
        nextTileBlock.classList.remove('tile-space');
        nextTileBlock.classList.add('entity-block');
      }
    }



  } // move Player Down

  if (a==='l') {
    let player = document.getElementsByClassName("entity-player");
    let playerPos = player[0];
    
    let playerXcoordinate = playerPos.id.split(',')[0];
    let playerYcoordinate = playerPos.id.split(',')[1];

    playerXcoordinate--;
    
    let blockXcoordinate = playerXcoordinate - 1;
    let blockYcoordinate = playerYcoordinate;
    

    let nextId=playerXcoordinate +',' + playerYcoordinate;
    let nextTile = document.getElementById(nextId);
    let nextIdBlock=blockXcoordinate + ',' + blockYcoordinate;
    let nextTileBlock = document.getElementById(nextIdBlock);

    if (!nextTile.classList.contains('tile-wall')) {
      nextTile.classList.remove('tile-space');
      nextTile.classList.add('entity-player');
      playerPos.classList.remove('entity-player');
      playerPos.classList.add('tile-space');
      }

     

    if (nextTile.classList.contains('entity-block')) 
    {
      if (!nextTileBlock.classList.contains('tile-wall')){
        nextTile.classList.remove('tile-space');
        nextTile.classList.add('entity-player');
        nextTile.classList.remove('entity-block');
        playerPos.classList.remove('entity-player');
        playerPos.classList.add('tile-space');
        nextTileBlock.classList.remove('tile-space');
        nextTileBlock.classList.add('entity-block');
      }

      if (nextTileBlock.classList.contains('tile-goal')) 
      {
        console.log('Gul djävel');
        nextTileBlock.classList.remove('tile-goal');
        nextTileBlock.classList.add('entity-block');
      }

      }
    }
 // move Player Left

 }  // End movePlayer()



function tiles(value){

  switch(value){

    case "W":
      return Tiles.Wall;
      break;

    case " ":
      return Tiles.Space;
      break;

    case "G":
      return Tiles.Goal;
      break;   

    case "P":
      return Entities.Character;
      break;

    case "B":
      return Entities.Block;
      break;

    case "BD":
      return Entities.BlockDone;
      break;
}

}

 
let player = document.querySelectorAll(".entity-player");
console.log("Player pos: " , player);
 

addEventListener("keydown", function (event) {
    event.preventDefault();
    const key = event.key; // 
    switch (key) {
    case "ArrowLeft":
        movePlayer('l');
    break;

    case "ArrowRight":
       movePlayer('r');
    break;

    case "ArrowUp":
      movePlayer('u');
    break;


    case "ArrowDown":
      movePlayer('d');
    break;

    case "X" || "x" :



    break;
    
}

});
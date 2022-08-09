
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






const movePlayer = () => {
    moves();
};

const moveBlock =() => {};

const checkPossibleMove = (attemptMove) => {}


   


addEventListener('keypress', (event) => {

});



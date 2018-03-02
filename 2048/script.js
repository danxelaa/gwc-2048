/*
    Daniela
    July 20, 2015
*/

// All code in here only runs once the page loads
$(document).ready(function(){
    var placed = false;
    var tiles = 0;
    var score = 0;
    var noMatch = 0;
    var gameOver = function() {
        noMatch = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (i < 3 && board[i+1][j] != board[i][j]) {
                noMatch += 1;
                }
                if (j < 3 && board[i][j+1] != board[i][j]) {
                noMatch += 1;
                }
            }
        }
        if (noMatch == 24) {
            $("#gameOver").html("Game Over");
        }
    };
    
    var restart = function(){
        score = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                board[i][j] = 0;
            }
        }
        board = [[0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];
        
        paintBoard(board);
    }
    var board = [[0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];
    
    board[Math.floor(Math.random()*4)][Math.floor(Math.random()*4)] = 2;
    var placetile = function (){
        placed = false;
        var start = Math.round(Math.random());
        var row = Math.floor(Math.random()*4);
        var column = Math.floor(Math.random()*4);
        if (board[row][column] == 0) {
            placed = true;
            if (start == 0) {
                board[row][column] = 2;
            }
            else {
                board[row][column] = 4;
            }
        }
    }
    placetile();
    
    var paintBoard = function(grid) {
        tiles = 0;
        
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var currentCell = "#r" + i + "c" + j;
                if(grid[i][j]!=0){
                //console.log(currentCell);
                $(currentCell).html(grid[i][j]);
                tiles ++;
                }
                else{
                    $(currentCell).empty();
                }
                
         if (grid[i][j] == 0) {
            $(currentCell).css("background-color","#E8E8E8");
         }
         if (grid[i][j] == 2) {
            $(currentCell).css("background-color","#00CCFF");
         }
         
         if (grid[i][j] == 4) {
            $(currentCell).css("background-color","#5C00B8");
         }
         if (grid[i][j] == 8) {
            $(currentCell).css("background-color","#FF9DED");
         }
         if (grid[i][j] == 16) {
            $(currentCell).css("background-color","#00CCCC");
         }
         if (grid[i][j] == 32) {
            $(currentCell).css("background-color","#66FF66");
         }
         if (grid[i][j] == 64) {
            $(currentCell).css("background-color","#FF9147");
         }
         if (grid[i][j] == 128) {
            $(currentCell).css("background-color","#660033");
         }
         if (grid[i][j] == 256) {
            $(currentCell).css("background-color","#B85CE6");
         }
         if (grid[i][j] == 512) {
            $(currentCell).css("background-color","#FF1919");
         }
         if (grid[i][j] == 1024) {
            $(currentCell).css("background-color","#8A2E8A");
         }
         if (grid[i][j] == 2048) {
            $(currentCell).css("background-color","#000000");
         }
            }
       }
          if (tiles == 16) {
            gameOver();
            }
       
    };

    
    paintBoard(board);
    
    $("body").keydown(function(e) {
        placed = false;
        if (e.keycode == 32) {
            restart();
        }
        for (var i = 3; i > -1; i-=1) {
            for (var j = 3; j > -1; j-=1) {
                var currentCell = "#r" + i + "c" + j;
                if (e.keyCode == 39 && j < 3) {
                    //console.log("jhsbajhh");
                    if (board[i][j] !== 0 && board[i][j+1] == 0) {
                        board[i][j+1] = board[i][j];
                        board[i][j]=0;
                    }
                    else if (board[i][j+1] == board[i][j]) {
                        board[i][j+1] = board[i][j]*2;
                        score += board[i][j]*2;
                        board[i][j]=0;
                    }
                }
                if (e.keyCode == 40 && i < 3) {
                    if (board[i][j] !== 0 && board[i+1][j] == 0) {
                        board[i+1][j] = board[i][j];
                        board[i][j]=0;
        
                    }
                    else if (board[i+1][j] == board[i][j]) {
                        board[i+1][j] = board[i][j]*2;
                        score += board[i][j]*2;
                        board[i][j]=0;
                    }
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (e.keyCode == 37 && j > 0) {
                    if (board[i][j] !== 0 && board[i][j-1] == 0) {
                        board[i][j-1] = board[i][j];
                        board[i][j]=0;
                    }
                    else if (board[i][j-1] == board[i][j]) {
                        board[i][j-1] = board[i][j]*2;
                        score += board[i][j]*2;
                        board[i][j]=0;
                    }
                }
                if (e.keyCode == 38 && i > 0) {
                    if (board[i][j] !== 0 && board[i-1][j] == 0) {
                        board[i-1][j] = board[i][j];
                        board[i][j]=0;
        
                    }
                    else if (board[i-1][j] == board[i][j]) {
                        board[i-1][j] = board[i][j]*2;
                        score += board[i][j]*2;
                        board[i][j]=0;
                    }
                }
            }
        }
        
        while (placed == false && tiles < 16) {
            placetile();
        }
        $("#score").html("score: "+ score);
        paintBoard(board);
        
        
    });
    
 
 
});
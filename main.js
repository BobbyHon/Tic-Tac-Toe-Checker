function isSolved(board) {
  
    function anyoneWin(num){
      //Check accross
      for (let i = 0; i < 3; i++){
        if (board[i][0] == num && board[i][1] == num && board[i][2] == num)
          {
            return true
          }
      }
      //Check Down
      for (let i = 0; i < 3; i++){
        if (board[0][i] == num && board[1][i] == num && board[2][i] == num)
          {
            return true
          }
      }
      //Check Cross
      if (board[0][0] == num && board[1][1] == num && board[2][2] == num)
        {
          return true
        }
      else if (board[0][2] == num && board[1][1] == num && board[2][0] == num)
        {
          return true
        }
      return false
    }
    function gameOngoing(){
      for(let j = 0; j < 3; j++){
        for (let k = 0; k < 3; k++){
          if (board[j][k] == 0) return true
        }
      }
      return false
    }
    
    if (anyoneWin(1)) return 1
    else if (anyoneWin(2)) return 2
    else if (gameOngoing()) return -1
    else return 0 
  }
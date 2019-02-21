
let game = false
let play1 = 0
//const begin = start()
const grid = []
const choosenToken = []
choosenToken[1] = 'red'
choosenToken[2] = 'blue'


function start() {
  if (game === true)
    return false
  game = true
  for (let row=0; row<=5; row++) {
    grid[row] = []
    for (let col=0; col<=6; col++) {
      grid[row][col] = 0
    }
  }
  play1 = 1
}

function checkForWin() {
  for (let i=1; i<=2; i++) {
    for (let col = 0; col <=3; col++) {
      for (let row = 0; row <=5; row++) {
        if (grid[row][col] === i) {
          if ((grid[row][col+1] === i) && (grid[row][col+2] === i) && (grid[row][col+3] === i)) {
            endGame(i)
            return true
          }
        }
      }
    }
  }

  for (let i=1; i<=2; i++) {
    for (let col = 0; col <=6; col++) {
      for (let row = 0; row <=2; row++) {
        if (grid[row][col] === i) {
          if ((grid[row+1][col] === i) && (grid[row+2][col] === i) && (grid[row+3][col] === i)) {
            endGame(i)
            return true
          }
        }
      }
    }
  }

  for (let i=1; i<=2; i++) {
    for (let col = 0; col <=3; col++) {
      for (let row = 0; row <=2; row++) {
        if (grid[row][col] === i) {
          if ((grid[row+1][col+1] === i) && (grid[row+2][col+2] === i) && (grid[row+3][col+3] === i)) {
            endGame(i)
            return true
          }
        }
      }
    }
  }

  for (let i=1; i<=2; i++) {
    for (let col = 0; col <=3; col++) {
      for (let row = 3; row <=5; row++) {
        if (grid[row][col] === i) {
          if ((grid[row-1][col+1] === i) && (grid[row-2][col+2] === i) && (grid[row-3][col+3] === i)) {
            endGame(i)
            return true
          }
        }
      }
    }
  }
}


function coin(col) {
  for (let row=5; row>=0; row--) {
    if (grid[row][col] === 0) {
      grid[row][col] = play1
      drawBoard()
      if (play1 === 1) {
        play1 = 2
      } else {
        play1 = 1
      }
      setUpTurn()
      return true
    }
  }
}
drawBoard()

function drawBoard() {
  checkForWin()
  for (let col = 0; col<=6; col++) {
    for (let row=0; row<=5; row++) {
      $('square'+row+' '+col).append( 'grid[row][col]')
    }
  }
}

function endGame(winningPlayer) {
  game = false
  $('gameInfo').append( 'Winner: ' + winningPlayer)
}

function setUpTurn() {
  if (game) {
    $('gameInfo').append( 'Current Player: Player ' + play1+(' ' + choosenToken[play1] + ''))
  }
}
for (let row=0; row<=5; row++) {
  $('boardSquare').append('<tr>')
  for (let col=0; col<=6; col++) {
    $('boardSquare').append('<td></td>')
  }
  $('boardSquare').append('</tr>')
}

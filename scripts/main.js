$(() => {
  let game = false
  let play1 = 0
  const $begin = $('#begin')
  const grid = []
  const cells = document.querySelectorAll('.grid')
  const $buttons = $('button')
  const choosenToken = []
  choosenToken[1] = 'red'
  choosenToken[2] = 'blue'


  function start() {
    if (game === true) return false
    game = true
    for (let row=0; row<=5; row++) {
      grid[row] = []
      for (let col=0; col<=6; col++) {
        grid[row][col] = 0
      }
    }
    play1 = 1
    $buttons.on('click', coin)
  }

  function checkForWin() {
    for (let i=1; i<=2; i++) {
      for (let col = 0; col <=3; col++) {
        for (let row = 0; row <=5; row++) {
          if (grid[row][col] === i) {
            if ((grid[row][col+1] === i) && (grid[row][col+2] === i) && (grid[row][col+3] === i)) {
              alert('something happened')
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
              alert('something happened')
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
              alert('something happened')
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
              if (play1 === 0){
                alert('player1 wins')
            } else if (false){
              alert('player2 wins')
          }
       }
          endGame(i)
          return true
        }
      }
    }
  }


  function coin(e) {
    const col = e.target.dataset.col
    for (let row=5; row>=0; row--) {
      if (grid[row][col] === 0) {
        grid[row][col] = play1
        if (play1 === 1) {
          play1 = 2
        } else {
          play1 = 1
        }
        drawBoard()
        setUpTurn()
        return true
      }
    }
  }
  setUpTurn()

  function drawBoard() {
    checkForWin()
    const flatArray = grid.toString().split(',')
    for(let i = 0; i < flatArray.length; i ++) {
      if(parseInt(flatArray[i]) === 1) {
        cells[i].classList.add('player1')
      }
      if(parseInt(flatArray[i]) === 2) {
        cells[i].classList.add('player2')
      }
    }
  }

  function endGame(winningPlayer) {
    if (game) {
      $('gameInfo').append( 'Winner: ' + winningPlayer)
    }
  }
  function setUpTurn() {
    if (game) {
      $('#gameInfo').append('Current Player: Player' + play1)
    }
  }

  $begin.on('click', start)
})

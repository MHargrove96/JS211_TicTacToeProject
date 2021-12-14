let currentMarker = 'X'
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']]
let p1Score = 0;
let p2score = 0; 

  window.onload = playerTurn = () => {
  document.getElementById('turnAnnouncement').innerHTML = 'Player ' + currentMarker + ' it is your turn!'
}

// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
    playerTurn()
  }
}

const addMarker = (id) => {
  document.getElementById(id).innerHTML = currentMarker 
  const [row, column] = id.split('-')
  console.log(`We'll place a ${currentMarker} on square: ${id}`)
  board[row][column] = currentMarker
  checkForWin()
  // to add an X or O to the board to the DOM so it can be scene on the screen.
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
    
    
  } else {
    console.log('checkForWin was false')
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
  }
}

const horizontalWin = () => {
  if((board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X')
  || (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O')
  || (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X')
  || (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O')
  || (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X')
  || (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O')) {
    return true
    console.log('H Win')
  }
  // to check for horizontal wins
}

const verticalWin = () => {
  if((board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X')
  || (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O')
  || (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X')
  || (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O')
  || (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') 
  || (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O')) {
    return true
    console.log('V Win')
  }
  // to check for vertical wins
}

const diagonalWin = () => {
  if((board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X')
  || (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O')
  || (board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == 'X')
  || (board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O')) {
    return true
    console.log('D Win')
  }
  // to check for diagonal wins
}

const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  currentMarker = currentMarker === "X" ? "O" : "X"
 
}



const resetBoard = () => {
  // sanity check: this tells us the function is being called
  // console.log("the board was cleared!")

  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("TD")

  // loops over the HTML Collections and clears out the Xs and Os
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null
  } 
  currentMarker = 'X'
  playerTurn()
  
  // @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
}

// **BONUSES**

// 1. Display the current player's turn ***done***
// **BONUS** you could make the dismissal of this alert window reset the board...
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"

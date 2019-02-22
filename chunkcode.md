


const human = icon x
const mac = icon 0
const null =                  //una const para guardar donde estan las fichas ya lanzadas
const null2 =                 //para decirle cuales NO puede porque estan libres y qeu continue



      for ==> si la casilla esta vacia en vertical sigue(hasta que te cruces con con una horizontal)

function option(human) {



  // script.js

  $(function() {

      $("button").click(function() {
          $('#box').fadeOut(1000);
      });


  //         // build a function that checks to see if a car has won the race
  //         function checkIfComplete() {
  //
  //             if( isComplete == false ) {
  //                 isComplete = true;
  //             } else {
  //                 place = 'second';
  //             }
  //
  //         }
  //
  //         // get the width of the cars
  //         var carWidth = $('#car1').width();
  //
  //         // get the width of the racetrack
  //         var raceTrackWidth = $(window).width() - carWidth;
  //
  //         // generate a random # between 1 and 5000
  //
  //         var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
  //         var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
  //
  //         // set a flag variable to FALSE by default
  //         var isComplete = false;
  //
  //         // set a flag variable to FIRST by default
  //         var place = 'first';
  //
  //         // animate car 1
  //         $('#car1').animate({
  //
  //             // move the car width of the racetrack
  //             left: raceTrackWidth
  //
  //         }, raceTime1, function() {
  //
  //             // animation is complete
  //
  //             // run a function
  //             checkIfComplete();
  //
  //             // give some text feedback in the race info box
  //             $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
  //
  //         });
  //
  //         // animate car 2
  //         $('#car2').animate({
  //
  //             // move the car width of the racetrack
  //             left: raceTrackWidth
  //
  //         }, raceTime2, function() {
  //
  //             // animation is complete
  //
  //             // run a function
  //             checkIfComplete();
  //
  //             // give some text feedback in the race info box
  //             $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
  //
  //         });
  //
  //     });
  //
  //     // reset the race
  //     $('#reset').click(function() {
  //         $('.car').css('left','0');
  //         $('.raceInfo span').text('');
  //     });

  // });




  const human = icon x
  const mac = icon 0

  function option(human) {

    const resultText = [ 'YOU DROP', 'YOU WIN', 'LOOOOOOOSER!!!']
    //  const name = ["stone", "paper", "scissors", "lizard", "spoke"]

    const game = [

      [0,1,2,2,1],
      [2,0,1,1,2],
      [1,2,0,2,1],
      [1,2,1,0,2],
      [2,1,2,1,0]

      [0,1,2,2,1],
      [2,0,1,1,2],
      [1,2,0,2,1],
      [1,2,1,0,2],
      [2,1,2,1,0]
    ]

    const result = game[mac][human]


    document.getElementById('result').innerHTML = resultText[result]
  }
  </div>
    <h2>CLICK IN TO TRY TO WIN TO THE COMPUTER</h2>
      <button onclick="option(0)" name="x"><img src="images/stone.png" alt=""></button>
      <button onclick="option(1)" name="paper"><img src="images/paper.png" alt=""></button>

    <div>
    // //function wins(array){
    // // switch (if (true) {
    // //
    // // }) {
    // //   case expression:
    // //
    // //     break;
    // //   default:
    // //
    // // }
    // //
    // // option()
    // //
    // // const winner={
    // //    for ( i = 0; i < 4.length; i++) {
    // //      4[i]
    // //    }
    // //   }
    //
    // //GRID
    // //   var createGrid = x
    // //   function createGrid(grid) {
    // //     for (let rows = 6; rows < x; rows++) {
    // //       for (let columns = 7; columns < x; columns++);
    // //     }
    // //   }
    // // }
    // //
    // //
    // // document.getElementById('createGrid').innerHTML = 'grid'
    // //   var i = 0;
    // //   while (i < array.length) {
    // //     text += array[i] + "<br>";
    // //     i++;'<br>'
    // //   }
    // //
    // // const winner={
    // //   // for ( i = 0; i < 4.length; i++) {
    // //   //   4[i]
    // //   // }
    // //   }
    // //   const mac = Math.floor(Math.random())
    // //
    // //   document.getElementById('winner').innerHTML = text
    // //   }
    // //
    // // const winner = function () {
    // //   if (human === [0][0],[0][1],[0][2],[0][3])
    // //     console.log('you win')
    // //     // else
    //
    // // const fix = function() {
    // //   for ([0][0] === 0)}
    // //     if ([0][1] === 0){
    // //       if ([0][2] === 0){
    // //         if ([0][3] === 0);
    // //       }
    // //     }
    // //   }
    // // }
    // //
    // //   // const winner = box[mac][human][fix]
    // //
    // // console.log(option)
    // //   //       for (human = 0; human < 6; human++);
    // //   //        for (mac = 0; mac < 7; mac++)
    // //   //
    // //   // {
    // //   //   function winner(){
    // //   //
    // //   // }
    // // // }
    // // document.getElementById('winner').innerHTML = fix[winner]
    // //PARA CAMBIAR EL COLO R DE LAS FICAHS
    //
    // // function changeColor(evt){
    // //   const clickedOn = evt.target;
    // //   // for HTML
    // //   clickedOn.style.backgroundColor = '#f00';
    // //
    // //   // for SVG
    // //   clickedOn.setAttribute('fill','red');
    // // }
    // // mySquare.addEventListener('click',changeColor,false);
    // const grid = function() {
    //   for (let i = 0; i < length + 7; i++) {
    //     grid[i]
    //   }
    // }

    function option (human) {

      const array = [

        [0,1,2,3,4,5,6],
        [7,8,9,10,11,12,13],
        [14,15,16,17,18,19,20],
        [21,22,23,24,25,26,27],
        [28,29,30,31,32,33,34],
        [35,36,37,38,39,40,41]
      ]

    }

      //FUNCTION 4 IN A ROW(MAKE THE ROWS)
      const wins = [
        //VERTICALLY
        wins[0] = new array[0, 7, 14, 21, 28, 35],
        wins[1] = new array[1, 8, 15, 22, 29, 36],
        wins[2] = new array[2, 9, 16, 23, 30, 37],
        wins[3] = new array[3, 10, 17, 24, 31, 38],
        wins[4] = new array[4, 11, 18, 25, 32, 39],
        wins[5] = new array[5, 12, 19, 26, 33, 40],
        wins[6] = new array[6, 13, 20, 27, 34, 41],


        //HORIZONTALY

        wins[7] = new array[0,1,2,3,4,5,6],
        wins[8] = new array[7,8,9,10,11,12,13],
        wins[11] = new array[14,15,16,17,18,19,20],
        wins[12] = new array[21,22,23,24,25,26,27],
        wins[13] = new array[28,29,30,31,32,33,34],
        wins[14] = new array[35,36,37,38,39,40,41],

        //DIAGONAL

        wins [15] = new array[35, 29, 23, 17, 11, 5],
        wins [16] = new array[28, 22, 16, 10, 4],
        wins [17] = new array[21, 15, 9, 3],
        wins [18] = new array[36, 30, 24, 18, 12, 6],
        wins [19] = new array[37, 31, 25, 19, 13],
        wins [20] = new array[38, 32, 26, 20],

        //DIAGONAL2

        wins [21] = new array[27, 19, 11, 3],
        wins [22] = new array[34, 26, 18, 10, 2],
        wins [23] = new array[41, 33, 25, 17, 9, 1],
        wins [24] = new array[40, 32, 24, 16, 8, 0],
        wins [25] = new array[39, 31, 23, 15, 7],
        wins [26] = new array[38, 30, 22, 14]
      ]
    //
    //


    const grid = [
      [[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3]
      [[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3]
      [[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3]
      [[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3]
      [[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3]
      [[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3],[0][1][2][3]
    ]

    const winner = function () {
       if (human === [0][0][0][0]) //i have to say caonsecutive
        return win
      } else if {(human === [1][1][1][1])
        return win
      } else if {(human === [2][2][2][2])
        return win
      } else if {(human === [3][3][3][3])
         }
         else console.log('')
    }
    //
    // const namePlayerOne = prompt()
    // function welcome(){
    //   const name = document.getElementById('welcome')
    //   if (name.value === ''){
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    //
    // if (namePlayerOne === true){
    //   alert('we need your name to start')
    //
    //   document.write('welcome')
    //   welcome()
    // }
    //
    // function myFunction() {
    //   var x = document.getElementById('myText').name
    //   document.getElementById('name').innerHTML = x
    // }
    // myFunction()
    // document.getElementById('name').innerHTML = welcome
    //
    // //function change(){
    // //FUNCTION CHOOSE coins
    // //buttons
    // var coinsGold = gold
    // var coinsPurple = purple
    //
    //
    // //FUNCTION PLAYERONE
    // var coins = gold
    // var coins = purple
    // function playerOne(){
    //   if (playerOne === gold) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    // playerOne()
    //
    //
    // }
    // //FUNCTION PLAYERTWO
    // function playerTwo(){
    //   if (playerTwo === purple) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    // playerTwo()
    // //FUNCTION PLAYERMACHINE
    // // const mac = Math.floor(Math.random())
    // //FUNCTION IS FULL



    <!-- <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style/style.css">
        <script type="text/javascript" src="scripts/main.js">

        </script>
        <title>CONNECT 4</title>
      </head>
      <header>
        <h1>CONNECT 4</h1>
      </header>

    <body>

        <form>
          <script type="text/javascript">
          function changeText(){
          	document.getElementById('name').innerHTML = 'boldStuff';
          }
          </script>
          <p>Player number one called <b id='boldStuff'></b> </p>

          <input type='button' onclick='changeText()' value='Player Name One'/>
          <input id="name" type="text" name="" value="">
          <div class="choosePlayerOne">CHOOSE A TOKEN
            <input type="button" name="" value="gold">
            <input type="button" name="" value="purple">
          </div>

          <p>Player number one called <b id='boldStuff'></b> </p>

          <input type='button' onclick='changeText()' value='Player Name One'/>
          <input id="name" type="text" name="" value="">


       </form>

          <div class="">
            Player Two name: <input type="submit" name="namePlayerTwo"><br>
          </div>

      <div class="square">
        <div class="buttons">
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
          <div class="box" onclick="change"></div>
        </div>
        <!-- <div class="grid">
          grid
        </div> -->
            <!-- </div>

            <div class="coinsMac">COINS PASCUAL
            </div>

            <div class="coinsHuman">COINS PAPANATAS
            </div>

    <div class="wins">
      <span id="wins">winner</span>
    </div>

      <div class="windowWinner">
       </div>


      </body>
      <footer><small>&copy; Copyright 2019, Studio Vila</small></footer>
    </html> --> -->

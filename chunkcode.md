


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

  //
  //        -------------------- */
  //
  //     $('#box').click(function() {
  //         alert('you just clicked the box');
  //     });
  //
  //     $("input").blur(function() {
  //
  //         if( $(this).val() == "" ) {
  //             $(this).css('border','solid 1px red');
  //             $('#box').text('Forgot to add text?');
  //         }
  //
  //     });
  //
  //     $("input").keydown(function() {
  //
  //         if( $(this).val() !== "" ) {
  //             $(this).css('border','solid 1px #777');
  //             $('#box').text('Thanks for that!');
  //         }
  //
  //     });
  //
  //     $('#box').hover(function() {
  //
  //         $(this).text('you hovered in!');
  //
  //     }, function() {
  //
  //         $(this).text('you hovered out!');
  //
  //     });
  //
  //
  //     // Click the GO button
  //     $('#go').click(function() {
  //
  //
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

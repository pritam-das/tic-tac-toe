$(function(){
console.log("JS loaded");
count = 0;

    $('#gamegrid').on('click', '.block', function(){
      if ($('#gamegrid').attr('class') === 'turn_x' && ($(this).attr('id') != 'clicked')){
      $(this).append($('<p class="x">X</p>'));
      $(this).attr('id','clicked');
      $('#turntext1').text("It is 0's turn");
      $('#gamegrid').attr('class', 'turn_o');
      count++;
      } else if ($('#gamegrid').attr('class') === 'turn_o' && ($(this).attr('id') != 'clicked')){
      $(this).append($('<p class="o">O</p>'));
      $(this).attr('id','clicked');
      $('#turntext1').text("It is X's turn");
      $('#gamegrid').attr('class', 'turn_x');
      count++;
      }
        //X wins the game
        if ($('.block.one p').attr('class') === 'x' && $('.block.two p').attr('class') === 'x' && $('.block.three p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.one p').attr('class') === 'x' && $('.block.four p').attr('class') === 'x' && $('.block.seven p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.one p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.nine p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.three p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.seven p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.two p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.eight p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.three p').attr('class') === 'x' && $('.block.six p').attr('class') === 'x' && $('.block.nine p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.four p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.six p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.seven p').attr('class') === 'x' && $('.block.eight p').attr('class') === 'x' && $('.block.nine p').attr('class') === 'x'){
          $('#turntext1').text('X wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        // 0 wins the game
        if ($('.block.one p').attr('class') === 'o' && $('.block.two p').attr('class') === 'o' && $('.block.three p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.one p').attr('class') === 'o' && $('.block.four p').attr('class') === 'o' && $('.block.seven p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.one p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.nine p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.three p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.seven p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.two p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.eight p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.three p').attr('class') === 'o' && $('.block.six p').attr('class') === 'o' && $('.block.nine p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.four p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.six p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if ($('.block.seven p').attr('class') === 'o' && $('.block.eight p').attr('class') === 'o' && $('.block.nine p').attr('class') === 'o'){
          $('#turntext1').text('O wins the game!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }
        else if(count === 9) {
          $('#turntext1').text('The game is a DRAW!').css('font-size', '65px');
          $('#gamegrid').fadeOut();
        }









    });
});

$(document).ready( () => {

  var questions = ['Criminal Justice','Economy','Education','Gun Regulation','Trade','Energy and Environmental Issues','Immigration','Healthcare','Foreign Policy','Domestic Policy'];


  const complete1 = () => {

    $('#nav1 a').each( function() {

      questions.indexOf(this.id) == -1 ?   $(`#${this.id}`).click( () => complete1() ) : null;

      let item = JSON.parse(window.localStorage.getItem(this.id)) || null;

      let register = item || true;
      this.id == 'Register' && item ? Object.values(item).forEach( r => register = register ? r != null : register ) : null;

      item && register ? $(this).html(`${this.id} <span><b>&#x2713;</b></span>`) : questions.indexOf(this.id) != -1 ? $(this).text(this.id) : null;

    });

  }

  const complete2 = () => {

    $('#nav1 a').each( function() {

      window.localStorage.getItem(this.id) && this.id != 'Register' ? $(this).html(`${this.id} <span><b>&#x2713;</b></span>`) : questions.indexOf(this.id) != -1 ? $(this).text(this.id) : null;
    });

  }

  const snackbar = () => {
    $('#snackbar').toggleClass('show');
    $('#snackbar').css('background-color','#33cc33');
    $('#snackbar').css('color','#fff');
    $('#snackbar').text('Answer Saved!');
    setTimeout(() => { $('#snackbar').toggleClass('show'); }, 3000);
  }

  const progressBar = () => {

    let total = 0;
    questions.forEach( (q) => {
      total = window.localStorage.getItem(q) != null ? total + 1 : total;
    })

    let p = total/questions.length;
    $('#nav a:nth-of-type(2)').addClass('w3-disabled');
    $('#nav a:nth-of-type(2)').attr('href',null);
    $('#progress').width(`${p * 100 == 0 ? 10 : p * 100}%`);
    $('#progress').text(`${p * 100}%`);
    $('#progress').removeClass('w3-blue w3-green w3-yellow w3-orange w3-red');
    if(p === 1){
      $('#progress').addClass('w3-blue');
      $('#nav a:nth-of-type(2)').removeClass('w3-disabled');
      $('#nav a:nth-of-type(2)').attr('href','results.html');
    }
    else if(p > .7) $('#progress').addClass('w3-green');
    else if(p > .5) $('#progress').addClass('w3-orange');
    else if (p > .3) $('#progress').addClass('w3-yellow');
    else $('#progress').addClass('w3-red');
  }


  $('#nav1 a').click( (e) => complete1(e) );

  $('#summary input[type=radio]').click( () => setTimeout( () => complete2(), 250) );

  $('textarea').on('click change', () => setTimeout( () => complete2(), 250) );

  /**
    Info Checkbox event handler
    If Additional information checkbox selected show information
  **/
  $('input[type=checkbox]').click( e => e.target.checked == true ? $('#info').show(true) : $('#info').hide(true));

  /**
    Radio Buttons event handler
    Monitor radio buttons, if yes or no selected save, else if other selected clear saved input
  **/
  $('input[type=radio]').change( e => {

    if(e.target.value != 3) {
      snackbar();
      $('textarea').val(null);
      $('textarea').hide(true);
      window.localStorage.setItem(`${$('#policy').text()}`, JSON.stringify({ [$('#questions').val()] : e.target.value }));
    }
    else{
      $('textarea').show(true);
      $('textarea').val(null);
      window.localStorage.removeItem($('#policy').text());
    }

    progressBar();

  });

  /**
    Text box event handler
    If "other" text field has one or more characters save input
  **/
  $('textarea').change( e => {

      if(e.target.value.length > 0){
        snackbar();
        window.localStorage.setItem(`${$('#policy').text()}`, JSON.stringify({ [$('#questions').val()] : { 3 : e.target.value} }));
      }else window.localStorage.removeItem($('#policy').text());

      progressBar();

  });


complete1();
complete2();
progressBar();

})

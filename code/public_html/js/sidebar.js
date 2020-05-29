$(document).ready( () => {

  var questions = ['Register','Criminal Justice','Economy','Education','Gun Regulation','Trade','Energy and Environmental Issues','Immigration','Healthcare','Foreign Policy','Domestic Policy'];

  $('#sidebar_open').on('click mouseover mouseleave', e => e.type == 'click' ?
    document.getElementById("mySidebar").style.display = "block" :
    e.type == 'mouseover' ? $('#sidebar_open').addClass('w3-card-4') : $('#sidebar_open').removeClass('w3-card-4')
  );

  $('#sidebar_close').click( (e) =>  {
    e.preventDefault();
    document.getElementById("mySidebar").style.display = "none";

  });

  $('#candidates').click( (e) =>{
    e.preventDefault();
    $('#candidates1').toggleClass('w3-hide');
    $('#candidates i').toggleClass('rotate');
  });

  $('#navQuestions').click( e => {
    $('#navQuestions1').toggleClass('w3-hide');
    $('#navQuestions i').toggleClass('rotate');
  });

  const update = () => {

    let counter = 0;

    questions.forEach((item, i) => {

      let flag = JSON.parse(window.localStorage.getItem(item)) || false;
      if(flag && item != 'Register') counter += 1;

      let register = flag || true;
      item == 'Register' && flag ? Object.values(flag).forEach( r => register = register ? r != null : register ) : null;

      flag && register ? $(`#navQuestions1 a[id='${item}']`).html(`${item} <span><b>&#x2713;</b></span>`) : $(`#navQuestions1 a[id='${item}']`).html(item);
    });

    counter == 10 ? $('#mySidebar a[href="results.html"]').show(true) : $('#mySidebar a[href="results.html"]').hide(true);

  }

  $('input[type=radio], textarea').change( ()=>{
      update();
  });


  update();

})

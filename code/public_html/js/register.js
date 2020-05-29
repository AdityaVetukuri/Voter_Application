$(document).ready( () => {

  const snackbar = () => {
    $('#snackbar').toggleClass('show');
    $('#snackbar').css('background-color','orange');
    $('#snackbar').css('color','brown');
    $('#snackbar').text('Successfully Registered!');
    setTimeout(() => { $('#snackbar').toggleClass('show'); }, 3000);
  }


  $('#register form input').change( e =>{

    let user = JSON.parse(window.localStorage.getItem('Register')) || {'name' : null, 'email' : null, 'phone' : null, 'age' : null};

    if(e.target.name == 'name') user.name = verifyName(user, e.target.value);

    if(e.target.name == 'email') user.email = verifyEmail(user, e.target.value);

    if(e.target.name == 'phone') user.phone = verifyPhone(user, e.target.value);

    if(e.target.name == 'age') user.age = verifyAge(user, e.target.value);

    if(user.name && user.email && user.phone && user.age) {

      $(`#nav1 a[id='Register']`).html('Register <span><b>&#x2713;</b></span>');
      $(`#navQuestions1 a[id='Register']`).html('Register <span><b>&#x2713;</b></span>');
      snackbar();
    }
    else {
      $(`#navQuestions1 a[id='Register']`).html('Register');
      $(`#nav1 a[id='Register']`).html('Register');
    }

  });


  const verifyName = (user, name) => {
    if(name.length > 2){
      $('label[for=name]').html(`<span style="color:green;">Correct</span>`);
      user.name = name;
      //name.split(/\s+/).forEach( (word, i) => { word = word[0].toUpperCase() + word.substr(1); user.name += i == 0 ? word : " " + word; });
      window.localStorage.setItem('Register', JSON.stringify(user));
      return user.name;
    }
    else $('label[for=name]').html(`<span style="color:red;">Too short</span>`);

    return null;
  }


  const verifyEmail = (user, email) => {
    if(/^\S+@\w+\.\w+$/.test(email)){
      $('label[for=email]').html(`<span style="color:green;">Correct</span>`);
      user.email = email;
      window.localStorage.setItem('Register', JSON.stringify(user));
      return user.email;
    }
    else $('label[for=email]').html(`<span style="color:red;">Invalid email</span>`);

    return null;
  }

  const verifyPhone = (user, phone) => {
    phone = phone.replace(/[^\d]/gi, "");
    if(phone.length > 9){
        $('label[for=phone]').html(`<span style="color:green;">Correct</span>`);
        user.phone = phone.substr(0, 10);
        window.localStorage.setItem('Register', JSON.stringify(user));

        document.getElementById("Phone Number").value = phone.substr(0, 11);

        return user.phone;
    }
    else $('label[for=phone]').html(`<span style="color:red;">Invalid phone number</span>`);

    return null;
  }

  const verifyAge = (user, age) => {
    if(/^\d{4}-\d{2}-\d{2}$/.test(age)){
      $('label[for=age]').html(`<span style="color:green;">Correct</span>`);
      user.age = age;
      window.localStorage.setItem('Register', JSON.stringify(user));
      return user.age;
    }
    else $('label[for=age]').html(`<span style="color:red;">Invalid phone number</span>`);

    return null;
  }

})

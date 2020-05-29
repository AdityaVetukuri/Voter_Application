$(document).ready( () =>{

  const profile = () => {

    let user = JSON.parse(window.localStorage.getItem('Register')) || null;

    user ?
      $('#collapseOne div').html(`
        <table class="w3-table-all">
        <tr><td>Name:</td><td>${user.name}</td></tr>
        <tr><td>Email:</td><td>${user.email}</td></tr>
        <tr><td>Phone Number:</td><td>${user.phone}</td></tr>
        <tr><td>Date of Birth:</td><td>${user.age}</td></tr>
        `) : null;

    user != null ? Object.entries(user).forEach( u =>{

        if(!u[1]){
          $('#collapseOne div').html('<p>Registration Incomplete.</p>');
          $('#collapseOne').removeClass('show');
          return;
        }

    }) : $('#collapseOne div').html('<p>No registration information available.</p>');

  }

  profile();

})

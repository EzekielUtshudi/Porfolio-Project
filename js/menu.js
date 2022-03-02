const btn = document.querySelector('.mb-menu');
const menu = document.querySelector('.hamburger');
const menuList = document.querySelectorAll('.mb-menu-list a');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

$(function() {

  $(".btnSubmit").on("click", function(e) {
    e.preventDefault();

    var email = $(".textEmail").val();

     if (email.length > 0)
     {
      if (email == email.toLowerCase())
      {
        $(".form").submit();
      }
      else {
        $(".txtError").text("Invalid input");
      }
     }
     else 
     {
       alert("no input");
     }

  });

});

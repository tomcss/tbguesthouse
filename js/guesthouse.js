var login = function () {
    console.log("login");

    $('.director').hide();
    $('.director-login').show();
};

var signup = function () {
    console.log("signup");

    $('.director').hide();
    $('.director-signup').show();
};

var routes = {
  '/login': login,
  '/signup': signup,
  '': login
};

var router = Router(routes);
router.configure( {html5history: true}); // No hash tags
router.init();

// Click handlers

$( '.loginlink').on( 'click', function(e) { router.setRoute('login'); });
$('.signuplink').on( 'click', function(e) { router.setRoute('signup'); });

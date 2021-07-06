function loginPage() {
  $('#login-page').show()
  $('#main-page').hide()
}

function homePage() {
  $('#login-page').hide()
  $('#main-page').show()
  $('#home-page').empty()

  $.ajax({
    url: 'http://localhost:3000/photos',
    method: 'GET',
    headers: { access_token: localStorage.getItem('access_token') },
  })
    .done((data) => {
      data.photos.forEach((photo) => {
        $('#home-page').append(`
          <div class="card-custom uk-card uk-card-default uk-card-hover uk-card-body">
              <img src="${photo.imageUrl}" alt="image">
          </div>
        `)
      })
    })
    .fail(({ responseJSON }) => {
      console.log(responseJSON)
    })
}

function onLogin(e) {
  e.preventDefault()
  const email = $('#email').val()
  const password = $('#password').val()

  $.ajax({
    url: 'http://localhost:3000/login',
    method: 'POST',
    data: {
      email,
      password,
    },
  })
    .done((user) => {
      localStorage.setItem('access_token', user.access_token)

      homePage()
    })
    .fail((err) => {
      console.log(err)
    })
}

function isLoggedIn() {
  if (localStorage.getItem('access_token')) {
    homePage()
  } else {
    loginPage()
  }
}

function onLogout() {
  localStorage.removeItem('access_token')

  isLoggedIn()
}

$(document).ready(function () {
  isLoggedIn()

  $('#login-form').submit(onLogin)
  $('#logout-btn').click(onLogout)
})

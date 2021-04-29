// const button = what the fuck

button.addEventListener("click", function () {
  const URL = 'https://trefle.io/api/v1/plants?token=rNcvKrCyAO_7NPzYh9ev56Q0UXSGul2ttWFRtMVfoOc';
  console.log('button clicked')

  fetch(URL)
  .then(function (rawResponse) {
      return rawResponse.json();
  })
  .then(function (json) {
      pics.src = json.message
      console.log(json)
  })
})
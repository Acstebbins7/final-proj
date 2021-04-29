const fetch = require('node-fetch');

(async () => {
  const response = fetch('https://trefle.io/api/v1/plants?token=rNcvKrCyAO_7NPzYh9ev56Q0UXSGul2ttWFRtMVfoOc');
  const json = response.json();
  console.log(json);
})();


//  // Step 1: Make a GET request to the Dog API URL
// fetch(URL)

// // Step 2: Extract JSON from response
// .then((res) => res.json())

// // Step 3: Process JSON as we please
// .then((data) => {

//     console.log('success!');
//     console.log(data.message);

//     // TODO: Handle the data here

// });
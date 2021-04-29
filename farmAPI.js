const fetch = require('node-fetch');

(async () => {
  const response = fetch('https://trefle.io/api/v1/plants?token=rNcvKrCyAO_7NPzYh9ev56Q0UXSGul2ttWFRtMVfoOc');
  const json = response.json();
  console.log(json);
})();
const PlantAPI = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=rNcvKrCyAO_7NPzYh9ev56Q0UXSGul2ttWFRtMVfoOc';

plantButton.addEventListener("click", plants)

function plants() {
    fetch(PlantAPI)
        .then((res) => res.json())
            .then((data) =>{
                console.log(data)
            })
}

// older attempts for plant api

// attempt #1

// const URL = 'http://{defaultHost}/api/v1/plants/{id}';
// async function plants() {
//   const res = await fetch(URL);
//   const data = await res.json();
//   console.log(data);
// }
// plants();


// Attempt #2 For grabbing images
// console.log('attempting to work in a fetch');

// async function catchImage() {
//     const URL = '';
//     const res = await fetch('');
// }
//     fetch()
//     .then(res => {
//         console.log(res);
//         return res.blob();
//     }).then(blob => {
//         console.log(blob);
//         document.getElementById('plants').src = URL.createObjectURL(blob);
//     });

// Attempt #3

// const fetchData = async () => {
//   const response = await fetch(`farmAPI.js`);
//     const json = await response.json();
//     return json
//   }
//   const fetchedData = fetchData().then((data) => {
//     console.log(data.data)
//   })

// Attempt #4

// getPlantData (); 

// async function getPlantData() {
//     const response = await fetch('');
//     const data = await response.text();

//     const table = data.split('\n').slice(1);
//     table.forEach(row => {
//         const columns = row.split(',');
//         const year = columns[0];
//         const temp = columns[1];
//         console.log(year, temp);
//     });
// }
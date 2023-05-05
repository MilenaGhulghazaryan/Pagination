// const container = document.querySelector('#container')
// const sastav = ['J','G','S','AR','AN']
// console.log(sastav[Math.floor(Math.random()*sastav.length)])
// function render(array) {
//     array.forEach(element => {
//         const h2 = document.createElement('h2')
//         h2.innerText = `${element.id}: ${element.title}`
//         container.append(h2)
//     });
// }

// fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);
//         render(res)
//     })

// async function fetchData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=2')
//     const data = await res.json()

//     data.forEach(element => {
//         const h2 = document.createElement('h2')
//         h2.innerText = `${element.id}: ${element.title}`
//         container.append(h2)
//     });
// }

// fetchData()
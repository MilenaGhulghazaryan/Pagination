// const main = document.querySelector('main')
// const page1 = document.querySelector('.page1')
// function render(array) {
//         array.forEach(element => {
//             const h2 = document.createElement('h2')
//             h2.innerText = `${element.id}: ${element.title}`
//            main.append(h2)
//         });
//     }

// function part1(){
// fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
//     .then((res) => res.json())
//     .then((res) => {
//         render(res)
//     })
// }

// page1.onclick = ()=> {
//     part1()
// }


const images = document.querySelector('.images')
images.innerHTML = '<img src="images/img1.jpg" alt="">'

function image1() {
    images.innerHTML = '<img src="images/img1.jpg" alt="">'
}
function image2() {
    images.innerHTML = '<img src="images/img2.jpg" alt="">'
}

function image3() {
    images.innerHTML = '<img src="images/istockphoto-517188688-612x612.jpg">'
}
function image4() {
    images.innerHTML = '<img src="images/img4.jpg">'
}
function image5() {
    images.innerHTML = '<img src="images/img5.jpg">'
}
function image6() {
    images.innerHTML = '<img src="images/img6.jpg">'
}
function image7() {
    images.innerHTML = '<img src="images/img7.jpg">'
}
function image8() {
    images.innerHTML = '<img src="images/img8.jpg">'
}
function image9() {
    images.innerHTML = '<img src="images/img9.jpg">'
}
function image10() {
    images.innerHTML = '<img src="images/img10.jpg">'
}



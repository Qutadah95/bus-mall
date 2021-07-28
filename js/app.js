'use strict';

let parant = document.getElementById('product');
let leftPhoto = document.createElement('img');
// console.log(parant);
parant.appendChild(leftPhoto);
//from https://www.educative.io/
leftPhoto.setAttribute('id', 'leftPhoto');
let rightPhoto = document.createElement('img');

parant.appendChild(rightPhoto);
//from https://www.educative.io/
rightPhoto.setAttribute('id', 'rightPhoto');
let middlePhoto = document.createElement('img');

parant.appendChild(middlePhoto);
//from https://www.educative.io/
middlePhoto.setAttribute('id', 'middlePhoto');
let maxAttembt = 25;
let userConter = 0;

let leftPhotoIndex;
let rightPhotoIndex;
let middlePhotoIndex;
let photoArr = [];
let numbers = [];
let votesArr = [];
let namesArr = [];
let shownArr = [];



function Product(name, src) {

    this.name = name;
    this.src = src;
    this.votes = 0;
    this.seen = 0;
    photoArr.push(this);
    namesArr.push(this.name);

}





new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//from demo
function random() {

    return Math.floor(Math.random() * photoArr.length);
}


function rander() {

    leftPhotoIndex = random();
    rightPhotoIndex = random();
    middlePhotoIndex = random();



    while (leftPhotoIndex === rightPhotoIndex || leftPhotoIndex === middlePhotoIndex || rightPhotoIndex === middlePhotoIndex || numbers.includes(leftPhotoIndex) || numbers.includes(rightPhotoIndex) || numbers.includes(middlePhotoIndex)) {
        leftPhotoIndex = random();
        rightPhotoIndex = random();
        middlePhotoIndex = random();


    }



    leftPhoto.src = photoArr[leftPhotoIndex].src;
    rightPhoto.src = photoArr[rightPhotoIndex].src;
    middlePhoto.src = photoArr[middlePhotoIndex].src;
    photoArr[leftPhotoIndex].seen++;
    photoArr[rightPhotoIndex].seen++;
    photoArr[middlePhotoIndex].seen++;
    numbers = [leftPhotoIndex, rightPhotoIndex, middlePhotoIndex];

}

rander();

leftPhoto.addEventListener('click', clickPhoto);
rightPhoto.addEventListener('click', clickPhoto);
middlePhoto.addEventListener('click', clickPhoto);

function clickPhoto(event) {
    rander();


    // console.log(event.target.id);
    if (userConter < maxAttembt) {
        if (event.target.id === 'leftPhoto') {
            photoArr[leftPhotoIndex].votes++;


        } else if (event.target.id === 'rightPhoto') {
            photoArr[rightPhotoIndex].votes++;
        } else if (event.target.id === 'middlePhoto') {
            photoArr[middlePhotoIndex].votes++;
        }




    } else {

        let list = document.getElementById('list');
        for (let i = 0; i < photoArr.length; i++) {
            let listElemant = document.createElement('li');
            list.appendChild(listElemant);
            listElemant.textContent = `${photoArr[i].name} had ${photoArr[i].votes} votes, and was seen ${photoArr[i].seen} times.`;

        }

        for (let i = 0; i < photoArr.length; i++) {
            // console.log(photoArr[i].votes);
            votesArr.push(photoArr[i].votes);
            shownArr.push(photoArr[i].seen);

        }
        leftPhoto.removeEventListener('click', clickPhoto);
        rightPhoto.removeEventListener('click', clickPhoto);
        middlePhoto.removeEventListener('click', clickPhoto);
        updatinf();
        showChart();
    }
    userConter++;





}

//from w3schools
function myFunction() {
    let x = document.getElementById('list');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//from demo

function showChart() {



    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: shownArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}

function updatinf() {

    // let newVotes = JSON.stringify(votesArr);
    // let newSeen = JSON.stringify(shownArr);
    // localStorage.setItem('vote', newVotes);
    // localStorage.setItem('seen', newSeen);

    let newProdact = JSON.stringify(photoArr);
    localStorage.setItem('Product', newProdact);

    // console.log(newProdact);
}

function setUpdat() {

    // let dataVote = localStorage.getItem('vote');
    // let dataSeen = localStorage.getItem('seen');

    // let parstVote = JSON.parse(dataVote);
    // let parstSeen = JSON.parse(dataSeen);
    // // console.log(parstVote);
    // // console.log(parstSeen);
    // // console.log(dataVote);
    // // console.log(dataSeen);

    // if (parstVote !== null && parstSeen !== null) {
    //     votesArr = parstVote;
    //     shownArr = parstSeen;
    //     // for (let i = 0; i < dataVote.length; i++) {
    //     //     dataVote[i] += parstVote[i];
    //     //     dataSeen[i] += parstSeen[i];

    //     // }

    let data = localStorage.getItem('Product');
    let parstData = JSON.parse(data);
    // console.log(parstData);
    
    if (parstData !==null) {
        photoArr = parstData;
    }


    // }

    rander();


}
setUpdat();






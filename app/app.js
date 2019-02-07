console.log('start!')
let animalSounds = {
  cow: {
    sound: 'Mooooo!!!',
    img: 'https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg',
  },
  dog: {
    sound: 'Woof!',
    img: 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000',
  },
  cat: {
    sound: 'Meow..',
    img: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
  },
  duck: {
    sound: 'Quack',
    img: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/17686_XXX_v1.tif&wid=650&cvt=jpeg'
  },
  bird: {
    sound: 'Tweet',
    img: 'https://i.ytimg.com/vi/3OYuJKvr9f4/maxresdefault.jpg'
  },
  sheep: {
    sound: 'baa',
    img: 'https://modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts.jpg'
  },
}

function makeSound(animal) {
  document.getElementById('result').innerHTML = `<h1>The ${animal} Says: ${animalSounds[animal.toLowerCase()].sound}</h1>
    <img class="animal-pic" src="${animalSounds[animal].img}"/>
    `
}

function drawButtons(obj) {
  let template = ''
  for (let animal in obj) {
    template += `<button onclick="makeSound('${animal}')">${animal}</button>`
  }
  template += `<button onclick="random()">Random</button>`
  document.getElementById('buttons').innerHTML = template
}
function random() {
  //select a random animal
  let choices = Object.keys(animalSounds)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = choices[choiceIndex]
  makeSound(choice)
}

drawButtons(animalSounds)

// function cow() {
//   document.getElementById('result').innerText = "The Cow Says: MOOOOOO!!!"
// }





















// let me = {
//   name: 'Sean',
//   surname: 'Mr.'
// }

// let jake = {
//   name: 'Jake',
//   surname: ''
// }

// let jeff = {
//   name: 'Jeff',
//   surname: 'Mrs.'
// }
// let users = [me, jake, jeff]


// function formalGreeting(user) {
//   if (user.surname) {
//     return 'Greetings ' + user.surname + '' + user.name)
//   } else {
//     console.log('Hey', user.name)
//   }
// }

// ////formalGreeting(me)
// //formalGreeting(Jake)

// function greetAll(arr) {
//   arr.forEach(elem => {
//     formalGreeting(elem)
//   });
// }

// function getALLFancyUsers(arr) {
//   let greetings = []
//   let users = arr.filter(user => {
//     return users.surname.length > 0
//   })
//   users.forEach(user => {
//     let greeting = formalGreeting(user)
//     greetings.push(greeting)
//   })

// function greet() {
//   console.log('hello, world')
// }




// let greetings = () => {
//   console.log('Good Morning World')
// }

// greetings()

// greet()







console.log('finish')
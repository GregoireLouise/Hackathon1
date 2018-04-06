const targetElement = document.getElementById('main')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/620.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img1" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img1">${hero.name}</p>
      <p class="img1"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img1"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img1"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button1'>Select</button>
      `
    targetElement.innerHTML = html
  })

const targetElement2 = document.getElementById('main2')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/623.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img2" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img2">${hero.name}</p>
      <p class="img2"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img2"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img2"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button2'>Select</button>
      `
    targetElement2.innerHTML = html
  })

const targetElement3 = document.getElementById('main3')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/628.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img3" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img3">${hero.name}</p>
      <p class="img3"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img3"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img3"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button3'>Select</button>
      `
    targetElement3.innerHTML = html
  })

const targetElement4 = document.getElementById('main4')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/650.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img4" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img4">${hero.name}</p>
      <p class="img4"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img4"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img4"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button4'>Select</button>
      `
    targetElement4.innerHTML = html
  })

const targetElement5 = document.getElementById('main5')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/459.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img5" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img5">${hero.name}</p>
      <p class="img5"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img5"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img5"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button5'>Select</button>
      `
    targetElement5.innerHTML = html
  })

const targetElement6 = document.getElementById('main6')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/30.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
  console.log(hero)

    const html = `
      <img class="img6" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img6">${hero.name}</p>
      <p class="img6"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img6"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img6"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button6'>Select</button>
      `
    targetElement6.innerHTML = html
  })

const targetElement7 = document.getElementById('main7')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/370.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img7" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p>${hero.name}</p>
      <p class="img7"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img7"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img7"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button7'>Select</button>
      `
    targetElement7.innerHTML = html
  })

const targetElement8 = document.getElementById('main8')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/389.json')
  .then(response => response.json())
  .then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
    console.log(hero)

    const html = `
      <img class="img8" alt="${hero.name}'s photo" src="${hero.images.md}" />
      <p class="img8">${hero.name}</p>
      <p class="img8"><strong>Strength :</strong> ${hero.powerstats.strength}</p>
      <p class="img8"><strong>Power :</strong> ${hero.powerstats.power}</p>
      <p class="img8"><strong>Durability :</strong> ${hero.powerstats.durability}</p></br>
      <button class='button8'>Select</button>
      `
    targetElement8.innerHTML = html
  })

$(document).ready(function () {
  $('button.button1').click(function () {
    $('img.img1').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img1').show()
  })
})

$(document).ready(function () {
  $('button.button2').click(function () {
    $('img.img2').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img2').show()
  })
})

$(document).ready(function () {
  $('button.button3').click(function () {
    $('img.img3').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img3').show()
  })
})

$(document).ready(function () {
  $('button.button4').click(function () {
    $('img.img4').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img4').show()
  })
})

$(document).ready(function () {
  $('button.button5').click(function () {
    $('img.img5').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img5').show()
  })
})

$(document).ready(function () {
  $('button.button6').click(function () {
    $('img.img6').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img6').show()
  })
})

$(document).ready(function () {
  $('button.button7').click(function () {
    $('img.img7').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img7').show()
  })
})

$(document).ready(function () {
  $('button.button8').click(function () {
    $('img.img8').animate({
      height: '+250px',
      width: '+250px',
      opacity: '0.5'
    })
    $('p.img8').show()
  })
})

const targetElement = document.getElementById('main')

function doFight () {
  const reqSpiderMan = new XMLHttpRequest()
  reqSpiderMan.open('GET', 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/620.json', false)
  reqSpiderMan.send(null)

  const reqSpiderWoman = new XMLHttpRequest();
  reqSpiderWoman.open('GET', 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/623.json', false)
  reqSpiderWoman.send(null)

  if (!(reqSpiderMan.status === 200 && reqSpiderWoman.status === 200)) {
    return
  }
  let spiderman = JSON.parse(reqSpiderMan.responseText)
  let spiderwoman = JSON.parse(reqSpiderWoman.responseText)
  let strenghtMan = `${spiderman.powerstats.strength}`
  let strenghtWoman = `${spiderwoman.powerstats.strength}`
  let manName = `${spiderman.name}`
  let womanName = `${spiderwoman.name}`

  console.log(manName + ' posède ' + strenghtMan + ' de force et ' + (`${spiderman.powerstats.durability}`) * 10 + ' points de vie.')
  console.log(womanName + ' posède ' + strenghtWoman + ' de force et ' + (`${spiderwoman.powerstats.durability}`) * 10 + ' points de vie.')

  function attackPwr () {
    return Math.trunc((Math.random() * strenghtMan))
  }
  function attackPwrWo () {
    return Math.trunc((Math.random() * strenghtWoman))
  }

  let hP = (`${spiderman.powerstats.durability}`) * 10
  let hPW = (`${spiderwoman.powerstats.durability}`) * 10
  while (hP > 0 && hPW > 0) {
    let dgt = attackPwr()
    let dgtw = attackPwrWo()
    hP -= dgtw
    hPW -= dgt
    console.log(womanName + ' a infligé ' + dgtw + ' de dégats à ' + manName)
    console.log('Il reste ' + hP + ' pv à ' + `${spiderman.name}`)
    console.log(manName + ' a infligé ' + dgt + ' de dégats à ' + womanName)
    console.log('Il reste ' + hPW + ' pv à ' + `${spiderwoman.name}`)
  }
  console.log('Nous avons un vainqueur!!')
}

doFight()

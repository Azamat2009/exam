const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]

for (let item of data) {
    let card = document.createElement('div')
    let preTitle = document.createElement('h4')
    let title = document.createElement('h2')
    let descr = document.createElement('span')
    let img = document.createElement('img')
    let box = document.querySelector('.box')

    card.classList.add('card')
    img.src = `./img/${item.img}.jpg`

    preTitle.innerHTML = item.preTitle
    title.innerHTML = item.title
    descr.innerHTML = item.description

    box.append(card)
    card.append(preTitle,title,descr,img)
}
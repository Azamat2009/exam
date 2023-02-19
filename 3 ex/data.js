const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        video: 'video.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: 'm1.png',
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                img: 'memory.png',
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        video: 'video.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: 'm1.png',
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                img: 'memory.png',
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        video: 'video.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                img: 'intel.png',
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                img: 'memory2.png',
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

for (let item of data) {
    let container = document.querySelector('.container')
    let product = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('h2')
    let button = document.createElement('button')
    let hr = document.createElement('hr')
    let disSize = document.createElement('h3')
    let disTitle = document.createElement('span')
    let chipImg = document.createElement('img')
    let chipTitle = document.createElement('h3')
    let chipDescr = document.createElement('span')
    let memoryImg = document.createElement('img')
    let ramTitle = document.createElement('h3')
    let ramDescr = document.createElement('span')
    let memSize = document.createElement('h2')
    let video = document.createElement('img')
    let camTitle = document.createElement('h3')
    let camDescr = document.createElement('p')
    let touchBar = document.createElement('h3')
    let sound = document.createElement('h3')
    let touchId = document.createElement('h3')

    button.innerHTML = 'Buy'
    title.innerHTML = item.title
    img.src = `./img/${item.img}`
    disSize.innerHTML = item.specs.display.size
    disTitle.innerHTML = item.specs.display.title
    chipImg.src = `./img/${item.specs.chip.img}`
    chipTitle.innerHTML = item.specs.chip.title
    chipDescr.innerHTML = item.specs.chip.description
    memoryImg.src = `./img/${item.specs.memory.img}`
    ramTitle.innerHTML = item.specs.ram.title
    ramDescr.innerHTML = item.specs.ram.description
    memSize.innerHTML = item.specs.memory.size + 'TB'
    video.src = `./img/${item.video}`
    camTitle.innerHTML = item.specs.camera.title
    camDescr.innerHTML = item.specs.camera.description
    touchBar.innerHTML = item.other
    sound.innerHTML = item.other
    touchId.innerHTML = item.other
    

    chipImg.classList.add('prodImg')
    memoryImg.classList.add('prodImg')
    video.classList.add('prodImg')

    product.classList.add('product')

    container.append(product)

    product.append(img,title,button,hr, disSize ,disTitle   , chipImg  , chipTitle  ,chipDescr   ,memoryImg   ,ramTitle  ,ramDescr  ,memSize  ,video  ,camTitle  ,camDescr , touchBar , sound ,touchId)

    button.onclick = () => {
        window.location.href = item.url;
    }
}
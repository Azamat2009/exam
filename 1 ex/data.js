const data = [
    {
        title: 'Mac',
        img: 'mac.png'
    },
    {
        title: 'iPhone',
        img: 'iphone.png'
    },
    {
        title: 'iPad',
        img: 'ipad.png'
    },
    {
        title: 'Apple Watch',
        img: 'apple watches.png'
    },
    {
        title: 'AirPods',
        img: 'airpods.png'
    },
    {
        title: 'AirTag',
        img: 'airtag.png'
    },
    {
        title: 'Apple TV',
        img: 'apple tv.png'
    },
    {
        title: 'HomePod mini',
        img: 'homepod mini.png'
    },
    {
        title: 'Accessories',
        img: 'accessories.png'
    },
]

for(let item of data) {
    let container = document.querySelector('.container')
    let wrapper = document.createElement('div')
    let title = document.createElement('h4')
    let img = document.createElement('img')

    wrapper.classList.add('wrapper')

    img.src = `./img/${item.img}`
    title.innerHTML = item.title

    container.append(wrapper)
    wrapper.append( img , title)
}
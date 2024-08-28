const searchBtn = document.querySelector('.search_btn')
const searchInput = document.querySelector('.search_box input')
const cardWrapper = document.querySelector('.content_main__list')

const cardArray = [
    {
        id: 0,
        title: 'первый', 
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский', 
        date: '10 июля 11:39',
        img: './image/card_img.png'
    },
    {
        id: 1,
        title: 'второй', 
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский', 
        date: '10 июля 11:39',
        img: './image/card_img.png'
    },
    {
        id: 2,
        title: 'Пвх материал 2й сорт', 
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский', 
        date: '10 июля 11:39',
        img: './image/card_img.png'
    }
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''
    cardList.forEach((item, index) =>{
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content_main__list_item">
                                <div class="content_main__list_item__img">
                                    <img src="${item.img}" alt="">
                                </div>
                                <h5 class="content_main__list_item__title">
                                ${item.title}
                                </h5>
                                <strong class="content_main__list_item__price">${item.price}</strong>
                                <div class="content_main__list_item__desc_box">
                                    <span class="content_main__list_item__desc">${item.address}</span>
                                    <span class="content_main__list_item__desc">${item.date}</span>
                                </div>
                            </a>  
        `)
    })
}

const filteredArray = (array, value) =>{

    console.log(array);
    console.log(value);

    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start'
// cardWrapper.sytle.rowGap = 'none'
cardWrapper.style.gap = '30px'
render(cardArray)

searchBtn.addEventListener('click', () =>{
    render(filteredArray(cardArray, searchInput.value))
})
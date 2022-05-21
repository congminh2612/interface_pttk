const laptops = [
    {
        name: 'Laptop Acer Aspire 1',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 4',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 3',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 4',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 5',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 6',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 7',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
    {
        name: 'Laptop Acer Aspire 8',
        img: 'https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg',
        price: '14.999.999đ',
        supplier: 'Acer'
    },
]

const productWrapper = document.querySelector('.product-wrap')

const htmls = laptops.map(item => {
    return `
    <div class="grid__column-2-3">
        <a href="" class="home-product-item">
            <img src="${item.img}" alt="" class="home-product-item__img">
            <h4 class="home-product-item__name">${item.name}</h4>
            <p class="home-product-item__price">Giá:${item.price}</p>
            <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
        </a>
    </div>
    `
})

productWrapper.innerHTML=htmls.join('')
console.log(productWrapper)
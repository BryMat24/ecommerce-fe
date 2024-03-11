const axios = require('axios').default
const data = require('./seed-data.js');

const {productEndPoint, access_token} = data;

const products = [
    {
        name: "Apple MacBook Air M2",
        description: "Excellent balance of performance, battery life, and design. M2 chip delivers snappy performance.",
        imageUrl: "https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg?w=1390&crop=1",
        stock: Math.floor(Math.random() * 100) * 5 + 5,  // Random number multiple of 5 between 0 and 100
        price: 1199,
        categoryId: 1,
    },
    {
        name: "Dell XPS 15 OLED",
        description: "Gorgeous OLED display, comfortable keyboard, powerful specs.",
        imageUrl: "https://i.pcmag.com/imagery/reviews/045TJmP8CVMXUwBN5ayR68W-1.fit_scale.size_1028x578.v1655402303.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1500,
        categoryId: 1
    },
    {
        name: "Asus Zenbook 13 OLED",
        description: "Sleek, lightweight, OLED display, long battery life, comfortable keyboard.",
        imageUrl: "https://laptopmedia.com/wp-content/uploads/2021/01/ZenBook-13_UM325UA_SA_OLED_Product-photo_2G_Pine-Grey_05_2000x2000-e1610628949266-300x216.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 1
    },
    {
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        description: "Durable design, fantastic keyboard, excellent security features, long battery life.",
        imageUrl: "https://m.media-amazon.com/images/I/61XXyxsfdRL._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 2619,
        categoryId: 1
    },
    {
        name: "HP Elite Dragonfly G3",
        description: "Sleek, lightweight, incredible battery life, strong performance, comfortable keyboard.",
        imageUrl: "https://www.digitaltrends.com/wp-content/uploads/2022/08/hp-elite-dragonfly-g3-front-angled-e1661282985703.jpg?resize=625%2C417&p=1",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 999.99,
        categoryId: 1
    },
    {
        name: "Samsung Galaxy Book 3 Ultra",
        description: "Gorgeous AMOLED display, S Pen stylus, long battery life.",
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/uk/feature/others/uk-feature-galaxy-book3-ultra-16-inch-np960-447556-536091342?$FB_TYPE_A_JPG$",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1499,
        categoryId: 1
    },
    {
        name: "Apple MacBook Pro 14-inch M3",
        description: "Absolute best performance for demanding tasks. Powerful M3 chip.",
        imageUrl: "https://i.pcmag.com/imagery/reviews/04zMbMnUoRseZs38ofIvFUe-1.fit_scale.size_1028x578.v1699069138.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1999,
        categoryId: 1
    },
    {
        name: "Acer Swift 5",
        description: "Good balance of performance, portability, and battery life.",
        imageUrl: "https://static-ecapac.acer.com/media/catalog/product/s/w/swift-5-aerospace-intel-evo-core-i7.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 1
    },
    {
        name: "Asus Zenbook 14 Flip OLED",
        description: "2-in-1 laptop. Productivity-focused laptop and a tablet mode. OLED display, decent battery life.",
        imageUrl: "https://dlcdnwebimgs.asus.com/gain/99ae25d3-14c1-4be2-9666-aada95484a7a/w800",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 849,
        categoryId: 1
    },
    {
        name: "Lenovo Chromebook Duet 3",
        description: "Great option for tight budgets. Long battery life, lightweight design, access to productivity apps.",
        imageUrl: "https://m.media-amazon.com/images/I/41ESqQ-6q1L._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 349,
        categoryId: 1
    },
    {
        name: "Apple iPad Air (5th generation)",
        description: "Powerful M1 chip, long battery life, beautiful 10.9\" display, supports Apple Pencil 2 for notes and drawing.",
        imageUrl: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968566/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264359_jvpvni.png?tr=w-1000",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 599,
        categoryId: 2
    },
    {
        name: "Apple iPad Pro (12.9-inch, 6th generation)",
        description: "Top-of-the-line performance, stunning 12.9\" Liquid Retina XDR display, Thunderbolt 4 ports, Magic Keyboard compatible.",
        imageUrl: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1099,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy Tab S8 Ultra",
        description: "Largest Android tablet, 14.6\" AMOLED display, powerful Snapdragon 8 Gen 1 processor, S Pen stylus included.",
        imageUrl: "https://m.media-amazon.com/images/I/617fF6iK4gL._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1199.99,
        categoryId: 2
    },
    {
        name: "Google Pixel Tablet",
        description: "New entry with custom Google Tensor chip, clean Android 13, supports Pixel Pen stylus (sold separately).",
        imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/71YZxO0GBSL._AC_UL600_SR600,600_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 492.89,
        categoryId: 2
    },
    {
        name: "OnePlus Pad",
        description: "Affordable Android option, 11.6\" LCD display, MediaTek Dimensity 9000 processor, long-lasting 9500mAh battery.",
        imageUrl: "https://www.oneplus.in/content/dam/oasis/product-asset-library/salami/aries/images-efficiency-img2-1.jpeg.webp",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 629.98,
        categoryId: 2
    },
    {
        name: "Microsoft Surface Pro 9",
        description: "Runs full Windows 11, various configurations with Intel processors, up to 16GB RAM, detachable keyboard sold separately.",
        imageUrl: "https://m.media-amazon.com/images/I/61Odirr0wdL._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1149,
        categoryId: 2
    },
    {
        name: "Lenovo Chromebook Duet 3",
        description: "Budget-friendly Chromebook, detachable keyboard included, access to web-based productivity apps.",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_675462-MLU70044742260_062023-F.webp",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 279,
        categoryId: 2
    },
    {
        name: "Amazon Fire HD 8 Plus (2022)",
        description: "Great for basic tasks, fast processor, long battery life, access to Amazon Appstore (limited productivity apps).",
        imageUrl: "https://m.media-amazon.com/images/I/61Fa6H20UGL._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 120,
        categoryId: 2
    },
    {
        name: "iPad mini (6th generation)",
        description: "Compact and powerful, A15 Bionic chip, 8.3\" Liquid Retina display, supports Apple Pencil 2.",
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654903896391",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 499,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy Tab S7",
        description: "Great performance, gorgeous 120Hz display, S Pen included, DeX mode for productivity.",
        imageUrl: "https://m.media-amazon.com/images/I/91pjZAMbEUS._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 529.99,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        description: "The best overall phone with a powerful processor, gorgeous display, long-lasting battery, and an excellent S Pen stylus for productivity and creativity.",
        imageUrl: "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,  // Random number multiple of 5 between 0 and 100
        price: 1188,
        categoryId: 3
    },
    {
        name: "Apple iPhone 15 Pro Max",
        description: "The best iPhone with a powerful A17 Bionic chip, a stunning triple-lens camera system, and a beautiful Super Retina XDR display.",
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1099,
        categoryId: 3
    },
    {
        name: "Google Pixel 8 Pro",
        description: "The best camera phone with unmatched software processing and a long-lasting battery, in a unique and stylish design.",
        imageUrl: "https://m.media-amazon.com/images/I/713eEl39eLL._AC_SX679_.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 3
    },
    {
        name: "OnePlus 11",
        description: "A powerful flagship phone with super fast charging, a smooth 120Hz display, and a great camera system at a competitive price.",
        imageUrl: "https://oneplus.com.co/oneplus11/spec/oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 699,
        categoryId: 3
    },
    {
        name: "Sony Xperia 1 V",
        description: "A camera-focused phone with a unique 4K OLED display, versatile triple-lens rear camera system with variable zoom, and professional-level videography features.",
        imageUrl: "https://sony.scene7.com/is/image/sonyglobalsolutions/747_ProductPrimary_image?$categorypdpnav$&fmt=png-alpha",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1349,
        categoryId: 3
    },
    {
        name: "Samsung Galaxy S23",
        description: "A more affordable option in the Galaxy S23 series with a powerful processor, excellent cameras, and a bright and clear display.",
        imageUrl: "https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/D1_D2-Combo-KV-Configurator-DT-800x600.jpg?$product-details-jpg$",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 799,
        categoryId: 3
    },
    {
        name: "Apple iPhone 15 Plus",
        description: "A larger and more affordable option in the iPhone 15 series with a big screen, powerful A17 Bionic chip, and a great dual-lens camera system.",
        imageUrl: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-15-Plus-Pink-frontimage",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 3
    },
    {
        name: "Xiaomi 13T",
        description: "A feature-packed phone with a powerful Snapdragon processor, a high-resolution display, and a 120Hz refresh rate for smooth visuals, at a mid-range price.",
        imageUrl: "https://i.ebayimg.com/images/g/9tYAAOSwGY9lFZMR/s-l1600.jpg",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 599,
        categoryId: 3
    },
]

async function addProduct(product){
    axios.post(productEndPoint.POST, product, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${access_token}`
        }
    })
    .then((res) => console.log("Added Product Succesfully"))
    .catch((err) => console.log("Error: ", product.name));
}

for(let i=0; i<products.length; i++){
    addProduct(products[i]);
}
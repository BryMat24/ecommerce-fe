const axios = require('axios').default
const data = require('./seed-data.js');

const {productEndPoint, access_token} = data;

const products = [
    {
        name: "Apple MacBook Air M2",
        description: "Excellent balance of performance, battery life, and design. M2 chip delivers snappy performance.",
        imageUrl: "https://inventstore.in/wp-content/uploads/2023/04/macbook-air-m2-silver-600x600-1.webp",
        stock: Math.floor(Math.random() * 100) * 5 + 5,  // Random number multiple of 5 between 0 and 100
        price: 1199,
        categoryId: 1,
    },
    {
        name: "Dell XPS 15 OLED",
        description: "Gorgeous OLED display, comfortable keyboard, powerful specs.",
        imageUrl: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/03/dell-xps-15-2023.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1500,
        categoryId: 1
    },
    {
        name: "Asus Zenbook 13 OLED",
        description: "Sleek, lightweight, OLED display, long battery life, comfortable keyboard.",
        imageUrl: "https://dlcdnwebimgs.asus.com/gain/1b7d52dd-1049-4de8-856c-abbf914dc051/",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 1
    },
    {
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        description: "Durable design, fantastic keyboard, excellent security features, long battery life.",
        imageUrl: "https://p4-ofp.static.pub/fes/cms/2023/02/10/7qjkk7h1a53t8jq5snivyzumxw040v193587.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 2619,
        categoryId: 1
    },
    {
        name: "HP Elite Dragonfly G3",
        description: "Sleek, lightweight, incredible battery life, strong performance, comfortable keyboard.",
        imageUrl: " https://www.server2u.sg/web/image/product.template/5002/image_1920?unique=12fb093",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 999.99,
        categoryId: 1
    },
    {
        name: "Samsung Galaxy Book 3 Ultra",
        description: "Gorgeous AMOLED display, S Pen stylus, long battery life.",
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/hk_en/2302/gallery/hk-en-galaxy-book3-ultra-16-inch-np960-np960xfh-xa2hk-thumb-534936903",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1499,
        categoryId: 1
    },
    {
        name: "Apple MacBook Pro 14-inch M3",
        description: "Absolute best performance for demanding tasks. Powerful M3 chip.",
        imageUrl: "https://www.itez.sg/media/catalog/product/cache/6488a84316b14c96a67ec1e7ff16751e/m/a/macbook_pro_14inch_m3__1_.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1999,
        categoryId: 1
    },
    {
        name: "Acer Swift 5",
        description: "https://cdn.uc.assets.prezly.com/dd3391a1-e0c7-42e1-bb68-c30dcc210d29/seahorse-02.png",
        imageUrl: "https://cdn.uc.assets.prezly.com/dd3391a1-e0c7-42e1-bb68-c30dcc210d29/seahorse-02.png",
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
        imageUrl: "https://p4-ofp.static.pub/fes/cms/2023/03/07/jj5k4uvfvc0uj5oh8t4noc52spva4x411320.png",
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
        imageUrl: "https://econtent.o2.co.uk/o/econtent/media/get/013341d6-8ce2-435c-a651-243f7ae6a036",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1099,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy Tab S8 Ultra",
        description: "Largest Android tablet, 14.6\" AMOLED display, powerful Snapdragon 8 Gen 1 processor, S Pen stylus included.",
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/sg/sm-x906bzajxsp/gallery/sg-galaxy-tab-s8-ultra-5g-x906-sm-x906bzajxsp-534194325?$650_519_PNG$",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1199.99,
        categoryId: 2
    },
    {
        name: "Google Pixel Tablet",
        description: "New entry with custom Google Tensor chip, clean Android 13, supports Pixel Pen stylus (sold separately).",
        imageUrl: "https://storage.googleapis.com/support-kms-prod/DwjEEz9EqLvL0HHbIZsdtjj2uMWg5KttRFxa",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 492.89,
        categoryId: 2
    },
    {
        name: "OnePlus Pad",
        description: "Affordable Android option, 11.6\" LCD display, MediaTek Dimensity 9000 processor, long-lasting 9500mAh battery.",
        imageUrl: "https://oasis.opstatics.com/content/dam/oasis/page/2023/pad/pad-specs.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 629.98,
        categoryId: 2
    },
    {
        name: "Microsoft Surface Pro 9",
        description: "Runs full Windows 11, various configurations with Intel processors, up to 16GB RAM, detachable keyboard sold separately.",
        imageUrl: "https://www.pricerunner.com/product/640x640/3008578196/Microsoft-Surface-Pro-9-8GB-256GB-SSD.jpg?ph=true",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1149,
        categoryId: 2
    },
    {
        name: "Lenovo Chromebook Duet 3",
        description: "Budget-friendly Chromebook, detachable keyboard included, access to web-based productivity apps.",
        imageUrl: "https://s7d1.scene7.com/is/image/dmqualcommprod/03_ideapad_duet3_chromebook_11_qc_misty_blue_left_180_degree-n?$QC_Responsive$&fmt=png-alpha",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 279,
        categoryId: 2
    },
    {
        name: "Amazon Fire HD 8 Plus (2022)",
        description: "Great for basic tasks, fast processor, long battery life, access to Amazon Appstore (limited productivity apps).",
        imageUrl: "https://gooshop.asia/cdn/shop/files/Fire8HDPlusPNG01_1024x1024_2x_799840dd-34fa-4383-9c8b-9fe2174efd15_1024x1024@2x.webp?v=1692860481",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 120,
        categoryId: 2
    },
    {
        name: "iPad mini (6th generation)",
        description: "Compact and powerful, A15 Bionic chip, 8.3\" Liquid Retina display, supports Apple Pencil 2.",
        imageUrl: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP850/sp850-ipad-mini-6gen-480.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 499,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy Tab S7",
        description: "Great performance, gorgeous 120Hz display, S Pen included, DeX mode for productivity.",
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/sg/sm-t736bzkexsp/gallery/sg-galaxy-tab-s7-fe-5g-t736-sm-t736bzkexsp-457063007?$650_519_PNG$",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 529.99,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        description: "The best overall phone with a powerful processor, gorgeous display, long-lasting battery, and an excellent S Pen stylus for productivity and creativity.",
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/sg/2302/gallery/sg-galaxy-s23-s918-sm-s918bzgbxsp-534857148?$650_519_PNG$",
        stock: Math.floor(Math.random() * 100) * 5 + 5,  // Random number multiple of 5 between 0 and 100
        price: 1188,
        categoryId: 3
    },
    {
        name: "Apple iPhone 15 Pro Max",
        description: "The best iPhone with a powerful A17 Bionic chip, a stunning triple-lens camera system, and a beautiful Super Retina XDR display.",
        imageUrl: "https://cdn.shopify.com/s/files/1/0557/9351/6695/files/iPhone15ProMax-NaturalTitanium.png?v=1694772104&width=1454&height=1056",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1099,
        categoryId: 3
    },
    {
        name: "Google Pixel 8 Pro",
        description: "The best camera phone with unmatched software processing and a long-lasting battery, in a unique and stylish design.",
        imageUrl: "https://lh3.googleusercontent.com/KaLIFYVg9298b8jv33H3pagRaAz4lCQxrQz-goMEsiTuCmUf2Ood9ktkzgjpotkMuRcAMimOV2RfN7vBZVmnInf5wcwUNsRZpw",
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
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/sg/2302/gallery/sg-galaxy-s23-s918-sm-s918bliqxsp-534856641?$650_519_PNG$",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 799,
        categoryId: 3
    },
    {
        name: "Apple iPhone 15 Plus",
        description: "A larger and more affordable option in the iPhone 15 series with a big screen, powerful A17 Bionic chip, and a great dual-lens camera system.",
        imageUrl: "https://business.ee.co.uk/content/dam/eeb-site/images-2023/devices/apple/phones/iphone-15/iphone-15-plus/blue/1-15plus-blue.png",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 3
    },
    {
        name: "Xiaomi 13T",
        description: "A feature-packed phone with a powerful Snapdragon processor, a high-resolution display, and a 120Hz refresh rate for smooth visuals, at a mid-range price.",
        imageUrl: "https://i02.appmifile.com/845_item_hk/18/09/2023/3e298644fa7182c17c48cfe159a3c46f!400x400!85.png",
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
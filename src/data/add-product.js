const axios = require('axios').default
const data = require('./seed-data.js');

const {productEndPoint, access_token} = data;

const products = [
    {
        name: "Apple MacBook Air M2",
        description: "Excellent balance of performance, battery life, and design. M2 chip delivers snappy performance.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ7g1alGy_lcr8gpsu2bLElNr8QAewzJ0UuEMW1JM_S06e-w4EZuF4iUGINbVna-oPilFoAqRIt0TjZ2xVT002xWy22KKgCKCprOeMnIq-NDx2-8QlTf5cvjUBRs_hv88k8=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,  // Random number multiple of 5 between 0 and 100
        price: 1199,
        categoryId: 1,
    },
    {
        name: "Dell XPS 15 OLED",
        description: "Gorgeous OLED display, comfortable keyboard, powerful specs.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ49grDi8Cvc_uLE7eWo9817IuCRxfyRKWwJ8Z0bBaC9I18IBo35xqBpN7p-4NcgLy41YxEaBYyl6kGZ_b1DBHrQfaFJD4T5VcLLdnASQni4yOkLIsFZ6XZAXNbqecByzriQ821nDbd-rU40xAlDEKr0_LhWjFR7Gz4TGkiqkZj1pBh6bfPD3g=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1500,
        categoryId: 1
    },
    {
        name: "Asus Zenbook 13 OLED",
        description: "Sleek, lightweight, OLED display, long battery life, comfortable keyboard.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ7LtIJPIUOk5NrNJ1K2ZC1bHYA5e5UW6QXSX_COF_T1iL3hNhXZPQfVYwdsAB8wVvboa0eYrO_LlfT4E7-T5REwgV8ND6WQhOwOa0S1M_dEoJar2T8Pols6JLLmutJLpAoAHoB2wWaKsNN1FT6f02QGxGIJqyBCxsaxw_GaCbzNT0qgzTdeSh5Oxk_cvmm8vpvlqjsbk-_zT66vOCOLNtFO8IK9trrtPlxi1EHg=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 1
    },
    {
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        description: "Durable design, fantastic keyboard, excellent security features, long battery life.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6zfG_02yF2jq4niVeMui__cgl3BsmDyaH_gYYZt03v6fp4mLNJ1Z9SINHJ0iH7pHoRB4G9WEADhnxirxKbSgruhvlBQATjrtlQAATNjRbcuL5If9_mZBbLCxbSxpArCHPz9oK95hC8kOw=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 2619,
        categoryId: 1
    },
    {
        name: "HP Elite Dragonfly G3",
        description: "Sleek, lightweight, incredible battery life, strong performance, comfortable keyboard.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ4wwFp9y-TXN-_b7-DodMBuXHJaMJQCJie_r6H3iLGb6ZVHgInYVhDf75xPvvYgmZw9rdB8ysz3S412W5ggsfwhxMV1_xgXpmZmmKF9E2Aqmuo0aE_FkXiUq9Ar0ev0zfR5HC0QGhnKKTnvZyxiNvF96dehtGTavEjBS8HhArCjrAd3Q8xTRyG_bWmLnI671IpxWT59qJg8Djcnf2fRt7ACaKXTiTP0Gm4=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 999.99,
        categoryId: 1
    },
    {
        name: "Samsung Galaxy Book 3 Ultra",
        description: "Gorgeous AMOLED display, S Pen stylus, long battery life.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ5HgEBNB1r1_6LLHD9PLVR6wendywIwM7DlVMlQC03fzuYjQawOX3DT8d-xgSX5dnjFrA1_5-Qi5EvsBNWsA66rO9UI-QcHKlJ0TNbw8EuCl1BMEOd2ygnjxUeFGDiZpAMqWNjDfJyxS6aYxRfPsCGPnae5cPilecklv7N0ldLQH4ZMNzhqE6ebtg2k8bKqd6redXcf2fERUpfDc2pdm-enBUuFdktwSFikL14cFP3lbjX1FslTzQ=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1499,
        categoryId: 1
    },
    {
        name: "Apple MacBook Pro 14-inch M3",
        description: "Absolute best performance for demanding tasks. Powerful M3 chip.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ5WU0ZiVlhaIV7f6qpF5EslOW6OgsyMGbpw-rI8fwDNe9HkU7_NvDvoReWorRj5LcqEjOrpQfCjFgwc9ZE_6IgXn9WH-EZt_L1m7ank1aCbCaK3fPJ3qj6ZYvhhV-UyXoP7BmawQupjJ4z4Astx66mI=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1999,
        categoryId: 1
    },
    {
        name: "Acer Swift 5",
        description: "Good balance of performance, portability, and battery life.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6RcQ113XOUx6a-RhN1J5VY-hYEPpIuQJ45uwf2AX9ovsqgvfiwuKCFpyN1NAX436_403N-GdVAebfomm99RN-twtgrrVxbNv1e98byVA3tYLKNGZW7Fa69huVn3IQ8COIzLXcExIIbtR-UpG0q4snbDVSIQqIMFux7rBvhLstgSvh6pOJfbyZafoVPCz4COlAbcdKS4jPI9J5GCJN9EdTQvo7-reDdfF0VMpbthydttB0F9VzYfy5KA4FC45HK5VfmPykSBSujpOXaN7wxgokhUerol5TYtLYhEXU5IVr4CIvE=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 1
    },
    {
        name: "Asus Zenbook 14 Flip OLED",
        description: "2-in-1 laptop. Productivity-focused laptop and a tablet mode. OLED display, decent battery life.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ4-wSQkI3Peb3mY1TrUic-lVxrtYtAtXqfQVwMSZ_Wit6Hj1ztFMo0DCmWyD5tuMGGAoeE2GZBY3B_p-9A_2uDQ3KLyBHHwNxmX8hEPwUF6T910gHlkrzYOc2P9gZnP0WZapxrhBYKkKCNtug=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 849,
        categoryId: 1
    },
    {
        name: "Lenovo Chromebook Duet 3",
        description: "Great option for tight budgets. Long battery life, lightweight design, access to productivity apps.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6qe7Je-46y9hHyIiDgkC0MnegTwL6QXPhFkCle1E16Q4-4atkIuQGivnL958ND-fpJD9sJw0W5hEW0tSOUvtJC62r79IbdYcR0WNgOKFrxfL9AvKzYQzw5KdpYQ8qo57wQDq3aow3w0wBTQw=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 349,
        categoryId: 1
    },
    {
        name: "Apple iPad Air (5th generation)",
        description: "Powerful M1 chip, long battery life, beautiful 10.9\" display, supports Apple Pencil 2 for notes and drawing.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6K05x-wEXcktJw23hpN9pofdGJBv-2VUGah4GpgHkdZUp2LFUIZjpXoxY7avkfT6H0BF-rD-O2djhhkWNRSUdl6-XXBDQXhBH1aUgCWAdAV_Cb_ytUWEeT2vxfWce1cQTCnI0NOMduaWegnrBK-s-M5RyDiT9n7h-zQNMpokzEOBeg86wdcaCJO2mpeblqCyYuw1uw1sMYicSwbVPHOInXO20QPYCFOMlR=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 599,
        categoryId: 2
    },
    {
        name: "Apple iPad Pro (12.9-inch, 6th generation)",
        description: "Top-of-the-line performance, stunning 12.9\" Liquid Retina XDR display, Thunderbolt 4 ports, Magic Keyboard compatible.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6vHGHSkBK4WEJfNrnW_wC4I-L_m661z2f1-wJZ3gyQ0aWFU-h_mFFCCdlUu3t6eXpKVltyTHknUq8-Upk04L6abkbW9IULAZeUegVd0LgI3Tlus_dxSzTGp4ArdjztPEwTB8tN1gWFUdqx=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1099,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy Tab S8 Ultra",
        description: "Largest Android tablet, 14.6\" AMOLED display, powerful Snapdragon 8 Gen 1 processor, S Pen stylus included.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6NqeIl4NELkRu4SFBpkAUtl0VhEPTjNyTSCG3pUsavvcYVXkULahkH5mRLv3YflJTLPyyaGg7VImhKxs5EZQ1mC6dMpyleLEczevB8MELCJVBUWIXmsg=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1199.99,
        categoryId: 2
    },
    {
        name: "Google Pixel Tablet",
        description: "New entry with custom Google Tensor chip, clean Android 13, supports Pixel Pen stylus (sold separately).",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ5z1r6BTev9bKRcP2eXNc4joFXLqWmsrsEoEamBwDr9weCctNvlfRtPzuKzD-D1KC0TWoEP7C06gtqrE_Pz0fLo8ijQpERlV2P3Vd76u_nDEnGa8ye8PQ1LXno8lZCIBk2NafeyFRWMetfJ1_c_ZJhNAOBr0ytJjJbXrTQL7UvYyz9BgUNE65_LhIS7fNrcJgIUFK9LlDh7smn9u4hIpjGbbIkf34GXg9u8VjkPMi3a4AVB2nod=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 492.89,
        categoryId: 2
    },
    {
        name: "OnePlus Pad",
        description: "Affordable Android option, 11.6\" LCD display, MediaTek Dimensity 9000 processor, long-lasting 9500mAh battery.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6nBluTuqAHKsNAyR9mGeemGIVpugDtxIkYdAUhu-SmGwtu0kIKOx_Hb12xXIAxHLdGqHmdGD28rk8WztSGtoRWqNW_cFA-HObjstOSozCRk2hjFRkpHh_51CCoJovmLCBgKLLFF9in-Ni4Ig=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 629.98,
        categoryId: 2
    },
    {
        name: "Microsoft Surface Pro 9",
        description: "Runs full Windows 11, various configurations with Intel processors, up to 16GB RAM, detachable keyboard sold separately.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ73UcShHhU806nWtYVB_RXxG5P98qx37S3HiXxkZi1y9N6YCN3Mq_n7FxjWu2koQJ4mKtAXX3munmE1gfl9SFWeS_U_e1NJbXZzzylAq_-fmCFuVQ2l1w=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1149,
        categoryId: 2
    },
    {
        name: "Lenovo Chromebook Duet 3",
        description: "Budget-friendly Chromebook, detachable keyboard included, access to web-based productivity apps.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ7EUibfK14ZYtJGSGQ7R9VCvAGhIUZhQ1mAkxvtLnecMiZ8z9bWo3muqcT11Of2-bIpOf_ihGtG8vfvb8LvendYOQKi2ci-Xd9T58neGP-HyZcn2hMNm5kuosoqu3l_yWbMWvXCfLGpju8=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 279,
        categoryId: 2
    },
    {
        name: "Amazon Fire HD 8 Plus (2022)",
        description: "Great for basic tasks, fast processor, long battery life, access to Amazon Appstore (limited productivity apps).",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ7DQUMiRkJLY8MlQ4ou-9abHY2blNj0xQKEKdijRiyqVwlIQN5PjmhiaI6COsMkVgYiO9GzTML4OUYmTllGqpQY-iq-exyZrcvovIpimgRB1zVCK9KL7A=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 120,
        categoryId: 2
    },
    {
        name: "iPad mini (6th generation)",
        description: "Compact and powerful, A15 Bionic chip, 8.3\" Liquid Retina display, supports Apple Pencil 2.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6cNdMIku6lcmBzRIzLEKdIMYZFEvUgqrIbjgHuBamJt0owKCU2JQd5aw3rgWVxJR7Dklrj1hQ2RCJnEeD95Q5aMA20CYXX4mHK8ROHdLgN8K8ddPPbATLJrtA8YVu4v-_-vYivbo4Otsym1IjcukvMPO4U8amNRS6Jpbbqz4wycIFWmqLN0yS0LRw6tX7wiyKfhzCupzgEyQdcnxdajLIqeAcA9JTuPLt66_3PWJyK872dPqYsxGXXI0v84slYvtp8K_cR3UHB6JpuyZS-=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 499,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy Tab S7",
        description: "Great performance, gorgeous 120Hz display, S Pen included, DeX mode for productivity.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6OH_o5HNhcT6CoSlwlk8ihFJpUWJfJ0v3wULpm5JNhkJgp3da_YtTAdU_8soPBjahWFcvDjUQVnW_qzfSGhthmgYOCzwnHPUYz7nVeeiNmFoSmU8Ve=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 529.99,
        categoryId: 2
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        description: "The best overall phone with a powerful processor, gorgeous display, long-lasting battery, and an excellent S Pen stylus for productivity and creativity.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6cwrviQS4wYZF_4gfP8olj81fSfRZWJ1U3VCzaq8n1GSqcEzZl1-WbWiDFiGrBJKLk3vu2snTNAV8i4zJ8lkjXwolfO46gY_1qc5DPugjByZVzWnB3jQ=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,  // Random number multiple of 5 between 0 and 100
        price: 1188,
        categoryId: 3
    },
    {
        name: "Apple iPhone 15 Pro Max",
        description: "The best iPhone with a powerful A17 Bionic chip, a stunning triple-lens camera system, and a beautiful Super Retina XDR display.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ5qM90ya1vruSED9xHmxF-ZCI5JqeqHy6dIg3AxEQgTnriHWCrCyWryDmouIB4LL-5Rf97HWjRF3-cCh6eLli11I-4GiFutKOGYdz8BYizjRaOKbVTLnWv4a7pewPkbhTngMPX-PtmI-bOp8aHa1uotWNoOyzrGcUfUX_-61idcUrxXC7D1UYvoJ_rxb21z69uW3dYwbbpca98-srZKBH3JGEZ8Feyb3XMAim-zp17C1dZ7qROyjxSXN_sGTmIadHwgp2yEZcAdYaGVd0MQdE80Ufh6=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1099,
        categoryId: 3
    },
    {
        name: "Google Pixel 8 Pro",
        description: "The best camera phone with unmatched software processing and a long-lasting battery, in a unique and stylish design.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ5sxT7k6TdcykAKTDMEVb_k9RlDowd7rOE5iIN9ok1fcH9-c9Fmxo4U4DMCnB_pgO_MlAeHSXZbrNYG5FRIgXcoyejKwwlMisnR7CJw_tLpw_3KsbBcgw=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 3
    },
    {
        name: "OnePlus 11",
        description: "A powerful flagship phone with super fast charging, a smooth 120Hz display, and a great camera system at a competitive price.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ4Fe3EAeMG1SFwbGRR70aHaD5B8gjV5iBjXKxHVWHhmNhRifEDB7gNzTLy4HX6M0sSRF8FGpQepJicvi_Bk_A137WpDx14RSOErW9H1lpNa7JukOnR7uOH8P6EPcfXze8afbMsPOsZDX1aJ4vnTYhUZXfq5su9Tv2EX_ViunPB7b0BB8KyMyF0tgVBaZVKpzvsVE9x1FPlh-N8=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 699,
        categoryId: 3
    },
    {
        name: "Sony Xperia 1 V",
        description: "A camera-focused phone with a unique 4K OLED display, versatile triple-lens rear camera system with variable zoom, and professional-level videography features.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6t9_fdeJM8GBdYlvlSbVZwMUXIoJSI7UpoeG5bMl4bG9sPT3vbSnBKW1_b8yFfhoZ6_xFI5Hju43jJvkA08idqTulCKl9810AfNXalQJa10SDKXBb-VrbcdWirYFdQ3UExepmhq0IMd86uCLZuX98smCF3QqpP-fbCb2Nq6nOwTg3l7r3-Uxk0qOHskyvq=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 1349,
        categoryId: 3
    },
    {
        name: "Samsung Galaxy S23",
        description: "A more affordable option in the Galaxy S23 series with a powerful processor, excellent cameras, and a bright and clear display.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ45Ir-vYzWX3-n7BXrYlqrzwPJKMC8YOQlZeuhfS8RBMAXU7R0CRcQZmsB8unegETwVIVSk__sRU4Fpo_klASx8M3-r7nH4Q5xWj0y8AaKs5QY9xGJ9EbGoQ3eU4dyVA09yZ-HyGK25dTJjxsdurWgzVlkFcawqUgaGkjKr4bzAE5sLJRcA11D2Bw78kKYOdFq-xhLO599pT06TanpkmNddF6EV=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 799,
        categoryId: 3
    },
    {
        name: "Apple iPhone 15 Plus",
        description: "A larger and more affordable option in the iPhone 15 series with a big screen, powerful A17 Bionic chip, and a great dual-lens camera system.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6SNo0k_8CGiCQnzpd4C3faCPgA40hP5_ajbaXTxo5NSONhAt_jjdZCUgBv76iAWHs6W97gT88YS0ViFg604a1asrC2cKnzCxorqIoNpImTlQ-y9UyJ7rQpoNZSS9QFWmvToDr_piDdpFvkWzv_QqTfDye5sCqFBZB-yEhYA9SEglu22VztDhZBCmdKSOBCO0DkHMkeveWWGPrR2uheBw_WzYauI1TCs8x6=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 3
    },
    {
        name: "Xiaomi 13T",
        description: "A feature-packed phone with a powerful Snapdragon processor, a high-resolution display, and a 120Hz refresh rate for smooth visuals, at a mid-range price.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ4ClCm6FStQNTlMXuXWY7yfXu-KuMkZaQqhlVO0wtEGBf1qSbyYx2eWbO38l-rE4b4WxHkQ0Fs89l4SeXsrxfQmVlDKwePDb8hJuJkgJSMdSExSyRG6nrO6KhjGcSy8Ew=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 599,
        categoryId: 3
    },
    {
        name: "Asus ROG Phone 7",
        description: "The ultimate gaming phone with a top-of-the-line processor, a super fast refresh rate display, innovative cooling system, and features for gamers like ultrasonic air triggers.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6SHyK9O_gmXHuMj1jsUpNIjt0n9P6y1PqTJ_QIEm4tW1tCnIrASoSptaV75VbEs9bv0pHMKAce_SpJWradHahtqT_2JY6pV8uOqmVCpvYuaQA5BEEU7L2SW65AhokPaMbjNYSJ7ZxTxo2b=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 999,
        categoryId: 3
    },
    {
        name: "Motorola Razr Plus",
        description: "A foldable phone with a large foldable main display and a pocketable size when closed, perfect for those wanting a unique phone with a nostalgic twist.",
        imageUrl: "https://lh3.googleusercontent.com/bip/ACo7QZ6ioHdu8TSS1vDokcel4_XrwMtl-CqejisZNplRAPnstyqr5Bs3RcEfEspH6rcDpUaCi-goHsSjKQJXg48Tm553lDj6fI4z-Aji7WerKhaDGZBCt7zZqkNXnH9DKAA-gxd0VaiDs3UDVa-1OvzbwfTIoI1hJ9KgZz_9LDKXhDHLA7m78VX9jSAthqd7xyJmX1CUmzKXvdIyWnXa=w250-h200-p",
        stock: Math.floor(Math.random() * 100) * 5 + 5,
        price: 899,
        categoryId: 3
    }
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
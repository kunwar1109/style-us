import db from "@/lib/db";

export const categories_types = [
    {
        type: "Men",
        categories: [
            {
                name : "Watches",
                image : "https://images.unsplash.com/photo-1521127376958-80338b32f37b"
            },
            {
                name : "Shirts",
                image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
            },
            {
                name : "T Shirt",
                image : "https://images.unsplash.com/photo-1562157873-818bc0726f68"
            },
            {
                name : "Jeans",
                image : "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0"
            },
            {
                name : "Caps",
                image : "https://images.unsplash.com/photo-1534215754734-18e55d13e346"
            },
            {
                name : "Hoodies",
                image : "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0"
            },
            {
                name: "Shoes",
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
            }
        ]
    },
    {
        type: "Women",
        categories: [
            {
                name : "Watches",
                image : "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d"
            },
            {
                name : "Top",
                image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            },
            {
                name : "Jeans",
                image : "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec"
            },
            {
                name : "Hats",
                image : "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325"
            },
            {
                name : "Heels",
                image : "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95"
            },
            {
                name : "Shoes",
                image : "https://images.unsplash.com/photo-1620114884229-65d21f8c9423"
            },
            {
                name : "Sunglasses",
                image : "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b"
            }
        ]
    },
    {
        type: "Boys",
        categories: [
            {
                name : "T shirt",
                image : "https://images.unsplash.com/photo-1536077681551-ca2b5dfb5ea8"
            },
            {
                name : "Jeans",
                image : "https://images.unsplash.com/photo-1515459961680-58264ee27219"
            },
            {
                name : "Shoes",
                image : "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08"
            },
            {
                name : "Sunglasses",
                image : "https://images.unsplash.com/photo-1613046353489-8846ffcdebcb"
            },
            {
                name : "Watches",
                image : "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
            }
        ]
    },
    {
        type: "Girls",
        categories: [
            {
                name : "Top",
                image : "https://plus.unsplash.com/premium_photo-1681841198477-96348cb3a02a"
            },
            {
                name : "Frocks",
                image : "https://images.unsplash.com/photo-1476089194965-888edb96d2dc"
            },
            {
                name : "jeans",
                image : "https://images.unsplash.com/photo-1497340525489-441e8427c980"
            },
            {
                name  : "Watches",
                image : "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56"
            },
            {
                name : "Shoes",
                image : "https://images.unsplash.com/photo-1552912276-56ef47874741"
            },
        ]
    }
]


// async function add() {
//     const res = await db.subCategory.create({
//         data:{
//         name: categories_types[3].type,
//         type : {
//             create : categories_types[3].categories
//         }
//       }});
//       console.log(res);
// }

// add()
import sushis from "../assets/sakuraFestival/sushis.png";
import dishes from "../assets/sakuraFestival/dishes.png";
import drinks from "../assets/sakuraFestival/drinks.png";
import sweets from "../assets/sakuraFestival/sweets.png";

export const orderExample = [
  {
    title: "Sashimi",
    price: 4.99,
    quantitySelected: 3,
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688029725/q7jxyvcwn562tazjdbrw.jpg",
  },
  {
    title: "Muchiga",
    price: 4.1,
    quantitySelected: 1,
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934848/bg7vjubouiqkb0osvypi.webp",
  },
];

export const categories = [
  {
    label: "Sushis",
    japaneseLabel: "寿司",
    icon: sushis,
    description: "Fresh and flavorful Japanese delicacies.",
  },
  {
    label: "Drinks",
    japaneseLabel: "飲み物",
    icon: drinks,
    description: "Refreshing beverages to quench your thirst.",
  },
  {
    label: "Sweets",
    japaneseLabel: "お菓子",
    icon: sweets,
    description: "Tempting treats for your sweet tooth.",
  },
  {
    label: "Hot Dishes",
    japaneseLabel: "食器",
    icon: dishes,
    description: "Delectable and diverse culinary creations.",
  },
];

export const items = [
  {
    id: 3,
    price: 4.99,
    specification: "6 sashimis",
    category: "Sushis",
    title: "Sashimi",
    description:
      "Experience the epitome of Japanese culinary artistry with our exquisite selection of sashimi. Delicately sliced, fresh raw fish and seafood are expertly arranged to showcase their vibrant colors and flavors. Each bite offers a sublime combination of textures and tastes, allowing you to savor the pure essence of the ocean.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688029725/q7jxyvcwn562tazjdbrw.jpg",
  },
  {
    id: 14,
    price: 4.1,
    specification: "1 cup 50cl",
    category: "Drinks",
    title: "Mugicha",
    description:
      'Mugicha, also known as "barley tea," is a refreshing and popular beverage in Japan and other Asian countries. This aromatic and caffeine-free infusion is made from roasted barley grains, which give it a rich, toasty flavor and a warm brown hue. Mugicha is commonly enjoyed both hot and cold, making it a versatile thirst-quencher throughout the year. Its mild and soothing taste, coupled with its reputed health benefits, including aiding digestion and promoting relaxation, have made mugicha a beloved staple in households and a widely appreciated beverage in various cultural traditions. Whether served with meals or as a comforting beverage on its own, mugicha offers a delightful and wholesome experience for tea enthusiasts and those seeking a caffeine-free alternative.',
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934848/bg7vjubouiqkb0osvypi.webp",
  },
  {
    id: 8,
    price: 6.99,
    specification: "1 dish",
    category: "Hot Dishes",
    title: "Ramen",
    description:
      "Ramen is a popular Japanese dish that consists of Chinese-style wheat noodles served in a flavorful broth, typically garnished with various toppings. It has gained worldwide popularity for its rich and comforting flavors.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688820720/edcq0wswrkafd9gcknja.webp",
  },
  {
    id: 6,
    price: 4.99,
    specification: "1 cup 30cl",
    category: "Drinks",
    title: "Sakura Tea",
    description:
      "Indulge in the enchanting flavors of Sakura with our exquisite tea. Crafted from handpicked cherry blossoms, this delicate infusion captivates your senses with its floral aroma and subtle sweetness. Immerse yourself in the essence of springtime as you sip this soothing and refreshing blend. Perfect for moments of relaxation and contemplation, Sakura Tea is a harmonious symphony of flavors that transports you to the serene beauty of Japanese gardens in full bloom.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688636019/dy5th5zltanq5gwa1ywx.png",
  },
  {
    id: 5,
    price: 6.99,
    specification: "1 parfait",
    category: "Sweets",
    title: "Parfait",
    description:
      "Parfait is a delightful and visually appealing dessert that originated in Japan. It is a layered dessert consisting of various ingredients such as ice cream, whipped cream, fresh fruits, jelly, syrup, and sometimes cake or cookies. The layers are carefully arranged in a tall glass or bowl, creating a visually appealing and indulgent treat. Parfaits often come in a wide variety of flavors, including classic options like chocolate, vanilla, and strawberry, as well as unique combinations like matcha green tea, mango, or black sesame. The combination of textures and flavors in a parfait makes it a satisfying and refreshing dessert option. Whether enjoyed as a special treat or as a dessert at a café or restaurant, the Japanese parfait is known for its beautiful presentation and delicious taste.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284125/parfait-2_wyrnkz.jpg",
  },
  {
    id: 7,
    price: 3.99,
    specification: "1 cup 40cl",
    category: "Drinks",
    title: "Amazake",
    description:
      "Amazake is a traditional Japanese fermented rice drink that is sweet, non-alcoholic, and highly nutritious. It is made by combining cooked rice or rice koji (a type of cultured rice) with water and allowing it to ferment for a certain period. The fermentation process breaks down the rice starches into simple sugars, resulting in a naturally sweet taste.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688820071/cnnq23zlukxoc0cwtujq.jpg",
  },
  {
    id: 54,
    price: 2.99,
    specification: "33cl",
    category: "Drinks",
    title: "Melon Soda",
    description:
      "Melon soda is a sweet and refreshing soft drink that is typically green in color and has a distinct melon flavor. It is a popular beverage in Japan and can be found in various forms, including carbonated and non-carbonated versions. Melon soda is known for its vibrant green hue, which is often achieved through the use of artificial food coloring.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1687474820/melon-soda_xrbkm3.webp",
  },
  {
    id: 4,
    price: 4.95,
    specification: "6 makis",
    category: "Sushis",
    title: "Maki",
    description:
      "Maki sushi is a popular type of sushi originating from Japan. It consists of bite-sized rolls made with sushi rice and various ingredients wrapped in a sheet of seaweed called nori. The filling can include fresh seafood, such as tuna, salmon, or shrimp, as well as vegetables, avocado, or even cooked meats. The ingredients are tightly rolled together using a bamboo mat called a makisu. Once rolled, the maki sushi is typically sliced into bite-sized pieces. Maki sushi is often served with soy sauce, wasabi, and pickled ginger, and it is enjoyed for its combination of flavors, textures, and presentation. It is a versatile and widely appreciated sushi option both in Japan and internationally.",
    image:
      "https://sushiloungeclichy.fr/wp-content/uploads/2020/07/M1_Assortiment_maki-scaled.jpg",
  },
  {
    id: 2,
    price: 7.2,
    specification: "6 daifuku",
    category: "Sweets",
    title: "Daifuku",
    description:
      "These soft and pillowy glutinous rice cakes are filled with luscious and velvety sweet bean paste. Encased in a delicate mochi shell, each bite offers a delightful balance of textures and a burst of flavor. ",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688028496/wu3m2wlfzgfo60w6ebmt.jpg",
  },
  {
    id: 15,
    price: 6.6,
    specification: "3 temakis",
    category: "Sushis",
    title: "Temaki",
    description:
      'Temaki is a popular and delectable Japanese dish that features a cone-shaped sushi roll, hand-rolled using nori (seaweed) sheets and filled with a variety of fresh and savory ingredients. The word "temaki" translates to "hand roll" in Japanese, highlighting the unique and customizable nature of this culinary delight. Typically served as a single, large sushi roll, temaki allows diners to craft their personalized combinations by filling the cone with rice, raw fish (such as tuna, salmon, or shrimp), vegetables (like cucumber, avocado, or radish), and other flavorful add-ons. With its delightful blend of textures and tastes, temaki offers a delightful experience for sushi enthusiasts and novices alike, inviting them to savor each bite with a sense of artistry and culinary adventure.',
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934925/s7djygxjgsbnf3ru3ysg.jpg",
  },
  {
    id: 1,
    price: 10.99,
    specification: "150g piece",
    category: "Sweets",
    title: "Castella Cake",
    description:
      "Immerse yourself in the rich history and enticing flavors of Castella, a beloved Japanese sponge cake. Originating from Portugal, this delicacy has been embraced by Japan and perfected over centuries. Our Castella is a masterpiece of simplicity and texture, with its moist and velvety crumb that melts in your mouth.",
    image:
      "https://u-taste.com/cdn/shop/articles/9EE53E78-78CE-4CFB-A3A8-2B3FAEE0A38B.00_00_13_21.Still001.jpg?v=1683364333",
  },
  {
    id: 13,
    price: 8.5,
    specification: "3 taiyaki 90g each",
    category: "Sweets",
    title: "Taiyaki",
    description:
      "Taiyaki is a delightful and iconic Japanese dessert that has captured the hearts of many with its charming fish-shaped appearance and scrumptious fillings. Traditionally made using a pancake-like batter, taiyaki is cooked in a fish-shaped mold, resulting in a golden-brown, crispy exterior with a fluffy and moist interior. The most popular fillings are sweet red bean paste (anko) and custard, though modern variations can include chocolate, cheese, matcha, or even savory options like cheese and sausage. This beloved street food snack, often enjoyed warm, embodies a perfect harmony of textures and flavors, making it a delightful treat for people of all ages, and a must-try delicacy for anyone exploring Japanese cuisine and culture.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934718/j4ugqy1tbuprdelcnett.jpg",
  },
  {
    id: 11,
    price: 5.99,
    specification: "6 mochi daifuku",
    category: "Sweets",
    title: "Mochi Daifuku",
    description:
      "Mochi is a traditional Japanese delicacy that has become popular worldwide for its unique texture and delightful taste. It is made from glutinous rice, also known as sticky rice or sweet rice, which is pounded into a smooth and elastic dough. This labor-intensive process gives mochi its characteristic chewy and stretchy consistency. Mochi can be enjoyed in various forms and flavors, including as round rice cakes, filled with sweet fillings like red bean paste or ice cream, or used in savory dishes. It is commonly served during special occasions and festivals, such as New Year celebrations in Japan. Its versatility and delightful mouthfeel have earned mochi a dedicated following, making it a beloved treat for people of all ages and a delightful way to experience the rich and diverse world of Japanese cuisine.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689933527/k9cfwvsnsut5sgvrmxev.webp",
  },
  {
    id: 10,
    price: 11.1,
    specification: "8 uramaki",
    category: "Sushis",
    title: "Uramaki",
    description:
      'Uramaki is a type of sushi roll that stands out for its reversed preparation method compared to traditional maki rolls. In Japanese, "ura" means "reverse," hence the name "uramaki." Unlike regular maki, where the seaweed (nori) is on the outside, uramaki has the rice on the outside while the nori is hidden inside. The rice serves as a base for various fillings, such as raw fish, avocado, cucumber, or tempura, providing an array of flavors and textures in each roll. Uramaki is often coated with sesame seeds, tobiko (fish roe), or other toppings, adding an extra dimension of taste and visual appeal. This creative and modern sushi variation has become widely popular in sushi restaurants worldwide, allowing sushi enthusiasts to enjoy an exciting and diverse range of flavors within a single roll.',
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689011381/chntugz1eougkruvu8eb.webp",
  },
  {
    id: 12,
    price: 0,
    specification: "1 soup offered by person",
    category: "Hot Dishes",
    title: "Miso Soup",
    description:
      "Miso soup is a traditional and nourishing Japanese soup known for its comforting and umami-rich flavors. The key ingredient is miso, a fermented soybean paste that comes in various colors and flavors, depending on the fermentation process and ingredients used. To prepare miso soup, dashi (a flavorful broth made from kombu seaweed and bonito flakes) is combined with miso paste, creating a flavorful base. Additional ingredients like tofu, seaweed, green onions, mushrooms, and sometimes fish or vegetables are added to enhance the soup's taste and nutritional value. This wholesome and soul-warming dish is a staple in Japanese cuisine, often served as a side dish or starter, providing a perfect balance of savory, earthy, and comforting notes that have made it a beloved classic both within Japan and across the world.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934523/qeyjplzx0dy1fzumqpwk.webp",
  },
  {
    id: 55,
    price: 8.99,
    specification: "1 dish",
    category: "Hot Dishes",
    title: "Udon",
    description:
      "Udon is a type of thick, chewy noodle that is a staple of Japanese cuisine. These noodles are made from wheat flour, water, and salt, and they have a neutral, slightly sweet flavor. Udon noodles are typically white or off-white in color and are known for their soft, doughy texture.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1687475763/bgktm4bowz0in2dujtkm.jpg",
  },
  {
    id: 75,
    price: 3.99,
    specification: "1 cup of 35cl",
    category: "Drinks",
    title: "Royal Milk Tea",
    description:
      "Royal milk tea is a creamy and aromatic tea beverage that combines black tea with milk and sugar. It offers a harmonious blend of rich tea flavor and the soothing creaminess of milk, often enjoyed hot or cold. Royal milk tea is a popular and comforting drink in many parts of the world.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284126/royal-milk-tea_uogyju.jpg",
  },
  {
    id: 55,
    price: 4.95,
    specification: "1 cup of 45cl",
    category: "Drinks",
    title: "Genmaicha",
    description:
      "Genmaicha is a Japanese green tea that features a unique flavor profile. It is made by combining green tea leaves with roasted brown rice. The roasted rice imparts a nutty, toasted flavor to the tea, balancing the grassy notes of the green tea. Genmaicha is often enjoyed for its pleasant, slightly savory taste and is a popular choice in Japanese culture.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284123/genmaicha_lt63bo.jpg",
  },
  {
    id: 51,
    price: 8.50,
    specification: "150g piece",
    category: "Sweets",
    title: "Matcha Swiss Roll",
    description:
      "A Matcha Swiss Roll is a delightful dessert, typically made from a soft and airy sponge cake rolled around a filling that features matcha, a finely ground green tea powder. The sponge cake is light and fluffy, with a vibrant green color and a mild, earthy flavor from the matcha. The filling can vary but often includes whipped cream or a sweetened matcha-flavored cream, adding a creamy and slightly bitter contrast to the cake. Matcha Swiss Rolls are a popular treat in many parts of the world and are cherished for their unique combination of flavors and textures.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284123/MatchaSwissRoll_po6g8k.jpg",
  },
  {
    id: 50,
    price: 7.95,
    specification: "4 nigiri",
    category: "Sushis",
    title: "Nigiri",
    description: "Nigiri is a type of Japanese sushi consisting of a small, hand-pressed oblong mound of vinegared rice topped with a slice of fresh fish or other ingredients like seafood, omelet, or vegetables.",
    image: "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284123/nigiri_ekrxqq.jpg",
  },
  {
    id: 47,
    price: 11.80,
    specification: "1 dish",
    category: "Hot Dishes",
    title: "Okonomiyaki",
    description: "Okonomiyaki is a Japanese savory pancake or 'grilled as you like' dish made with a batter of flour, grated yam, shredded cabbage, and various ingredients such as meat, seafood, and vegetables. It's typically cooked on a griddle and topped with a sweet and savory sauce, mayonnaise, and bonito flakes.",
    image: "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284124/okonomiyaki_ufme0k.jpg",
  },
  {
    id: 48,
    price: 3.10,
    specification: "3 pancakes",
    category: "Sweets",
    title: "Red Bean Pancakes",
    description: "A red bean pancake is a popular East Asian dessert or snack made by encasing sweet red bean paste (often made from adzuki beans) in a pancake-like batter and cooking it until golden brown. The result is a warm and slightly sweet treat with a crispy exterior and a flavorful, creamy, and sweet red bean filling. It is enjoyed in various forms across different East Asian cuisines, including Japanese dorayaki and Korean hotteok.",
    image: "https://www.justonecookbook.com/wp-content/uploads/2022/08/Japanese-Dorayaki-3716.jpg",
  },
  {
    id: 49,
    price: 5.70,
    specification: "1 dish",
    category: "Hot Dishes",
    title: "Soba",
    description: "Soba is a type of Japanese noodle made from buckwheat flour or a mixture of buckwheat and wheat flour. Soba noodles are thin and have a slightly nutty flavor. They can be served in various dishes, including hot broth (soba soup) or cold with a dipping sauce. Soba is a staple in Japanese cuisine and is known for its versatility and wholesome qualities.",
    image: "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284127/soba_wcgexx.jpg",
  },
  {
    id: 52,
    price: 6.99,
    specification: "1 dish",
    category: "Hot Dishes",
    title: "Sukiyaki",
    description: "Sukiyaki is a popular Japanese hot pot dish traditionally prepared with thinly sliced beef, tofu, vegetables (such as mushrooms, scallions, and Napa cabbage), and glass noodles, all simmered in a savory and sweet soy-based broth. The ingredients are cooked at the table in a shallow, wide skillet or a specialized sukiyaki pan. Once the ingredients are cooked, they are typically dipped in beaten raw egg before being consumed. Sukiyaki is known for its delicious blend of flavors and is a social and comforting meal often enjoyed with family and friends.",
    image: "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284128/sukiyaki_jp2ibq.jpg"
  },
  {
    id: 53,
    price: 6.79,
    specification: "1 dish",
    category: "Hot Dishes",
    title: "Takoyaki",
    description: "Takoyaki is a popular Japanese street food and snack. These are small, spherical, savory snacks made from a batter consisting of wheat flour and dashi (a Japanese fish stock). The batter is typically filled with small pieces of octopus, pickled ginger, and green onions. The mixture is cooked in a special, ball-shaped takoyaki pan, which gives the snacks their distinctive round shape. Once cooked to a golden-brown hue, they are typically topped with takoyaki sauce, mayonnaise, bonito flakes, and seaweed flakes. Takoyaki has a crispy exterior and a soft, molten center, making them a flavorful and enjoyable treat.",
    image: "https://assets.afcdn.com/recipe/20211021/122979_w1024h576c1cx1060cy707.webp"
  },
  {
    id: 52,
    price: 6.59,
    specification: "5 yakitory",
    category: "Hot Dishes",
    title: "Yakitory",
    description: "Yakitori is a popular Japanese dish consisting of skewered and grilled pieces of bite-sized chicken, often marinated in a savory, soy-based sauce. The word 'yakitori' can be broken down into 'yaki' (grilled) and 'tori' (bird or chicken), indicating its main ingredient. The chicken pieces are skewered, usually alternating with pieces of scallions or other vegetables, and then grilled until they develop a delicious charred and smoky flavor. Yakitori is often served with a side of tare sauce (a sweet and savory glaze), and it's a beloved Japanese street food and izakaya (pub) favorite.",
    image: "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284130/yakitori_a568kg.jpg"
  },
  {
    id: 42,
    price: 7.29,
    specification: "6 wagashis",
    category: "Sweets",
    title: "Wagashi",
    description: "Wagashi is a traditional Japanese confectionery that comes in various shapes, colors, and flavors. These sweets are often made from ingredients like glutinous rice, sweet bean paste (typically made from adzuki or white kidney beans), and sugar. Wagashi can be enjoyed with tea, especially during Japanese tea ceremonies, and they are known for their artistic and seasonal designs. They come in a wide range of styles, from simple and rustic to intricately crafted pieces of edible art.",
    image: "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1697284130/wagashi_xoqk3b.jpg"
  },
];

export const emojis = [
  "👨 ",
  "👱‍♀️ ",
  "👧 ",
  "👩‍🦰 ",
  "👩‍🦳 ",
  "👶 ",
  "👧🏾 ",
  "🧓🏾 ",
  "👨🏿‍🦱 ",
  "👨🏾‍🦳 ",
  "👨🏾 ",
  "👩🏻 ",
  "👩🏻‍🦲 ",
  "🧒🏼 ",
  "👨🏼‍🦰 ",
  "👨🏼 ",
  "👨🏼‍🦳 ",
  "👸🏼 ",
  "👦🏻 ",
  "👱🏻‍♀️ ",
  "👨🏻 ",
  "👸🏻 ",
  "👳🏻‍♀️ ",
  "👧🏻 ",
  "👨🏾‍🦳 ",
  "🤶🏾 ",
  "👧🏾 ",
  "👴🏾 ",
  "👲🏾 ",
  "👩🏿‍🦲 ",
  "👨🏿 ",
  "🧓🏿 ",
  "👨🏿‍🦳 ",
  "👱🏿‍♀️ ",
  "👨‍🦱 ",
  "👨🏻 ",
  "🧔🏽 ",
];

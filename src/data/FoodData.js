const FoodData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSBY5SWIFI-pofr5vHT8_kxd1XimTHB52TA&s",
    name: "Paneer Tikka Pizza",
    price: 250,
    desc: "A delicious fusion pizza topped with marinated paneer tikka and a blend of Indian spices. Perfect for those who enjoy a flavorful twist on traditional pizza.",
    category: "Lunch",
    rating: 4.5,
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 130,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "Lunch",
    rating: 4.2,
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Chicken Tikka Pizza",
      price: 280,
      desc: "A savory delight with slices of spicy chicken tikka, melted cheese, and tangy tomato sauce. A popular choice for those who love a spicy kick.",
      category: "Lunch",
      rating: 4.6,
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Veggie Delight Pizza",
    price: 220,
    desc: "Topped with a mix of fresh vegetables, this pizza offers a perfect blend of health and taste. Ideal for those who love a veggie-packed meal.",
    category: "Lunch",
    rating: 4.2,
  },
  {
    id: 5,
    img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
      price: 300,
      desc: "Featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight.",
      category: "Lunch",
      rating: 4.8,
  },
  {
    id: 6,
    img: "https://i.pinimg.com/originals/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg",
    name: "Masala Dosa",
    price: 100,
    desc: "A South Indian favorite, crispy dosa filled with spicy mashed potatoes and served with chutney and sambar. A perfect breakfast dish.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebRomnrDQpmvdTE7qh9SiDtH0Ld_4yvs8Vg&s",
    name: "Aloo Paratha",
      price: 80,
      desc: "A hearty breakfast option featuring paratha stuffed with seasoned mashed potatoes and served with yogurt and pickle.",
      category: "Breakfast",
      rating: 4.2,
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuzrNH6WF1K_Zefe47IYguPUhAQ_QU0XZ7A&s",
    name: "Oats Chilla",
    price: 90,
    desc: "A healthy breakfast option made with oats, vegetables, and spices, served with chutney. Perfect for a nutritious start to the day.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 9,
    img: "https://www.mrishtanna.com/wp-content/uploads/2018/04/poha-indian-breakfast-recipe.jpg",
    name: "Poha",
      price: 60,
      desc: "A light and healthy breakfast made with flattened rice, onions, peas, and mild spices. A staple in many Indian households.",
      category: "Breakfast",
      rating: 4.1,
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_aJWez2ClaeV7hS4twZI5vi5uwL1PmhZsQ&s",
    name: "Upma",
      price: 70,
      desc: "A savory South Indian breakfast dish made from semolina, mixed with vegetables and seasoned with mustard seeds and curry leaves.",
      category: "Breakfast",
      rating: 4.6,
  },
  {
    id: 11,
    img: "https://www.simplyrecipes.com/thmb/LYwosfrO2cGCT2_bGS5wIeHRnd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-1-f8a0cd09ea9442ce93651887f164db03.jpg",
    name: "Butter Chicken",
      price: 350,
      desc: "A rich and creamy North Indian dish made with tender pieces of chicken cooked in a tomato-based gravy. Served with naan or rice.",
      category: "Dinner",
      rating: 4.5,
  },
  {
    id: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhsPXWSgognjal2mSGWf73TgaANbOCfKGDg&s",
    name: "Chicken Biryani",
      price: 300,
      desc: "A fragrant and flavorful rice dish cooked with marinated chicken, aromatic spices, and saffron. A complete meal in itself.",
      category: "Dinner",
      rating: 4.8,
  },
  {
    id: 13,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
    name: "Paneer Butter Masala",
    price: 280,
    desc: "A creamy and rich curry made with paneer cubes in a spiced tomato-based gravy. Best enjoyed with naan or rice.",
    category: "Dinner",
    rating: 4.2,

  },
  {
    id: 14,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe6SV56y3m4jCgIAdmDVyQzaQ3Ci4RmaYJA&s",
    name: "Tandoori Chicken",
      price: 320,
      desc: "Juicy and flavorful chicken marinated in yogurt and spices, cooked in a tandoor for that authentic smoky flavor. A must-try Indian delicacy.",
      category: "Dinner",
      rating: 4.6,
  },
  {
    id: 15,
    img: "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3.jpg",
    name: "Dal Makhani",
      price: 200,
      desc: "A rich and creamy lentil dish made with black lentils, kidney beans, butter, and cream. Perfect with naan or rice.",
      category: "Dinner",
      rating: 4.5,
  },
  {
    id: 16,
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2020/12/cheese-board-5.jpg",
    name: "Cheese and Crackers Platter",
    price: 150,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts.",
    category: "Snacks",
    rating: 4.3,
  },
  {
    id: 17,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
    name: "Samosa",
      price: 30,
      desc: "Crispy and golden pastry filled with spicy mashed potatoes and peas. A popular Indian snack that is perfect for tea time.",
      category: "Snacks",
      rating: 4.2,
  },
  {
    id: 18,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    name: "Pav Bhaji",
      price: 150,
      desc: "A spicy and flavorful blend of vegetables served with buttered pav (bread rolls). A favorite street food from Mumbai.",
      category: "Snacks",
      rating: 4.6,
  },
  {
    id: 19,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg",
    name: "Vada Pav",
      price: 50,
      desc: "A popular Mumbai street food, featuring a spicy potato fritter sandwiched in a bun with tangy chutneys. A perfect on-the-go snack.",
      category: "Snacks",
      rating: 4.3,
  },
  {
    id: 20,
    img: "https://pipingpotcurry.com/wp-content/uploads/2022/10/Paneer-Pakora-Recipe-Piping-Pot-Curry.jpg",
    name: "Paneer Pakora",
    price: 100,
    desc: "Delicious paneer pieces coated in a spiced gram flour batter and deep-fried to golden perfection. Served with mint chutney.",
    category: "Snacks",
    rating: 4.4,
  },
];
export default FoodData;


export class FoodModel {
  title: string;
  price: number;
  calories: number;
  description: string;
  image: string;
  category: string;
  constructor(
    title: string,
    price: number,
    calories: number,
    description: string,
    image: string,
    category: string
  ) {
    this.title = title;
    this.price = price;
    this.calories = calories;
    this.description = description;
    this.image = image;
    this.category = category;
  }
}

export const foodConverter = {
  toFirestore: (food: FoodModel) => {
    return {
      title: food.title,
      price: food.price,
      calories: food.calories,
      description: food.description,
      image: food.image,
      category: food.category,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new FoodModel(
      data.title,
      data.price,
      data.calories,
      data.description,
      data.image,
      data.category
    );
  },
};

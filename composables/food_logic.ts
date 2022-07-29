import { doc, setDoc, getFirestore, collection,getDocs,getDoc } from "firebase/firestore";

// !add food item to database
export const newFood = async (
  title: string,
  price: number,
  calories: number,
  description: string,
  image: string,
  category: string
) => {
  const db = getFirestore();
  const foodref = doc(collection(db, "foods")).withConverter(foodConverter);
  await setDoc(
    foodref,
    new FoodModel(title, price, calories, description, image, category)
  );
};

// !get all food items

export const getAllFoods=async()=>{
    const db=getFirestore();
    const foods=[];
    const foodSnapshot=await getDocs(collection(db,'foods'));
    foodSnapshot.forEach((doc)=>{
        foods.push({...doc.data(),id:doc.id})
    })
    return foods;
}

// !get single food basing on id
export const getSingleFood=async(id:string)=>{
    var foodItem=null;
    const db =getFirestore();
    const foodRef=doc(db,'foods',id);
    const foodSnap=await getDoc(foodRef);
    if(foodSnap.exists()){
        foodItem=foodSnap.data()
    }else{
        console.log('the food could not be found');
    }
    return foodItem;
}
import { doc, setDoc, getFirestore, collection,getDocs,getDoc,deleteDoc } from "firebase/firestore";

// !add category item to database
export const newCategory = async (
  name: string,
  image: string,
  
) => {
  const db = getFirestore();
  const foodref = doc(collection(db, "categories")).withConverter(categoryconverter);
  await setDoc(
    foodref,
    new Category(name, image, )
  );
};

// !get all food items

export const getAllCategories=async()=>{
    const db=getFirestore();
    const categories=[];
    const categorySnapshot=await getDocs(collection(db,'categories'));
    categorySnapshot.forEach((doc)=>{
        categories.push({...doc.data(),id:doc.id})
    })
    return categories;
}

// !get single food basing on id
export const getSingleCategory=async(id:string)=>{
    var categoryItem=null;
    const db =getFirestore();
    const categoryRef=doc(db,'categories',id);
    const categorySnap=await getDoc(categoryRef);
    if(categorySnap.exists()){
        categoryItem=categorySnap.data()
    }else{
        console.log('the food could not be found');
    }
    return categoryItem;
}

// !update a food item

export const updateCategory=async(id:string)=>{
    const db=getFirestore();
}

// !delete a category
export const deleteCategory=async(id:string)=>{
    const db=getFirestore();
    await deleteDoc(doc(db,'categories',id));

}
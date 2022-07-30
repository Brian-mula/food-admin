import { getDownloadURL, getMetadata, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";


export const saveFile=async(fullPath,file)=>{
    const storage = getStorage();
    const storageRef = ref(storage, fullPath);
    const snapshot= await uploadString(storageRef,file,"data_url")

    if(snapshot){
        const downloadUrl=await getDownloadURL(snapshot.ref)
        const metaData= await getMetadata(storageRef)

        return {snapshot,downloadUrl,metaData}
    }

}

export const uploadFile=async(file)=>{
    
    return await new Promise(function(resolve,reject){
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=async(e)=>{
            const result=reader.result;

           const {snapshot,downloadUrl,metaData}=await saveFile('assets/' + file.name,result)
            console.log(snapshot,downloadUrl,metaData)
            if(snapshot){
                resolve({snapshot,metaData,downloadUrl})
            }else{
                reject();
            }
        }
    })
    
    
}
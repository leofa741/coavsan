import itemData from "./datadb";


export  const customFetch = (time,task) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(task); 
        },time);
    }
    
    );
}

export const fetchProductBytitle = (time,title) => {
    return new Promise (resolve =>{
setTimeout(()=>{
    resolve(itemData.filter(prod=> prod.title===title))
},time);

    });
    
}
export default function linearsearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x) return i;
    }
    return -1;
}

export function binarysearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x) return i+1;
    }
    return -1;
}


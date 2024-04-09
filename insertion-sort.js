// Input: nums = [29, 10, 14, 37, 14, 33, 8, 11]  ------> Output: [8, 10,11. 14,14, 29,33, 37]

function insertionSort(arr){
    const n = arr.length;

    for(let i = 1; i<n; i++){
        const key = arr[i];
        const j=i -1;
        while (j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j++;
        }
        arr[j +1] = key;
    }
    return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

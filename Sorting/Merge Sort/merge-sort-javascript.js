function mergeSort(arr, l,  r) {
    if (l < r) {
        // Find the middle point of arr
        let m = Math.floor((l + r) / 2);

        mergeSort(arr, l, m);   // sort left half
        mergeSort(arr, m+1, r); // sort right half
        merge(arr, l, m, r);    // merge sorted halfs
    }
    return arr;
} 

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l,  m, r) { 
    
    // Find lengths of two subarrays to be merged
    let length1 = m - l + 1;
    let length2 = r - m;

    // Create temp arrays 
    let L = new Array(length1);
    let R = new Array(length2);

    // Copy the sorted left & right halfs to temp arrays
    for (let i = 0; i < length1; i++) {
        L[i] = arr[l + i];
    }
    
    for (let j = 0; j < length2; j++) {
        R[j] = arr[m + 1 + j];
    }
    
    // initial indexes of left and right sub-arrays
    let i = 0; // index for left
    let j = 0; // index for right
    let k = l; // Initial index of merged subarray array

    // Merge the two sorted halfs leto the original array
    while (i < length1 && j < length2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    // One of the halfs will have elements remaining
    while (i < length1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < length2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

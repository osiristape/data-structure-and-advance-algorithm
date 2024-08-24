class StaticArray {

    // Insert n into arr at the next open position.
    // Length is the number of 'real' values in arr, and capacity
    // is the size (aka memory allocated for the fixed size array).
    insertEnd(arr, n, length,  capacity) {
        if (length < capacity) {
            arr[length] = n;
        }
    }  

    // Remove from the last position in the array if the array
    // is not empty (i.e. length is non-zero).
    removeEnd(arr, length) {
        if (length > 0) {
            // Overwrite last element with some default value.
            // We would also the length to decreased by 1.
            arr[length - 1] = 0;
            length--;
        }
    }  

    // Insert n into index i after shifting elements to the right.
    // Assuming i is a valid index and arr is not full.
    insertMiddle(arr, i, n, length) {
        // Shift starting from the end to i.
        for (let index = length - 1; index > i - 1; index--) {
            arr[index + 1] = arr[index];
        }
        //Insert at i
        arr[i] = n;
    }

    // Remove value at index i before shifting elements to the left.
    // Assuming i is a valid index.
    removeMiddle(arr, i, length) {
        // Shift starting from i + 1 to end.
        for (let index = i + 1; index < length; index++) {
            arr[index - 1] = arr[index];
        } 
        // No need to 'remove' arr[i], since we already shifted
    }

    printArr(arr, length) {
        let s = "";
        for (let i = 0; i < length; i++) {
            s+= arr[i] + " ";
        }      
        console.log(s);
    }
}

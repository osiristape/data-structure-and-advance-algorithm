function bucketSort(arr) {
    // Assuming arr only contains 0, 1 or 2
    const counts = [0, 0, 0];

    // Count the quantity of each val in arr
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] += 1;
    }

    // Fill each bucket in the original array
    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let j = 0; j < counts[n]; j++) {
            arr[i] = n;
            i++;
        }
    }
    return arr;
}
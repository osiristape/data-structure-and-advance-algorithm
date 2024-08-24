function binarySearch(arr, target) {
    let L = 0, R = arr.length - 1;

    while (L <= R) {
        let mid = Math.floor((L + R) / 2);

        if (target > arr[mid]) {
            L = mid + 1;
        } else if (target < arr[mid]) {
            R = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
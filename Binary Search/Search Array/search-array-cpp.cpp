using std::vector;

int binarySearch(vector<int> arr, int target) {
    int L = 0, R = arr.size();

    while (L <= R) {
        int mid = (L + R) / 2;

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

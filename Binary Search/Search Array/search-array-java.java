public class Array {
    public static int binarySearch(int[] arr,  int target) {
        int L = 0, R = arr.length - 1;
        int mid;

        while (L <= R) {
            mid = (L + R) / 2;
            if (target > arr[mid]) {
                L = mid + 1;
            } else if (target < arr[mid]) {
                R = mid - 1;
            } else {
                return mid;
            }
        }
        return - 1;
    }
}

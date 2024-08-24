import java.util.Arrays;

public class BucketSort {

    // Java implementation of Bucket Sort
    public static int[] bucketSort(int[] arr) {
        // Assuming arr only contains 0, 1 or 2
        int[] counts = {0, 0, 0};

        // Count the quantity of each val in arr
        for (int num: arr) {
            counts[num] += 1;
        }

        // Fill each bucket in the original array
        int i = 0;
        for (int n = 0; n < counts.length; n++) {
            for (int j = 0; j < counts[n]; j++) {
                arr[i] = n;
                i++;
            }
        }
        return arr;
    }
}
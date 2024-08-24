#include <vector>

using std::vector;

vector<int> bucketSort(vector<int>& arr) {
    // Assuming arr only contains 0, 1 or 2
    int counts[] = {0, 0, 0};

    // Count the quantity of each val in arr
    for (int n: arr) {
        counts[n]++;
    }

    int i = 0;
    for (int n = 0; n < 3; n++) {
        for (int j = 0; j < counts[n]; j++) {
            arr[i] = n;
            i++;
        }
    }
    return arr;
}

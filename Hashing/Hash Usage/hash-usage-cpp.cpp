#include <vector>
#include <string>
#include <unordered_map>

using std::vector;
using std::string;
using std::unordered_map;

int main() {
    vector<string> names = {"alice", "brad", "collin", "brad", "dylan", "kim"};
    unordered_map<string, int> countMap;

    for (string& name: names) {
        if (countMap.count(name) == 0) {
            countMap[name] = 1;
        } else {
            countMap[name]++;
        }
    }

    return 0;
}
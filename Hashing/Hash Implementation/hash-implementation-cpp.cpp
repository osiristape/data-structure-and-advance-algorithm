#include <vector>
#include <string>
#include <utility>
#include <iostream>

using std::vector;
using std::string;
using std::pair;
using std::cout;
using std::endl;

class HashMap {
public:
    int size_ = 0;
    int capacity_ = 2;
    vector<pair<string, string>*> map_;

    HashMap() {
        map_ = *(new vector<pair<string, string>*> {0, 0});
    }

    int hash(string& key) {
        int index = 0;
        for (char &c: key) {
            index += int(c);
        }
        return index % capacity_;
    }

    string* get(string& key) {
        int index = hash(key);
        while (map_[index]) {
            if (map_[index]->first == key) {
                return &map_[index]->second;
            }
            index++;
            index = index % capacity_;
        }
        return nullptr;
    }

    void put(string& key, string& val) {
        int index = hash(key);
        while (true) {
            if (map_[index] == 0) {
                map_[index] = new pair<string, string>(key, val);
                size_++;
                if (size_ >= capacity_ / 2) {
                    rehash();
                }
                return;
            } else if (map_[index]->first == key) {
                map_[index]->second = val;
                return;
            }
            index++;
            index = index % capacity_;
        }
    }

    void remove(string& key) {
        if (!get(key)) {
            return;
        }
        int index = hash(key);
        while (true) {
            if (map_[index]->first == key) {
                // Removing an element using open-addressing actually causes a bug,
                // because we may create a hole in the list, and our get() may 
                // stop searching early when it reaches this hole.
                map_[index] = 0;
                size_--;
                return;
            }
            index++;
            index = index % capacity_;
        }
    }

    void rehash() {
        capacity_ = 2 * capacity_;
        vector<pair<string, string>*> newMap = *(new vector<pair<string, string>*>());

        for (int i = 0; i < capacity_; i++) {
            newMap.push_back(0);
        }
        vector<pair<string, string>*> oldMap = map_;
        map_ = newMap;
        size_ = 0;
        for (auto& pair: oldMap) {
            if (pair != 0) {
                put(pair->first, pair->second);
            }
        }
    }

    void print() {
        cout << "Printing size=" << size_ << endl; 
        for (auto& pair: map_) {
            if (pair) {
                cout << pair->first << ' ' << pair->second << '-';
            }
            cout << endl;
        }
    }
};
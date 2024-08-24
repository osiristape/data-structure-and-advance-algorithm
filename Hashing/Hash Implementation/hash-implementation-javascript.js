class Pair {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class HashMap {
    constructor() {
        this.size = 0;
        this.capacity = 2;
        this.map = new Array(this.capacity).fill(null);;
    }

    hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index+= key.charCodeAt(i);
        }
        return index % this.capacity;
    }

    get(key) {
        let index = this.hash(key);
        while (this.map[index] != null) {
            if (this.map[index].key == key) {
                return this.map[index].val;
            }  
            index += 1;
            index = index % this.capacity;
        }    
        return null;
    }

    put(key, val) {
        let index = this.hash(key);

        while (true) {
            if (this.map[index] == null) {
                this.map[index] = new Pair(key, val);
                this.size += 1;
                if (this.size >= this.capacity / 2) {
                    this.rehash();
                }
                return;       
            } else if (this.map[index].key == key) {
                this.map[index].val = val;
                return;
            }
            index += 1;
            index = index % this.capacity;
        }    
    }

    remove(key) {
        if (this.get(key) == null) {
            return;
        }
        
        let index = this.hash(key);
        while (true) {
            if (this.map[index].key == key) {
                // Removing an element using open-addressing actually causes a bug,
                // because we may create a hole in the list, and our get() may 
                // stop searching early when it reaches this hole.
                this.map[index] = null;
                this.size -= 1;
                return;
            }    
            index += 1;
            index = index % this.capacity;
        }
    }

    rehash() {
        this.capacity = 2 * this.capacity;
        let newMap = new Array(this.capacity).fill(null);
        let oldMap = this.map;
        this.map = newMap;
        this.size = 0;
        for (let i = 0; i < oldMap.length; i++) {
            if (oldMap[i]) {
                this.put(oldMap[i].key, oldMap[i].val)
            }
        }
    }

    print() {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                console.log(this.map[i].key + " " + this.map[i].val)
            }
        }
    }
}
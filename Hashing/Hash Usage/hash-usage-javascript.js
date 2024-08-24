const names = ["alice", "brad", "collin", "brad", "dylan", "kim"];
const countMap = new Map()

for (let i = 0; i < names.length; i++) {
    // If countMap does not contain name
    if (!countMap.has(names[i])) {
        countMap.set(names[i], 1);
    } else {
        countMap.set(names[i], countMap.get(names[i]) + 1);
    }
}
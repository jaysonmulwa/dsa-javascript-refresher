/**
 * A set is a collection of unique elements.
 * - members of the set are unordered, can't occur more than once.
 * - sets are unordered, can't be indexed
 * Set definitions: 
 * - empty set - set with no members. Unverse - a set with all possible members.
 * - two sets are equal if they contain the same members.
 * - a set if a sunset of another set. if,  all members of parent set are in the subset.
 * 
 * Set operations:
 * - union - the set of all members of both sets.
 * - intersection - the set of all members that are in both sets.
 * - difference - the set of all members that are in the first set but not in the second.
 */

class Set {
    constructor() {
        this.dataStore = [];
        this.size = 0;
    }

    add(element) {
        if (!this.contains(element)) {
            this.dataStore[this.size++] = element;
            return true;
        }
        return false;
    }

    remove(element) {
        let index = this.dataStore.indexOf(element);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            this.size--;
            return true;
        }
        return false;
    }

    contains(element) {
        return this.dataStore.indexOf(element) > -1 ? true : false;
    }

    union(set) {
        let unionSet = new Set();
        let firstSet = this.dataStore.slice(0);
        let secondSet = set.dataStore.slice(0);
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(element => {
            unionSet.add(element);
        });
        return unionSet;
    }

    intersection(set) {
        let intersectionSet = new Set();
        let firstSet = this.dataStore.slice(0);
        let secondSet = set.dataStore.slice(0);
        firstSet.forEach(element => {
            if (secondSet.indexOf(element) > -1) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    difference(set) {
        let differenceSet = new Set();
        let firstSet = this.dataStore.slice(0);
        let secondSet = set.dataStore.slice(0);
        firstSet.forEach(element => {
            if (secondSet.indexOf(element) < 0) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }

    show() {
        return this.dataStore;
    }
}
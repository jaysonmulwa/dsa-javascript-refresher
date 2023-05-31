/**
 * Hashing uses a data structure called a hash table.
 * - hash tables provide fast insertion, deletion, and retrieval,
 * - hash tables perform poorly for operations that involve searching, (like finding max and min value ina a data set)
 * - For these operations, other data structures such as the binary search tree are more appropriate
 * 
 * A better hashing algorithm (more superior for strings ad integers) involves:
 * - - properly sizing array - use a size that is a prime number
 * - - a better hashing algorithm e.g Horners algorithm (it adds a step by multiplying the resulting total by a prime constant e.g 31, 37) 
 * 
 * Handling collisions:
 * 1. Chaining
 * a. Separate chaining
 * -- - a hash table that uses a linked list or array to handle collisionss (each array element of the hash table holds another array).
 * -- - this is a good data structure for small data sets
 * -- - after we create the array to store the hashed keys, we call a function that assigns an empty array to each array element of the hash table
 *
 * 2.Open addressing
 * - All elements occupy the hashtable itself. (no chaining)
 * a. Linear probing
 * -- - is an example of a more general hashing technique called open-addressing hashing.
 * -- - should be chosen over separate chaining when your array for storing data can be fairly large.
 * -- - when there is a collision, the program simply looks to see if the next element of the hash table is empty. 
 * -- - - If so, the key is placed in that element. If the element is not empty, the program continues to search for an empty hash-table element until one is found.
 * -- - This technique makes use of the fact that any hash table is going to have many empty elements and it makes sense to use the space to store keys.
 *
 * b. Quadratic probing
 * - This method works much better than linear probing, but to make full use of the hash table, the values of c1, c2, and m are constrained
 * - If two keys have the same initial probe position, then their probe sequences are the same. This property leads to a milder form of clustering, called secondary clustering
 *
 * c. Double hashing
 * - offers one of the best methods available for open addressing because the permutations produced have many of the characteristics of randomly chosen permutations
 * - The initial probe goes to position T[h1(k)]
 * - successive probe positions are offset from previous positions by the amount h2(k) . modulo m
 *
 * Hash Functions
 * 1. Universal hashing
 * Maximizes best average case performance by randomizing the set of hash functions chosen.
 * We begin by choosing a prime number p large enough so that every possible key k is in the range 0 to p - 1, inclusive
 *
 *
 * 2. Perfect hashing
 * - Hashing is often a good choice for its excellent average-case performance, hashing can also provide excellent worst-case performance when the set of keys is static
 * - We call a hashing technique perfect hashing if O.1/ memory accesses are required to perform a search in the worst case
 * - To create a perfect hashing scheme, we use two levels of hashing, with universal hashing at each level.
 * - - The first level is essentially the same as for hashing with chaining. universal hash functions.
 * - - Instead of making a linked list of the keys hashing to slot j , however, we use a small secondary hash table Sj with an associated hash function hj
 *
 * 3. Other (Multiplication and division hashing)
 * - Division
 * -- h(k) = k mod m : where m is the size of array
 * - Multiplication we first multiply key k by some integer value A. 
 * -- h(k) = m(kA mod 1)
 */

class Hash {
    constructor() {
        this.table = new Array(137);

        // For linear probing
        // this.values = [];
    }

    put = (key, value) => {
        let pos = this.simpleHash(key);
        this.table[pos] = value;
    }

    get = (key) => {
        return this.table[this.betterHash(key)];
    }

    simpleHash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.table.length;
    }

    betterHash = (key) => {
        const H = 37;
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += H * total + key.charCodeAt(i);
        }
        return parseInt(total % this.table.length);
    }

    showDistro = () => {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }

    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }

    putForSeparateChaining = (key, value) => {
        let pos = this.betterHash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = new Array();
        }
        this.table[pos].push([key, value]);
    }

    getForSeparateChaining = (key) => {
        let pos = this.betterHash(key);
        if (this.table[pos] != undefined) {
            for (let i = 0; i < this.table[pos].length; i++) {
                if (this.table[pos][i][0] == key) {
                    return this.table[pos][i][1];
                }
            }
        }
        return undefined;
    }

    putForLinearProbing = (key, value) => {
        let pos = this.betterHash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = value;
        } else {
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = value;
        }
    }

    getForLinearProbing = (key) => {
        let pos = this.betterHash(key);
        if (this.table[pos] != undefined) {
            while (this.table[pos] != key) {
                pos++;
            }
            return this.values[pos];
        }
        return undefined;
    }
}

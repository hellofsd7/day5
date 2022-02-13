// Print odd numbers in an array

(() => {
    let c = [];
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            c.push(a[i]);
        }
    }
    console.log(c);
})();

// Title caps using IIFE function :

(() => {
    let a = "product description"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    let b = [a];
    console.log(b);
})();

// Sum of all numbers in an array using IIFE :

(() => {
    let num = [47, 1, 18, 51, 39];
    let sumof = 0;
    num.forEach(x => {
        sumof += x;
    });
    console.log(sumof);
})();

// Return all the prime numbers in an array :

(() => {
    let findPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    };
    let myPrimeArray = findPrime.filter(element => isPrime(element));
    console.log(myPrimeArray);
})();

// Return all the palindromes in an array using IIFE :

(() => {

    let a = ["level", "mom", "racecar", "daddy", "uncle"]
    for (i = 0; i < a.length; i++) {
        let b = a[i].split("").reverse().join("")
        if (a[i] == b) {
            return a[i];
        }
        console.log(a[i])

    }
})();

// Return median of two sorted arrays of same size :

(() => {
    let sortAraay = (a, b) => {

        let c = [...a, ...b].sort((a, b) => a - b);
        let fineMeadian = c.length / 2 | 0;
        if (c.length % 2) return c[fineMeadian];
        return (c[fineMeadian] + c[fineMeadian - 1]) / 2;
    }
    let a = [1, 8, 6];
    let b = [9, 8, 7];
    console.log(sortAraay(a, b));
})();

// Remove duplicates from an array using IIFE

(() => {
    let array = [1, 2, 3, 2, 4, 5, 4, 5, 6, 7];
    let remDuplicate = [...new Set(array)];
    console.log(remDuplicate);
})();

// Rotate an array by k times using IIFE :

(() => {
    const rotateArray1 = (nums, k) => {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
        return nums;
    }
    let nums = [2, 7, 6, 8];
    let k = [2];
    console.log(rotateArray1(nums, k));
})();
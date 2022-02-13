// Print odd numbers in an array using arrow function
let findodd = () => {
    let c = [];
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            c.push(a[i]);
        };
    };
    console.log(c);
};
findodd();

// Title caps using Arrow function :

let titlecaps = () => {
    let a = "guvi tech deserves you"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    let b = [a];
    console.log(b);
};
titlecaps();
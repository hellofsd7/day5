 const a = ["dog", "cow", "tiger", "lion", "cat", "goat", "rabbit"];

 let b = a.filter((e) => e.length === 3);
 let c = a.filter((e => e.length === 4));
 let d =
     a.filter((e => e.length === 5));
 let f =
     a.filter((e => e.length === 6));
 console.log(b, b.length);
 console.log(c, c.length);
 console.log(d, d.length);
 console.log(f, f.length);;

 const m = [1, 2, 3, 4, 5];
 let q = m.filter((e) => e % 2 == 0).reduce((a, e) => a + e);
 console.log(q);
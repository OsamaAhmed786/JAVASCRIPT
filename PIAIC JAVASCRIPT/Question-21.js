/*They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.*/

let list = [];
let creatlist = (a) => {
    list.push(a);
};
creatlist("pakistan", "attabadLake", "karachi", "urdu");
console.log(list);

let listObject = {};

let creatObject = (list) => {
    list.map((item, i) => {
        listObject['item-${i + 1}'] = item;
    });
};
creatObject(list);
console.log((listObject));

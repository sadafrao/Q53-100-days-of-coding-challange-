// Q53 // breakdown a list into a simpler parts it easy to work 
// make a list items
var shoppinglist = {
    dresses: ["bridal sharara", "designer sari", "choridar"],
    shoes: ["sundals", "chappal", "peshawari"],
    makeup: ["bridal", "party", "simple touch"],
};
// get specific item from a list
var dresses = shoppinglist.dresses, shoes = shoppinglist.shoes, makeup = shoppinglist.makeup;
console.log("dress : ".concat(dresses[0], ", shoeses : ").concat(shoes[0], " , makups : ").concat(makeup[0], " "));

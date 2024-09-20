// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(newCat) {
    return cats.push(newCat)
}

function destructivelyPrependCat(newCat) {
    return cats.unshift(newCat);
}
function destructivelyRemoveLastCat(newCat) {
    return cats.pop(newCat);
}

function destructivelyRemoveFirstCat(newCat) {
    return cats.shift(newCat);
}

function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats,];
}
function removeLastCat() {
    return [...cats.slice(0, 2)];
}
function removeFirstCat() {
    return [...cats.slice(1)]
}
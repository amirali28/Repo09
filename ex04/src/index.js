//Only change code below this line
function compareDifferentValues(m, n) {
  if (m === n) {
    return "Equal";
  } else {
    return "Not equal";
  }
}
compareDifferentValues(16, 16);
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

//Only change code below this line
module.exports = compareDifferentValues;

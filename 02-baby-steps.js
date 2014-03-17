// BABY STEPS
// Exercise 02 of 13

process.argv
var sum = 0;
for (var i = 2; i < process.argv.length;i++){
  sum+=parseInt(process.argv[i])
}
console.log(sum);

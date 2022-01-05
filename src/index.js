module.exports = function toReadable (n) {
 
  let dgs = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    
  if (n < 20) return dgs[n];
  if (n < 100) return tens[Math.floor((n/10)-2)] + (n%10? " " + dgs[n%10]: "");
  if (n < 1000) return dgs[Math.floor(n/100)] +" hundred" + (n%100 == 0? "": " " +  toReadable(n%100));    
}
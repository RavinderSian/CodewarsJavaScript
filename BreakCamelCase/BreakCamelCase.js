// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  if (!string) return "";

  //We spent an hour just to get here,
  //Always think regex first, they are powerful
  return string.split(/(?=[A-Z])/).join(" ");
}

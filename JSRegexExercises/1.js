//Write a method that returns true if its argument looks like
//a URL, false if it does not.

function isUrl(string) {
  return !!string.match(/^https?:\/\/\S+$/);
}

console.log(isUrl('https://launchschool.com'));   // -> true
isUrl('http://example.com');         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
isUrl('   https://example.com');     // -> false
const data = Object.create(null);

// console.log(data);

function makeMap(
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
  }
  return expectsLowerCase ?
      function (val) {
          return map[val.toLowerCase()];
      } :
      function (val) {
          return map[val];
      }
}

const data1 = makeMap("123,123,123");

const data2 = data1("SSSS");

console.log(data2);

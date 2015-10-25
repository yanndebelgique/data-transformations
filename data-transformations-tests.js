// Write your tests here!
// Here is an example.
var array = [{
  name: 'yann',
  age: 21
}, {
  name: 'alex',
  age: 30
}];
var table = [
  ['name', 'age'],
  ['yann', 21],
  ['alex', 30]
];

Tinytest.add('arrays to table', function(test) {
  test.equal(DataTransformations.arrayToTable(array), table);
});

Tinytest.add('table to arrays', function(test) {
  test.equal(DataTransformations.tableToArray(table), array);
});

#Simple data tranformation from mongodb documents to tables and vise vise-versa

Useful when you want to create a html table for example.

```
// Write your tests here!
// Here is an example.
var array = [{
  name: 'yann',
  age: 26
}, {
  name: 'alex',
  age: 30
}];
var table = [
  ['name', 'age'],
  ['yann', 26],
  ['alex', 30]
];

Tinytest.add('arrays to table', function(test) {
  test.equal(DataTransformations.arrayToTable(array), table);
});

Tinytest.add('table to arrays', function(test) {
  test.equal(DataTransformations.tableToArray(table), array);
});

```

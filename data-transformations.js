DataTransformations = {};

DataTransformations["arrayToTable"] = function arrayToTable(array) {
  var table = [];
  var table_row = [];
  var first_element = array[0];
  var column_names = _.keys(first_element);
  table.push(column_names);

  _.each(array, function(array_row) {
    table_row = []
    _.each(column_names, function(column_name) {
      table_row.push(array_row[column_name]);
    });
    table.push(table_row);
  });

  return table;
};


DataTransformations["tableToArray"] = function TableToArray(table) {
  var array = [];
  var keys = table[0];
  var tabel_elements = _.rest(table);
  _.each(tabel_elements, function(tabel_element) {
    var obj = {};
    _.each(keys, function(key, index) {
      obj[key] = tabel_element[index];
    });
    array.push(obj);
  });
  return array;
};

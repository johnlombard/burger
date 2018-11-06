var connection = require("../config/connection.js");
// selectAll()`
// * `insertOne()`
// * `updateOne()`

var orm = {
    selectAll: function(tableInput, table) {
      var queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [tableInput, table], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(whatToSelect, table, orderCol) {
      var queryString = "INSERT INTO " + table";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    // create: function(table, cols, vals, cb) {
    //     var queryString = "INSERT INTO " + table;
    
    //     queryString += " (";
    //     queryString += cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(vals.length);
    //     queryString += ") ";
    
    //     console.log(queryString);
    
    //     connection.query(queryString, vals, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });
    //   },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
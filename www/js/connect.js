var sql = require('mssql');

sql.connect("mssql://jins:gl_programmer2@http://86.96.194.194/Tracking_db").then(function() {
    // Query

	new sql.Request().query('select * from View_LiveVehicleSignal').then(function(recordset) {
		console.dir(recordset);
	}).catch(function(err) {
		// ... query error checks
	});

    // Stored Procedure

	// new sql.Request()
	// .input('input_parameter', sql.Int, value)
  //   .output('output_parameter', sql.VarChar(50))
	// .execute('procedure_name').then(function(recordsets) {
	// 	console.dir(recordsets);
	// }).catch(function(err) {
	// 	// ... execute error checks
	// });

	// ES6 Tagged template literals (experimental)

	// sql.query`select * from mytable where id = ${value}`.then(function(recordset) {
	// 	console.dir(recordset);
	// }).catch(function(err) {
	// 	// ... query error checks
	// });
}).catch(function(err) {
	// ... connect error checks
});

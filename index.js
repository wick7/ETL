var Extraload = require('extraload');
require('dotenv').config()

var mysql = Extraload.mysql({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

var final;

//Per Month
// var mysqQ = mysql.query("SELECT SUM(quantity) AS ItemsPurchased, AVG(oz_size) AS AverageOZSize, SUM(price_paid) AS TotalPricePurchased, '01/2020' AS MonthYear FROM purchased WHERE date_purchased BETWEEN '2020-01-01T07:00:00.000' and '2020-01-31T07:00:00.000'", function (err, results) {
//     if (err) {
//         console.log(err)
//         mysql.end
//     }
//     final = results
//     mysql.end
//     console.log(final)
//     console.log(final.length)
// })

//Grand Total
var mysqQ = mysql.query("SELECT SUM(quantity) AS ItemsPurchased, AVG(oz_size) AS AverageOZSize, SUM(price_paid) AS TotalPricePurchased, '01/2020' AS MonthYear FROM purchased", function (err, results) {
    if (err) {
        console.log(err)
        mysql.end
    }
    final = results
    mysql.end
    console.log(final)
    console.log(final.length)
})


//Montly Table
// ItemsPurchased: 14,
// AverageOZSize: 2.894285714285714,
// TotalPricePurchased: 91.6
// MonthYear: '01/2020'

//Grand Total Table
// ItemsPurchased: 177,
// AverageOZSize: 2.9878972602739724,
// TotalPricePurchased: 1601.4800000000002,
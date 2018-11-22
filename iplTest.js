var r=require('xlsx');
var wb=r.readFile('./matches.xlsx');
let ar=r.utils.sheet_to_json(wb.Sheets.Sheet1);
console.log(ar);

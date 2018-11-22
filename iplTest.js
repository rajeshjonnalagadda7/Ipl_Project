var r=require('xlsx');
var wb=r.readFile('./matches.xlsx');
let ar=r.utils.sheet_to_json(wb.Sheets.Sheet1);
//console.log(ar);
let yearlyMatches={};
let matchesWonYearly={}
let yearlyId={};
let id=0;
for(let i in ar){
	if(yearlyMatches[ar[i].season]){yearlyMatches[ar[i].season]++;}
	else{yearlyMatches[ar[i].season]=1;matchesWonYearly[ar[i].season]=[];}
}
for(let i in yearlyMatches)
console.log(i+":"+yearlyMatches[i]);
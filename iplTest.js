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
for(let i in matchesWonYearly){won={};year={};id++;;
	let end=0;
	let start=0;
	for(let j in ar){
		if(ar[j].season==i && ar[j].winner){end=ar[j].id;if(start==0)start=ar[j].id;
			if(won.hasOwnProperty(ar[j].winner)){won[ar[j].winner]++;
			}
			else {won[ar[j].winner]=1;}
		}
	}year.start=start;
	year.end=end;
	yearlyId[i]=year;
	matchesWonYearly[i].push(won);
}

console.log(matchesWonYearly);
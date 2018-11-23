var csvjson = require('csvjson');
var fileStream = require('fs');
var option = {
				delimiter: ','
			 };

var file = fileStream.readFileSync('./matches.csv','utf8');
var matchCsvFile = csvjson.toObject(file,option);
var fs=require('fs');
var deliveries_file=fs.readFileSync('./deliveries.csv','utf8').split('\n');
let start_id = 0;//matches start_id of particular season
let end_id = 0;//matches end_id of particular season
let season = '2015';

	for(let id in matchCsvFile){

		if(matchCsvFile[id].season === season){
			end_id = matchCsvFile[id].id;
			if(start_id === 0)
				start_id = matchCsvFile[id].id;
		}
	
}

let bowlerEconomy = {};
let deliveriesId_range = 0;
let total_runs = 0;
let no_balls = 0;
let wide_balls = 0;
let bowler = '';
let bowlerObj = {};

for(let id=1;id<deliveries_file.length;id++){
		deliveriesId_range =  parseInt(deliveries_file[id].split(',')[0]);
		total_runs = parseInt(deliveries_file[id].split(',')[17]);
		no_balls = parseInt(deliveries_file[id].split(',')[10]);
		wide_balls = parseInt(deliveries_file[id].split(',')[13]);
		bowler = deliveries_file[id].split(',')[8];

		if(deliveriesId_range >= start_id && deliveriesId_range <= end_id){
				if(bowlerEconomy.hasOwnProperty(bowler)){
					bowlerObj.runs+= total_runs;
					if(no_balls === 0 && wide_balls === 0)
						bowlerObj.balls++;
				}
					else{
						bowlerObj = {};
						bowlerEconomy[bowler] = bowlerObj;
						bowlerObj.runs = total_runs;
						if(no_balls === 0 && wide_balls === 0){
							bowlerObj.balls = 1;
						}else{
							bowlerObj.balls = 0;
						}
					}
				
		}
}	
let topEconomyBowler = [];
for(let bowler in bowlerEconomy){
	topEconomyBowler.push([bowler,(bowlerEconomy[bowler].runs*6)/bowlerEconomy[bowler].balls]);
}

console.log(topEconomyBowler.sort((a,b)=>a[1]-b[1]).slice(0,10));

var csvjson = require('csvjson');
var fileStream = require('fs');
var option = {
				delimiter: ','
			 };

var file = fileStream.readFileSync('./matches.csv','utf8');
var matchCsvFile = csvjson.toObject(file,option);
var fs=require('fs');
var deliveries_file=fs.readFileSync('./deliveries.csv','utf8').split('\n');

let extraScorePerTeam = {};
let start_id = 0;//matches start_id of particular season
let end_id = 0;//matches end_id of particular season
let season = '2016';
	for(let id in matchCsvFile){

		if(matchCsvFile[id].season === season){
			end_id = matchCsvFile[id].id;
			if(start_id === 0)
				start_id = matchCsvFile[id].id;
		}
	
}
let deliveriesId_range=0;
let extra_score=0;
let team='';
for(let id=1;id<deliveries_file.length;id++){
		deliveriesId_range =  parseInt(deliveries_file[id].split(',')[0]);
		extra_score = parseInt(deliveries_file[id].split(',')[16]);
		team = deliveries_file[id].split(',')[3];
		if(deliveriesId_range >= start_id && deliveriesId_range <= end_id){
				if(extraScorePerTeam.hasOwnProperty(team)){
					extraScorePerTeam[team]+= extra_score;
				}
				else{
					extraScorePerTeam[team]=extra_score;
				}
		}
		}
console.log(extraScorePerTeam);		
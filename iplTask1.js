var csvjson = require('csvjson');
var fileStream = require('fs');
var option = {
				delimiter: ','
			 };

var file = fileStream.readFileSync('./matches.csv','utf8');
var matchCsvFile = csvjson.toObject(file,option);
let matchesPerSeason = {};
let matchesWonPerTeamPerSeason = {}
let yearlyId = {};
console.log("============================# matchesPerSeason #===============================");

for(let id in matchCsvFile){
	if(matchesPerSeason[matchCsvFile[id].season]){//cheking whether season exist in matchesPerSeason Object
		matchesPerSeason[matchCsvFile[id].season]++;
	}
	else{
		matchesPerSeason[matchCsvFile[id].season] = 1;
		matchesWonPerTeamPerSeason[matchCsvFile[id].season] = [];//creating an empty array to store each and every team's winning count per season
		}
}
console.log(matchesPerSeason);//number of matches played per year of all the years in IPL.

console.log("===============================# end ques1 #===================================");


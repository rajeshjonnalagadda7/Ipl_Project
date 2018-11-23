var csvjson = require('csvjson');
var fileStream = require('fs');
var option = {
				delimiter: ','
			 };

var file = fileStream.readFileSync('./matches.csv','utf8');
var matchCsvFile = csvjson.toObject(file,option);
let uniqueSeason = [];
let matchesWonPerTeamPerSeason = {};

for(let id in matchCsvFile){

	if(uniqueSeason.indexOf(matchCsvFile[id].season) === -1){//cheking whether season exist in matchesPerSeason Object
		
		uniqueSeason.push(matchCsvFile[id].season);
		matchesWonPerTeamPerSeason[matchCsvFile[id].season] = [];//creating an empty array to store each and every team's winning count per season
	}
}	

let teamsCountPerSeason = {};//all teams individual winning count per season

for(let season in matchesWonPerTeamPerSeason){
    
    teamsCountPerSeason = {};
	
	for(let id in matchCsvFile){

		if(matchCsvFile[id].season === season && matchCsvFile[id].winner){

			if(teamsCountPerSeason.hasOwnProperty(matchCsvFile[id].winner)){
			
				teamsCountPerSeason[matchCsvFile[id].winner]++;
			}
			else {
				teamsCountPerSeason[matchCsvFile[id].winner] = 1;
			}
		}
	}
	matchesWonPerTeamPerSeason[season].push(teamsCountPerSeason);
}
console.log(matchesWonPerTeamPerSeason);
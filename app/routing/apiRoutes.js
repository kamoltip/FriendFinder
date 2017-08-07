var friendData = require('../data/friends');
var path = require('path');

var scoreDifference = 0;

module.exports = function(app){
		app.get('/api/friends', function(req ,res){
				res.json(friendData);
		});

		app.post('/api/friends', function(req, res){

	var twinFlameScores = req.body.scores;
	var image = req.body.photo;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendData.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<twinFlameScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(twinFlameScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var result = friendData[bestMatch];
    res.json(result);

    //pushes new submission into the friendData array
    friendData.push(req.body);
  });
};
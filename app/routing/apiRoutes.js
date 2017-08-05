var friendData = require('../data/friends.js');
var path = require('path');

var scoreDifference = 0;

module.exports = function(app){
		app.get('./api/friends', function(req ,res){
				res.json(friendsData);
		});

		app.post('./api/friends', function(req, res){

			var matching = {
				name: '',
				image: '',
				matchDifference: 1000
			};
			var usrData = req.body;
			var usrName = usrData.name;
			var usrImage = usrData.Image;
			var usrScore = usrData.scores;

			var scoreDifference = 0;

			for (var i = 0 ; i < [friends].length-1 ; i++) {
				console.log(friends[i].name);
				scoreDifference = 0;

				for (var z = 0 ; z < 10; z++) {
					scoreDifference += Math.abs(parseInt(usrScores[z]) - parseInt(friends[i].scores[z]));
				
				if (scoreDifference <= matching.friendDifference){

					// Reset the bestMatch to be the new friend. 
					matching.name = friends[i].name;
					matching.photo = friends[i].photo;
					matching.matchDifference = scoreDifference;
				}
			}
		}

		friends.push(usrData);
 
		res.json(matching);
	});
};
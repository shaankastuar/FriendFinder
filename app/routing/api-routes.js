var friendsData = require('.../data/friends.js');


//get all the friends from the friends file
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json('friendsArray');
	});

//find the best match
	app.post('/api/friends', function(req, res){

		//set up a blank "best match"
		var bestMatch ={
			name: "",
			photo: "",
			scoreDifference: 0
		};

		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;

		var totalDifference = 0;

		//loop through the friends array of objects to get all the users in the arrays' scores
		for(var i = 0; i < friendsData.length-1; i++){
			console.log(friendsArray[i].name);
			totalDifference = 0;

			//loop through each friend's score to calculate the absolute difference between scores, and push that value to the totalDifference value above

			for(var j = 0; j < 10; j++){

				//calculate the difference between scores and add to totalDifference (which is 0 initially)

				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference){

				// Reset the bestMatch to be the new friend. 
							bestMatch.name = friendsArray[i].name;
							bestMatch.photo = friendsArray[i].photo;
							bestMatch.friendDifference = totalDifference;
						}
					}
				}

	})

}
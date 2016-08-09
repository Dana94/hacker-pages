Template.hackerList.onCreated(function(){

	Meteor.subscribe('hackers');
});

Template.hackerList.helpers({

	'Hacker': function(){

		return Hackers.find();
	}


});

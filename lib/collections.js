Hackers = new Mongo.Collection('Hackers');

if (Meteor.isServer){

	Meteor.publish('hackers', function hackersPublication(){

		return Hackers.find();
	});
}

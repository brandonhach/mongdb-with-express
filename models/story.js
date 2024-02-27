const { DateTime } = require('luxon');
const { v4: uuidv4 } = require('uuid');
const { ObjectId } = require('mongodb');

//need a reference var to the stories collection in mongodb
let stories;
exports.getCollection = (db) => {
	stories = db.collection('stories');
};

exports.find = () => stories.find().toArray();

exports.findById = (id) => stories.findOne({ _id: new ObjectId(id) });

exports.save = (story) => stories.insertOne(story);

exports.updateById = function (id, newStory) {
	return stories.updateOne({ _id: new ObjectId(id) }, { $set: { title: newStory.title, content: newStory.content } });
};

exports.deleteById = (id) => stories.deleteOne({ _id: new ObjectId(id) });

(function(){// This code only runs on the client

// simple-todos-angular.js
Tasks = new Mongo.Collection("tasks");

Meteor.methods({
  addTask: function (text, section, projectId) {
    Tasks.insert({
      text: text,
      section: section,
      projectId: projectId,
      createdAt: new Date()
    });
  },
  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});

})();

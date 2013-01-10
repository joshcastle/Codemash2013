$(function() {
	Backbone.io.connect();
	
	App.currentUser = new App.Models.User();
	var questions = new App.Collections.Questions();

	var loginView = new App.Views.Login({el: $('#loginView'), model: App.currentUser});
	var newQuestionView = new App.Views.NewQuestion({el: $('#newQuestionView'), model: questions});
	var questionsView = new App.Views.Questions({el: $('#questions'), model: questions});

	questions.fetch();
});
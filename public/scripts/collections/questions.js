App.Collections.Questions = Backbone.Collection.extend({
    model: App.Models.Question,
	backend: 'questionBackend',
	
	initialize: function() {
        this.bindBackend();
    }
});
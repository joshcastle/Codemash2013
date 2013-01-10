App.Views.NewQuestion = Backbone.View.extend({
	events: {
       "click #addItem": "addItem"
    },
 
   initialize: function(options) {
       App.currentUser.on("change", this.render, this);
       this.render();
   },
 
   render: function() {
       this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
	   this.$("#asker").text(App.currentUser.get("userName"));
       return this;
   },
   
   addItem: function() {
        var question = {
            text: this.$("#newQuestion").val(),
            userName: App.currentUser.get("userName")
        };
 
        this.model.create(question);
        this.$("#newQuestion").val('')
    }
 
});
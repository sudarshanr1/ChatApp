myAppModule.service('ChatService',function($http,$q){
	this.getAllContacts = function(){
		var url = "/api/contacts";
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	this.getAllContactsInformation = function(id){
		var url = "/api/contacts/"+id;
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	this.getChatHistory = function(id){
		var url = "/api/contacts/"+id+"/messages";
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	this.sendMessage = function(obj){
		var deferred = $q.defer().promise;
		var post = {};
		post.content = obj.content;
		//var postData = JSON.stringify(post);
	 	var transform = function(data){
	        return $.param(data);
	    }
		var postUrl = "/api/contacts/"+obj.id+"/messages";
	 	promise = $http.post(postUrl, post);
    	return promise;
	}

	this.getNotificationIds = function(){
		var url = "/api/notifications";
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	return this;
})
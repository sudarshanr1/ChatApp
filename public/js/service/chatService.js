myAppModule.service('ChatService',function($http,$q){
	/*
	*Method to get all the contact Ids
  	*/
	this.getAllContacts = function(){
		var url = "/api/contacts";
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	/*
	*Method to get all the contact information from the ids
  	*/
	this.getAllContactsInformation = function(id){
		var url = "/api/contacts/"+id;
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	/*
	*Method to get all the chat history of the selected contact
  	*/
	this.getChatHistory = function(id){
		var url = "/api/contacts/"+id+"/messages";
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	/*
	*Method to send the message for the selected recepient
  	*/
	this.sendMessage = function(obj){
		var deferred = $q.defer().promise;
		var post = {};
		post.content = obj.content;
		var postUrl = "/api/contacts/"+obj.id+"/messages";
	 	promise = $http.post(postUrl, post);
    	return promise;
	}
	/*
	*Method to get all notification ids
  	*/
	this.getNotificationIds = function(){
		var url = "/api/notifications";
		var deferred = $q.defer().promise;
		promise = $http.get(url);
		return promise;
	}
	return this;
})
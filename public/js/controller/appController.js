myAppModule.controller('ChatController', ['$scope','$http','ChatService', function($scope,$http,ChatService) {
  	$scope.allContacts=[];
  	$scope.getAllContactsInformation = [];
  	$scope.messages = [];
  	$scope.notificationIds=[];
  	/*
	*Method to get all the contact Ids on page load
  	*/
  	$scope.contacts = function(){
  		var getContactsQuery = ChatService.getAllContacts();
  		getContactsQuery.then(function(response){
  			$scope.allContacts = response.data.contacts;
  			$scope.getContactsInformation();
  		});
  	}
  	$scope.contacts();
  	/*
	*Method to get all the contact information from all the contact ids
  	*/
  	$scope.getContactsInformation = function(){
  		var getContactsInformationQuery;
  		for(var i=0;i<$scope.allContacts.length;i++){
  			getContactsInformationQuery = ChatService.getAllContactsInformation($scope.allContacts[i]);
  			getContactsInformationQuery.then(function(response){
  				response.data.contact.notification = false;
  				$scope.getAllContactsInformation.push(response.data.contact);
  			});

		};
	}
	/*
	*Method to display the chat history of the selected contact
  	*/
	$scope.showMessages = function(contact){
		var messagesQuery = ChatService.getChatHistory(contact.id);
		$scope.contact = contact;
		$scope.selectedItem = contact.id;
		$scope.displayNotification(contact.id,true);
		$scope.name = contact.name;
		$scope.contactNumber = contact.phone;
		$scope.id = contact.id;
		messagesQuery.then(function(response){
			$scope.messages = response.data.messages;
		});
	}
	
	/*
	*Method to send the message to the recepient
  	*/
	$scope.sendMessage = function(){
		var obj ={};
		obj.id = $scope.id;
		obj.content = $scope.messageText;
		var sendMessageQuery = ChatService.sendMessage(obj);
		sendMessageQuery.then(function(response){
			$scope.messages.push(response.data.message);
			$scope.messageText = "";
		});
	}
	/*
	*Method to get the ids of the contact which has notification
  	*/
	$scope.getNotificationIds = function(){
		var notificationsQuery = ChatService.getNotificationIds();
		notificationsQuery.then(function(response){
			for(var key in response.data.notifications){
				$scope.displayNotification(key);
				if($scope.contact.id === key){
					$scope.showMessages($scope.contact);
				}
			}
		});
	}
	/*
	*Method to display the notofication icon on the contact if it has a notification
  	*/
	$scope.displayNotification = function(key,clicked){
		for(var i=0;i<$scope.getAllContactsInformation.length;i++){
			if($scope.getAllContactsInformation[i].id === key){
				if(clicked || $scope.id == key){
					$scope.getAllContactsInformation[i].notification = false;
				}else{
					$scope.getAllContactsInformation[i].notification = true;
				}
			}
		}
	}
	setInterval($scope.getNotificationIds,5000)
}]);
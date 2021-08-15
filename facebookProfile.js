var facebbokProfile = {
  name : "Khushbu Thakkar",
  friends : 100,
  messages : ["Hi","Hi, How are you?","Happy birthday"],
  postMessage : function(message){
    this.messages.push(message);
  },
  deleteMessage: function(index){
    this.messages.splice(index,1);
  },
  addFriend : function(){
    this.friends = this.friends + 1;
  },
  removeFriend: function(){
    this.friends = this.friends - 1;
  }
};
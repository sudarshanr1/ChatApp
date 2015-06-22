myAppModule.directive("scrollBottom", function(){
    return {
        link: function(scope, element, attr){
            $('.users').on("click", function(){
                $(".chatHistory").scrollTop($(".chatHistory")[0].scrollHeight);
            });
        }
    }
});
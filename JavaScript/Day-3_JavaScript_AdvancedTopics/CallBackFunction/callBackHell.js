// Called Pyramid of Doom

// A CallBack function Inside a CallBack Function is called Pyramid of Doom / CallBack Hell
// Simply Nested CallBack Function
getUser(function(User){
    getPosts(user.id,function (post){
        displayUserAndPost(user,posts,function(){
            console.log("User Info and Posts successfully displayed");
        } )
    })
})
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Initializing ElementsbyId
const entirePost = document.getElementById("entire-post")
const imgPost = document.getElementById("img-post")
const postName = document.getElementById("post-name")
const postPlace = document.getElementById("post-place")
const imgDisplay = document.getElementById("img-display")
const noOfLikes = document.getElementById("no-of-likes")
const commenterName = document.getElementById("commenter-name")
const commentMsg = document.getElementById("comment-msg")

// Try - Displaying all posts from Javascript Object - Post
let postDisplay = function(){
    for (let i = 0; i < posts.length; i++){
        entirePost.innerHTML += `
            <div class="post-container">
                <div class="display-flex">
                    <div class="post-div">
                        <img id="img-post" src="${posts[i].avatar}">        
                    </div>
                    <div class="name-div">
                        <p id="post-name">${posts[i].name}</p>
                        <span id="post-place">${posts[i].location}</span>
                    </div>
                </div>
                <!-- Post Image -->
                <div class="post-img">
                    <img id="img-display" src="${posts[i].post}">
                </div>
                <!-- Post Icons -->
                <img class="display-icons" src="images/icon-heart.png">
                <img class="display-icons" src="images/icon-comment.png">
                <img class="display-icons" src="images/icon-dm.png">
                <!-- Likes -->
                <p class="like-count"><span id="no-of-likes">${posts[i].likes}</span> likes</p>
                <!-- Comments -->
                <p><span id="commenter-name">${posts[i].name}</span>&nbsp;<span id="comment-msg">${posts[i].comment}</span></p>
            </div>
        `
    }
}

postDisplay();
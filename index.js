// Write your code here!

function displayPosts(posts) {
    const postList = document.getElementById('post-list')

    posts.forEach(post => {
       const newPost = document.createElement('li')
       const title = document.createElement('h1')
       const body = document.createElement('p')

       title.textContent = post.title
       body.textContent = post.body

       newPost.append(title, body)
       postList.append(newPost)
    });
}

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        displayPosts(posts) 
    }
    catch (error) {
        console.error('Error fetching post data:', error)
    }
}

fetchAndDisplayPosts()
interface Post {
    title?: string,
    content?: string,
    author: string,
	// [x: string]: any 
}

let post: Post = { author: "shinkai" };

console.log(`Hello, this article is posted by ${post.author}, enjoy intellisense by typescript!`)
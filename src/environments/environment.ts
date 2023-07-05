export const host = " http://localhost:3000";
export const environment = {
    home: {
     tags:host + "/home_Posts",
     category: host + "/category",
     authors: host + "/authors",
     join: host + "/join"
    },
    blog: {
        posts:host + "/posts"
    },
    blog_posts: {
        reads: host + "/reads"
    },
    category_page: {
        second_post: host + "/second_post"
    }
}
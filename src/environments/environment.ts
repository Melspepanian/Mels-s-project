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
        second_post: host + "/second_post",
        second_category: host + "/second_category",
        tags: host + "/tags"
    },
    author: {
        authors_post:host + "/authors_post"
    },
    about_us: {
        know_post: host + "/know_post"
    },
    fotter: {
        footer:host + "/fotterEmail"
    },
    contact: {
        contact:host + "/contact"
    }

}
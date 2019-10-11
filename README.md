# Dad Blog
## Overview
John Is going to be a new Dad and really wants to blog about his experience, but he is too busy to make a blog site so he has enlisted you to help! He wants to be able to write about all that occurs along the journey: the complete and utter lack of sleep, contracting some new sickness on a weekly basis, having no time for hobbies he used to enjoy, the sweet smell of changing dirty diapers, and above all... the love he will feel for his child every step of the way that makes it all worth it!

## Base Goals
1. Setup Server and Connect Database

2. CRUD for Users

- GET all users ('/users')
- GET one user ('/users/:id')
- POST one user ('/users')
- PATCH (Edit) one user ('/users/:id')
- DELETE one user ('/users/:id')
```
{
  "id": 1,
  "name": "John Armbruster",
  "email": "jaboy@galvanize.com",
  "website": "dadstarstar.com",
}
```
3. CRUD for Blog Posts
- GET all posts ('/posts')
- GET one post ('/posts/:id')
- POST one post ('/posts')
- PATCH (Edit) one post ('/posts/:id')
- DELETE one post ('/posts/:id')
```
{
  "id": 1,
  "title": "Fatherhood: the Good, the Bad, and the Ugly",
  "body": "this is the post body"
  "user_id": 1,
}
```
## Stretch
1. CRUD for Blog Comments
- GET all comments ('/comments')
- GET one comment ('/comments/:id')
- POST one comment ('/comments')
- PATCH (Edit) one comment ('/comments/:id')
- DELETE one comment ('/comments/:id')
```
{
  "id": 1,
  "body": "This is the comment body"
  "post_id": 1,
  "user_id": 2
}
```
2. Create the client!
- Create React app and connect with server
- Render all blog posts
- Render all comments for each blog posts
- Form to add blog post
- Form to add comment to a post
- Button/Form to edit blog post
- Button to delete blog post
3. Implement Redux
- Setup redux flow for user
- Setup redux flow for posts
- Setup redux flow for comments
## Nightmare Mode
1. Create authentication for users to log in on both the server and the client

<img src="https://github.com/Qiugu-He/Blog/blob/master/HomePage.png" alt="alt text" width="100%" height="100%">
<br/>

## Multi-User Blogging Platform
This blog is built using React, Node Express, and MongoDB

Address (Cloud service provided by Digital Ocean): http://167.99.183.216/

<br>
Made by Qiugu

## Screenshot
- PC / Laptop Desktop:
<img src="https://github.com/Qiugu-He/Blog/blob/master/ScreenShot1.png" alt="alt text" width="100%" height="100%">
<br/>

- Mobile:
<img src="https://github.com/Qiugu-He/Blog/blob/master/Screenshot2.png" alt="alt text" width="30%" height="30%">
<img src="https://github.com/Qiugu-He/Blog/blob/master/Screenshot3.png" alt="alt text" width="30%" height="30%">
<br/>

## Feature Description:
- [x]  Signin/Singup <br>
- [x]  Social Login with Google - OAuth<br>
- [x]  JWT based Authentication System<br>
- [x]  Admin / User Dashboard<br>
- [x]  Registration<br>
- [x]  Role based Authentication System<br>
- [x]  CRUD Operation with Image upload<br>
- [x]  Blog Search / Load more blogs<br>
- [x] Write and Post Blogs<br>
- [x] Update and Delete Blogs<br>
- [x]  Show Blog details<br>
- [x]  Related Blogs <br>
- [x] Categories and Tags<br>
- [x]  User public profile page <br>
- [x] Multi User System<br>
- [x]  Responsive Design<br>
- [x] Contact Author<br>

## Frontend Techs:
- React Hook
- NextJs
- WebPack
- React-Router

## Backend API and Database:
- API with Node Express
- MongoDB

## Project Main Structure:
```
- Frontend
    - actions
    - components
        - auth
            - Admin
            - Signin
            - Signup
            - LoginGoogle
         - blog
             - Card
             - SmallCard
             - Search
         - crud
              - BlogCreate
              - BlogRead
              - BlogUpdate
              - Categoty
              - Tag
           - Header
           - Layout
    - pages
        - admin
        - blogs
        - categories
        - tags
        - user
    - static
    
- Backend
    - Controller
        ...
    - Models
        ...
    - Routes
        ...
    - Validation
 ```
 
## Build Setup
```
# install dependencies
npm install

# server start at local host
npm start

# build for production
npm run build
npm run dev
```

***Note:** Please make sure API is running in ordrer for front-side work properly.

For detail, please visite: http://167.99.183.216/






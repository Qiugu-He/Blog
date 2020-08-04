<img src="https://github.com/Qiugu-He/Blog/blob/master/HomePage.png" alt="alt text" width="50%" height="50%">
<br/>
## SEO Multi-User Blogging Platform
This blog is built using MERN stack - React, Node Express, NextJs, and MongoDB

Made by Qiugu

## Screenshot
- PC/Laptop Desktop:
<img src="https://github.com/Qiugu-He/Blog/blob/master/ScreenShot1.png" alt="alt text" width="50%" height="50%">
<br/>

- Mobile:
<img src="https://github.com/Qiugu-He/Blog/blob/master/ScreenShot2.png" alt="alt text" width="50%" height="50%">
<br/>

- Demo please visit (Cloud service provider - Digital Ocean): http://167.99.183.216/

## Feature Description:
:heavy_check_mark:  Signin/Singup
:heavy_check_mark:  Social Login with Google - OAuth
:heavy_check_mark:  JWT based Authentication System
:heavy_check_mark:  Admin / User Dashboard
:heavy_check_mark:  Registration
:heavy_check_mark:  Role based Authentication System
:heavy_check_mark:  CRUD Operation with Image upload
:heavy_check_mark:  Blog Search / Load more blogs
:heavy_check_mark:  Write and Post Blogs
:heavy_check_mark:  Update and Delete Blogs
:heavy_check_mark:  Show Blog details
:heavy_check_mark:  Related Blogs 
:heavy_check_mark:  Categories and Tags
:heavy_check_mark:  User public profile page 
:heavy_check_mark:  Multi User System
:heavy_check_mark:  Responsive Design
:heavy_check_mark:  Contact Author

## Frontend Techs:
- React Hook
- NextJs
- WebPack
- React-Router

## Backend API and Database:
- API with Node Express
- MongoDB

## Project Main Structure:
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
        - auth 
        - blog
        - category
        - form
        - tag
        - user
    - Models
        - ...
    - Routes
        - ...
    - Validation
 
 
## Build Setup
// install dependencies
npm install

//server start at local host
npm start

//build for production
npm run build
npm run dev

***Note:** In order to see the project, API and frontend should both running (i.e. Open two seperate ternimal), otherwith API request will failed.
For detaile, please visite: http://167.99.183.216/






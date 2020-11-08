# portfolio
 Homepage to display my current projects, courses, and where to contact me. 

**Introduction**

This app was created as a portfolio for myself. It is built with react and several js plugins. 

**Demo**

[Portfolio](https://proctor-webworks.com/)

**Plugins used**
* react-router
* react-router-dom
* react-burger-menu
* @brainhubeu/react-carousel

**App Features**
* responsive design for desktop and mobile
* interactive images and text
* carousel of quotes
* reusable code (avoided hard coding when possible)
* two types of Navbar depending on page location and window size

**App Structure**

The app is split into several different components. As usual there is an app component and an index component. The app component also contains all the data in static default props. Ideally, I would have moved all the data into a separate file, however for such a small app this seemed like an okay solution. The react-router is used to seperate the different pages which are all components. Within each page component is either 1 or more components that build up the page.  

   **The Navbar**
   
   The Navbar location depends on whether the user is on the homepage/portfolio page. It also turns into a hamburger menu whent the user is in mobile.
   
   **Projects**
   
   Project page features projects that are either finished or in progress. All of the finished projects are linked to the deployed apps. 
   
   **Experiance**
   
   Broken up into different sections, courses in person, then online courses, work experience, and tech skills. 
   
   **About**
   
   Relevant picture and summary about myself
   
   **Contact**
   
   Contains links to GitHub profile, Linkedin, and Email.

**App Improvements**

If I had more time here are the improvements I would make to the app: 
* Improve code by refactoring (especially the app component). 
* Use react hooks instead of react components.
* Add tests.

This is Minae's script from the old course
I think we can use it with only one very small change, noted below.
As in that course, I won't mention params here, but will pick them up
in the react router hooks video.

OVERVIEW - REACT ROUTER

A big difference in how you will approach your React app includes not having different HTML pages for each unique view on your site. Instead, you will have just one webpage, index.html, and from it, you will use the React library to create an application that is launched from that one page. 

[SLIDE]
In React, you will not have multiple HTML pages
React is used to build a Single Page App (SPA)

This is one of the core features of a Single Page Application, or SPA. You will learn more about SPAs in upcoming lessons. A routing library such as React Router is crucial to an SPA.

React Router is a popular third-party library in the React ecosystem. It provides us  a collection of router components, route matching components, and navigation components - and handles routing requests for different views within our app. 

  It's also helpful with other concerns such as generating unique URLs that can be bookmarked. And it also handles going back and forward in the browser history. 

[SLIDE]
Collection of router, route matching, and navigational components 

Functionality:
Provides ways to navigate to different views
Provides a unique, bookmarkable URL for each view
Handles browser history, ability to go back and forward

-- FROM HERE HAS ONLY THE ONE UPDATE


[React-Router Components]

Some of the common components you will use with React Router include:
<BrowserRouter> - Parent router that wraps around other React-Router components. It will be at the highest level of all the React Router components. It uses the HTML5 History API that lets you move back and forth in the browsing history. 
<Route> - Renders the UI for a matching path.
Use the exact attribute if you want an exact match
----- UPDATE BELOW
<Routes> Groups <Route> components together in a way similar to a JavaScript Switch statement
----- UPDATE ABOVE
<Link> - Creates links to a path, will render as <a> links in browser. Use this instead of anchor links so that your navigation is routed through React Router. 
<NavLink> - A special version of <Link> that adds styles to the currently active link

This is a broad overview of the components you will be using from React-Router. I won't go into the details, as I don't think it will be useful without getting hands on. That's what you'll be doing in the following exercise. You will install React Router and begin to use it in your course project. 
This is Minae's script from the old course in case any one wants to revisit;
but I think we can probably just keep the old video

OVERVIEW: SINGLE PAGE APPLICATIONS

In your previous course, Bootstrap, you had a different HTML page for each of the views on your website. But you probably noticed that all the pages had some things in common - a header, a footer, a navbar, et cetera. But every time you navigated to a different page, all those parts were being requested from the server and re-rendered again. This can be an expensive process. 

A Single Page Application, or SPA, is a model where you just have one page, usually index.html. 
 And from that page, all the front-end  application code, the HTML, CSS, and JavaScript for a website is downloaded locally to your browser when you first load the website.

Some examples of SPAs are Gmail, Google Maps, and Facebook.

Then when you switch between views inside the web app, instead of requesting the server for all the code for that view, the application code makes the minimum necessary server requests and re-renders just the components that have changed.

So you might still make server requests for back-end resources such as data from databases, but the front-end  application code is already in your browser. So it's almost like a native or desktop application that's downloaded to your computer while you have it open in your browser. 


PROs and CONS

SPAs typically offer a much faster user experience due to fewer server requests. One main downside to an SPA is that  search engines are designed to index websites that have a traditional multi-page structure, so they can still have trouble crawling SPAs. Though their ability to do so is improving all the time, that means that SEO, search engine optimization, can be affected by having an SPA. That means SPAs are typically best for websites that are behind a login, where search engines would not index anyway.

Some other pros and cons:
PROs:
Streamlined development: Easy to divide back end and front end tasks during development
Can easily reuse the back end code for mobile app development
Easy to debug in browser
Because the back end and front end are developed separately, development can be streamlined, and it's easy to divide up the back end and front end tasks during development. And it's easy to reuse the back end code for mobile app development. 
SPAs are easy to debug, as you can easily monitor what's going on with developer tools right in the browser.

CONS:
JavaScript is required to be enabled in the browser
The initial download can be slow. 
Memory leaks. 
SPAs will not work if the user has JavaScript disabled in their browser. The initial download of all the application code can be slow. This can be somewhat mitigated for very large SPAs by having the server side handle some of the rendering. 
And you must be careful of memory leaks in your application, as they can be more harmful than in a traditional multi-page website. 

While not exactly a "con" since there are solutions for it, one major consideration with an SPA is how to handle navigation, since you are not using the traditional browser navigation of going to different HTML pages. That includes not only being able to click navigation links to be directed to a different view, but also being able to use the browser's Back (and forward)  button to go back in your browsing history. That is what React Router provides for React. 

In the following exercises, you will begin to develop your React you will continue to add more functionality to your React Single Page App, and you'll learn more about using React Router as well. 







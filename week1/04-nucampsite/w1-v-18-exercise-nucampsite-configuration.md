FIXES STILL NEEDED


redo/rewrite the index.js part

And now we're almost done h ere, all we have left to do is to click on this index.js file over here and make just a few changes.

But before we make those changes, I want to point out the big difference between a redux application and the react application that we built before, which is the presence of this Provider.

And you can see that, in a way very similar to that React.StrictMode component that we talked about before, which surrounds our App and strictly enforces some guidelines and then let's us know if we are violating those guidelines....this Provider also wraps around our App component.

And it Provides, for our App, in all sorts of fun and interesting ways which we will be talking about soon.

But you have quite a few things to learn before we can meaningfully discuss this Provider component, so for now, all I want you to do is notice that it's there, and just leave it there.  The redux template that we used to configure this app added that for us, so it gave us a bit of a headstart on setting up our app, which is nice.  

But for now, we're going to go up above our call to ReactDOM and we're going to add some imports.

These will be our import of bootstrap, as well as the bootstrap social icons, font awesome, and thena  few typefaces.  And you can find those imports down below this video on the exercise page if you want to just copy them and then paste them in here.




re-edit features recording


1:02 clicks but ok?




DONE
Add a bit about the package.json and look at it.


DONE:
3:50 and when you're done it should look just like this.  go ahead and pause the video here if you need some time to get that done.
 
ready to continue?
let's start by taking a look at tghe contents of those folders.

...inside that assets folder...

 
4:30
Now to better understand what this features folder is all about what I want you to do is, open your terminal.  And first, make sure in the terminal that you're in the nucampsite folder.  If you are, you can go ahead and run npm start to start this react app.

And once that starts, you should see, in your browser, something that looks like this.

This is the stub app for a redux application.

******  Describe counter here, need to write this well.


And you may notice right away that it's a lot more interactive than anything that we've seen in a React application so far.  I can click on these buttons and increment the value in this counter in various ways, and in general this is a lot more like an application or a piece of software than what we built in the i heart react section of the c ourse.

And this whole central section of the page that you see outlined now is a feature.  It's the Counter feature, which, as we can see, is in a folder called, appropriately enough, counter.  And in that folder is not only the components that make up this interface, but also the logic that controls how we interact with it.  This is a really helpful way to structure a redux application, and the idea is to keep the files that pertain to a specific implentation together, in a single folder, so you don't need to go searching through your project to find those related files while you're working.

Eventually, we're going to have a number of features in here but right now, to get ready for workshop, all I want you to do is create an empty folder called campsites in here.  In workshop, we'll add a few files in here, and then next week, when we start to explore application state, we'll add some more things in here.

And now we're going to go back out to our src folder, so close that features folder and then click on the src folder again, and then click the add folder icon to add a new folder.

And this folder is going to be called components.





6:52 now
clicks

and this next folder is going to be called components.

and as I'm sure you remember, these are small resuable interface elements.  We're going to have a Header and a FOoter for our site in here, as welk as a few iother components.

And now we're going to make another folder, so we're going to click on the src folder again, and then the add folder icon and we're going to call this folder pages.

And these will be....pages for our site.  And a page is just what it sounds like, it's a web page!  It's a way to organize together a number of components together, and this idea of a page, can really be a helpful way to organize the various components that you might want to show if someone navigates to a specific URL.  




# does this need or want to be a video?

https://reactstrap.github.io/?path=/story/home-installation--page

  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.1.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "reactstrap": "^9.0.1",
    "web-vitals": "^2.1.3"
  },

STEPS
CRA:
-- CRA version number?
npx create-react-app nucampsite

REACTSTRAP
-- version numbers?
npm install reactstrap 

BOOTSTRAP
npm install --save bootstrap
in App.css
import 'bootstrap/dist/css/bootstrap.min.css';

SET UP FOLDERS
create folders for
    app
    components
    features
    pages
    utils

app/assets/images
download and put images in here

app/assets/shared
download and put data in here

replace App.css with downloaded App.css

delete everything in App.js return statement and replace with 

  return (
    <div className="App">
        hello nucamp!
    </div>
  );


[SC]

[VO]
Welcome back.

I hope you're as ready as I am to get started on nucampsite, which is the main project that we're going to build in this course....because in this video that's exactly what we're going to do.

To get started, what i want you to do is open up vs code and 

In this video, I'm going to guide you through the install process for the mainproject that we're going to building in this course, nucampsite.

And these instructions are also down below this video in the learning portal if you prefer to follow along that way.

I'm going to be running through this on mac os, but aside from a few path name differences, the steps should more or less be the same on any operating system.

[SC]

[VO]
And we're going to start in just the same way that we did with the I heart react app.

So what I want you to do is to open up a new window in VS code with command shift N or up in the File menu you can select new window.

And once you have, jsut click this open folder icon right here in the middle of the page, and then navigate to the Nucamp folder.  Mine is still on my Desktop as you can see.



 





Just like with i heart react, the very first thing I always do is go ahead and clear out my README.md document and put something a little more appropriate in there.


And, I want you to make sure that you downloaded the App.css file last time, and replaced the App.css file in your react app with that file.  That will be, basically, all the css that you'll need for this site, so we can just focus on the react side of things.

And we're going to leave pretty much everything else alone for now, but we are going to add a few folders, and as we add them, I'll talk a bit about what each one is, and why we're adding it.

So first of all, we're going to add a folder called app.  And that's a lower case a, app.  

THis is going to be the brains of this operation, it's  going to be where we're going to store all of our data.  And that includes assets, like images, so we'll have a folder in there called assets and in that assets folder another folder called images.

And in there, I want you to put all of the images for the site, which yuou can download from the site-images link down below this video in the learning portal.

And we'll have one more folder in this app folder, which we're going to call shared.

This is where we're going to put our site data.

Ultimately, we're going to fetch this data from a server, but for now, we're going to store it in here.

So, again, in the learning portal below this video, find the link called site-data and download the linked attachement.  Then unzip that file and copy that folder, which is called shared, right into this app folder.

And for now, that's all we need to do with this folder.  

Now, we'll make another folder, and we want to make sure that this folder is once again in the src directory, not in the app folder or anywhere else, so go ahead and click on src right here and then click this icon to make a new folder.  

And this folder will be called components.

And I think you already know what a component is, this is where we'll keep our reusable components.  For now we can just leave it empty.

Let's make another folder, also in that src directory, and this one will be called features.

What's a feature?  A feature is, essentially a really nice way a really nice way



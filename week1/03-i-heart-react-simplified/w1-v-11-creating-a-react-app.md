




So, we've come to the moment of truth....we are going to create a react app

RERECORD

And to do that, we're going to use the command line tool called create-react-app, which you should have installed globally in the last exercise.  If not, you need to go back and do that.  If you've already done that, we should be ready to go.

Let's start by opening up vs vode and then in vscode I want you to open up a new window.  

DONE BELOW 



Amd we can open a new vs code window either with command shift N or you can go to the file menu and select new window.

And when you've opened a new window it should look like this.

Next, we're going to select the open icon here and navigate to our nucamp folder.

Mine is on my desktop so I'll first go to the desktop and then to the nucamp folder and inside that to the web dev folder and then finally into 3-React.  And that's the folder I want to open so I'll select open and it should open up for you just like this.

And in the file browser you should see 3-React at the top and also the functional foundations folder.  

Next, we need to run create react app.  
DONE ABOVE




DONE BELOW

With the vs code terminal open, just double check to make sure that you're in the right directory.  You can see that mine says that I'm in 3-React, down here in the command line, which is where we want to be.




Now, we'll just type create-react-app and then space and then i-heart-react and then hit the enter key and it should run.




And create react aopp will go and generate a kind of default app for me.  Which as you can see, it has now finished doing.
DONE ABOVE



RECORD BELOW
1. above

And to do that, we're going to use the command line tool called create-react-app, which you should have installed globally in the last exercise.  If not, you need to go back and do that.  If you've already done that, we should be ready to go.

Let's start by opening up vs vode and then in vscode I want you to open up a new window.  

2. Now, let's open up the terminial
And, you can do that either by going to the terminal menu in vs code and then selecting new terminal, or by just typing command and the backtick key.


3. 

In the file browseer you can see that there's a new folder called i heart react, which is our new react app.  We'll look at that in a minute.

But first, let's look at this message down here in the terminal, which is helpfully suggesting that I first cd, or change directories, into the new folder that we just created.  

And this is a very important step, because the next command that we're going to run, npm start, is going to invoke a script that was installed by create react app, and in order to access that script, we need to be inside the folder that we just installed.  And that's avery important thing to remember, if at some point you try to start a react app, or try and fail to install some dependencies, the most likely cause of your problem is that you're running the command from the wrong directory.

And that's avery important thing to remember, if at some point you try to start a react app, or try and fail to install some dependencies, the most likely cause of your problem is that you're running the command from the wrong folder.

Right now, my location in the terminal is the 3-React folder, and if I go ahead and run npm start from here, you'll see that I get an error message.

And it's just saying -- um, excuse me, there's no package.json file here, so I can't find any script named start.

But if we follow the first command and cd i-heart-react and then hit enter to run it, you can see that my location in the terminal has changed and now I'm in the i heart react folder.

And we can type ls and then the enter key to see the contents of this directory.

And we can type ls and then the enter key to see the contents of this folder.

And listed there, we can see several things, including a package.json.  We'll look at all of these things in a minute, but first let's take a look at our brand new app.  

So I'll just run npm start and then look in the browser and you can see, there it is, our very first react app.  Soon, that page will be full of hearts.  

But before we start coding that, let's take a tour of everything that create-react-app just installed.

You can keep the server running, and keep the browser running, too, but let's move our focus back to vs code and take a look at the folders and files that just got installed.

So I'll click on the i heart react folder in the file browser and you can see a number of files.  Let's go to the README.md first.  

If you're using git and pushing your git file up to github, this is the README doc that will show up in your github repo when you push your git file to git.  So I always like to start here by deleting what create react app made and then adding my own content.  For now I'll just say I heart react app, but you can add other information if you want to.

Now, let's go to that package.json, which is sort of the low-level headquarters for our app.

And if we click on that file, you can see first of all the name of our app and then below that some dependencies. 

And among those dependencies are of course the react and react dom libraries, and also something called react-scripts.


And below dependencies you can see some scripts, including the start script, which you can see is actually located inside one of the dependencies that we just saw, which is called react-scripts.

Now, we can take a quick look at react scripts if we want to, it's in the node_modules folder, along with all of our other dependencies.

And if we open that up we can see that there are actually rather a lot of dependencies, many more than were listed in our package.json.

If we scroll all the way down to react scripts, we can find that folder, open it up and see that it, too has a package.json, which lists quite a few more dependencies.  These are the dependencies for React.  These are all javascript utilities that have been carefully chose and managed by the reat team to make our development experience painless and pleasant.  And, really, a huge part of the glory of create-react-app is that it takes care of this configuration for us, making sure that all of these dependencies are aligned and have no conflicts, so that all we have to do is run npm start, or npm run build to build our app....and we can focus on developing our website.

Now, let's close up our node_modules folder and go back to the main folder.

And in that main i heart react folder we can see that we have a folder called public.  Let's open that up.  

And in there we can see that there's an index.html file.  
 
Let's open that up.

Now, we can modify this html directly if we want to, but in general we won't instead, we'll use javascript to build our site.

And if we open scroll down the page a bit, guess what?  there's a div with an id of root?  Look familiar?  That's the div that the React will use to render our app to the screen.

To see that javascript, let's close this public folder and go to the src folder.

The entry point for our app is always this index.js file that you can see here.

So let's open that up and in this file you see, first some import.

We're importing react and react dom and then some css and also an App component froma  file called App.js 

We'll look at that in the next video, but let's linger on this index.js file for a moment.

And in here you can see that the main thing -- and really the only thing we're doing, is invoking ReactDOM.render(), that function that we talked about in the virtual DOM video.


And we're passing in our App component and invoking it, using JSX, as we also talked about in the virtual DOM video.  

That app component is wrapped inside another component called React.StrictMode, which is a component from the React library that tells React we want to be informed of anything in our code that violates react's guidelines for how an app should be written.

But, really, the most important thing to notice here is that we are passing our App component in to ReactDOM.render, and then we are passing in a reference to that root div that we were just looking at.  And ReactDOM is going to take our app and render it to the page for us, as we talked about in the virtual DOM video.

IN the next video, I want to take a look at that app component.  We'll explore how it's written, and we'll also take a closer look at the JSX syntax.

I'll see yuou there.














1. readme
2. package.json
3. 

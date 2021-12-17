# w1-v12 - CRA2-anatomy of a react app

https://reactjs.org/docs/strict-mode.html

https://reactjs.org/docs/jsx-in-depth.html

[SC]
react web page

[VO]
In the last video, we ran create react app and we got this stub of a web site. It'smuch to look at, but there's actually a lot of really impressive stuff going on under the hood.

[WORKONTHIS]
Create React app exists primarily to set us up with a solid toolchain./

While similar in some ways to the web site we built in the intro, it is fundamentally a different beast.

You see, one of the really great things about developing web apps with React is, honestly, create-react-app, which takes nearly all of the burden of setting up a solid development environment off of your shoulders.

Behind the scenes, there are literally hundreds of thousands

[SC]

[VO]
So let's take a quick tour of the files that got installed.

Let's start with our new package.json file.

The package.json file is the central hub of every node project. When we ran CRA it initialized a new node project, installed React and all of its dependencies and configured our project to use webpack and babel.

If you look at the package.json, you'll see React and react-dom listed as dependencies there, as well as several testing libraries, and a library called react-scripts.

These libraries and many more were installed by CRA into our node_modules folder, and left notes on the exact versions of the installed libraries in a file called yarn.lock. If you open yarn.lock, you can see those notes, and all of the libraries, many of which aren't listed on the package.json, because they were installed by the react-scripts library.

[SC]

[VO]
If we go into our node_modules folder, we can actually see all of those libraries, including the react-scripts library, which, as you can see, has it's OWN package.json, that lists many more dependencies, including babel, webpack and a whole bunch of build tools.

This stuff can get pretty complicated, and it's generally best as a beginner -- and even as a more advanced developer, to just let CRA take care of this stuff for you. But if you want to learn more about Node, webpack and babel, there's an optional video in the extra videos for this unit.

For now, it's just important to know that these are some of the key tools in our javascript toolchain, and CRA took care of setting them up for us.

[SC]

[VO]
Now, one thing about all of these libraries, particularly if you are on a shoddy internet connection, is that they can fail to install, or get corrupted somewhere along the way.

So if your React project isn't working properly, the first best thing you can do is to simply reinstall the libraries.

[SC]

[VO]
Let's do that now. Go ahead and delete your node_modules folder, as I'm doing now. Then, go to your terminal and run yarn install and....magic! They're reinstalled. This is the beauty of the yarn package manager!

[SC]

[VO]
Just above your package.json is a file called .gitignore, which lists all of the files and folders that you want git to ignore. Notice that our node_modules folder is listed there -- that's because we don't want or need to track any of those libraries in our git file and we don't want to push them to github -- the node_modules folder is a lot of code! It's by far the biggest folder in our project right now, around 150MB, whereas our code is only a few kilobytes.

[SC]
downloading from github and yarn installing
[VO]

When we download a project from github, we just have to run yarn install and...presto, just like we just did, the libraries will be fetched from the npm registry.

And I want to say, this is one great reason why it's a great idea to get in the habit of using git and github -- because it makes it easy to share your code with your peers, or to get help if you get stuck. You can just send a link to your github repo to your instructor, and they'll be able to download your site and be much better able to help you.

[SC]
public folder

[VO]
Now let's take a peek in the public folder.

The main thing to notice here is an index.html file. This is the file that's being served by our local host when we run yarn start. Let's open it up.

[SC]
showing the root div
[VO]

The main thing to notice here is that there's a div with an id of root. Look familiar?

Just like we did before, React will be inserting our React app into this root div.

And can you guess where the javascript is?

[SC]
source folder
[VO]
Yep. That's right -- in the src folder. Let's go there now.

[SC]
index.js
[VO]
As you already know, every javascript application worth it's salt starts in the index.js.

Let's start there.

Here, you can see some stuff that hopefully already looks somewhat familiar.

At least, familiar enough, at this point, to not run away screaming.

First, we've got our imports, and we start by importing React and ReactDOM from the folders inside our node_modules folder. Thanks to the webpack configuration that CRA created for us, we don't need to give an absolute path, we can just give the name of the folder in node_modules where the library can be found.

[SC]
import './index.css';
[VO]
On the next line, we're importing a css file, which you can also find in this directory, take a look at it, it's just normal good old fashioned css. Thanks to CRA's build tools, you can just write normal css in a dot css file and import it like you would a javascript file. As we'll see soon, you can also import images this way.

The ./ just means, 'the filename that follows will be in the current directory.' We'll be using that, and other pathname navigation a lot in our React code, so if you need to brush up on navigating through directories using pathnames, you can see this video (make a video on this, too!).

[SC]
import App from './App';
[VO]
Next, we import an App Component, which is in the file called App.js. We'll take a look at that in the next video. For now, just notice that we're importing that code, and when we we import javascript files in React -- thanks again to CRA's build tools! -- we can omit the .js.

[SC]
import reportWebVitals from './reportWebVitals';
[VO]
And finally, we import a function called reportWebVitals, from the file called, of course, reportWebVitals. You can take a look at it if you like, but we're not going to bother with that right now -- probably better to learn how to build websites before we start tracking user metrics, right?

[SC]

[VO]
Instead, we're going to stroll down the page to something that hopefully looks just a little bit familiar already.

See how we pass two things into a function called render, which is actually a method fo the ReactDOM library? That function is, of course, a lot more sophisticated than the render function we wrote before, it's where React's virtual DOM magic happens.

But, all we really need to know to make that magic work is that we need to pass in two things. One, will be our App component, adn the other will be a reference to the root div in our index.html, just like we did before.

[SC]
console.log(typeof App)
[VO]
But wait, you say! This isn't a function! It's a weird html looking thing! And while that's true...if you console.log the typeof App, you'll find that it IS a function. Weird, huh? Just like in our little warmup exercise, it's a function that returns a div. So what's going on here?

[SC]
<App />

[VO]
This isn't html. It's actually JSX, which is a syntax extension for javascript that lets you write something that looks a lot like html.

In order to use JSX, you need a transpiler, like the babel build tool that create-react-app installed and configured for us.

[SC]
ReactDOM.render(
React.createElement(App, null, null),
document.getElementById('root')
);
[VO]
Every time you save a file in your react app, the babel compiler recompiles your javascript, so that that bit of JSX becomes React.createElement(App, null, null).

Look familiar? Our createElement from 'react without react' was based on this very fundamental function from the React library!

We'll take a closer look at JSX in the next video. For now, let's continue parsing this page.

[SC]
<React.StrictMode>
<App />
</React.StrictMode>
[VO]

You can also see that our App component is nested inside a component called React.StrictMode, which isn't anything that will get displayed in our website, it's some extra React functionality. Anything that we wrap inside it will run in what's called 'strict mode', meaning that React will give us feedback if we write code that generates unexpected side effects, or we use libraries or techniques that are deprecated.

[SC]

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
        );

[VO]
In other words, when we wrap our app inside the StrictMode component, we get extra functionality.

And this is a great example of declarative programming!

We actually don't need to know much about what StrictMode is or what it does to leverage it's many tools, it will just sit there in the background and let us know in the console if we do something dangerous.

We'll see other examples of components like this, which wrap other components to provide extra functionality, later in the course, and even show you how to build your own.

[SC]
ReactDOM.render(

            <App />
        ,
        document.getElementById('root')
        );

[VO]

Generally, it's a good idea to use strict mode but, you don't have to! You can delete it entirely, and just pass your app and the target dom node for your app in to ReactDOM.render().

[SC]

[VO]
But as I said, generally, you want to just leave it there, and let it do it's thing.

If you want to learn more about some of the finer points of StrictMode, there's a video in the further resources section for this week.

And that concludes our tour of the index.js page. IN the next video, we'll turn our attention to the App component, and take a deeper dive into this thing called JSX. I'll see you there.

## end

##

##

[SC]

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    const Hi = () => {
    return (
        <div>
            hi there!
        </div>
    )
    }

    ReactDOM.render(
    <>
        <Hi />
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </>
    ,
    document.getElementById('root')
    );

[VO]
Or, you can just wrap part of your app in strict mode. Here you can see that I've written a super small component named Hi that just returns a div with the text 'hi there!'. Remember, components are functions that return a div, and thanks to JSX, we can write those divs write in our page.

I'm wrapping the App in strict mode, just like before, but since the component named Hi isn't inside the strictMode JSX, it won't run in strict mode.

Then, notice that I need to wrap the whole thing in an empty JSX tag. I could actually wrap it anything I want but the important thing is, we can only pass

[SC]

[VO]
wrap this up and start the next video. maybe skip the bit about strictmode, or streamline it massively

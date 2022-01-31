# c. 7 mins need to re-record

[SC]
index.js
[VO]
Every javascript application worth it's salt starts in the index.js, and React applications are no different.

The index.js is the entry point for React applications, so let's make it our entry point as we try to understand this react application.

[SC]
opening vs code

[VO]

Open up the index.js file in your vs code editor and let's have a look.

[SC]
index.js file

[VO]
Here, you can see some stuff that hopefully already looks somewhat familiar.

First, we've got our imports, and we start by importing React and ReactDOM from the folders inside our node_modules folder. Thanks to the webpack configuration that CRA created for us, we don't need to give an absolute path, we can just give the name of the folder in node_modules where the library can be found.

[SC]
import './index.css';
[VO]
On the next line, we're importing a css file, which you can also find in this directory. Let's skip over that for now, we'll talk about CSS and React in a few videos.

[SC]
slide showing './' path names

[VO]
But notice that many of these imports are preceded by a './'

The ./ just means, 'the filename that follows will be in the current directory.' We'll be using that, and other pathname navigation a lot in our React code, so if you need to brush up on navigating through directories using pathnames, you can see this video (make a video on this, too?).

[SC]
import App from './App';
[VO]
Next, we import an App Component, which is in the file called App.js. We'll take a look at that in the next video. For now, just notice that we're importing that code, and when we we import javascript files in React -- thanks again to CRA's build tools! -- we can omit the .js.

[SC]
import reportWebVitals from './reportWebVitals';
[VO]
And finally, we import a function called reportWebVitals, from the file called, of course, reportWebVitals. You can take a look at it if you like, but we're not going to explore that right now. It's used for tracking user metrics, and it's probably best to learn how to build websites before we start tracking user metrics, am I right?

[SC]

[VO]
Instead, we're going to stroll down the page to something that hopefully looks just a little bit familiar already.

See how we pass two things into a function called render, which is a method from the ReactDOM library? That function is, as we talked about previously, where React's virtual DOM magic happens.

And as we talked about before, all we really need to know to make that virtual DOM magic work is to pass in our App component, and a reference to the root div in our index.html, just like we did before.

[SC]
<App />
[VO]
But wait, you say! This isn't a function! It's a weird html looking thing!

[SC]
console.log(typeof App)
[VO]
And while that's true...if you console.log the typeof App, you'll find that it IS a function. So what's going on here?

[SC]
<App />

[VO]
While this looks like html, it isn't. It's actually JSX, which is a syntax extension for javascript that lets you describe the user interface that you want to build something that looks a lot like html.

In order to use JSX, you need a transpiler, like the babel build tool that create-react-app installed and configured for us.

[SC]
ReactDOM.render(
React.createElement(App, null, null),
document.getElementById('root')
);
[VO]
Every time you save a file in your react app, the babel compiler recompiles your javascript, so that, for instance, that bit of JSX in front of us becomes something that looks like this.

Look familiar? Our createElement from 'react without react' was based on this very fundamental function from the React library!

We'll take a closer look at JSX when we investigate the App component in the next video. But first, let's continue parsing this page.

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

And that concludes our tour of the index.js page!

In the next video, we'll turn our attention to the App component, and take a deeper dive into this thing called JSX. I'll see you there.

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

https://reactjs.org/docs/jsx-in-depth.html
https://reactjs.org/docs/react-without-jsx.html
https://reacttraining.com/blog/jsx-the-confusing-parts/

[SC]
JSX
[VO]
In this video, I want to take a deeper dive into JSX, go over it's syntax, and give you some examples of JSX in action. JSX is one of the most powerful and unique aspects of writing React code, so mastering it is extremely important! The good news is, it's not that hard if you remember a few key things. Let's get started.

[SC]
<App />
[VO]
In the last video, you saw that our App component was wrapped in JSX, and I mentioned that it's a 'syntax extension for javascript'.

[SC]
JSX => babel compiler

[VO]
And I mentioned that the Babel compiler interrprets that JSX syntax and turns it into valid javscript so that the browser can read it.

[SC]
<App />
[VO]
So that, while our page just says <App />,

[SC]
React.createElement(App, null, null)
[VO]
the babel compiler will output some javascript that looks like this, and will return a React element, one of the nodes that make up the virtual DOM node tree.

[SC]
createElement('div',{className: 'circle'}, [])
[VO]
Remember the 'props' object we had in our own createElement function in 'react without react'?

[SC]
React.createElement(type, props, children)
[VO]
That function was modeled on React.createElement.

[SC]

return createElement('div', { className: 'greeting'}, 'hi there')

[VO]
But thanks to JSX, rather needing to say something like this

[SC]

    <div classname='greeting'>hi there!</div>

[VO]
We can write something that looks almost identical to HTML and let React take care of the rest.

[SC]

    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="some-link" href="https://thing.org">click me</a>
        <p>this is some text</p>
    </div>

[VO]
IN this video, we'll see that we can use JSX to create React elements that mirror all of the usual HTML elements, like for instance a div, or an img tag or an anchor tag.

[SC]
show app component in file browser
[VO]
To see JSX in action, let's go to the App component, which is in the App.js file. Open it up in vs code now. You'll find it just above the index.js file that we've been looking at, in the file browser.

[SC]

    import logo from './logo.svg';
    import './App.css';

[VO]
At the top are our imports. Remember how I said, a few videos ago, that you can import images in a javascript app? Here, we're importing an svg file, which we then display on our page, and, just like our index.js file, we're also importing some css.

[SC]
app function
[VO]

Below this is our App function. And you can see that it's basically just one big return statement, which returns a fairly large block of JSX.

This is called a 'stateless functional React component' and it's a great way to write React components. We can write these functions using the function keyword, or as arrow functions. We'll mostly write them as arrow functions in this course, but either way works.

Perhaps the most import thing to remember about these functions is that, in order to be valid React components, they must return one and only one React element. That react element can have many children, but at the top level of the return statement there needs to be just one element.

[SC]

<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
Learn React
</a>
</header>
</div>
[VO]
If you look carefully, you'll see that this function returns a single react element, a div, which has a child -- a header -- which in turn has several children -- an image, some text, and a link.

[SC]

<div className='greeting'>hi there!</div>

[VO]
As we've already learned, each of these html looking things are actually React elements, nodes on our virtual dom tree. These nodes get bundled together in our App, and then we pass them into the ReactDOM.render function and that render function decides how to update and build our web page as efficiently as possible.

And do you notice -- we're doing something a lot like traditional DOM manipulation, but we're doing it declaratively. We describe the html that we want to create and let the

[SC]

<div className="App"/>

[VO]
Notice that we can give these elements various properties.

We can give them classNames, for css styling, as we would any html element,

[SC]

    <img src={logo} className="App-logo" alt="logo" />
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >

[VO]
similarly, img and anchor tags have all of the properties that we'd expect from a normal html element.

[SC]

    <img src={logo} className="App-logo" alt="logo" />

[VO]
And can use javascript in JSX inside curly braces. On this page, we're setting the src of the image tag to the image that was imported up above and stored in the variable 'logo'.

[SC]

    <HeartMessage message='me my <3'>

[VO]
And, we can also define our own properties, like I'm doing here. We can use the properties to send data from a parent component to a child component.

In the next video, we'll get some practice with JSX, and rewrite our HeartMessage function from before, as a React component.

I'll see you there.

# end

[VO]
We can include text

[SC]

    <div className="circle">

[VO]

We can pass arguments into these elemental functions, which we call 'props' using a syntax that's a lot like vanilla DOM manipulation, just more succinct. We can assign a class name, which will take advantage of classes that are declared in a css file that we've imported.

[SC]

     <img src={logo} className="App-logo" alt="logo" />

[VO]
And all of the other properties that are traditionally available on a DOM node are also available on a React element.

Here, we've got props for not just className but all of the other things we like to pass in to images, like a source and also an alt tag.

[SC]

     <img src={logo} className="App-logo" alt="logo" />

[VO]
But pay particular attention to the src tag!

One of the really neat things about JSX is that we can use javascript variables and expressions in JSX, if we wrap them in curly braces.

[SC]

    function App() {
    return (
    );
    }

# maybe include this maybe not

There's also another hidden import happening here:
import React from 'react.
In older code, you used to need to

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
In the last video, you saw that our in our index.js file. our App component was wrapped in JSX, and I mentioned that it's a 'syntax extension for javascript'.

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

# rewrite this

IN this video, we'll see that we can use JSX to create React elements that mirror all of the usual HTML elements, like for instance a div, or an img tag or an anchor tag, and we can also use JSX

[SC]
show app component in file browser
[VO]
To see JSX in action, let's go to the App component, which is in the App.js file. Open it up in vs code now. You'll find it just above the index.js file that we've been looking at, in the file browser.

[SC]

    import logo from './logo.svg';
    import './App.css';

[VO]
At the top are our imports. Remember how I said, a few videos ago, that you can import images in a javascript app? Here, we're importing an svg file, which we then display on our page, and we're also importing some css.

[SC]
app function
[VO]

Below this is our App function. And you can see that it's basically just one big return statement, which returns a fairly large block of JSX.

This is called a 'stateless functional React component' and it's a great way to write React components. We can write these functions using the function keyword, or as arrow functions. We'll mostly write them as arrow functions in this course, but either way works.

Perhaps the most import thing to remember about these functions is that, in order to be valid React components, they must return one and only one React element. That react element can have many children, but at the top level of the return statement there needs to be just ONE element.

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

And do you notice -- we're doing something a lot like traditional DOM manipulation, but we're doing it declaratively. We describe the html that we want to create and let take care of the details.

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
We can use javascript expressions directly in our JSX if we wrap them inside curly braces. On this page, we're setting the src of the image tag to the image that was imported up above and stored in the variable 'logo'.

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
And I want to remind you, this whole return expression returns that single Div with a classname of App. And, that div -- which is everything in this app, right now, is exported from this file as the component named App.....

[SC]

   <App />

[VO]
which in turn gets invoked in the index.js file, remember?

[SC]

[VO]
At their most basic level, React components are ways of bundling together React elements, in this way. We use them to declaratively compose user interfaces, and organize chunks of our user interface..

[SC]

[VO]
If I want to, I can take all of the lines that make up the header and put them in their own component. I can put this new function in its own file and import it, but for now I'm just going to write it up above, like this. It's just another arrow function, like the App component and like the App component it also has a name that begins with a capital letter. It's a pretty important style guideline to follow -- always start your React components with capital letters.

I'm calling it Header, and it's going to have a return expression, and in there I'll just paste everything the header element and everything inside of it.

[SC]

<Header />
[VO]

Then, I can invoke that function as a React Element, like this. And you can see, no change, I've simply reorganized a little of my code.

[SC]

<div className=''>
[VO]
We're going to get some practice doing this in the next video, but before we go, I want to show you one more thing we can do with JSX. Remember how I was saying that, on a react element, we can set properties like a className or id, or a source for an img tag?

[SC]

    <Component propName={propValue} anotherProp='hi there' className={// DON'T DO THIS ON YOUR COMPONENT PROPS!} />

[VO]

We can also set properties on elements that are generated by our custom components. They're not handled in quite the same way as with DOM elements, so, for instance, we can't set css classnames or other properties and attributes that are specific to the DOM API.

[SC]

    <Header text='I ❤️ React'/>

[VO]

But we can set custom properties, and they behave much like function arguments. Here, I'm passing in a prop of text, and setting it to a string.

[SC]

    const Header = (props) => {
    console.log(props)
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {props.text}
        </p>
        <p id='hi'></p>

    </header>
    )
    }

[VO]
And now if I add the keyword 'props' to the list of arguments in my Header function, I can
console.log() my props and see that my props are an object that contains a key/value pair equivalent to the prop that I passed in.

[SC]

    <p>{props.text}</p>

[VO]
I can use that value, in my component, like this.

[SC]

[VO]
Handling props

define our own properties, like I'm doing here. We can use the properties to send data from a parent component to a child component.

In the next video, we'll practice writing components using JSX. See you there.

# end

Take a quick glance at the classNames you see specified on this page, then click on that App.css file in the file browser.

[SC]

App.css in vs code
[VO]
And here on the App.css page you can see those classnames which we imported into our App.js file.

[SC]
.App-logo {
height: 10rem;
pointer-events: none;
}
[VO]
Find the second class name, for the App logo, and change the height to, say, 5rem;

[SC]
.App-Header{

}
[VO]
Now find the classname .App-header, just a little down the page and then the property for min-height, and delete it. Then, save the file, then go back to the web browser and notice the change.

[SC]
web browser with smaller app header
[VO]
AS you can see, the header has gotten a lot smaller.

This is one of several ways to work with css in react apps, and it's probably the most familiar-feeling.

We just import the css files that we want to use, directly in our javascript files.
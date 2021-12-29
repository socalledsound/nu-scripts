https://reactjs.org/docs/jsx-in-depth.html
https://reactjs.org/docs/react-without-jsx.html
https://reacttraining.com/blog/jsx-the-confusing-parts/
https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca

https://reacttraining.com/blog/jsx-the-confusing-parts/

[SC]
JSX
[VO]

In this video, I want to take a deeper dive into JSX, go over it's syntax, and show you some examples of JSX in action. JSX is one of the most powerful and unique aspects of writing React code, so mastering it is extremely important! The good news is, it's not that hard if you remember a few key things. So Let's get started.

[SC]

    But what is JSX

[VO]
Now, first of all, what the heck is JSX? And how does it work?

[SC]

    <div >
        <SomeElement prop={javascriptVariable}/>
    </div>

[VO]
JSX is a markup language, and it looks kind of like HTML, but really it's a way of writing DOM-manipulating javascript in a concise and declarative manner.

[SC]

document.createElement('div')

<div></div>

[VO]
So instead of writing document.createElement('div'), we just write <div></div>.

Nice, right?

[SC]
(jsx) => BABEL(jsx) => javascript
[VO]
Under the hood, JSX relies on the babel library, which takes in the jsx and spits out some regular old javascript for our web browser.

[SC]
show app component in file browser
[VO]
To see JSX in action, let's go to the App component, which is in the App.js file. Open it up in vs code now. You'll find it just above the index.js file that we've been looking at, in the file browser.

[SC]

    import logo from './logo.svg';
    import './App.css';

[VO]
At the top are our imports. First, we're importing an svg file, which we then display on our page, and we're also importing some css classes from App.css.

[SC]
app function
[VO]

Below this is our App function. And you can see that it's basically just one big return statement, which returns a fairly large block of JSX.

This function is called a 'stateless functional React component' and it's a great way to write React components. We can write these functions using the function keyword, or as arrow functions. We'll mostly write them as arrow functions in this course, but either way works.

[SC]

    const Component = () => {
        return (
            <div></div>
            <div></div>
        )
    }

[VO]

Perhaps the most import thing to remember about these functions is that, in order to be valid React components, they must return one and only one React element. That react element can have many children, but at the top level of the return statement there needs to be just ONE element. So, if for instance, we want to return two divs....

[SC]

            const Component = () => {
                return (
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                )
            }

[VO]
......we need to wrap them in a parent div.

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
If you look carefully, you'll see that the App function returns a single react element, a div, which has a child -- a header -- which in turn has several children -- an image, some text, and a link.

[SC]

<div >hi there!</div>

[VO]

Each of these html looking things are actually React elements, nodes on our virtual dom tree.
That Babel compiler that I was mentioning before -- it interprets this markup....

[SC]

    React.createElement('div', null, 'hi there')

[VO]
and convert it into javascript that looks like this!

[SC]
ReactDOM diffing engine graphic
[VO]

As we talked about in our ReactDOM video, these React elements, get passed into the ReactDOM.render function and that render function decides how to update and build our web page as efficiently as possible.

So, in the big picture, I want you to notice that we're doing something a lot like traditional DOM manipulation, but we're doing it declaratively. We describe the html that we want to create and let React take care of the details.

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
Also notice that we can use javascript expressions directly in our JSX if we wrap them inside curly braces. On this page, we're setting the src of the image tag to be the logo variable that holds the svg image that we imported up above.

# end

# i cut this out

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
ReactDOM.render(<App />, document.getElementById('root'))

[VO]
which in turn gets invoked, using the JSX syntax in the index.js file.

## most recent edit out:

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

###

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

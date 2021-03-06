https://reactjs.org/docs/jsx-in-depth.html

https://reacttraining.com/blog/jsx-the-confusing-parts/

might be a little long?

[SC]
JSX
[VO]

In the last video, you saw that our App component was wrapped in JSX, and I mentioned that it's a 'syntax extension for javascript'.

[SC]
JSX => babel compiler

[VO]
And I mentioned that the Babel compiler interrprets that JSX syntax and turns it into valid javscript so that the browser can read it.

[SC]

[VO]

[SC]

[VO]
Using JSX, we can

While JSX might take a little getting used to, it's tremendously useful and one of the absolute bestest things about using React. I think that once you get used to it, you'll agree that it's a great way to write web pages.

So, let's start getting used to it now.

[SC]
show app component
[VO]
Open up the App component that was auto-generated by the CRA script in your vs code editor.

[SC]

    import logo from './logo.svg';
    import './App.css';

[VO]
At the top are our imports. Remember how I said, a few videos ago, that you can import images in a javascript app? Here, we're importing an svg file, which we then display on our page, and we're also importing some css, which we use to style this page.

There's also a hidden import happening; the build tools that we used when we created our react app set up our project so that we don't have to import react on every page, as we did on our index.js.

It just assumes that we want to use react in all of our javascript files. nice, right?

But where are we using that React library in this code? I don't see it anywhere. Can you guess? If not, don't worry, I'll answer that my own question in a bit.

[SC]
app function
[VO]

Then, below, we write our App function. All it does, in this case, is return some JSX.

We can write these functions using the function keyword, or as arrow functions. We'll mostly write them as arrow functions in this course, but either way works.

Perhaps the most import thing about these functions is that they must return one and only one html element. So if you want to have more than one bit of content, you need to wrap all of the bits of your content in a parent component. Here, our app is returning a single div, that contains a header, which in turn contains an image, some text, and a link.

[SC]

[VO]
This html looking stuff is JSX, and it really speeds up our development process.

No more document.createElement!

[SC]

<div className="App">

[VO]

But it's also super important and, I think, helpful to remember that this ISN'T html! It just looks like html.

These html looking things are actually React elements. They're the nodes of our virtual dom tree. These nodes get bundled together in our App, and then we pass them into the ReactDOM.render function and that render function decides how to update and build our web page as efficiently as possible.

[SC]

[VO]
Everything inside of the two

[SC]

    <div className="App">

[VO]

And we can pass arguments into these functions, which we call 'props'. All components come with built in props that pretty much mirror the tags we can apply to html elements, except that we write them in camelCase. So, here, we're

[SC]

     <img src={logo} className="App-logo" alt="logo" />

[VO]
And on the img component, we've got props for not just className but all of the other things we like to pass in to images, like a source and an alt tag.

[SC]

     <img src={logo} className="App-logo" alt="logo" />

[VO]
And pay particular attention to the src tag!

We can use javascript variables and expressions in JSX, if we wrap them in curly braces.

[SC]

    function App() {
    return (
    );
    }

[VO]
Now let's rewrite this app.

Delete everything inside the parentheses, in other words, everything that's being returned from this function.

If you save this file now, it will break your app. Go ahead and do it!

It's ok to break your app as long as you buy it. I mean, fix it.

[SC]

    function App() {
    return (
        <div className="App">
        <p>
            hi there!
        </p>
        </div>
    );
    }

[VO]
The app broke because this component is no longer returning a div. So let's put that div back, and give it it's className of App.

And inside that div we'll write a p tag and put a little hello message, like this.

[SC]

    function App() {
    const name = 'eleanor rigby'

    return (
        <div className="App">
            <p>
                hi there, {name}!
            </p>
        </div>
    );
    }

[VO]

Now do you remember how to add javascript to this JSX?

Let's add a name variable, inside our app and set it to 'eleanor rigby'.

Then, we can use that variable in our JSX, by wrapping it in curly braces!

[SC]
Heart
HeartMessage
Circle
Square

[VO]

And I bet, or I hope, you can see that, just like in our first project, we want to further break this App component down into smaller components.

Remember how we broke our page down before into discrete functions, focusing on desigining it from smaller, repeatable components?

[SC]

[VO]

We had a function that was sort of like a container for the other functions, called a Heart, which was then composed of some smaller functions: HeartMessage, Circle and Square.

[SC]

[VO]
Now, I want to be very clear about one thing. React Components are not just functions. I mean, they ARE functions, but they are functions with just a little more functionality.

[SC]

[VO]
In the next video, we'll dive into components. And after we've done that, you should be fully, completely ready to write your first
React app.

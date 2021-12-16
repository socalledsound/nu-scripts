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

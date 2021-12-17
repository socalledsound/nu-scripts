[SC]
screencase of App.js
[VO]
In the last video, we explored this App.js file, and talked about the JSX which forms the bulk of it.

Now, let's get rif of it.

[SC]
deleting

[VO]

Yep, you heard me, just go ahead and delete everything on this page. We could of course keep some of it, but I find that it's useful to get practice with these basics by doing, and I want you to start getting comfortable taking a blank page and turning it into a React component.

[SC]
import './App.css'

[VO]
So, we've got a blank page.

Let's start by importing the associated css file. Remember? We might want to write some css rules.

Next, we'll write a stateless functional component.

[SC]

    const App = () => {
        return (

        )
    }

[VO]

Let's use an arrow function. To start, we'll just return some empty parentheses.

[SC]

    const App = () => {
        return (

        )
    }
    export default App

[VO]
And let's not forget to export this function, as as default export

[SC]

    const message = 'cool cud'

    const App = () => {
        return (

        )
    }
    export default App

[VO]
Up above our App component, let's also write a javascript variable. It'll be a constant named message and we'll set it equal to a string, one of our AI generated love messages.

[SC]
focus on
return (

        )

[VO]
Now, we're ready for a little JSX. Remember, the JSX goes in the return statement, between the parentheses.

[SC]
focus on
return (

<div>message</div>
)

[VO]

Let's start with a div, with opening and closing tags. Between the tags, write the word message.

Go ahead and save this file.

[SC]

[VO]
If your app isn't currently running, open up the vs code terminal and type yarn start to start it up.

[SC]
show browser
[VO]
Now, go over to your browser and see what it say. I'll pause here for a second while you go and do that. It should say......'message'.

Is that what you expected it to say?

Did you expect it to say 'cool cud'?

If you think back to what you learned in the last video, I bet you can fix it so that it uses the javascript variable that we just wrote.

But before you do, I want you to notice something in the terminal.

[SC]
Compiled with warnings.

src/App.js
Line 4:7: 'message' is assigned a value but never used no-unused-vars
[VO]

Here we can see React's great build tools helpfully warning us that we are not writing very good code here. We've initialized a variable, but we're not using it anywhere. It's not a problem that breaks our site -- the browser faithfully displays our work -- but it is still not good code. Generally, we want to always make sure that we clear up any warnings before we continue.

[SC]

[VO]
And vs code is, actually, giving us the same warning, with those yellow squiggles under our message variable.

[SC]

[VO]
To fix this, we could either comment out the message variable.....or actually use it in our JSX. If you remember how to do that, go ahead and do it! I'll wait for a minute and then do it myself.

[SC]

focus on
return (

<div>{message}</div>
)

[VO]

Remember, if we want the compiler to know that we're using javascript and not just plain text, we need curly braces. Inside those curly braces, javascript is legit. So we can enclose the message text with curly braces, and immediately see that vs code has gotten rid of the yellow squiggles and if you save it again, you should see the 'cool cud' text in the browser. And now, that warning is also gone from the terminal.

[SC]

[VO]
Still with me? With those baby steps out of the way, let's refactor this a little bit.

[SC]
const HeartMessage = () => {

    }

[VO]
Up above the App component, let's make another component, called HeartMessage.

You can see that those squiggles are back, because I've defined a function but I'm not using it anywhere. We'll use it very soon.

[SC]
const HeartMessage = (props) => {
return (

<div>
{props.msg}
</div>
)
}
[VO]
But first, let's define a return expression. It's going to also just be a div that encloses a javascript expression, but this time, let's give that a value of props.msg. And let's be sure to bring props in as an argument.

So it should look something like this. And, still, squiggly. Let's fix that now.

[SC]

    const App = () => {
    return (
        <HeartMessage msg={message}/>
    )
    }

[VO]
Let's go down to our App component, delete the div in the return statement and replace it with an instance of a HeartMessage, into which we'll pass our very first custom property, or prop. In our HeartMessage, we are pulling a key of msg off of our props object, so let's call our prop msg and set it equal to the message variable.

And, one thing that I want you to pay attention to here, on a very nitpicky code styling level -- when we write a prop specification, we don't leave any spaces between the prop name and the value that we're assigning it to. It doesn't actually affect whether the code works, but it's good style, and it's really a good idea to get in the habit of writing with good style if you want to work with other people.

[SC]

[VO]
If you save this and look at your web browser, it should, basically look exactly the same!
But, you've written your first JSX. And perhaps more importantly, we've written a few of these things called components.

[SC]

    const App = () => {
    return (
        <Header />
        <HeartMessage msg={message}/>
    )
    }

[VO]
And now, I've got a challenge for you. Can you write another component, on your own? It will be called Header and I want you to render it just above our HeartMessage.

[SC]

    const App = () => {
        return (
            <>
                <Header />
                <HeartMessage msg={message}/>
            </>
        )
    }

[VO]
But, remember, components have to return just one element. So we can indent these two components one level and wrap them in an empty div. Or, even better, we can just use an empty element, which in React is called a Fragment. Fragments are great because they create minimal overhead for the virtual DOM.

[SC]
I ❤️ React
[VO]

In your component I want you to return a single div with the text 'I ❤️ React'. You can get the emoji from this page, or if you do an internet search for heart emoji, you can find it quite easily.

[SC]

 <div className='App-header' >I ❤️ React</div>
[VO]
Finally, I want you to give the div in your header a class name of 'App-header', which, by the way, is a class that's specified in the App.css file.  So your div will look something like this.

Got it? Ok. Get to work and I'll see you in the next video when you're done with that Header component. Don't take too much time with it, if it's not doing quite what you want, just join me in the next video, where I'll write it and also talk about some of the ways we can style a React component. I'll see you there.

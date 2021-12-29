[SC]
COMPOSING WITH COMPONENTS
[VO]
Welcome back.

[SC]
heart with text
[VO]
In the last video, we made this heart, and I left you with a challenge....

[SC]
show heart with header
[VO]
To add this Header.

And I hope you tried it on your own. And were able to do it! I know it can be pretty daunting to write your own code, but remember, it's these tiny tiny baby steps that add up and in the end will get you walking on your own.

[SC]

code along header component

[VO]
I'm going to do it my way now. And it's pretty straightforward. I just want to declare an arrow function named Header up here near the top of the page, or anywhere before I use it down here in the App component. And then I'm going to return a div wioth a class name of App-header and the text, as I gave you in the last video, I heart React. And that's pretty much it.

[SC]
not sure what to show here, maybe just the app component?
[VO]
Now you could very easily make the point right now that that's a lot of extra code to add a single div, which I could have just as easily added just as a one line div in my App component.

And, we're not going to do much with our Header in this little starter App, so you'd be pretty reasonable to say that.

[SC]

[VO]
But what we're trying to do here is to get into good habits, and often times, like in the nucamp App that we're going to be building, a Header will have a lot more going on, with some kind of site navigation and maybe even a link to a user profile or a shopping cart or who knows what else.

[SC]

[VO]
And, you're almost definitely going to want to reuse the header on a bunch of different pages, so generally a Header is going to want to be a seperate component.

[SC]
show page broken up into sections
[VO]
And this is a great place for us to talk about the most fundamental conceptual skill that you must master to be a good React developer, which is this idea of breaking up the thing that you want to build into smaller chunks, which we call components.

[SC]
show page broken up into functions
[VO]
As we've seen, we generally write components as functions, and the decisions that we make while writing them are in many cases judgement calls but an important thing to remember about functions and about components is that if we name them well and limit their scope, we will generally be a lot happier, and other people who read our code will have an easier time understanding what we're trying to do.

[SC]

[VO]
And, you can break down just about any web page you want to build in just this way.
Soon, you'll be doing it without even thinking about it.
The key -- and I can't stress this enough! -- to this is to start thinking in terms of components: concise, reusable blocks of javascript -- otherwise known as functions -- which describe a small and focused aspect of the interface that you want to build.

[SC]

PAGE
HEADER
PAGE CONTENT

[VO]
First, we'll often have large components whose primary job is to sever as a container for other components.

[SC]

    LoginPage
        Header
        Login

[VO]
So a login page would be a component composed of smaller components.

We might break it up so it has a Header, and another component called Login.

[SC]

    Login
        TextField
        TextField
        Submit

[VO]

Which in turn is composed of smaller components, maybe two text input fields and a submit form button.

[SC]

    Register
        TextField
        TextField
        TextField
        TextField
        TextField
        TextField
        Submit

[VO]
We might also have a Register component, which would
Take those same components from the login page, and add a few more text fields.

[SC]
LoginPage
Header
if(true) { return Login} else {return Register}
[VO]
And then, we can use javascript to conditionally render different parts of our interface.

[SC]

    HeartList
    [message1, message2].map(message => HeartWithMessage)

[VO]
Or, as we're going to do in the next video, we can use Array.map() to loop over a data set, which might even be changing dynamically, and create our web page's content, that way.

[SC]
not sure what graphic here
[VO]
Starting to think in terms of small, re-usable components is absolutely crucial to becoming a great React developer. And, I want to say that it really helps! For one thing, if you can start writing small and re-usable components, you'll start building up a library of components that you can re-use in projects.

[SC]

[VO]
But, for a beginner, I think it's even more crucial to remember -- you can break a page or an idea up into smaller chunks. For instance, if you want to build an ecommerce site but it feels a little overwhelming...then just try to find the simplest part of the that site, and start there.

[SC]

[VO]
Set all of the complicated layers and just start with a single catalog item. An image, and some text. And build from there!

[SC]

[VO]
So, the component system is your friend. Love it and it will love you right back.

[SC]

[VO]
All right. In the next video, we're going to use Array.map to transform an array of messages into an array of hearts with messages.

I'll see ya there.

# end

[SC]
a few pages with highlighted sections that show components.
should we use things like netflix or should these be pages that I built?

[VO]
If you look around the internet with this perspective, it all starts to make new sense, you'll see repeated parts everywhere. Not all of these pages are using React, but they're all using this very fundamental principle of composing web pages by using re-usable parts.

[SC]
[VO]

[SC]
[VO]

[SC]
[VO]

[SC]
[VO]

[SC]
[VO]

# end

[SC]

Heart diagram

[VO]
But back to our heart, which we can make in a similar way, by coding some small pieces, and then combining them.

[SC]

square = () => square div
circle = () => circlular div

We'll need to write two functions. A square, and a circle, which we can use twice.

[SC]

    Heart = () => {
        return (
            Circle
            Circle
            Square
            HeartMessage
        )
    }

[VO]
And, then we'll also write a Heart function, which will combine these shapes and also display the HeartMessage that we've already written.

[SC]
HEART SHAPE WITH CIRCLES AND SQUARE
[VO]
And when we're done, we'll have a Heart, which we can re-use anywhere and everywhere we want.

[SC]
diagram:
data => HEART => HEARTCHILDREN

[VO]
Now, an important and extremely helpful -- but sometimes confusing -- aspect of building an app using components is, the flow of data. This exercise will give you a chance to practice this, but it might be a little bit weird at first!

But it's a pattern that you'll use again and again in React, so it's a good idea to get some practice with it. Understanding and properly managing the flow of data in a react app is probably the most important thing that you'll need to do to successfully and enjoyably build react apps.

[SC]

    const heartData = {
    color: 'blue',
    message: 'i love you',
    x: 500,
    y: 500,
    }
    const App = () => {
    return (
    <Heart data={heartData}>
    )
    }

[VO]
Very often, you'll bring in some data at the highest level of your app, and then pass it in to one or more container components, like for instance, our Heart component. So here we've got an object with some data, and we pass it in to a Heart component as a prop named data.

[SC]

    const Heart = (props) => {
    // there's a prop called data! it's an object!
    // props.data = {
    //   color: 'blue',
    //   message: 'i love you',
    //   x: 500,
    //   y: 500,
    // }
    return (
    <>
    <Square col={props.data.color} x={props.data.x} y={props.data.y}/>
    <Circle col={props.data.color} x={props.data.x+60} y={props.data.y - 60}/>
    <Circle col={props.data.color} x={props.data.x-60} y={props.data.y - 60}/>
    <HeartMessage col={props.color} msg={props.data.message} x={props.data.x + 40} y={props.data.y + 40}/>
    </>
    )
    }

[VO]
And then, inside the Heart component, we can pass it to the components that need it. We'll pass the Heart's props down to its children. We can rename the prop names as we pass them in, and we can also modify they data if necessary.

So, our entire Heart component has an x and y position, but you can see that each of the components that make up the pieces will be positioned at slightly different places.

[SC]

    const HeartMessage = (props) => {
        <div style = {{

        }}>
    }

[VO]
Inside the child components, we simply utilize the data that has been passed in, without any further changes.

Sometimes these are called 'dumb' components, because they just faithfully

So now that we've written a few components, I want to take a few minutes to get conceptual on you and talk about components as a means of organizing user interfaces, because I think it's one thing that sometimes trips people up a little bit.

-more here-

In React, these functions are a bit more sophisticated, and we call them components.

We'll use these functions, or components, to compose web pages.

To do this well, we have to learn how to look at web content, and also coding, just a little bit differently -- we need to try to break down bigger tasks into smaller ones.

[SC]

heart image

[VO]

Rather than try to explain this in an abstract way, I want to give you a very concrete and visual example: this heart that we're trying to build.

It's a shape that has a lot of meaning, for a lot of people.

[SC]

svg points

[VO]

And it's a shape that can get a little bit complicated to make. If we wanted to code it by hand using, say, SVG, we'd need a long list of points to make these arc shapes.

[SC]
two circles and a square heart
[VO]

Or, we can approach it from another perspective, breaking the shape down into it's constituent parts. As you can see here, a heart is, basically, a square and two circles combined.

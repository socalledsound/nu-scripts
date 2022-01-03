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
I'm going to go ahead and build that Header now, so you can compare yours to mine. And it's pretty straightforward. I just want to declare an arrow function named capital H Header up here near the top of the page, or anywhere before I use it down here in the App component. And that arrow function is goingto return a div. 

ANd the text of that div is going to be I and then I'll copy that heart in there and then React

And I want t be sure to give that div a class name of App-header... 

And then I need t save that and make sure that my dev server is running and if I look in my browser.....


[SC]
show browser
[VO]
 there it is, our new Header.




[SC]
show page broken up into sections
[VO]
And I think that this is a great place for us to talk about the most fundamental conceptual skill that you must master to be a good React developer, which is this idea of breaking up the thing that you want to build into smaller chunks, which we call components.

For instance, we've conceptually managed to break our page up into a Header, and then below that a heart.


[SC]
    LoginPage
        Header
        LoginForm
[VO]
If we wanted to add another page -- say a login page? -- it would be really nice that our Header is a seperate component, because we can just drop it in to any new page that we want to add to our site.

[SC]

    LoginForm
        TextField
        TextField
        SubmitButton
[VO]
And we can apply that same logic to building other, smaller components, as well.

A login component like the one on the login page we were just looking at might be composed of several components, maybe two instances of a TextField component and a Submit component that would just be a button.


[SC]
    RegisterForm
        TextField
        TextField
        TextField
        TextField
        TextField
        TextField
       SubmitButton
[VO]
And this 'login' page can become a 'register' page by simply adding a few more instances of that Textfield component!

[SC]

list of benefits

debugging is easier
easier to read and understand
reusability
start small!



[VO]
If you can get in the habit of writing small and specific components, you'll find that  -- 

it makes it a lot easier to find bugs or problems in your code; 

it makes your code easier to read and understand

small and specific components are generally more re-usable.  for instance, the text field from the login page above -- that could be used anywhere you need to build a form.

And finally, breaking your interface up into smaller chunks absolutely makes it easier to get started!  

Sometimes it can feel overwhelming to think about making a whole web page, so just make one small component and take it from there.


[SC]

single heart

[VO]
For instance, in the app we're building now, we started with a single heart, and got that working.  And then we added a Header. 

[SC]
is this another figma thing?
HeartsList
    Heart
    Heart


[VO]
And now, in the next video, we're going to make a HeartsList component, that will use the Heart component that we already made a bunch of times.

[SC]

a bunch of hearts

[VO]
I think it'll be kind of exciting and kind of fun.  

We're going to take an array of messages and use Array.map() to fill our page with the hearts.


I'll see ya there.



# end
[message1, message2].map(message => <Heart msg={message}>)
We'll use Array.map() to iterate over an array of messages and transform them into an array of Hearts. 


This app is tiny and simple, so it doesn't really matter that much how we structure this code, but as your apps start getting bigger, you'll be so much happier if you pay close attention to how you name your components and do everything you can to keep them small and specific.  

[SC]
container component graphic?
[VO]
One model that is often very useful to keep in mind is the 'Container' component.

Container components, like for instance our App component, are a great way to organize child components.


[SC]
(this should probably be a graphic of a web page?)

PAGE1
    HEADER
    PAGE CONTENT

[VO]
If we had multiple pages, each page of our app could be a container, in which we could invoke various components.  WE migt have a Header component that we use on every page, and then each page could have other features or content, below that Header.




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

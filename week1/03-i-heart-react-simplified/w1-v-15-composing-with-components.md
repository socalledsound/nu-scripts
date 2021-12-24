## need edit

[SC]
COMPOSING WITH COMPONENTS
[VO]
Welcome back.

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

[SC]

[VO]
And, you can break down just about any web page you want to build in just this way.
Soon, you'll be doing it without even thinking about it.
a login page?
Two text input fields and a submit form.

[SC]

[VO]
A registration page?
Take those same parts from the login page, and add a few more text fields.

[SC]
a few pages with highlighted sections that show components.
can we use things like netflix or shoudl these be pages that I built?
[VO]
If you look around the internet with this perspective, it all starts to make new sense, you'll see repeated parts everywhere. Not all of these pages are using React, but they're all using this very fundamental principle of composing web pages by using re-usable parts.

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

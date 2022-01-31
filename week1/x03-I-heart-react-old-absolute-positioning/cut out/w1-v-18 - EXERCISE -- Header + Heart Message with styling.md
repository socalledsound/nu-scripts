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
Welcome back. Were you able to write that Header component? I'm going to write it now.

Remember, in the last video, we had structured our App component with an empty fragment at the root level and then these two siblings, our Header and our HeartMessage components.

Now let's write that Header component.

[SC]

     const Header = () => {
     return (
     <div className='App-header' >I ❤️ React</div>
     )
     }

[VO]
And, it's pretty straightforward, it'll just be a simple function, that returns that div, with the text of I ❤️ React and a class name of 'App-header'. If we look at the browser, we can see that, sure enough, that header appears. And in fact it takes up the whole screen.

[SC]
show screen and scroll down
[VO]
But if you scroll down the page a little bit you'll see HeartMessage isn't gone....it's just been pushed down the screen by our new component.

Why is that? Can you guess?

[SC]
import './App.css'

[VO]
To find out, let's see what that classname of 'App-header' is doing exactly. Remember how we imported our App.css at the top of the page. Let's look in that file and inspect the app-header class, you can find it about 16 lines down.

[SC]

     .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
     }

[VO]
You can see that we're applying a color and a min height of 100vh, which is why it takes up the whole screen. And then, a few other things. And you can see our div is a centered flex box, which is a great way to center things on the page.

[SC]

     .App-header {
          background-color: #282c34;
          min-height: 15vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
     }

[VO]

To make this more like we want a Header to be, let's just change that min-height property to something more header-like. '15vh' is probably ok.

[SC]

     .App-header {
          background-color: #f495fc;
          min-height: 15vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: black;
     }

[VO]

And then I'm going to make the text a little bit bigger, replace that calculation -- they're just showing off a bit -- with a rem sizing and make the color black.

[SC]
show the page

[VO]

And that looks a bit like the header I want.

So, you've just seen one way, maybe the most straightforward way -- of styling a React application!

[SC]
css file -- > import statement -- apply class closeup.
[VO]
Just like any other web page, use a css file, import it into your app, and then assign a classname to a react element.

[SC]

     <div style={{key: 'value'}}>

[VO]
But we can also apply styles in-line, by passing an object into the style prop on a React element. See here, how I've got a prop named style, and I'm setting it equal to a double curly braces thing?
But, you may ask, why DOUBLE curly braces?

[SC]

     const styleObject = {
          backgroundColor: 'blue',
          color: 'white',
     }

     const MyComponent = () => {
     return (
     <div style={styleObject}>
     )
     }

[VO]
Maybe it helps, concceptually, to pull the style object out. It's just a regular javascript object, with camelCase keys for css properties, just like in regular DOM manipulation. And then the values need to be in quotes, as you can see here.

[SC]

focus on prop and object
const MyComponent = () => {
return (

<div style={styleObject}>
)
[VO]
To pass that object in to the style prop, we need to wrap our javascript object in another set of curly braces.

[SC]

     const MyComponent = () => {
     return (
     <div style={{
          backgroundColor: 'blue',
          color: 'white',
     }}>
     )
     }

[VO]
It's really your choice, whether to declare the object at the top of the file, or write it all inline, like this.

[SC]

     const MyComponent = () => {
     return (
     <div style={{
          backgroundColor: someRandomColorValue,
          color: 'white',
     }}>
     )
     }

[VO]
But, a really nice thing about being able to write styles inline, is that we can apply styles dynamically,using javascript expressions. So, if I want to apply a random background color every time this component updates loads, I can do that, with javascript.

[SC]

     const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

[VO]

Remember the getRandomColor function from earlier this week? Let's use it now to style our HeartMessage component.

If you have it handy from react without react, you can just paste it in here at the top.
Or, you can pause the video and re-write it.

[SC]

const message = 'cool cud'
const bgCol = getRandomColor()
const x = window.innerWidth/2
const y = window.innerHeight/2

[VO]
Now, we'll use that function to generate a random color.

First, make sure you import both getRandomColor and getRandomPosition, at the top of your file.

Right below the constant variable named message, I'll make another one named bgCol and set it equal to the return value of our function.
And let's add two more values, an x and a y value.
We're going to position our heart messages using absolute positioning, just like we did in react without react.
For now, we can just put our message at the center of the screen.

[SC]

     <HeartMessage msg={message} col={bgCol} x={x} y = {y}/>

[VO]
Now, we have to update our HeartMessage element to receive these new props.

[SC]
typing:

     const HeartMessage = (props) => {
     return (
     <div style={{
          backgroundColor: props.color,
          padding: '0.6rem',
          borderRadius: '0.8rem',
          position: 'absolute'
          left: `${props.x}px`,
          top: `${props.y}px`,

          }}>
          {props.msg}
     </div>
     )
     }

[VO]
And, finally, we need to bring them in to our HeartMessage component. We'll add the style prop and then the curly brace to let the interpreter know that what follows will be javascript, and then finally, inside that the style object. Pay particular attention to the double curly braces! It's weird, I know, but you'll get used to it.

And we'll give that object a key of background color, which we'll set to props.col, and then we'll also add some more keys.

(tlak about each key as you add it)

[SC]

[VO]
et voila!  
You should see our heart message on the screen, and every time you refresh the browser it will appear with a new background color.

[SC]
CSS in javascript
[VO]
Now, before we go, I want to just mention, that this method of styling is called called css in javascript.

[SC]
css ? javascript?
[VO]
And I want to say, at the time of this video, the community of developers is solidly divided on the question of whether css in javascript is a great or horrible idea. There is no really clear consensus about what the best practice is, or even whether it's a good idea, and people tend to have pretty strong opinions about it.

[SC]
i HEART CSS
[VO]
Lovers of css are like, wait...don't we already have css? At times it can be a bit clunky, and switching back and forth between camelCase and non-camelCase style properties can be a royal pain in the you know what.

[SC]
i HEART JS
[VO]
On the other hand, css in javascript can be really powerful, and sometimes it's nice to have everything that you need for a component in one file -- it can be great to not have to keep track of a seperate css file.

[SC]
styled-components

[VO]
There are a number of css in javascript libraries out there, and the most popular of them at the time of this video is called styled-components. We won't be learning it in this course, but at some point you may want to check it out, it builds on the css in javascript ideas that you've learned here

[SC]

1. css in javascript
2. traditional css
3. a mixture of the two

[VO]
Ultimately, the most important thing to remember is that there are a number of different ways to style a react component and, like so many things, React is not at all opinionated on this point.

[SC]
Animate each bullet point

1. css in javascript
2. traditional css
3. a mixture of the two

[VO]
You can use css in javascript, or traditional css, or a mixture of the two, and the choice is yours.
I recommend trying a number of different approaches, and keeping an open mind! At the end of the day, you're probably going to end up using whatever some more senior member of your team has decided is a good choice, so just try to be flexible.

[SC] 4. css modules
[VO]
And, if that wasn't confusing enough, before we go, I want to also briefly mention that there is one other nifty and relatively new way to style react components, which is gaining a bit of traction. It's called the css module system. Since this video is already pretty long, I'm going to save that for another video, which you can find in the further resources section of this week's material, if you're interested.

And, after all of that work, maybe it's time for a cup of coffee or tea.

[SC]
COMPOSING WITH COMPONENTS diagram
[VO]
Now, give yourself a chance to rest your brain a little, take a little walk or have a cup of tea. Because in the next video, we're going to get conceptual and tackle a big and very important idea: composing with components. I'll see you there.

## end

## extra

You should get used to keeping a utils file handy; as you progress in your career, it will get longer and more useful and you'll find good ways of keeping those functions nearby!

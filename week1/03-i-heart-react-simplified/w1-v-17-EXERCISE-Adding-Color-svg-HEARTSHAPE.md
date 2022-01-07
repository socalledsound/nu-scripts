[SC]
I HEART REACT - a few final tweaks
[VO]

[SC]
red hearts
[VO]

In the last video, we used Array.map to make a page full of heart messages, and that means that we're almost done here. But there's one more thing that I want to do before we move on...
 
[SC]
colorful hearts
[VO]
....which is to add some color to this page.  


[next chunk]
It's a small cosmetic thing but it will make a big difference to the look of this page.  That said, if you're running beh ind, you can skip this video and head straight to setting up the nucampsite for workshop, I won't be introducing any new React concepts here.

[SC]

            HeartsList
                  CandyColoredHeart

[VO]
What we're going to do is, replace the Heart in our HeartsList with a new component, which we'll call CandyColoredHeart.

[SC]

[VO]
And the first thing I want you to do is to make a new file, in our components folder. We'll call it HeartSVG.js. And notice, that's a .js file, not an svg file. We're going to use React svg elements to display our svg code, rather than rendering the svg code as an image, as we've been doing.

[SC]

[VO]
Let's get ready to bring that code over by making our HeartSVG component. So click on that file that you just made and in that file, let's make an arrow funciton named....HeartSVG.

It's going to take in props. For now, let's just make an empty return statement and then remember to export the component.

[SC]

    clicking on the file

[VO]

Now, if you go to the assets folder and then click on the red-heart.svg file in your file browser, you can see the code that makes up the red heart that we've been displaying.

[SC]

[VO]

I want you to copy all of this code into the return statement of the HeartSVG component. Ok? So, just like this, we'll copy....and then paste it here.

[SC]
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">

   <g fill='#FF0000'>
      <path d="M 297.29747,550.86823 
         C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 
         C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 
         C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 
         C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 
         C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 
         C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 
         C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 
         C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 
         L 320.95052,119.66445 L 330.81015,98.079942 
         C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 
         C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 
         C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 
         C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 
         C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z" />
      <g transform="translate(129.28571,-64.285714)" />
   </g>
</svg>

[VO]
Now, if you haven't seen SVG before, it may seem a bit overwhelming but it's actually not all that mysterious, it's just a way to specify shapes using markup language,

[SC]
focus on path
[VO]
and the bulk of this code -- the part that's wrapped in a path tag -- is the heart shape. We aren't going to modify that part.

[SC]
focus on

    <g fill='#FF0000'>

[VO]
We're going to focus in on it's parent <g> tag -- just above the path tag. G tags are sort of like the div tags of svg code, and you can see that that g tag has a fill color, which is hard coded to red.

[SC]

     <g fill={props.col} stroke='#8a8791' strokeWidth='3'>

[VO]
So what we're going to do is set that fill color with javascript. We're going to supply the color using a prop, so we'll set it to props.col. And let's also add a stroke, which will be an outline around the edge of the shape. We'll hard code a color and a width for that stroke. And, we're done with that component.
Now, let's use it.



And then I'm going to use this component in a new component, in a way very similar to the way that we've used an image tag in our Heart component.

And this new component is going to be called a CandyColoredHeart


[SC]

[VO]
 So I'll make a CandyColoredHeart.js file, and open that file up.

[SC]
import HeartSVG from "./HeartSVG"
[VO]
We'll start by importing the HeartSVG component that we just made

[SC]
const colors = [
'#b8e3f5',
'#f5b8e4',
'#b8f5b9',
'#f5f3b8',
'#e3b8f5',
'#fffcf2',
]
[VO]
And now we'll create an array of colors. These are the pastel colors that we want to use. You could of course change these colors if you want or add to them, this list is more or less the colors that I think of when I think of colored candy hearts, but YMMV. You can copy this array of colors from the screen here, or copy them from the exercise page.

[SC]
const CandyColoredHeart = (props) => {

}
export default CandyColoredHeart

[VO]
Now, we just have to create the component, and make sure that we bring in the props, and export the CandyColoredHeart.

[SC]
typing out
const randomCol = colors[Math.floor(Math.random() * colors.length)]
[VO]
Then, on the second line, we'll choose one of the colors from our array of colors.
So we'll define a variable named randomCol and then set it equal to colors[Math.floor(Math.random() * colors.length)].

[SC]
focus on specific parts
const randomCol = colors[Math.floor(Math.random() * colors.length)]
[VO]
If you haven't seen that sort of thing before, we're just using the Math library which is a built in javascript library that gives us some nice functions. random generates a random float value between 0 and 1, which, when we multiply times the number of colors will generate a random float between 0 and 6, and then we just use Math.floor to lop off the fractional part of the float, so we end up with an integer value between 0 and 5.

[SC]

      return (
      <div className='heart'>
      <div className="heart-img">
      <HeartSVG col={randomCol}/>
      </div>
      <p className='heart-message'>{props.text}</p>
      </div>
      )

[VO]
Next, let's write the return value for this function. Describe it.

[SC]

      // import Heart from './Heart'
      import CandyColoredHeart from './CandyColoredHeart'

[VO]
And finally, we need to go to our HeartsList and use this new component.

WE'll start by commenting out our previous Heart component, and then we'll import the CandyColoredHeart.

[SC]

[VO]
And then all we have to do is replace the Heart with the CandyColoredHeart in our map! And it should work just as before, but with colors.

[SC]

      messages.map((msg, idx) =>  <CandyColoredHeart key={idx} text={msg} idx={idx} />)

[VO]
And that pretty much wraps things up! You could obviously experiment more with the layout and design, but for now I think our work here is done. I hope that at this point you're feeling pretty comfortable and confident with the basics of functional components in React.

In the next videos, we'll start building a bigger app -- our nucampsite. To begin with, we'll run create-react-app, install the libraries that we're going to need and set up the file structure.

I'll see you there!

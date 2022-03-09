a nice video by the creator:
https://www.youtube.com/watch?v=1tavDv5hXpo



--- 

##### SC

React Spring

##### VO

React Spring is an animation library for React that gives us a hooks based declarative API for creating custom physics-based animations.  

--- 

##### SC

image of a spring

##### VO
As the name suggests, the library is built around the model of a spring.  This helps give the animations that you build with it a more life-like feel. 


--- 

##### SC

Animation == moving between different states over time.


##### VO
To better understand what that means, its helpful to remember that animiation is, essentially the process of moving, over time, between one state and another state.  


--- 

##### SC

show two boxes, one labeled start and one labeled end

##### VO
If we want to create an animation of a box moving from one side of the screen to another, we can specify a starting point, and an end point for our animation.  

--- 

##### SC

tweening =  calculating each of the points between the start and end point, over time


##### VO

Then, we can 'tween' those points.  In other words, we can calculate all of the positions between those points and know where the box should be at each time interval.



--- 

##### SC

image showing distribution of points

##### VO
And often, we don't want that transtion to happen linearly.  Perhaps we want our box to accelerate as it starts, and then decelerate as it's stopping.    So the distribution of values won't be even -- the distances between each point will be shorter closer to the start, and then longer near the middle, and then they'll start to bunch up again closer to the end, because that distance between each point is also how we think about the speed or velocity of the object.  Make sense?

--- 

##### SC

back to that diagram of a spring


##### VO

React Spring's tweening model is based around the physics of a spring, which leads to some really nice, life-like animations.



--- 

##### SC

React Spring advantages

interruptible
concurrent
composable
declarative, hooks-based API



##### VO

React Spring does it's magic in javascript, outside of React's normal rendering flow, which gives us a number of advantages over css animations.

Animations made with React spring are interruptible, meaning we can stop or pause them at any point.

And they can run concurrently, meaning that each one runs independently, it doesn't have to wait for another animation to finish.

Spring animations are also composable, meaning we can chain them together to create all kinds of interesting and dynamic interactions.

And finally, React Spring offers us a declarative, hooks-based API, so we can write our animations directly in the components that use them.


--- 

##### SC

import {animated } from 'react-spring'

##### VO


To animate an element using React Spring, we start by creating a wrapper for our component.  

To do this, we use the 'animated' function from the react spring library.





--- 

##### SC

<animated.div>
    <h1>this is animate-able</h1>
    //other elements here
</div>

##### VO

Using this animated function, we can easily convert any react element into an animated element.  We just have to prepend the element name with 'animated'.


--- 

##### SC

<animated.div style={animatedStyle}>
    <h1>this is animate-able</h1>
    //other elements here
</div>

##### VO

Then, we apply a style objet to that animated element.

--- 

##### SC

const animatedStyle = useSpring();

<animated.div style={animatedStyle}>
    <h1>this is animate-able</h1>
    //other elements here
</div>


##### VO

This style object is generate by one of the hooks from the react spring library.   The one that you'll use most often -- and the one that we'll use in this course -- is called useSpring.

--- 

##### SC

useSpring()

##### VO
In the next video, we'll talk about the useSpring hook, and how to use it.

I'll see you there.

--- 

##### SC



##### VO


--- 

##### SC



##### VO


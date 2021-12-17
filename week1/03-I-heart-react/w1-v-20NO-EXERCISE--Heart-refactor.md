[SC]
Heart made out of circle and square
[VO]
In the last video, I talked about composing with components, which is probably the morst important big piucture thing that you need to learn and remember when you code react sites.

In this video, we'll get started building a Heart component, using this idea of composing with components.

[SC]
reorg

[VO]
As a first step, let's start by re-organizing our app a little. We'll take these components that we've already written and move them into their own files. In other words, we're going to re-factor our hastily written first stab at this app, something that you'll find yourself doing a lot.

[SC]
components folder
[VO]
We'll start by making a folder called components in our src folder.

[SC]

[VO]
In there, we'll make a number of javascript files. One called Header.js, another called HeartMessage.js -- for the two components that we've already written -- and then we can go ahead and make one called Heart.js, another called Circle.js and one more called Square.js.

[SC]

[VO]
Now, let's copy the code for the Header into Header.js, and be sure to include an export.

[SC]

[VO]
And we'll do the same for our HeartMessage, copy it into HeartMessage.js

[SC]

[VO]
Then, let's import both of those into our App.js.

[SC]

[VO]
I want to also add that, as a rule, it's a good idea to get in the habit of keeping your imports organized, so that the first thing you import are external libraries, then your own utility functions, followed by your components, and last, styling.

[SC]

[VO]
And speakikng of utility functions, how about this getRandomColor function. We'll put that in a file called utils.js that we keep in the root of our src folder.

When we export it, we'll export it as a named export. That way, we can store any other utility functions that we might have in this same file, and just import the ones we need, into the files that need them.

[SC]

[VO]
But where do we need it? For now, let's bring it in to App.js. For now, I'll write a variable named bgCol underneath our message variable and assign the return value of getRandomColor to it. Then, I'll pass that variable in to the HeartMessage component as a prop named col.

And, since I happen to know that we're going to also be using absolute positioning to position our Heart, I'm going to add one more prop, which will be pos, and set it equal to a javascript variable named position.

[SC]

[VO]
And back up at the top, we'll declare that variable, position and set it equal to an object that has keys for both x and y and for a start, we'll just set each of those to 500.

And I hope that maybe it's obvious that we're going to pass this object in to our heart as a prop and use it to position our Heart, using absolute positioning.

[SC]

[VO]
Now, we need to go to the HeartMessage component and change the backgroundColor value of our style object to props.col, and we'll add a few more style properties so that we can use those x and y values.

[SC]

[VO]
First, we'll set our position to absolute, which will allow us to take this element out of the normal float layout and position it with a position.

[SC]

[VO]
Then we can use a template literal to

[SC]

[VO]
And I think, if you save everything and check back in the browser window -- make sure that your live server is still running -- you should see...no change! Which, trust me, is a good thing! A successful refactor. And now we have a structure that we can more comfortably build onto.

[SC]

[VO]
Unfortunately, I can see that there's one more little thing we have to do, which is to move this HeartMessage, right? It's going to be part of our heart.

[SC]

[VO]
And actually, all we have to do is change HeartMessage to Heart in our jsx. We'll still pass in the same props. And of course we need to import Heart rather than HeartMessage, at the top.

[SC]

[VO]
And now if we save this file, and go check the browser....we of course get nothing. But let's just open up the console, and inspect the message, because it's one that you may see, and it's really no big deal. And it's also an example of what I meant when I said in a previous video, that one reason react is so popular is because of it's great developer tools.

[SC]
show the error messgage
[VO]
And here you can see the error message, several of them, actually, which are all very specific and let me know in no uncertain terms that I forgot to export the Heart ccomponent which I am referencing in line 18 of my App.js file.

[SC]

[VO]
So...let's go write that component now. It'll be a stateless functional component, it will take in props and inside it we'll return several things. First, a Circle, which of course we haven't written. Then, another Circle, a Square, and finally our HeartMessage. Go ahead and write that JSX in, and you should see some red squiggles, like I have here. Do you remember why?
Pause the video and fix it if you can.

[SC]

[VO]
And if you remembered that we need to return just a single element from every component then you win today's prize! If you didn't remember that, don't worry. It's my job to drill it in to you until it's absolutely second nature, and I will try not to let you down on that front.

Let's go ahead and add the empty fragment around those other elements. And that makes at least part of the error go away. You may also have seen vscode automagically recognize that HeartMessage is being used, and add it to your imports. If not, add it now, along with the Circle and Square imports, which we will obviously still have to write.

[SC]

[VO]

Now, let's not forget to pass along the message, and also the background color in to our HeartMessage component.

[SC]

    const Heart = (props) => {
    return (
    <>
    {/_ <Circle />
    <Circle />
    <Square /> _/}
    <HeartMessage msg={props.msg}/>
    </>
    )
    }

[VO]
Now, just to make sure that what we've done so far is working, I want you to comment out the Circle and Square elements in our Heart component's JSX. Like this.

[SC]
showing the warning.
[VO]
Notice that our Circle and Square imports get the yellow squiggles. DO you remember what that means? If not, you can actually hover your mouse near the squiggles and see.

[SC]
show site
[VO]
But, it's a warning and not an actual error, so if you save everything and go back and refresh the browser, you should see that things are functioning just as before.

[SC]

[VO]
And NOW, I think that we're done with our refactor.

Let's code the pieces now. We'll start with the square, which will just be a div with a fixed width and height, that we rotate by 45 degrees.

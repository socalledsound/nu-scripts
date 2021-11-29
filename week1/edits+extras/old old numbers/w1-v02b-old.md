## video 2b react without react 2: performing DOM manipulation -- 7.5 mins?

<!-- [SC]

[VO]
Ok. Enough of the abstract talk! Let's write some code.

[SC]

[VO]
To finish setting up our react without react page, we just need to add two more things. First, let's add a script tag. Type script, and you should be able to choose between a basic script or a script:src tag; choose script:src and then type index.js as the source property.

[SC]

[VO]
Finally, go to the body of your html page and type div#root then hit the return key and emmet should provide you with a div with the id of root.

[SC]

[VO]
And that's all we really need, on the html side, to build a javascript web app. -->

[SC]
animation here?
[VO]

Once we get started with React, you'll see that this is, more or less exactly how the index.html of a React app looks; everything else happens in javascript. In React, we use the virtual DOM that we've been talking about to update and insert DOM nodes into our web page.

[SC]
making the new file index.js
[VO]
But, since we're building an app without React here, we're going to use good old fashioned DOM manipulation, which we'll do in the index.js file that we just linked to.

Click on the new file icon again and make a new file called index.js

[SC]
const root = document.getElementById('root')
[VO]

At the top, first make a constant called root and set it equal to document.getElementById('root')

[SC]

[VO]
Next, make a constant called div and set it equal to document.createElement('div')

[SC]

[VO]
You can set the innerText property of our new div to '👋 hi there' (you can copy the emoji hand from the lesson page or just do a google search), or any other message that you prefer.
Let's also go ahead and add some styling.

[SC]

[VO]

One thing to notice -- and this will also be very important when you're working with react -- when we do DOM manipulation in javascript, we use camelCase. You'll see this again in a minute when we come back and write some css styling in javascript.

[SC]

[VO]
If you open up this page with live server, you should see your message in the browser, with the styles that you just applied.

[SC]

[VO]
And if you open up the dev tools to inspect the dom, you should

[SC]

[VO]
What we've just done is to manipulate the DOM with javascript. This is the sort of workflow that React tries to improve upon, by giving us a virtual DOM and JSX and a whole host of other tools that improve the developer experience and make our websites function more efficiently. But, at its core, this is basically what a React app is, using javascript to create html elements.

In a few minutes, when we build our first React app, the similarities should be obvious!

But before we do that, let's review one more javascript fundamental: functions. Functions are the key and the core to being a great javascript developer, and a great React developer and they are a surprisingly deep topic in javascript!

[SC]

    (() =>
        (() => 0
        )()
    )()

[VO]
For instance, take a look at this function declaration. What's the return value and why?

I'll see you in the next video with the answer to that question, and a quick review of functions and why thoroughly mastering them is so important to becoming a great React developer!

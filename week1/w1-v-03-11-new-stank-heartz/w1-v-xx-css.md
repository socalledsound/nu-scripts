[SC]
newDiv.style.backgroundColor = 'pink'

[VO]
And we can add inline style properties to that element, like this. Notice how the css property background-color becomes a camel case backgroundColor. Also, notice that it's a property that's part of a style object. And it's also very important that the value you assign to the key be inside quotes. You'll see something a lot like this in React, and hopefully the reason for that syntax will make more sense, now that you've done it in vanilla JS.

[SC]
newDiv.style.left = '300px'
newDiv.style.top = '300px'
[VO]
You can write almost any css property in this way. let's go ahead and add two more, values for left and top.

We're going to use absolute positioning for our hearts.

[SC]

.message{
position: absolute;
color: #FFFFFF;
padding: 0.4rem;
}

[VO]
Our inline style properties can of course mix traditional css styling; as you probably remember, the inline styles take precedence in the css cascade.

Let's go to our index.html file and add some style tags.

Inside, we'll write a class named message, and give it a few properties.

First, we'll add that absolute position tag, and then also add a text color of white.

[SC]
newDiv.className = 'message'
[VO]
Ok, now let's go back to our index.js.
Our newDiv doesn't have a class name yet, but we can add it, once again using camelCase, like this.

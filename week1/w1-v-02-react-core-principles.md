v2 REACT CORE PRINCIPLES, briefly

functional (declarative) component-based UI layer for single page applications.

1. component : a component is a function that returns a DOM node.
2. JSX : jsx is a markup language that lets us write html in javascript
3. the virtual dom :

[SC]
LIST OF REACT BENEFITS
BIGGEST ECOSYSTEM - everybody uses React, so we get all of that shared knowledge
GREAT DEVELOPER TOOLS - create-react-app, debugging tools

[SC]
JSX. - helps us create new elements

[VO]
JSX is a huge benefit of using React.

[SC]
const div = document.createElement('div')
div.innerText = '👋 hi there'
div.className = 'hello'

becomes

<div className='hello'>👋 hi there</div>

[VO]

[SC]
[VO]
VIRTUAL DOM - we'll talk about this more in a minute

## move this to the end of video 2

[SC]
[VO]

Welcome back.

In the last video I gave a very high level look at what React is. I used a lot of big and somewhat confusing ideas, like 'declarative', 'composing with functions' and 'the virtual dom'.

These are important exciting ideas, but if you're relatively new to javascript, they can be a little confusing, and maybe even end up making React a little more confusing than it needs to be.

So in these next few videos, I'm going to try to simplify these terms and ideas a little and I'm going to show you how to make a basic javascript web page that's a lot like a react app, but -- without React! I call it 'react without react'.

This will also give us a chance to make sure that we understand the important javascript concepts that we need to know in order to be great React developers, things like arrow functions, declarative array methods, template literals and object destructuring.

By showing you how to make something a little bit like React without using any of the React magic, I hope to show you that React magic mostly isn't magic at all, it's basically just javascript.

[SC]
the virtual DOM
[VO]
Remember how I said that one of the key advantages that React gives us is a 'virtual DOM'? We should probably try to understand what the heck that means, right?

But first, let's make sure we understand the non-virtual DOM.


the virtual DOM
https://reactjs.org/docs/faq-internals.html#:~:text=In%20React%20world%2C%20the%20term,information%20about%20the%20component%20tree.
https://reactjs.org/docs/rendering-elements.html
https://reactjs.org/docs/reconciliation.html
https://stackoverflow.com/questions/34990190/reconciliation-in-react-detailed-explanation
https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained
https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
https://programmingwithmosh.com/react/react-virtual-dom-explained/
[SC]


[VO]

Welcome back.


[SC]

show createElement function
[VO]
In the last video you coded along with me as we made this createElement function.
 
[SC]

React.creatElement 

[VO]
 
And I also mentioned that that function was based on what is arguably the most important function in the React library, or at least the most often used function.

Just like our function, it takes in a type, some properties, and, if there are any, some children.

and you are going to use it literally every time you want to render something to the page in React.


[SC]

[VO]

 
[SC]


[VO]

But, do you remember how I keep saying that React is a javascript library that helps you declaratively manage user interfaces?

Well guess what.


[SC]

[VO]
In a React component, we can call React.createElement and make a div with a class name of app-container, like this.

This syntax is called JSX, and it's a way to write something that looks a lot like HTML, in javascript.   



So this

[SC]

React.createElement('div',{className: 'app-container'})

[VO]
is a short and declarative way to invoke this javascript code.  Neat huh?


 
We'll explore it more soon.



 
[SC]

[VO]
BUt in this video I want to focus on the thing that this function returns, because this thing that looks like a div isn't really a div.


[SC]

[VO]

If you remember, in the last video, I showed you that every DOM element, like for instance a div, has an absolute mess of properties, and most of them don't have any values.  All of those properties can actually get a little bit expensive for a web browser to maintain, as a site gets bigger and more complex, so React doesn't use DOM elements, instead it uses something called React elements, which are just javascript objects and they only contain the keys that we're actually using, and so they're a lot cheaper to create and manage, in a computational sense, than DOM elements are.


[SC]
reconciliation only updates 
[VO]




And then react takes those react elements and bundles them together into something called the virtual DOM.

React creates a snapshot of this virtual DOM every time we tell it to render something new to the screen.

So, if we click on an element, and tell react to change the color of that element, that change gets registered in the virtual Dom through a process called diffing, where React will check to see what elements have changed since the last snapshot.

So, for instance, if a user clicks on an element and we've written some code in our React application that changes the background color of that element if it is clicked, then the virtual dom will make a not of that change in it's next snapshot, and then compare the new snapshot with the old snapshot in the diffing process and make a note of that change.  

Then, it will pass that change on to a special rendering function which will update that element in the actual dom, in a process known as reconciliation.



Then, using a process called reconciliation, React will update the real DOM, targeting just the elements that have changed.

[SC]
ReactDOM.render(<App />, document.getElementById('root'))

[VO]
This last step is the only part of this process in which any expensive DOM manipulation occurs, and, as I mentioned, this DOM manipulation is targeted at specific elements, so that only those elements undergo the computationally expensive process of actually being updated on the screen.

The actual updates to the DOM are handled inside a special library called ReactDOM, which has a render method that we will call.  We pass in our App function and a reference to a root div,and React and ReactDOM handle the rest.



This whole process happens declaratively, behind the scenes, and all we really have to do is use React Components to create a virtual DOM, bundle those components into an App function, and then pass both that App function and a reference to a root div into a method



Of course, on a static site, this won't be a very big deal, but if we have a page that's changing as a result of user interaction, like a page full of buttons that are changing as a result of user interaction, then the DOM can start to get bogged down.

Which brings us to the second way in which the virtual DOM can be and often is faster than the vanilla DOM.

Let's say we have a page with a dozen or so buttons on it.  If a user hovers over one, we want to set a hover color, right?  

With tradtional DOM manipulation, any time our UI needs to respond to that user input and update the page, the WHOLE page will re-render.

But with React, we merely need to update the virtual DOM, and then React will compare the new state of the virtual DOM with its previous state and only update the specific elements in the DOM which need to be updated.

All of this makes our website faster and more responsive, which, as I'm sure yuou know, from personal experience is one of the most important keys to user satisfaction.

[SC]

const render = (nodes, target) => {
  // handles the diffing process and updates the DOM.
}

[VO]

React has a special library called ReactDOM and that library has a render function.

That render function takes in a tree of React elements and also a target.  And then it handles all of the diffing and updating of the DOM for us.  

When we call this function, we just have to pass  in our App -- and invoke it -- and then also pass in a reference to a root div, and ReactDOM handles the rest for us.

And that's the best news about all of this -- React handles it all declaratively, behind the scenes, and, certainly as a beginner, you don't have to think very much about it.  Just, know it's there, and smile.

And now, I hope you're ready to build a React app, because in the next video, that's exactly what we're going to do.

I'll see you there.







[SC]


[VO]
If you remember, in our App function, we used our homegrown createElement function to return an HTML element, and then we used the appendChild method of our root DOM node to append that HTML element to the DOM.

[SC]

[VO]
But React.createElement doesn't return an HTML element.  INstead it returns something called a React element.


[SC]

 react element here

[VO]

React elements are basically highly optimized versions of html elements that look something like this.





https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
https://reacttraining.com/blog/jsx-the-confusing-parts/
https://reactjs.org/docs/react-api.html#createelement
https://programmingwithmosh.com/react/react-virtual-dom-explained/
https://nebulab.com/blog/virtual-dom
https://reactjs.org/docs/reconciliation.html
https://reactjs.org/docs/rendering-elements.html
https://levelup.gitconnected.com/a-journey-through-reactdom-render-e8fc5edc11fd
https://www.newline.co/@KumailP/a-closer-look-at-reactdomrender-the-need-to-know-and-more--891fed64
https://gomakethings.com/dom-diffing-with-vanilla-js-part-1/
\

https://reactjs.org/docs/react-without-jsx.html
https://github.com/facebook/react/pull/4832
const myDiv = React.createElement('div', null, 'Hello World')

    {
    type: 'button',
        props: {
        className: 'button button-blue',
        children: {
            type: 'b',
            props: {
            children: 'OK!'
                }
            }
        },
        myKey: someValue,
        someFunction: (a, b) => a + b,
    }

<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>

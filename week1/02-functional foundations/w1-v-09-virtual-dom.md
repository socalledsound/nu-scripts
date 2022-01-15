
the virtual DOM

[SC]


[VO]

Welcome back.


In that last video you coded along with me and we made a pretty nice, I would say even somewhat professional-level javascript function.

And that was a fair amount of work, so in this video I'm going to give you a break from coding.

In this video I want to show you the function that that function was based on and also talk about what it has to do with that mystical magical thing called the virtual DOM in React.  

Now, if you remember, React is a javascript library.  And all that means, really, is that it's a set of code written in javascript that you can import into a project that you're working on and use.  

And that React library is structured so that you can use just the parts you need.  And the really neat thing is that it's written declaratively, so that you often times don't have to think very much about the implentation details.

[SC]

[VO]
And in that library there's a function called React.createElement.  And as you can see here it takes in a type, some props, and, optionally, some children.  

Sound familiar?

And guess what it does?  It creates Elements.  

But -- and this is a VERY important but -- those elements aren't DOM nodes.  Instead, they're virtual DOM nodes. 



Now,







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

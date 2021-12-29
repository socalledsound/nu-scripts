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

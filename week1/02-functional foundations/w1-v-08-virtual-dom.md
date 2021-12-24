https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
https://reacttraining.com/blog/jsx-the-confusing-parts/

https://programmingwithmosh.com/react/react-virtual-dom-explained/

https://reactjs.org/docs/reconciliation.html

https://levelup.gitconnected.com/a-journey-through-reactdom-render-e8fc5edc11fd
https://www.newline.co/@KumailP/a-closer-look-at-reactdomrender-the-need-to-know-and-more--891fed64

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

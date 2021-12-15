https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
https://reacttraining.com/blog/jsx-the-confusing-parts/

https://programmingwithmosh.com/react/react-virtual-dom-explained/

https://reactjs.org/docs/reconciliation.html

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

[SC]
HEART/CIRCLE/SQUARE

[VO]

Welcome back. In the last video, we did a little refactoring and set ourselves up to make these heart shapes. Now, for the fun part. Let's build a heart.

[SC]

    const Square = () => {
        return (
            <div/>
        )
    }

    export default Square

[VO]
We'll start with a Square component, which is going to take in our props object and return only a single div. The div won't have any content, so we can just write it like this.

[SC]

    const Circle = (props) => {
    return (
        <div
            style={{


            }}
        />
    )

}

export default Circle

[VO]
The important part will be in the style prop. Let's add that now,

[SC]

    const Square = (props) => {
        return (
            <div
                style={{
                    backgroundColor: props.col,
                    width: '8rem',
                    height: '8rem',

                }}
            />
        )
    }

    export default Square

[VO]
First, we'll start with a background color. And then we'll have a fixed width and height, and they'll be the same, hence, the square.

[SC]

[VO]
And if you now go back to your Heart component and add the Square just above the message, making sure to pass in the col prop, then save and refresh the browser, you should see the square added!

[SC]

[VO]
Though there is a bit of a problem, because it's really not where we want it to be. It is exactly where we're telling it to be, which is before the HeartMessage in the typical float layout of a web page. Our HeartMessage currently has some margin, so that accounts for the gap between the two elements.

[SC]

absolute positioning diagram or animation

    position: 'absolute'
    left: someXValue,
    top: someYValue,

[VO]
But I think that what we want, or what will be easiest, is 'absolute' positioning, where we can give a specific x and y coordinate to each element.

[SC]

    const Square = (props) => {
        return (
            <div
                style={{
                    backgroundColor: props.col,
                    width: '8rem',
                    height: '8rem',
                    position: 'absolute',
                    left: `${props.x}px`,
                    top: `${props.y}px`,
                    transform: 'rotate(45deg)'
                }}
            />
        )
    }

export default Square
[VO]
So we can add first the position key and set that to absolute. Then we'll specify a left position and set it equal to a template literal -- remember those? They are so useful when writing css in javascript!

We're going to have two new props, x and y, so our template literals will look like this.

And that will just make sure that this element is position at the pixel value that we specify.

Finally, we'll just add a 45 degree rotation and that should do it.

[SC]
<Square col={props.col} x={props.x} y ={props.y}/>
[VO]
But to see this, we have to pass those props in. We'll start in the Heart component, where we'll set x and y props for the square, and just we did for our color, we'll set the value of those props to props.x and props.y, because we're going to bring that data down from our App component.

[SC]

[VO]
So, in our app component, we need to

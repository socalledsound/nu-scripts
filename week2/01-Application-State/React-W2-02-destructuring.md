React-wk-2-02-destructuring


---
##### SC

destructuring assignment

##### VO

Welcome back.


In this video, you’ll learn about the destucturing assignment syntax in javascript, which is a way of unpacking  properties from objects or values from arrays into distinct variables.


---
##### SC

  const campsite  = {
        id: 0,
        name: 'React Lake Campground',
        image: reactLakeImg,
        elevation: 1233,
        featured: false,
        description:
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.',
    }

##### VO

When we 'destructure' an object, we pull each key of that object off into seperate variables. 

 Here, you can see that I've got an object called campsite.  Look familiar?  It's one of the campsites from our campsites array.

---
##### SC


const { id, name, image, elevation, featured, description } = campsite;

##### VO

To destructure it's keys, I'll say constant and then write each of the object's keys inside curly braces and then set that whole thing equal to the original object.  Make sense?

---
##### SC

    import {
        Card,
        CardImg,
        CardImgOverlay,
        CardTitle,
    } from 'reactstrap';


    const CampsiteCard = (props) => {
    return (
        <Card>
                <CardImg
                    width='100%'
                    src={props.campsite.image}
                    alt={props.campsite.name}
                />
                <CardImgOverlay>
                    <CardTitle>{props.campsite.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
    }
    export default CampsiteCard

##### VO

You'll use this almost constantly in React code, so much that it will become second nature soon.

For instance, if we have a component with some props, we can destructure those props.

Here's our CampsiteCard, from workshop.

---
##### SC

focus outline around the destructuring assignment and then around each usage of campsite

 import {
        Card,
        CardImg,
        CardImgOverlay,
        CardTitle,
    } from 'reactstrap';


    const CampsiteCard = (props) => {
        const { campsite } = props;

    return (
        <Card>
                <CardImg
                    width='100%'
                    src={campsite.image}
                    alt={campsite.name}
                />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
    }
    export default CampsiteCard


##### VO

We can destructure those props, by simply creating a destructuring assignment and unpacking each prop. 

Then, we don't have to write props before each use of that campsite prop.


---
##### SC

focus outline around the input parameter as you make this change


 import {
        Card,
        CardImg,
        CardImgOverlay,
        CardTitle,
    } from 'reactstrap';


    const CampsiteCard = ({ campsite }) => {

    return (
        <Card>
                <CardImg
                    width='100%'
                    src={campsite.image}
                    alt={campsite.name}
                />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
    }
    export default CampsiteCard



##### VO

And we can clean this code up even more, by writing the destructuring assignment right here, where we the props come in.  This is generally how you'll see React Components written, and from now on, we'll be writing them this way, destructuring the props as they come in to the component.


Now, do you see one more destructuring assingment we can make to make this code even cleaner?  


---
##### SC



##### VO


Yep.  We can also destructure that campsite object, so that we just have to write the name of each key where we want it.

And now, we can just use those keys where we want to use them instead of writing campsite before the key.

Destructuring of props will become almost second nature to you soon, I promise.  It's definitely a good habit to get into, since React developers -- and people looking to hire React developers -- generally expect to see props destructured in this way.  It makes your code cleaner and easier to read, and it saves time as you write your components.


---
##### SC

    const [ banana, apple ] = ['yellow', 'red'];


##### VO

And another thing that you're going to see a lot in React code is the destructuring of arrays, which works in a similar way.

Here, I have an array with two colors in it, yellow and orange.  I can destrucure the items in that array and assign each element of the array to a new variable, by using the array destructuring syntax.  


---
##### SC

const transformNum = (num) => [num * 2, num + 2]

const [numTimesTwo, numPlusTwo] = transformNum(10)


##### VO
Or, let's say we have a function that, instead of returning a single value, returns an array.

Here you can see that I have a function named transformNum, which takes in a number and returns an array with two different changes to that num.  I can unpack each transformed version of that number using array destructuring.

---
##### SC

const [myStateValue, setterFunction] = useState(initialValue)


##### VO

Soon, you'll be learning about Hooks.  And when you do, you'll start using array destructuring every time you invoke the useState hook.

But we'll get to that soon.  For now, I want you to get some practice with object and array destructuring in the code challenge that follows this video.

Then, when you're ready, head to the next video where we'll talk about two new useful array methods: array.filter and array.find.  

I'll see you there.
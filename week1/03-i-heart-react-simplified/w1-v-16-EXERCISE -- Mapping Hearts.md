https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
https://reactjs.org/docs/lists-and-keys.html
https://reactjs.org/docs/reconciliation.html#recursing-on-children

#

[SC]

I HEART MAPPING

[VO]
Welcome back.

[SC]
show components
[VO]
In the last video, we talked a bit about this idea of using components to compose web pages and web sites.

[SC]

[VO]
One way to do this

[SC]

[VO]
Now we're going to take that simple Heart Component that we previously wrote, and use it to build a whole page full of hearts.

[SC]

[VO]
But first, I want to start by refactoring this site a little bit. Right now we've got a bunch of stuff on this App.js file, and it's starting to feel a little cramped and disorganized, so let's start by cleaning this up.

[SC]
highlight source folder selection
[VO]
In your vs code directory, I want you to make sure that the src folder is selected, like this.

[SC]

[VO]

Then, add a folder named assets, like this....

[SC]

[VO]
And another named components.

[SC]

[VO]
Next, we're going to move our svg files in to the assets folder

[SC]
making the files
[VO]
And in our components folder we're going to make a few javascript files, one for our Header component, one for our Heart component, and one for the new component that we'll write in this video, our HeartsList component.

[SC]

[VO]

Next, we'll just copty our Header into Header.js -- and all that we have to add is an export statement. So at the bottom of the file we'll say export default Header

[SC]

[VO]
And then we'll import that into our App component.
[SC]

[VO]
And then we'll copy our Heart component into the Heart.js file and also be sure to export that. And, notice, we also need that HeartLogo here, so let's go ahead and add that import, up at the top, as well.

[SC]

        import Heart from './Heart'

[VO]
But we are NOT going to import that into our App file. Instead, I want you to open up your HeartsList.js, and at the top of the file, import the Heart component that you just made.

[SC]

graphic showing hearts list with a bunch of hearts

[VO]
Remember, this is going to be a HeartsList, and it will be a container component, which will display a bunch of these hearts.

[SC]
should the component have a heart outline?

        [message1, message2].map((msg)=> REACT COMPONENT)

[VO]
And to do this, we're going to use our new friend, Array.map(), to convert each string in the array into a React component.

[SC]
const messages = [
'cool cud', 'me my <3', 'you are bear',
'team bear', 'time hug', 'fang', 'bog love', 'me have love',
'all hover', 'sweat poo', 'u hack', 'stank love', 'heart me',
'wink bear', 'bear bear', 'be my bear', 'yank o way', 'mage love',
'oy', 'in a fan'
]
[VO]
Now, I want you to copy the array of messages from the exercise page.

[SC]

        const HeartsList = () => {

        }

[VO]
And, we'll make our component, the HeartsList. It will once again be a stateless functional component, in other words, an arrow function that will return some JSX.

Be sure to export it from this file.

[SC]

[VO]
And before we forget, let's switch back over to our App.js file and import this component there.

[SC]

[VO]
And down below, where we had just a single Heart before, we'll instead display our HeartsList.

[SC]

opening HeartsList.js
[VO]
Now, let's go back to our HeartsList.js file, and write the return statement.

[SC]

[VO]
Inside that return statement, we'll first have a div with a className of hearts-container, and inside that div, we're going to use javascript.

[SC]

    {messages.map((msg, idx) =>  )}

[VO]
So we'll write some curlybraces, and then inside there, we'll map over our array of messages. So messages.map(), and then the call back function that we pass in to the map method. For each item in the array, we will use the item, which we'll give the name of msg.

# recording stopped here

[SC]

        {messages.map((msg) =>  <Heart text={msg}/>)}

[VO]
And then that function will return -- for each message -- a Heart element. And we'll pass in the message, as a prop that we'll call text...

[SC]

        const Heart = (props) => {

            return (
            <div className='heart'>
                <img src={HeartLogo} alt='heart' className='heart-img'/>
                <p className='heart-message'>{props.text}</p>
            </div>
            )
        }
        export default Heart

[VO]
-- remember, we use a prop called text in our Heart component. So, each message will -- in theory, at least, come in and be displayed inside each heart.

[SC]

Show the hearts screen

[VO]
Let's check it out now. If we npm start this bad boy and head over to our browser....I see hearts! And I hope you do, too.

But...there's one little thing wrong with this.

[SC]
show warning in the console.

[VO]
If we check the console, we can see that there's a warning from our dev tools in there for us. Now, it's obviously not a breaking issue, our page is displaying properly. But even so, it's a warning that we should take care of, but before we do, I'd like to explain what it is and why we're getting it.

[SC]
react-jsx-dev-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `HeartsList`.
[VO]
It says, 'Each child in a list should have a unique key prop' and it points us to the HeartsList.

[SC]

    const HeartsList = () => {
        return (
        <div className='hearts-container'>
            {messages.map((msg, idx) =>  <Heart text={msg} />)}
        </div>

        )
    }

    export default HeartsList

[VO]
Inside that hearts list, we have our map method that programatically generates Hearts for us, which React is all too happy to do for us.

[SC]

        const messages = [
        'cool cud', 'me my <3', 'you are bear',
        'team bear', 'time hug', 'fang', 'bog love', 'me have love',
        'all hover', 'sweat poo', 'u hack', 'stank love', 'heart me',
        'wink bear', 'bear bear', 'be my bear', 'yank o way', 'mage love',
        'oy', 'in a fan'
        ]

[VO]
And in our example, our list, which is an array of messages, is stable; it isn't going to change as a result of user input, or, as might be the case, because of an asynchronous data request. It's just a hard coded array.

[SC]

[VO]
But what if our list was longer, say a hundred or even a thousand entries....and, perhaps more importantly, what if it was changing over time, like a to do list, where certain items would be removed? This sort of behavior is very common in an app, and it is where ReactDOM really shines. Remember, ReactDOM supplies the diffing engine which will update the view layer -- what the user sees -- of our app as it changes.

[SC]

        Add IDs.

[VO]
But to do this work efficiently in a list like this, we need to give each element a key, an identity that ReactDOM can recognize as it compares the siblings in a list.

[SC]

    <Heart key={uniqueId} text={msg}/>

[VO]
We pass that key in as a special prop, that ReactDOM can use to identify each component.

[SC]

        const users = [
            {
            id: 109238,
            username: 'timmy',
            },
            {
            id: 110923,
            username: 'ralph'
            }
        ]

[VO]
Most often, you'll want to actually give each item in the array a fixed and stable id, which will be useful for all sorts of reasons. For instance, for a list of users, each user will have a unique id, and you can use that as the key.

[SC]

const HeartsList = () => {
return (

<div className='hearts-container'>
{messages.map((msg, idx) => <Heart key={idx} text={msg} />)}
</div>

        )
    }

    export default HeartsList

[VO]

But if we don't have an id, and our data isn't changing much, we can just use the index from the array as that ID to get this error message to go away.

[SC]

[VO]
And if we go to our browser now, you should see that the warning is gone.

# end

could add this randomizer down below if it doesn't feel like it's too much.

[SC]

const messages = [
'cool cud', 'me my <3', 'you are bear',
'team bear', 'time hug', 'fang', 'bog love', 'me have love',
'all hover', 'sweat poo', 'u hack', 'stank love', 'heart me',
'wink bear', 'bear bear', 'be my bear', 'yank o way', 'mage love',
'oy', 'in a fan'
].sort((a,b) => 0.5 - Math.random())
[VO]

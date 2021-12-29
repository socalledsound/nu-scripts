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
WE're going to take that simple Heart Component that we previously wrote, and use it to build a whole page full of hearts. If you've been paying attention, it shouldn't be too hard.

[SC]

[VO]
But let's start by refactoring this site a little bit. Right now we've got a bunch of stuff on this App.js file, and it's starting to feel a little cramped and disorganized, so let's start by cleaning this up.

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
So we'll write some curlybraces, and then inside there, we'll map over our array of messages. So messages.map(), and then the call back function that we pass in to the map method. For each item in the array, we will use both the item, which we'll give the name of msg and also the index number, which we'll give the name idx.

[SC]

        {messages.map((msg, idx) =>  <Heart key={idx} text={msg} idx={idx} />)}

[VO]
And then that function will return -- for each message -- a Heart element. And we'll pass in the message, as a prop that we'll call text...

[SC]

[VO]
-- remember, we use a prop called text in our

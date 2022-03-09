https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/
https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#:%7E:text=Detailed%20Explanation%3A%20Why%20Are%20They%20Called%20%27Reducers%3F%27
https://stackoverflow.com/questions/40599496/why-is-a-redux-reducer-called-a-reducer



--- 

##### SC



##### VO

Welcome back.

--- 

##### SC


array.map 

transforms each item in an array and returns a new array with the new items in it


    const newArr = oldArr.map((el, idx) => `sweet new ${el}`);



##### VO

Previously in this course, you've learned a few very powerful array methods.  

You've learned how to use Array.map(), which you can use to trasform an array into a new array, by passing in a callback function that specifies how you want to transform each element in an array.

And, as I'm sure you remember, Array.map returns a new array.



--- 

##### SC

array.filter finds elements which meet certain conditions and returns a new array with those items in it

const filteredArr = oldArr.filter(el => el.niceness > 82);

##### VO

And you've learned how to use Array.filter, which you can use to create a new array from an old array using a comparison function.

--- 

##### SC

focus arrow follows text

Array.map()
Array.filter()
Array.reduce()


##### VO

These array methods, Array.map and Array.filter, and their related Array methods, Array.forEach and Array.find, are the foot soldiers of Array methods.  You use them every day because they're simple and cheap and they get very specific things done. 

They're also very expressive and easy to read, which is a wonderful thing.

But in this video, you will meet the big boss of array methods: Array.reduce.  It's a bit more complicated than the other array methods, but if you put the time in to really understand it, you'll find that it's a tremendously powerful tool to have in your toolkit.


--- 

##### SC

Redux = FLUX + Reducers


##### VO

Amd, as I mentioned in the last video, understanding Array.reduce is essential to undersatnding how Redux works -- once you understand reducers, Redux makes a lot more sense.  So in this video, we'll take a deep dive into this big boss of Array methods.

--- 

##### SC

Array.reduce(callback)


##### VO

As with the other Array methods, array.reduce take in a callback function.

--- 

##### SC

Array.reduce(callback, initialValue)

##### VO

And, optionally, it can also take an initial value.


--- 

##### SC



    const reducedValue = oldArr.reduce(callback, initialValue);



##### VO

Array.reduce returns a 'reduced' value



--- 

##### SC


    const newObject = oldArr.reduce(callback, {});

    const newArray = oldArr.reduce(callback, []);

    const newInteger = oldArr.reduce(callback, 0);



##### VO

Which can be an object, or an array, or just a number, depending on how you write the callback function and what inital value you specify.




--- 

##### SC

    const initialState = {
        clicked: false
    }


##### VO

So if, for some strange reason, we happen to have a state object


--- 

##### SC

    const initialState = {
        clicked: false
    }


const newState = [action, action, action].reduce(reducer, initialState)


##### VO

We can create a new state object, by 'reducing' an array of actions.  Amazingly elegant.

This idea is, as I mentioned in the last video, the very heart and soul of redux.

--- 

##### SC

const state = [action, action, action].reduce(reducer, initialState)

##### VO 
So, let's get down to business and understand Array.reduce and these nifty little things called reducer functions.


---
##### SC


    const reducer = (acc, cur) => 'reduced value'


    const reducedValue = oldArr.reduce(reducer);

##### VO

A reducer is the name that we give to the callback function that we pass in to Array.reduce().
 
It takes in two values: an accumulator, and the current value.  


---
##### SC

focus outline follows the text

    const reducer = (acc, cur) => 'reduced value'

    cur = current item

    acc = accumulated value


##### VO

The current value is essentially the same as the 'item' value that we get from Array.map or Array.filter.  

But the accumulator is a bit different, and this value is really the key to understanding Array.reduce.


---
##### SC

    const newState = [action].reduce((state, action) => {
            // do something with state in  here

    }, initialstate)

##### VO

We can of course call these parameters anything we want, just as with the other array methods.  SO for instance, in react and redux, you'll often see reducers written with this sort of signature, where the accumulator is called 'state' and the current item is an action.


--- 

##### SC

cont oldArr = ['user1', 'user2', 'user3'];
const reducedValue = oldArr.reduce((acc, cur) => 'you have been reduced');
console.log(reducedValue);
// you have been reduced


##### VO

Here's you can see a somewhat nonsensical reducer, because, irregardless of what's in the array, the accumulator will always just be equal to the string 'you have been reduced'.

But I think that it also makes clear what this acc thing is -- the final output here ISN'T 'you have been reduced' three times, one for each element in the array -- it's just whatever the return value of the reducer function is, the last time it gets called.

--- 

##### SC

cont oldArr = [0, 3, 5, 2];
const reducedValue = oldArr.reduce((acc, cur) => acc + cur);
console.log(reducedValue);
// 10

##### VO

Let's look now at the canonical array.reduce example, which you can see here and which you'll see repeated all over the internet, any time anyone talks about array.reduce().  Here, we use reduce to add up each element in the array.

And in this case, the acc value will be first 0, then 3,then 8 and finally 10.

And so there you have it -- we've reduced all of the elements of an array into a single value, following the rules laid out in our reducer function.


--- 

##### SC

cont oldArr = [0, 3, 5, 2];
const reducedValue = oldArr.reduce((acc, cur) => acc + cur, 90);
console.log(reducedValue);
// 100

##### VO

We can also specify an initial value, a starting point for our accumulator.  So in this case, acc will start out as 90, and the final result will be 100.



--- 

##### SC

const users = [
    {
        username: 'sam',
        location: 'oakland',
    },
    {
        username: 'edie',
        location: 'seattle',
    },
        {
        username: 'tomah',
        location: 'portland',
    },
    {
        username: 'jerome',
        location: 'oakland',
    },
    {
        username: 'solace',
        location: 'oakland',
    },
]







##### VO

But the real power of Array.reduce comes from the fact that the accumulator and the current value don't need to be of the same type.  
 
So, for instance, if we have an array of users, and we know where they're all from, we might want sort through that array of users and


--- 

##### SC

const userByCity = {
    oakland: 3,  
    seattle: 1,
    portland: 1, 
}

##### VO

 create an object that has keys for each city and tells us how many users we have in each city.

We can use some of the tricks that we learned last week, along with array.reduce and a reducer function to make that happen.


--- 

##### SC


const users = [
    {
        username: 'sam',
        location: 'oakland',
    },
    {
        username: 'edie',
        location: 'seattle',
    },
        {
        username: 'tomah',
        location: 'portland',
    },
    {
        username: 'jerome',
        location: 'oakland',
    },
    {
        username: 'solace',
        location: 'oakland',
    },
]

const usersByCity = users.reduce((map, user) => ({
    ...map,
    [user.location]: (map[user.location] || 0) + 1,
}), {})

console.log(userByCity);
//  {  
//    oakland: 3,  
//    seattle: 1,
//    portland: 1,
//    
//  }

##### VO

We'll just make a variable called usersByCity and call array.reduce on that array of users and then in our reducer function I'm going to call the accumulation map and each item a user.

The reducer function is going to return a new object which uses the spread operation to spread in all of the values that already exist in the object, and then I'll replace use a computed property to pull of the location of that user.

If there is already a value for that location, I'll use it, otherwise I'll create an initial value for that user's location of zero, and I'll add one to that value.

And notice that we pass in an empty object as our initial value.







--- 

##### SC


const users = [
    {
        username: 'sam',
        location: 'oakland',
    },
    {
        username: 'edie',
        location: 'seattle',
    },
        {
        username: 'tomah',
        location: 'portland',
    },
    {
        username: 'jerome',
        location: 'oakland',
    },
    {
        username: 'solace',
        location: 'oakland',
    },
]

const usersByCity = users.reduce((map, user) => ({
    ...map,
    [user.location]: (map[user.location] || 0) + 1,
}), {oakland: 100, byzantium: 1000})

console.log(userByCity);
//  {  
//    byzantium: 1000  
//    oakland: 103,  
//    seattle: 1,
//    portland: 1,
//    
//  }
    

##### VO

And of course, we could also stack the odds here, if we want to, by setting an initial value for one or more of the cities, or for some other city altogether!

You can see here that I'm packing the userbase in Oakland...and Byzantium... just a little bit.


--- 

##### SC

Array.reduce takes in a reducer and, optionally, an inital value


const reducedValue = Array.reduce(reducer, initalValue);


##### VO

I hope that this example gives you some sense of the power of array.reduce.  Now, if this doesn't make sense right away, that's pretty normal.  It's definitely a little more complex than the other array methods.  But it's also a powerful tool to add to your toolkit, and I recommend taking the time to learn it thoroughly.  

Just remember, you pass in a reducer function and, optionally, an initial value.

--- 

##### SC

const reducer = (acc, cur) => 'this is a silly reduction'


##### VO

A reducer is a function which takes in an accumulated value and the current item in the array, does something with the current item, and then updates the accumulated value with the return value of the reducer function.


--- 

##### SC
focus arrow on ...map

    const usersByCity = users.reduce((map, user) => ({
        ...map,
        [user.location]: (map[user.location] || 0) + 1,
    }), {oakland: 100, byzantium: 1000})



##### VO

And, very importantly, we saw that we can spread the contents of the old accumulated value into the return value, if our initial value is an object or an array.

--- 

##### SC

show array.reducer code challenges page

##### VO
Now get in there and do those Array.reduce code challenges, and I'll see you in the next video, when we'll get into our react code and use this idea of reducer functions, with the very aptly named useReducer hook.  I'll see you there.
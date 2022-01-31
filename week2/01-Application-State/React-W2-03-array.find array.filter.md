wk2-03-array.filter and array.find

---
##### SC
title card:
Array.filter and array.find


Welcome back.


---
##### SC

const newArray = Array.map(callbackFunction)


##### VO
Last week, you learned an Array method called Array.map(), which takes in a callback function and uses that callback function to iterate over an array and transform each value in that array, and then returns a new array containing the transformed values.

---


##### SC


const newArray = Array.filter(callbackFunction)
const value = Array.find(callbackFunction)

##### VO

In this video, you're going to learn about two more very useful Array methods, Array.filter and Array.find.  We'll often use these methods to find specific items in an array which meet certain criteria.  Let's start by looking at Array.filter.

---

##### SC

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97,
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77,
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87,
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        points: 12,
        featured: 'true',
    },
        {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6,
    },
];

##### VO 

Here, you can see that we've got an array of objects named things.  If you've seen the sound of music or are a John Coltrane fan, you might recognize the objects as coming from the lyrics of the song, 'my favorite things'.

And you can see that all of these objects have an id, a title a boolean key named favorite, and then a points key that has a numerical value.

And then, maybe you noticed that 'dog bite' is the only one that is currently featured.  Yikes!

---

##### SC

const myFavoriteThings = things.filter(thing => thing.favorite === true);


##### VO

Now, let's filter that array of objects, returning only the ones that are marked as 'favorite'.

I'll start by making a variable named myFavoriteThings and then set it equal to things.filter() and then I'll pass in a callback function, which will pull off each thing as an input parameter and then return each instance where thing.favorite is true.  These items willl be returned as a new array.


---

##### SC

const myFavoriteThings = things.filter(thing => thing.favorite === true);
console.log(myFavoriteThings);

##### VO

So if I run that code and console.log the result, you'll see that the value of the variable myFavoriteThings is now a new array that contains only the items in the original array that were marked as favorites.

---


##### SC

const myFavoriteThings = things.filter(thing => thing.favorite === true);
console.log(myFavoriteThings);

##### VO

One thing that you should notice that the callback function that we pass in to Array.filter is a comparison function.

Rather than transforming the item in the array, like array.map does, it checks each item in the array for a comparison that matches the conditions that we specify in the function, and if the item is a match, it adds it to the array that the filter method returns.



---

##### SC

const myFavoriteThings = things.filter(thing => thing.favorite);
console.log(myFavoriteThings);

##### VO

And we can actually shorten this comparison function just a bit by removing the triple equals signs and the true; just checking to see if a key is present is another way to evaluate the 'truthiness' of that key. 


##### SC


const pointsGreaterThanFifty = things.filter(thing => thing.points > 50);

##### VO

And here's another comparison function, which returns the thingsd with point values greater than 50.  As you can see, array.filter can be a really useful tool for sifting through data and returning items in an array which meet certain criteria.  And one important thing to notice is that, like Array.map, it doesn't modify the original array.


---

##### SC

things.find(thing => thing.id === someIdNumber);

##### VO
But in many cases, we only want to return one value.  This is where Array.find comes in.  It takes in an evaluation function as a callback function, just like arr.filter, but it only returns the first instance of a match that it finds, and then it stops running.


---

##### SC

const selectThingByID = (id) => {
    return things.find(thing => thing.id === id)
}

const selectedThing = selectThingBYID(0);
console.log(selectedThing);


##### VO

This is great if we want to find a specific element in an array.  It's faster, because it stop searching after it finds the thing that it wants, and it's also a more clear and terse syntax, because rather than returning a new array, it just returns that item.

So here, you can see that we this function, selectThing BYID, takes in an id, and then returns only the item in the array which matches that id.


---

##### SC

arr.filter(item => item === searchParameter);

arr. find(item => item === searchParameter);

##### VO

These methods are both tremendously useful for immmutably interacting with data and for creating selectors -- functions which search through our data and select only the items that we want at any given point in time, without modifying the original data.  You'll learn about selectors in the next video.



---



##### SC

const featuredThing;
console.log(featuredThing);

##### VO
But before we go, I have a little challenge for you.  I want you to use one of these two methods to find the thing in things with a key of featured, and set this constant named featured to be that featured item.  You can do it anywhere you like -- directly in the console, in a new javascript file, or just in your head.  

---



##### SC

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97,
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77,
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87,
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        points: 12,
        featured: 'true',
    },
        {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6,
    },
];


##### VO

Here's the original array.  You can see that it has just one item with the key of featured.  Go ahead and pause the video here and continue when you've got it worked out.


---



##### SC

const featuredThing = things.find(thing => thing.featured);
console.log(featuredThing);

##### VO

And here's my answer.  Since we know that we're looking for a single item, we'll use array.find, and pass in a truthy evaluation function which just checks to see if a thing has a featured key, or not.



---
##### SC

show code challenge page

##### VO

And that's array.filter and array.find.

Now go work through the code challenges for these methods, and when you're done with that, I'll see you in the next video, where we'll talk about the application state, and learn some of the important things to keep in mind as you start to work with it in your React applications.

I'll see you there.

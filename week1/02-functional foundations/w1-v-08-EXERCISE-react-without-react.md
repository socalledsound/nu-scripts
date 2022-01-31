# start with a stub that includes the DOM manipulation from the last video.

https://developer.mozilla.org/en-US/docs/Web/API/Element

[SC]
code from last time

[VO]
Welcome back. In the last video, I went over some basic DOM manipulation. Nothing too fancy, I just created a div with an emoji in it and appended that div to a div that was already there in the DOM.

[SC]

[VO]
In this video, I'm going to ask you to code along with me as I refactor that code a bit to be more declarative. 

I'm going to 

We're going to write a function that creates DOM elements and we'll use it to display a string of emojis on the page.

[SC]
emoji string here
[VO]

You can see that emoji string here.

Someone shared it with me and I thought it was a little bit funny and a little bit appropriate.

It's supposed to mean
[SC]
[VO]
pulling

[SC]
[VO]
a rabbit

[SC]
[VO]
out 

[SC]
[VO]  
of a hat.

[SC]
SC downloading


[VO]
And,as I said before, we're going to write a function that helps us do that.

So let's get started.  And this time we're going to once again be in the functional foundations folder but this time we'll be in the folder called 04-react-without-react

And I can see that there's three files in there.

And first of all there's an index.html and that index.html has a few css classes and also a root  div as well  script tag that leads to and index.html file

[SC]

[VO]
Ok, so if I open this folder up in vs code, I can see that there's an index.html file, and in that code, there's a root div, and a few css classnames, and a script tag that points to an index.js file.

You should  also see two javascript files in this folder. There's called index.js that just has the code I wrote last time, commented out, and then the string of emojis that we'll be using.  And I went ahead and added the reference to the root div for us.

There's also a file called finished.js, which you can look at for reference if you get lost, or your code isn't working.

But try not to peek at this!  If you can solve any issues you're having on your own, you'll get a lot more out of this exercise.

[SC]

[VO]
So let's start by clicking on the index.js file, which has the code that I wrote in the last video.
 As well as the string of emojis that we're going to ned and a reference to the root div




[SC]
const emojis = ['👊','⬆️','🐰','📤','🎩']
const root = document.getElementById('root')

<!-- const newDiv = document.createElement('div')
newDiv.innerText = '🐰'
newDiv.className = 'emoji-lg'
console.log(newDiv)
root.appendChild(newDiv) -->

[VO]
Ok, so, let's start by looking at the code from last time, and thinking about how to abstract it into a function that we could use to create any element we want, similar to the way that array.map abstracts away a for loop.

And let's start writing that function now.

The function that we're going to write is going to be create an  element, so let's do the boring thing and name it createElement.  It's usually a pretty good idea to be unoriginal and descriptive with your function names -- the key thing is to be succinct and also name it something that is easy to understand.

And, looking at the code from last time, I can see two different types of things that we're going to want to do here.

First we're creating an element, and to do it we need to pass in the type of element that we want to make.  We're just making divs but let's be smart and make this function capable of creating any type of element.

So, how do we do that?  I'll pause briefly here and let you think about itSo, what we want is flexibility with regard to what type of element we make, so I'm going to add an input parameter and I'm going to call it type.

And then I'm going   to make a new constant named el  and set it equal to document.createElement.

And I'm going to  pass in that type.

N ow we just need to return that el, and we've already got a function that creates whatever type of element that we specify when we call this function.

--

And now the other thing we need to add is some way to set the inner text and the class name. 

 But again, just like with the type of element, I'd like to try to keep this flexible, so that we can add any property that we might want to add.

And if I log that rabbit div from last time to the console,  and look at the possible properties we m ight want to add, you can see that there are actually quite a few.  

But, we don't really need to concern ourselves with how many elements there can be, what we're going to do is just take the properties in, as an object.  So we'll have a parameter named props, which is a little shorter than properties.

And when we get to React, you'll see why I chose props and not properties.

Now, before we get to how we're going to handle this props object in our function, let's look at how we're going to invoke this function that we haven't finished writing yet. 

I'll create a constant named RabbitEmoji and then I'll set it equal to createElement() and I'll pass in first the type and then an object.  And that object will have a key for className and I'll set that to emoj-lg, just as I did before, and it will have a key for innerText, which I will set to this rabbit emoji.


Now let's go inside our function and think about how we're going to handle this props object.

And what we want is some way to take in this object and basically map the contents of this object to the element that we've named el, right?

So for instance, el[innerText] = props[innerText]

And boy wouldn't it be nice if there was a function named forEach that we could call on each key of this props object, and then we could pass in a callback function that takes each key and sets the el[key] to the props[key]?

And the amazingly good news is that javascript has a very straightforward way to convert the keys of an object into....an array, which HAS THAT FOREACH METHOD.

And all we need to do is say Object.keys() -- so this is a method of the Object class -- and pass in the props object and we get an array of those keys, which we can then call forEach on and set an key on the props object to a corresponding key on the el element.  

And now if we just append that rabbit emoji to our root div and open up our index.html file in live server.....it works!  I love it. 







Now let's take a look at the best way to handle this pro

 and then we can specify which property we want to set with a key and also give each key a value.

So I think that, rather than taking in a parameter for each of the possible properties, I'm going to just do what the DOM does, and set this up to be an object with properties, so I can just take in one parameter called properties, or props for short, and then when I call this function, I'll pass in an object.

And you'll see this sort of thing a lot, not just in React code but more generally in all declaratively written javascript, because it is very concise and very flexible.

So when I call this function, it will look like this.



Now, we just need a way to deal with this props object in our createElement function.  And I think you're going to like this, or I hope you will.  We're going to use a friend from a previous video.  Can you guess what it is?  

Well let me give you a hint.

What we need to do is take the keys of our props object and map them to the keys of our el variable, right?  

Up above here, we are setting the keys of our newDiv, we set first an innerText and then a className.

Our props object has two keys, innerText and className.

And we need to say el[innerText] = props[innerText].

So what would be really neat would be if we could say props.map(key => {
    el[key] = props[key]
})

am i right?

And the wonderful amazing thing that is javascript just so happens to have the ability to convert the keys of an object into an array.

All we have to do is say

Object.keys(props), and we get an array that looks like this:
[innerText, className]
 
SO we did it!  

Or, almost.  I'm just going to change this map to a forEach, because as you know, if you don't use the array, you should use Array.forEach instead of map.

And now if we just append that rabbit Emoji to the root div like this....it works!



##


And I know that was a lot, it's fairly complex code and I went rather fast.  

But I know you can pause me if you want to, and even revisit this video if you need to.

And I want to say, this sort of technique is very common in declarative javascript, so I recommend really letting this idea sink in, until you get to the point where you are seeing possibilities to implement structures everywhere in the code you are writing.

Because those opportunities will be there, trust me.

And now I'm sorry not sorry to say, that we have more work to do, because there's one more capability that this function is going to want.





##

As you already know, it's very common that we might want an element to be able to have a child node.  Or maybe a bunch of child nodes.  

Like for instance, in an image gallery.  We'd probably have a parent div to contain the whole gallery, and then each image would also have a parent div, which would contain not just the image but also perhaps a description of the image or a little heart logo so we could like the image

So I think -- in fact, I know, that we're going to want a way to assign children to an element.

We're going to need that capability to make this page look the way we want, because if we look at the classnames in our index.html you can see that these small emojis are going to have a parent div, which is going to be a flex box container.

So how do you think we should do it?  Go ahead and pause the video here and think on it for a minute.  It's ok if you don't know, just work that brain a little and think about it.  I'll wait.

So what I'm going to do is, write an input paramenter named....children.  And it's going to have a default value of an empty array.

And then we're going to use....can you guess?  children.forEach(), and in case I wasn't clear before, in both of these cases the reason that we're using Array.forEach instead of Array.map is because we're not using the array that results from this transformation....and of course that means that we're generating a side effect. 

And in the callback function, we're just going to pull off each child and then we'll call el.appendChild and append that child to the element.

SO now, if there are children, they will be well parented, and that's pretty satisfying, isn't it.

Now let's use this function and there's a couple of different ways we could do this.

One would be to just extend what we've already written inside this root.appendChild....but I've got a better idea.



I called this video react without react because that's pretty much what we've just done.  We've made a kind of naive version of a key function in the React library, which is called React.createElement.  Just like ours, it takes in a type, it takes in props and it takes in children.  

Now, I mentioned before that React apps are structured using functions, or components as they're called in React.

And a component is just a function that returns the result of a call to React.createElement.

SO you know what I want to do? 

I want to write a function called App and all it's going to do is return the result of a call to our createElement function.  and that element is going to be a div and it's going to have a className of App-container and it's not going to have any other properties but it IS going to have children, as we'll see in a second.






It turns out that 



because we're going to generate a side effect, and we're going to pull off each child and then say el.appendChild(child)

Isn't that elegant?  Isn't that nice?  I really love javascript sometimes.

Now, let's use it.  And, I can tell you, I can pull a rabbit out of my hat in one line.  Can you?  Think about it for a minute, pause the video and see if you can do it.

All right here goes. 

I'm going to root.appenchChild() and inside there I'm going to createElement
 root.appendChild(createElement('div', {className: 'app-container'}, emojis.map(emoji => createElement('div', {className: 'emoji-sm', innerText: emoji}))))


And if I go to the browser....it works, just fine.  


But, holy cow what an ugly mess that is.  Now I did that on purpose for a few reasons.  First, I wanted to show off.  Which is often why people go over board with the whole one line declarative javascript thing.  It's showboating.  And second, I just wanted a chance to show you how ugly that is and show you how I'd fix it.  And, I'll admit, the reason I'd fix it the way that I'm about to fix it is directly due to my experience as a React developer, because what I'm about to do will be immediately recognizable to you as a pattern after you've coded a little in React.

Remember when I said back in the first video that coding React would make you a better javascript developer?  It's really true, at least it has been for me.

So what I'll do is make an App function.  And it will just return the thing in the root.appendChild.  And that function's only real job in this case will be to clean up this code, because now we can just call App and it looks a lot cleaner.  

And we can actually make another one called EmojiElement and clean this up further...

   const EmojiElement = (emoji) => {
        return createElement('div', {className: 'emoji-sm', innerText: emoji})
   }

And now, this one liner has become a many liner but, look at how nicely it reads.  Concise is not always best.

Now ou'll see functions just like in React, in fact we'll be writing an App function very soon.  And I want to say that although they will look very similar, React components, which is what we call functions like this that return elements -- actually have the ability to quite a bit more useful than this, as we'll learn next week.  But that can wait.

For now, just take a minute to celebrate.  That was some really nice code you just wrote.  Or, we just wrote.  And, although you may not know it now, what we just did is going to really help you when it comes to react, in exactly the same way that iterating over the elements of an array using a for loop helps you understand how array.map works.

So, take a break, stretch those legs, and then come back and watch the next video, where I'm going to talk a little bit about how what we just did relates to React, and also discuss that wonder of wonders known as the virtual DOM.  I'll see you there.







Because of course one of the 







[SC]

    const newDiv2 = document.createElement('div')
    newDiv2.innerText = '🎩'
    newDiv2.className = 'emoji-lg'
    console.log(newDiv2)
    root.appendChild(newDiv2)

[VO]












# previous script

And if we want to add another emoji, and want to continue in this highly imperative fashion, we can simply go through all of those steps again, with a new variable name and a new text.

But I hope that you can immediately see that this has what we commonly call 'code smell'.

We're repeating the same steps again. And if we want to add 5 or a hundred divs -- or other elements -- to this page, this code will get downright stanky.

[SC]

    const createElement = (type, text, className) => {
        const el = document.createElement(type)
        el.innerText = text
        el.className = className
        return el
    }

[VO]
Much better, for starters, is to write a function. We'll call it createElement, and it will take in type and a text and a className and it will return an HTML element. This is better! For one thing, the const that we declare and assign to the div is no longer in the global scope.

[SC]
root.appendChild(createElement('div','🐰', 'emoji-lg'))
root.appendChild(createElement('div','🎩', 'emoji-lg'))
[VO]
And for another, now, any time we want to create a new element, we only need to write one line.

We can just call the function, pass in the data we need, and pass the result of that function in to root.appendChild and just like magic, we have a rabbit AND a hat.

We've taken a pretty big step in terms of the level of abstraction!

[SC]

show rabbit out of hat page

[VO]
And now we've got a basic function to render some elements. Let's take a look at what we want to do with this page.

We want to make something like this.

[SC]

    <div id="root">
        <div class="app-container">
            <div class="emoji-sm">'👊'</div>
            <div class="emoji-sm">'⬆️'</div>
            <div class="emoji-sm">'🐰</div>
            <div class="emoji-sm">'📤'</div>
            <div class="emoji-sm">'🎩'</div>
        </div>
    </div>

[VO]
The structure of the page that we want to generate is going to be a little more complicated, because we're going to have a flex-container that has five children, so, rather than appending each element to the root, we're going to first append the children to the container and then we're going to append that flex container to the root div.

[SC]
const emojis = ['👊','⬆️','🐰','📤','🎩']
[VO]

Now, maybe you noticed that I gave you an array of emojis at the top of the page? And if you did, I bet you can guess that we're going to use Array.map() to add these to the DOM.

[SC]

const emojiElements = emojis.map(emoji => createElement('div', 'emoji-sm'))

[VO]
We'll start by passing our createElement functon into array.map to generate an array of HTML elements.

[SC]
const app = createElement('div', null,'app-container')
emojiElements.forEach(el => {
app.appendChild(el)
})
root.appendChild(app)

[VO]
Now, we need to append

We can first create a div with a class name of app-container, and then use map's somewhat shady cousin array.forEach(), to append each child to the app, and finally, append the app to the root div, and you should see the page that we wanted to make.

[SC]
REACT WITHOUT REACT
[VO]
But there's a better way.

And, brothers and sisters, I want to tell you, that way is 'React Without React'.

Don't they say

In the next video, we're going to take this code and move it a little closer to being React-like.

We can get just a little bit declarative, and smart, and think about how to refactor our createElement function so that it can encompass this idea of children, and move that forEach into our createElement function.

We'll give children a default value of an empty array and then check to see if the children array has anything in it, and if it does, we'll loop over each item in the array and add it as a child.

Nice, right?

[SC]

[VO]

Now, if we don't want an element to have a child, we can ignore that

[SC]

[VO]
Now, If you noticed that I gave you an array of emojis on this page, I bet you can guess that we're going to use Array.map() to iterate over these emojis, right?

[SC]

const app

[VO]
One way to do this would be to take a step in the imperative direction, by first creating the app-container node and then appending the children to it. But....there's a better way.

[SC]
const createElement = (type, text, className, children = []) => {
const el = document.createElement(type)
el.innerText = text
el.className = className
return el
}

[VO]
But this notion of an element than can have children is something that's missing from our createElement, isn't it?

And it seems rather important!

So let's add that.

And, I'm going to show you two ways to do it. The first will be a little bit basic and a little bit awkward, and then we're going to go back and do it better, by borrowing some ideas from React. But in each each case, we're going to use Array.map().

[SC]
const emojis = ['👊','⬆️','🐰','📤','🎩']
[VO]

Did you notice that I gave you an array of emojis at the top of the page?

[SC]

const emojiElements = emojis.map((emoji) => createElement('div', emoji,'emoji-sm'))

[VO]

I can map over those emojis and transform them into HTML elements, by passing in a function that takes each emoji and creates an element with that emoji as text and assigns the class name emoji-sm.

[SC]
const app = createElement('div', null,'app-container')
emojiElements.forEach((el) => app.appendChild(el))
root.appendChild(app)

[VO]
Then, I'll create my app-container.

And now, I'll use the forEach method to append each child to the app container.

[SC]

forEach usually has side effects
map does not!

[VO]
It's a small thing, and the code will work in either case, but, since I'm not actually using the array of elements that gets returned by .map(), and I'm very clearly generating a side effect, because my app is outside the scope of the function! -- in this case, I should use map's slightly shady cousin forEach.

Again, a very small point, but something to notice and remember, because understanding the difference between array.map and array.forEach is a great way to impress senior developers and make friends.

[SC]
const app = createElement('div', null,'app-container')
emojis.forEach(emoji => {
app.appendChild(createElement('div', emoji,'emoji-sm'))
})
root.appendChild(app)
[VO]

And if you have pretty sharp eyes, you can probably also see that I could rewrite this by doing something like this. Which is pretty clean and easy.

[SC]

[VO]
I mean, it works, but it's also missing the mark in a pretty major way. We've got side effects in the global scope, and frankly, this will quickly turn in to spaghetti code if we try to add more children.

That is to say, I think we can do better, by borrowing a page from React. This might

# too complicated!

[SC]

    const createElement = (type, text, className) => {
        const el = document.createElement(type)
        el.innerText = text
        el.className = className
        return el
    }

[VO]
Now, the elements that we've been creating so far don't really have this capability to have children.

[SC]
const createElement = (type, text, className, children = []) => {
const el = document.createElement(type)
el.innerText = text
el.className = className
return el
}
[VO]
But we can add it! This children argument is different than the other properties of our element. It needs to be flexible. It could be zero or it could be a hundred, and number of children might even change over time. So I'm going to think of it as being an array, and -- remember default values? -- I'm actually going to make sure that it always exists and is always an array, even if there are no children passed in, by setting it's default value to be an empty array.

[SC]

[VO]
Now, we can append those children

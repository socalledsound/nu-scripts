# start with a stub that includes the DOM manipulation from the last video.

https://developer.mozilla.org/en-US/docs/Web/API/Element

[SC]
code from last time

[VO]
Welcome back. In the last video, I went over some basic DOM manipulation. Nothing too fancy, I just created a div with an emoji in it and appended that div to a div that was already there in the DOM.

[SC]

[VO]
In this video, I'm going to ask you to code along with me as I refactor that code a bit to be more declarative. We're going to write a function that creates DOM elements and use it to create a string of emojis.

[SC]
emoji string here
[VO]
Someone shared it with me and I thought it was a little bit funny and a little bit appropriate.
It's supposed to mean
[SC]
[VO]
pull

[SC]
[VO]
a rabbit

[SC]
[VO]
out of a hat.

[SC]
SC downloading

[VO]
I want you to start by downloading a folder that has some code in it.

It's at a link like the one that I'm showing here on the screen, which you should be able to see on the page down below the video. After you download the folder from that link, go ahead and open it up in your vs code editor. GO ahead and pause the video if you need some time to download that folder now.

[SC]

[VO]
Ok, so if I open this folder up in vs code, I can see that there's an index.html file, and in that code, there's a root div, and a few css classnames, and a script tag that points to an index.js file.

You should also see three javascript files in this folder. One called index.js that just has the code I wrote last time, and then two others that have the code as it will be at the end of this video, and another that will have the code at the end of the next video. But try not to peek at this! It will be good practice for you and hoepfully even kind of interesting for you if you can do the work yourself as we go along.

[SC]

[VO]
So let's start by looking at the index.js file, which has the code that I wrote in the last video.

You may need to pause this video while you get set up and find that code.

[SC]
const emojis = ['👊','⬆️','🐰','📤','🎩']
const root = document.getElementById('root')
const newDiv = document.createElement('div')
newDiv.innerText = '🐰'
newDiv.className = 'emoji-lg'
console.log(newDiv)
root.appendChild(newDiv)

[VO]
Ok, so, if we look at the code from last time, we can see a very imperative way of working with the DOM, where we create a new div and assign it to a variable, modify its properties and then append it to a target node. Which works fine.

[SC]

    const newDiv2 = document.createElement('div')
    newDiv2.innerText = '🎩'
    newDiv2.className = 'emoji-lg'
    console.log(newDiv2)
    root.appendChild(newDiv2)

[VO]
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

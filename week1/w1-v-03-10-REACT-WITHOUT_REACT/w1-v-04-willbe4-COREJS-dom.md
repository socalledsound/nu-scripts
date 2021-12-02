[SC]
DOM graphic here
[VO]
DOM is short for the Document Object Model, and it's the very first thing we need to know about in order to make a javascript application, because in order to create and modify web pages with javascript, we use the DOM, or more specifically, we use a variety of web APIs that are all bundled together as part of the DOM.

[SC]
Document API graphic here

[VO]

The Document part of the DOM is, basically, an abstract representation of any web page that's loaded in a web browser.

We can access that Document from our javascript code and we can see the Document in the developer tools of our browser.

Let's do that now, by making a web page in vs code and opening it up in our browsewr with live server.

[SC]

opening up vs code

[VO]

Open up your vscode editor and go the file menu and select new window, or just use the key command command shift N to make a new Window in VS Code.

[SC]
making a new folder
[VO]
Then, click 'open' like I am here, but instead of opening a new folder, let's go ahead and make a new one, on the Desktop, like I'm doing here.

[SC]
show the file browser and the folder name
[VO]
After you do this, you should see the title of your folder in all caps in the file browser, as I'm showing here.

This might seem like a lot of work to make a new file, but I always, always, always take the time to make a new folder when I'm starting a new project -- that way I can be sure exactly where my files are. Project organization is super important! And it will become even more important as you start to build bigger applications. It's not uncommon for React projects to have hundreds or even thousands of javascript files, so now is as good a time as any to start re-inforcing good, simple habits which will serve you well in your career.

[SC]

show creating the file
[VO]

Now, let's make a new file by clicking the new file button in our vs code editor, and call our new file index.html.

[SC]
emmet cheatsheet
[VO]

One of my favorite things about vs code is that it has support for emmet, which is an awesome plugin for writing html, built right in and enabled by default.

It let's us write html using shortcuts. Let's use it now to make an html page.

[SC]
screencast
[VO]
In our index.html file we can just type an exclamation point and you should see a pop up window that will tell you this is an accepted emmet abbreviation, and then if you hit return while that popup is active, you'll get a basic template for an html page.

[SC]
show result
[VO]
Neat, huh? I've added a link on the course page to an emmet cheat sheet if you want to learn more about what it can do for you.

[SC]

[VO]
Let's use emmet again to make a div.

[SC]

[VO]
Click inside the body of your html page and type div#root. You should again see emmet making a suggestion. If you then hit the return key and emmet should provide you with a div with the id of root, inside the body of your html document.

[SC]
screencast
[VO]
Ok. Now that we've got a barebones html page, we can see the DOM in action.

Let's open this page with live server.
(can we assume that they have this enabled already and know how to use it or?)

[SC]
sc - blank page then the developer tools
[VO]

Now, this is unusual. Because in this case, if all went well... you should see a blank page.

Because there isn't anything in our div. But that's ok, it's plenty for us to see the DOM.

Open up your chrome developer tools (cmd alt i) and let's have a look. The DOM is what we see under the elements tab.

There you should see an outline of our web page.

Granted, in this case, it's looks exactly like what we've already written in our html at this point, but obviously this isn't our html, which exists in a file on our computer. What we see here is the web browser, parsing that code, and showing us what it sees. Each element in our html file becomes a node in the DOM, and we can use javascript to access and modify those nodes.

[SC]

animation of inserting app into DOM node
[VO]

And that's exactly how React works -- we access the DOM node for a div and we insert content into that node. In fact, the html page that we've already written is a slightly simplified version of what the html file for most React apps looks like, just, basically a div with an id of root that acts us a container for our application.

[SC]
hi there
[VO]

Now, let's use javascript to access the DOM and insert a node into our root div.

[SC]
making index.js
[VO]
So, let's make new file in vs code, called index.js.
[SC]
linking to index.js in index.html
[VO]
And, we have to remember to link to that file from our index.html page. Inside the body of your html page, after the root div, add a script tag. You can use emmet for this too, just type script, and then select script: src. Emmet should drop your cursor down right where you want it, and you can just type out index.js, like I'm doing here, and then we should be ready to go.

[SC]
index.js
const root = document.getElementById('root')
[VO]
Now, in our index.js, first, let's get a reference to our 'root' div. I'llmake a constant variable called root and set that equal to document.getElementById('root').

So, if the browser finds an element an ID of 'root' in the DOM, it will assign it to our variable root.

[SC]
const newDiv = document.createElement('div')
[VO]

We can also make DOM nodes with the Document API.

Let's make another constant variable named newDiv, and set it equal to the return value of another DOM method, document.createElement. So we'll say

const newDiv = document.createElement() and pass in div in quotes, just like this, and now we have a new div.

[SC]
newDiv.innerText = '👋 hi there, Chris!'
[VO]
And now that we've created an HTML element, we have a bunch more methods that we can use.

You can set the innerText property of our new div to '👋 hi there' (you can copy the emoji hand from the lesson page or just do a google search), or any other message that you prefer.

[SC]
div.style.color = 'green'
div.style.fontSize = '10rem'
div.style.marginTop = '20vh'

[VO]
And we can style that element, like this. Notice how the css properties are all in camel case and they're all properties of a style object? You'll see this in React, and hopefully the reason for that syntax will make more sense, now that you've done it in vanilla JS.

[SC]
root.appendChild(newDiv)
[VO]
And to add it to the dom, we'll use our root variable, which, since it is assigned to a DOM node, has a method called appendChild(). We can pass our newDiv into that function and voila - if you check your web browser, and you should see our message!

[SC]
check console
[VO]
And if you check the console, you should see that our newDiv is now a child of the root div.

[SC]

[VO]
As I've already said -- on a very basic level, this is how React works, by utilizing the DOM to inject various types of content into a root div.

But React improves our DOM manipulating experience in several really important ways.

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

And the first most important thing that React does isn't the virtual DOM, or JSX or Hooks or any of the fancy and mysterious things you've probably heard about.

The first best most important thing that React does, is it encourages us to write good javascript. It encourages us to write bug-free, modular, reusable code. And how does it do this? Primarily, by making sure that we follow good functional programming principles.

And the first and most important of these is that we organize our user interface into a bunch of small chunks, which React calls components, each of which is a function that returns a single DOM node.

So, in the next video, we're going to talk a little about functions and functional programming and we're going to take this code that we've written and write it as a function. I'll see you there.

# END

[SC]
hi there
[VO]
[SC]
hi there
[VO]
[SC]
hi there
[VO]
[SC]
hi there
[VO]
-- extra stuff, edited out

In the next video, I'll show you how we do it in vanilla javascript, and also say a bit about how React creates and manages the 'virtual DOM'. I'll see you there.

Now, I know that for many of you, this is review material. But, bear with me -- having a good handle on these javascript basics will make React easier to understand and also more fun.

[SC]
hi there
[VO]

But, if you're already pretty confident DOM manipulation, or just want to have the pleasure of figuring this out on your own, here's a little challenge for you: insert some content into that div with the id of root that we already made, -- a simple hello will be enough for now. And, add a little styling, make the text big and colorful. And maybe add an emoji, like I've done here.

[SC]
link to the Document API
[VO]
You can find everything you need to complete this challenge at the MDN documentation for the Document API, which you can see on the screen now. There's also link on the course page.

[SC]
hi there
[VO]

Or, if that seems like to much to handle on your own, just click through to the next few video, where I'll show you my approach. I'll see you there.

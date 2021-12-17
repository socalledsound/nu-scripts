https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

[SC]
DOM graphic here
[VO]
Welcome back. In this video we're going to review what is perhaps the most basic of vanilla javascript basics: the DOM.

[SC]
DOM graphic here
[VO]

the D.O.M. in DOM stands for Document Object Model. And, really, that's just what the DOM is. The Document in of that document object model is is a representation of a web page as an object, and the model of the document object model is an API, or set of rules for altering web pages using a programming language like javascript.

[SC]
DOM graphic here
[VO]
An html page is represented in the DOM as an object named document, which consists tree of nodes.

[SC]
html
[VO]
To better understand the DOM, I want to show you a little magic trick.

I've got a simple HTML page here. As you can see, it has just one div with an id of root, and that div is empty -- there's no text there.

[SC]
rabbit emoji page
[VO]
But if I load it in a web browser... I see an emoji of a rabbit?

How'd that get there?

[SC]

[VO]

If you noticed that this page links to a javascript file and that the answer is the DOM, then you get a gold star.

[SC]

[VO]
Let's take a look at that linked javascript file now, you can see that that script tag leads us to a file named rabbit.js

[SC]

    const root = document.getElementById('root')
    const newDiv = document.createElement('div')
    newDiv.innerText = '🐰'
    newDiv.className = 'rabbit-lg'
    root.appendChild(newDiv)
    console.log(newDiv)
    console.log(document)

[VO]
And in that file we see first, that we get a reference to the div that has an id of root, using a DOM method called getElementById, which will search the document for any element with an id of 'root'.

[SC]
const newDiv = document.createElement('div')
[VO]
Then in the next line I use another DOM method, createElement, which will create any type of HTML element that I specify.

[SC]
newDiv.innerText = '🐰'
[VO]
In the next line, I set the innerText to be a string that has an emoji

[SC]
newDiv.className = 'rabbit-lg'
[VO]
And then I set the className
[SC]
root.appendChild(newDiv)

[VO]
And finally I use the appendChild method. Notice how I'm using that method on the root, not on the newDiv, and I'm passing in the newDiv, so the newDiv will become a child of the root div, which means it will apear in the DOM and thus, on the web page.

[SC]
checking
console.log(newDiv)
[VO]
I can console.log the newDiv and see,

[SC]
checking the console
[VO]
in my console, that it's an HTML element with a classname and the text of rabbit emoji.

[SC]
console.log(document)

[VO]
And I can console.log the entire document

[SC]
checking the console
[VO]
and see that, if I drill down through the different layers, that new div is indeed inside the root div.

[SC]
DOM manipulation
[VO]

And that's how vanilla DOM manipulation works. And did you notice? It's highly imperative. Every single change that I made was made with very explicit code, line by line. On the plus side: it wasn't too hard to think through, it's easy to see what's happening, but can you imagine coding a whole page of emojis in this way? Or even, say, five emojis?

[SC]

[VO]
In the next video, we're going to pull a rabbit out of our hat, and we're going to try to do it declaratively. In other words, we're going to write a function that will take this string of emojis that I got from emojisaurus, and render it to the screen, and we're going to try to do it at least a little bit declaratively.

# end

# old version below, too long and not as good

If I add a script tag and log the document to the console, I can get a different look at this web page.

[SC]

[VO]
In the console, we can see that same page represented as a data object with keys for each of the elements on the page: doctype, head, body, body, and script. And if we click through to inspect the body.children key, we can see that our div is stored there, as a child node of the body.

[SC]

[VO]
The document API defines methods for querying and creating nodes. You can see that my div, here, has an id of root.

[SC]

const root = document.getElementById('root)

[VO]
I can find that node and bring it in to my javascript code using the method getElementByID, like this. Here, I'm storing a reference to that node -- which refers to the div element in my HTML -- in a variable.

[SC]

[VO]
We can also create new elements with document.createElement, we just have to specify the type of element that we want to create.

[SC]

[VO]
Then, we can modify that element using the same properties I showed you above...

[SC]

[VO]

and finally, we can add that new div as a child of the root div with root.appendChild()

[SC]

[VO]
Now, if we inspect our root again, we'll see that it has a new child node, and if we look in the browser, we'll see that we've added

[SC]

[VO]
The ability to modify the DOM in this way means that I can create web pages with javascript. It's what makes libraries like React possible, and it means that I can build any web page that I want, as long as I can create a set of instructions for the web browser.

It's one of the things that makes learning javascript so fun --

[SC]

[VO]

To do really fun things with the DOM -- and become great React developers -- we'll need to get comfortable with some slightly more advanced javascript syntax and methods, which we'll do in coming videos.

[SC]

[VO]
But first, let's get a little practice with the DOM.

In the next video, I want you to build this list of messages. These are a few of the AI-generated candy hearts messages. That I mentioned in the intro to this section. Can you do it on your own, using the things you learned in this video? If so, go ahead and do it now.

I'll be back in the next video to code along with you.

# maybe cut this chunk out or leave it out for now

[SC]

[VO]
Using the DOM, and some simple css styling, I can create a circle.

[SC]

[VO]

...and with the techniques that you'll learn in the next few videos, I can just as easily fill the page with circles, with just a few lines of code!

By the end of this week, you should have a solid understanding of how to create these sorts of interfaces, with React and without react.

There are several videos in this weeks further resources book, for those of you who are interested to check out after you've finished all of this week's material.

#

[SC]

[VO]

For now, we're going to stick to more practical things, like displaying lists of messages. In the next video, we'll get a little practice with DOM manipulation. We'll display a few messages, and give them a little styling. I'll see you there.

[SC]
[VO]

[SC]
root.innerText = 'hello, I love you'
[VO]
I can use the innerText property to change the text

[SC]
[VO]
And I can use it's style property to change it's styling. Notice that the css properties are now camelCase, and their values are inside quotes.

[SC]
[VO]
And I can add or change class names with the className property. Here, I've colored the text red by adding a class of 'red', that refers to a style that I declared in a style tag on my html page.

[SC]

[SC]
[VO]

[SC]

const document = {
body: {

    }

}

[VO]
As the name DOM implies, those nodes are stored as keys on the Document object.

[SC]
Document
[VO]
The DOM includes both the Document, which is the content of a web page

[SC]
Window
[VO]
As well as the Window, which is the browser window that displays the web page.

and it's the very first thing we need to know about in order to make a javascript application, because in order to create and modify web pages with javascript, we use the DOM, or more specifically, we use a variety of web APIs that are all bundled together as part of the DOM.

[SC]
Document API graphic here

[VO]

The Document part of the DOM is, basically, an abstract representation of any web page that's loaded in a web browser.

We can access that Document from our javascript code and we can see the Document in the developer tools of our browser.

# too verbose

The DOM is an API, an Application Programming Interface, or set of rules which gives programming languages access to the structure and content of web pages. Since we usually use javascript-enabled web browsers to access html documents, javascript is the language which most people use to manipulate the DOM, and the content that the DOM represents is usually HTML, but theoretically, you could use the DOM to manipulate many different types of documents using many different languages. At it's base, it's just a set of rules for programmatically altering data.

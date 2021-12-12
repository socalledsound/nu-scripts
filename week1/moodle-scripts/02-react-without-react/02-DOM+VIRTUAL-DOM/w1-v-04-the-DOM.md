https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

[SC]
DOM graphic here
[VO]
Welcome back. We're going to start with what is perhaps the most basic of javascript basics: the DOM.

[SC]
DOM graphic here
[VO]

DOM is short for the Document Object Model. The DOM is an API, an Application Programming Interface, or set of rules which gives programming languages access to the structure and content of web pages. Since we usually use javascript-enabled web browsers to access html documents, javascript is the language which most people use to manipulate the DOM, and the content that the DOM represents is usually HTML, but theoretically, you could use the DOM to manipulate many different types of documents using many different languages. At it's base, it's just a set of rules for programmatically altering data.

[SC]

[VO]
An html page is represented in the DOM as an object named document, which consists tree of nodes.

[SC]

[VO]
You can use the DOM and it's Document interface, to inspect or alter the content that appears in a web browser. This is what lets us build web applications with libraries like React -- we use the DOM to create web pages in javascript.

[SC]

[VO]
To better understand the DOM and the document, let's inspect a simple html page using javascript. Here you can see I've got an html page that just has one div that says 'hi there'. If I load it in a web browser, we'll see what we expect to see, which is the text 'hi there'.

[SC]

<script>
console.log(document)
</script>

[VO]
We can use the Document interface to inspect or alter the nodes on that tree.
I can console.log the document using javascript, an in my console, I see the document object model, the representation of my web page as a data object. There I can see that it has properties for doctype, head, body, body, and script....in other words, everyhting that I've written on that HTML document. And if we click through to inspect the body.children key, we can see that our div is stored there, as a child node of the body.

[SC]

[VO]
The document API defines methods for querying and creating nodes. You can see that my div, here, has an id of root.

[SC]

const root = document.getElementById('root)

[VO]
I can find that node and bring it in to my javascript code using the method getElementByID, like this. Here, I'm storing a reference to that node in a variable.

[SC]

    <script>
        console.log(document)
        const root = document.getElementById('root')
        console.log(root)
    </script>

[VO]
If I log the value of that variable, you can see that I get something that looks like an html element.

[SC]

[VO]
If I log the type of that variable, you can see that my html element is an object with keys. We can use those keys to alter that object, and thus, our web page.

[SC]
root.innerText = 'hello, I love you'
[VO]
I can use the innerText property to change the text

[SC]
[VO]
I can use the style property to change the styling

[SC]
[VO]
And I can add or change class names with the className property.

Here, I've made a circle class in my css, and then

[SC]

[VO]
We can also create new elements with document.createElement, we just have to specify the type of element that we want to create.

[SC]

[VO]
Then, we can modify that element using the properties I showed you above...

[SC]

[VO]

and finally, add it to the DOM, with another method that every element has: appendChild()

[SC]

[VO]
Now, if we inspect our root again, we'll see that it has

[SC]

[VO]
The ability to modify the DOM in this way means that I can create web pages with javascript. It's what makes libraries like React possible, and it means that I can build any web page that I want, as long as I can create a set of instructions for the web browser.

It's one of the things that makes learning javascript so fun --

[SC]

[VO]

To do really fun things with the DOM -- and become great React developers -- we'll need to get comfortable with some more advanced javascript syntax and methods.

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

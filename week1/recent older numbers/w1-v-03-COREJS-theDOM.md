## w1 video 3 react without react 1: CORE JS - reviewing DOM manipulation -- 7.5 mins?

#### FROM OUTLINE:

    PROJECT: hi there : https://github.com/socalledsound/hi-without-react
    this will be at moodle
    (talk them through this download onscreen)
    JS: DOM manipulation
        -- look at the index.html.
        -- getElement, createElement, element properties, appendChild
        -- we use camelCase when manipulating DOM properties with javascript
        -- React provides us with a thing called JSX, which we'll see in a bit, which is basically a shorthand for writing this kind of code
        -- React also has an important idea called the virtual DOM, which we'll explore in a bit.

react 2013 what was before?

- html css js

####

[SC]

[VO]

[SC]
[VO]

Welcome back.

In the last video I gave a very high level look at what React is. I used a lot of big and somewhat confusing ideas, like 'declarative', 'composing with functions' and 'the virtual dom'.

These are important exciting ideas, but if you're relatively new to javascript, they can be a little confusing, and maybe even end up making React a little more confusing than it needs to be.

So in these next few videos, I'm going to try to simplify these terms and ideas a little and I'm going to show you how to make a basic javascript web page that's a lot like a react app, but -- without React! I call it 'react without react'.

This will also give us a chance to make sure that we understand the important javascript concepts that we need to know in order to be great React developers, things like arrow functions, declarative array methods, template literals and object destructuring.

<!-- These videos will mostly be a review - hopefully you already know what the DOM is and you feel relatively comfortable manipulating it.

But as we review, I'll also introduce some things that might be new to you, like arrow functions, declarative array methods, template literals and object destructuring. -->

By showing you how to make something a little bit like React without using any of the React magic, I hope to show you that React magic mostly isn't magic at all, it's basically just javascript.

Now, let's get started.

[SC]

[VO]
We're going to make the page you see here.

And to do it, we're going to use DOM manipulation.

[SC]
the virtual DOM
[VO]
Remember how I said that one of the key advantages that React gives us is a 'virtual DOM'? We should probably try to understand what the heck that means, right?

But first, let's make sure we understand the non-virtual DOM.

[SC]
DOM graphic here
[VO]

Now, in order to make any kind of javascript applications, the first thing we need to know about is how to build a web page using javascript.

Meaning, we use the DOM -- the Document Object Model and its Document API -- to create web pages.

[SC]
Document API graphic here

[VO]

DOM is short for 'Document Object Model', and what it refers to is the Document which is, basically, an abstract representation of any web page that's loaded in a web browser.

MORE HERE

[SC]

opening up vs code

[VO]

Now, this has all been pretty abstract, so let's make it more tangible by writing a little code.

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

[VO]

[SC]

[VO]

But how do we get things into that div?

We use the DOM. In the next video, I'll show you how. See you there.

# END

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

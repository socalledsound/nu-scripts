https://reactjs.org/docs/react-without-jsx.html

[SC]
'🐰'
[VO]
In the last video I talked a bit about DOM manipulation, and I showed you how to render this rabbit to the screen, imperatively.

In this video, I want you to code along with me as we try to do more or less the same thing, but in a more declarative style.

# can i just supply them the basic file as a stub instead??

[SC]

opening up vs code

[VO]

Open up your vscode editor and go the file menu and select new window, or just use the key command command shift N to make a new Window in VS Code.

[SC]
making a new folder
[VO]
Then, click 'open' like I am doing here, but instead of opening a folder, let's go ahead and make a new one, on the Desktop, like I'm doing here.

[SC]
show the file browser and the folder name
[VO]
After you do this, you should see the title of your folder in all caps in the file browser, as I'm showing here.

This might seem like a lot of work to make a new file, but I always, always, always take the time to make sure that I make a new folder when I'm starting a new project, so that I can be sure exactly where my files are.

Project organization isn't very exciting but it is super important! And it will become even more important as you start to build bigger applications.

It's not uncommon for React projects to have hundreds or even thousands of javascript files, and you have to keep those organized!

So now is as good a time as any to start practicing the good, simple habits which will serve you well in your career.

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
.emoji-lg{
font-size: 10rem;
text-align: center;
margin-top: 2rem;
}

        .emoji-sm{
            font-size: 2rem;
            padding: 0.4rem;
        }

        .app-container{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            width: 80vw;
            margin: 10vw;
        }

[VO]
Now, let's add a style tag and in there we'll write a few small css classes that we're going to use.

describe this

[SC]

[VO]
And down below, let's also add a script tag with a src of index.js, and then make a new javascript file called index.js

[SC]

[VO]
Ok, now we're ready to get started with some DOM manipulation.

To start, let's just do this imperatively one time, like I did in the last video.

# start with a stub that includes the DOM manipulation from the last video.

[SC]

    const root = document.getElementById('root')
    const newDiv = document.createElement('div')
    newDiv.innerText = '🐰'
    newDiv.className = 'emoji-lg'
    console.log(newDiv)
    root.appendChild(newDiv)

[VO]
So, we've got this very imperative way of working with the DOM, where we create a new div and assign it to a variable, modify its properties and then append it to a target node. Which works fine.

[SC]

    const newDiv2 = document.createElement('div')
    newDiv2.innerText = '🎩'
    newDiv2.className = 'emoji-lg'
    console.log(newDiv2)
    root.appendChild(newDiv2)

[VO]
But what about when we want to add another emoji? One very imperative and very lame approach would be to go through all of those steps again, with a new variable name and a new text. But this has what we commonly call 'code smell'. We're repeating the same steps again. And if we want to add 5 or a hundred divs to this page, this code will get downright stanky.

[SC]

    const createDiv = (text, className) => {
        const div = document.createElement('div')
        div.innerText = text
        div.className = className
        return div
    }

[VO]
Much better, for starters, is to write a function. We'll call it createDiv, and it will take in a text and a className and it will return a div. This is better! For one thing, the const that we declare is no longer in the global scope, and the side effect that we perform is

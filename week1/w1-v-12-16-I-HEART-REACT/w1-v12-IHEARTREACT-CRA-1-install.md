# video 6 CRA 3 mins

##### (hearts video 1)

    CRA.
    - heartz
    let's take a quick tour of what got installed
    and mention that there are templates
    eg --template redux

### (is it ok to use npx?)

[SC]

[VO]

Hello again. Now that we've reviewed the idea of DOM manipulation using javascript and set up our environment, we're ready to actually get started building react applications.

[SC]
show the nucampsite
[VO]
The main app that we're going to build will be a fully featured react site with multiple pages and animations. You can see one page of it here.

[SC]

[VO]
But, along the way, we'll also build several smaller applications. Our goal is to give you a lot of practice building React applications, so that you feel comfortable building your own!

[SC]

[VO]
And to keep things manageable, our first app is going to be small, and simple. You can see it here.

[SC]
[VO]
Not too sophisticated, I know, but I think it will be a great way to get comfortable with the basic concepts of React. Then, we'll get started building more complicated things.

[SC]

[VO]
In the documentation for React, you can see that they recommend that beginners start by using the tool create-react-app, which is available via the npm repository that we discussed previously.

Create-react-app is tool that does just what it says it does -- it creates a react app. Or, it creates an empty template and an excellent set of tools that you can use to build your react app.

Let's run it now, and see what it does.

[SC]

[VO]

[SC]

[VO]

###

need to make sure this part is platform inclusive
do we need a video on the terminal or are they familiar with it?

##

Open your terminal. type cd Desktop and then enter to change directories into your Desktop folder. Make sure you have a good strong internet connect, then type the command

npx create-react-app heartz

and hit enter to run it. Here, we're using the package runner called npx.

when we run it, it will check our system to see if the create-react-app tool is installed, and if it isn't (hopefully it isn't), then it will download the latest version and run it.

Then, we give the name of the app that we want to build.

###

[SC]
terminal doing its magic
[VO]
You should see your terminal spring to life, like mine is here. create-react-app is initializing a node project, installing and setting up webpack and babel, which we'll use to make sure that our react code is readable in a web browser, along with some other helpful tools.

Create react app produces an optimized and tested toolchain for you, so you don't have to think about any of these things.

##### but if you want to learn more, there are some videos in the appendix..)

[SC]
cra finished
[VO]

When it' done running, if all went well, you should see a message like the one here.

If you DON'T get this message, make sure you read and pay attention to the message you got.

[SC]

[VO]

Sometimes when I try to run this while I'm on a coffee shop wifi, I get an error message like the one shown here, which basically just means that there was an error connecting, create-react-app is pretty bandwidth intensive.

Try running it again, and if that fails, then head over to the React forums and share your error message.

If it succeeded then, fantastic, you just made your first react app!

Now, go ahead and follow the instructions which create react app gives you as one final parting gift.

[SC]

[VO]

First, cd into the directory that was created, which should be called 'heartzzz'.

[SC]
[VO]
Then, run yarn start, stand back, and see your new react app in all of its glory.

[SC]

React app

[VO]
If all went according to plan, you should see the basic react template, just like you can see here, with a react logo.

Since we've already explored DOM manipulation, I hope you have some vague idea of what's going on here -- React is using javascript to display a message in your browser.

But it's a little more complicated than what we did before, as you'll see in the next video, where we'll take a tour of the code that got installed when we ran create-react-app. I'll see you there.

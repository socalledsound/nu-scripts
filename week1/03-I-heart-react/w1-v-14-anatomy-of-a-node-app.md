# w1-v12 - CRA2-anatomy of a react app

https://reactjs.org/docs/strict-mode.html

https://reactjs.org/docs/jsx-in-depth.html

[SC]
react web page

[VO]
In the last video, we ran create react app and we got the stub of a web site that you see here.

[SC]

    yarn start

[VO]
Hopefully you are able to run yarn start and see this page. If not, then there was an issue with your installation.

[SC]

[VO]
If so, there's a section at the bottom of this week's material called Troubleshooting that might be able to help troubleshoot some common issues.

[WORKONTHIS]
[SC]

[VO]

[SC]

[VO]

[SC]

[VO]

While this isn't much of a website, it's actually a minor miracle

Create React app exists primarily to set us up with a solid toolchain./

While similar in some ways to the web site we built in the intro, it is fundamentally a different beast.

You see, one of the really great things about developing web apps with React is, honestly, create-react-app, which takes nearly all of the burden of setting up a solid development environment off of your shoulders.

Behind the scenes, there are literally hundreds of thousands

[SC]

[VO]
So let's take a quick tour of the files that got installed.

Let's start with our new package.json file.

The package.json file is the central hub of every node project. When we ran CRA it initialized a new node project, installed React and all of its dependencies and configured our project to use webpack and babel.

If you look at the package.json, you'll see React and react-dom listed as dependencies there, as well as several testing libraries, and a library called react-scripts.

These libraries and many more were installed by CRA into our node_modules folder, and left notes on the exact versions of the installed libraries in a file called yarn.lock. If you open yarn.lock, you can see those notes, and all of the libraries, many of which aren't listed on the package.json, because they were installed by the react-scripts library.

[SC]

[VO]
If we go into our node_modules folder, we can actually see all of those libraries, including the react-scripts library, which, as you can see, has it's OWN package.json, that lists many more dependencies, including babel, webpack and a whole bunch of build tools.

This stuff can get pretty complicated, and it's generally best as a beginner -- and even as a more advanced developer, to just let CRA take care of this stuff for you. But if you want to learn more about Node, webpack and babel, there's an optional video in the extra videos for this unit.

For now, it's just important to know that these are some of the key tools in our javascript toolchain, and CRA took care of setting them up for us.

[SC]

[VO]
Now, one thing about all of these libraries, particularly if you are on a shoddy internet connection, is that they can fail to install, or get corrupted somewhere along the way.

So if your React project isn't working properly, the first best thing you can do is to simply reinstall the libraries.

[SC]

[VO]
Let's do that now. Go ahead and delete your node_modules folder, as I'm doing now. Then, go to your terminal and run yarn install and....magic! They're reinstalled. This is the beauty of the yarn package manager!

[SC]

[VO]
Just above your package.json is a file called .gitignore, which lists all of the files and folders that you want git to ignore. Notice that our node_modules folder is listed there -- that's because we don't want or need to track any of those libraries in our git file and we don't want to push them to github -- the node_modules folder is a lot of code! It's by far the biggest folder in our project right now, around 150MB, whereas our code is only a few kilobytes.

[SC]
downloading from github and yarn installing
[VO]

When we download a project from github, we just have to run yarn install and...presto, just like we just did, the libraries will be fetched from the npm registry.

And I want to say, this is one great reason why it's a great idea to get in the habit of using git and github -- because it makes it easy to share your code with your peers, or to get help if you get stuck. You can just send a link to your github repo to your instructor, and they'll be able to download your site and be much better able to help you.

[SC]
public folder

[VO]
Now let's take a peek in the public folder.

The main thing to notice here is an index.html file. This is the file that's being served by our local host when we run yarn start. Let's open it up.

[SC]
showing the root div
[VO]

The main thing to notice here is that there's a div with an id of root. Look familiar?

Just like we did before, React will be inserting our React app into this root div.

And can you guess where the javascript is?

[SC]
source folder
[VO]
Yep. That's right -- in the src folder. Let's go there now.

https://reactjs.org/docs/faq-structure.html
https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/
https://redux.js.org/faq/code-structure

[SC]
STRUCTURING A REACT APP
[VO]
Welcome back. In this video I want to talk a little bit about some of the possible ways you can structure a React app, and also introduce you to the structure that we'll use to build the nucampsite that we'll be building over the next few weeks.

[SC]
there are many ways to structure a react app
[VO]
And the first best thing I can say is about the very best way to structure a react app is.... there really isn't one.

How you set up your file structure will have a lot to do with what kind of app you're building, and it will probably evolve and change over time as your needs and abilities change, and as that project that you're working on changes and evolves.

It's perfectly ok and even, I would say, unavoidable, to end up completely refactoring a project that you're working on as that project evolves.

[SC]

[VO]
But, it's often best not to try to reinvent the wheel. When in doubt, imitate others. There are some resources at the bottom of this page if you're interested to see some great examples of React projects.

[SC]

[VO]
But there a few important guidelines that you can remember as you create your own react apps.
And the first most important rule, try not to mess with what create-react-app gave you. Or, at least, try not to mess with what's outside the src folder. Generally, everything you do to build your React app should be done inside the src folder.

[SC]
update README.md

[VO]
Even as a seasoned developer, there is rarely any good reason to add files or folders or make modifications to the file structure outside of the src folder, other than to maybe update the README.md with your own personal information. If you do modify the files outside of the src folder, be very careful, you run the risk of breaking your app.

# trim this up

[SC]
[VO]
There are of course, a few exceptions to this. For one, we'll be installing some packages, like redux, react-spring, and bootstrap, using the terminal. That process will add libraries to the node_modules folder and some information to the package.json.

[SC]
[VO]
And you may be using git to provide version control for your project, which will allow you to share your code with your instructor, and ultimately make it a lot easier to publish your project.

[SC]

[VO]
But other than those things, it's generally best to leave everything outside of the src folder alone, unless you have a problem.

[SC]
show these things
[VO]
It's also important that you leave the index.js, index.css, App.js and App.css right where they are, at the root level of the src directory.

[SC]
a simple app file
[VO]
In a simple, fun one-off project, it's perfectly ok to write all of your code in the App.js file, and not bother with any imports or exports. You can write all of your components on a single page if you want to.

[SC]
a long app file
[VO]
But fairly quickly, you'll likely find that the amount of code on that page gets overwhelming. At that point, it's time to think about organizing the files in a way that makes sense.

[SC]

[VO]
One thing that most developers do is to have a folder for assets like images or logos.

[SC]

[VO]
And another folder for the re-usable components that you'll write. You saw that we did this with our Hearts app.

[SC]

[VO]
You may also have a file or even a folder for utility functions, like the getRandomColor function that we wrote earlier this week.

[SC]

[VO]
Once we start using hooks, you may find that you want a seperate folder for hooks.

[SC]

[VO]
And, a pages folder can be a nice place to put the larger container functions that structure your app into pages.

[SC]

[VO]

One thing that I think really helps is to lean on the work of other developers. People that have been developing React sites for a while usually have good reasons for doing what they do. There are a number of great resources for seeing how other people build React sites, and a few are listed at the bottom of this page.

[SC]

[VO]
Since the nucampsite will be built using redux, we've decided to organize our project by staying in the way that is recommended by the redux team, who are some of the best and brightest react developers out there.

[SC]

[VO]
We're going to keep all of our app's data in a folder called app.

Inside that folder, we'll have a folder for assets, which is where we'll keep our images, and another folder called shared, which will contain the rest of the data, stored as javascript objects, that will form the core content of our app.

Keeping this data seperate will help us maintain seperation between the side-effects laden user interface, which is most of our React app, and the actual data and logic of our app.

One of the great advantages of this, as we've already discussed, is that if sometime later we want to keep our data but change it's presentation, we can easily do that.

We also know that this is a mutation-free zone. We want to make sure that we keep this data intact!

[SC]

[VO]
Then, we'll have a folder called components, for generalized chunks of code that can be used in multiple places in our App, or even re-used in other projects.

A good example of a component that will be re-used throughout an app, or even, with a few changes, used in multiple different apps, is a Header.

[SC]

[VO]
Next, we'll have a folder called 'features'. Features are just what they sound like, logical slices of a web app. For instance, if we had a shopping cart, we could put all of the various components that we need to build that shopping cart into a folder called cart inside our features folder.

[SC]

[VO]
But...I can hear you say....what about that components folder? I thought that's where the components go?

And to that I say...fair enough! It's sometimes hard to know where something should go, and you might end up moving it as you build your site.

But, generally, the components folder is for components that might get used in multiple features, or even multiple sites, small bits of re-usable code that aren't at all specific.

The features folder will be for components. That are specific to the implementation of a specific user interface element. In the next video, we'll set up the file structure of our nucamp app, and I think that these distinctions will make more sense after we do that.

[SC]

[VO]
We'll also have a pages folder, which will be a place for the containers that will structure our app. Generally pages will fill up most of the web browser,a nd may be composed of one or more features, along with other consistent user interface components, like a Header.

[SC]

[VO]
And, finally, we'll have a folder called utils, which will contain some utilities, similar to our getRandomColor utility. This utilities won't be components, they'll just be chunks of javascript that we can use in this project and, oftentimes, re-use in other projects. For instance, if we have a function that helps us validate a user login, we can put that in here.

[SC]

[VO]
Now, as I said, this is just one way of structuring a React app, and our choice to use this is informed by the knowledge that we'll be using redux, and the redux team recommends this approach. I've used this approach in many web apps myself and I can say, I like it a lot and find it incredibly useful, and I hope you will, too.

But there are a lot of opinions out there on how best to structure React apps and over time, hopefully, you'll also develop your own strong opinions!

[SC]

[VO]
In the next video, will actually build out the structure that I just laid out, we'll create and configure our nucampsite to get you ready for workshop. I'll see you there.

https://reactjs.org/docs/faq-structure.html
https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/
https://redux.js.org/faq/code-structure

[SC]
STRUCTURING A REACT APP
[VO]
Hi there and welcome back. In this video I want to talk a little bit about some of the possible ways you can structure a React app, and also introduce you to the structure that we'll use to build the nucampsite that we'll be building over the next few weeks.

[SC]
there are many ways to structure a react app
[VO]
And the first best thing I can say is, there's really no right or wrong way.

[SC]

[VO]
But one very important thing you should remember is: try not to mess with what create-react-app gave you. Or, at least, try not to mess with what's outside the src folder. Generally, everything you do to build your React app should be done inside the src folder.

[SC]

[VO]
There are a few exceptions to this, of course. If you're using git, or installing packages using yarn or npm, you'll do this in the root directory of your project, in other words, in the enclosing folder that contains the package.json and everything else in your app.

[SC]
update README.md

[VO]
And if you're going to push your project to github, you'll probably want to update the README.md documnent that will be shown on the page for your github repo.

[SC]

[VO]
But other than that, you will rarely have any good reason, particularly as a beginner, to do anything outside the src folder that will hold all of your javascript and css files.

[SC]
show these things
[VO]
Inside the src folder, t's also important that you leave the index.js, index.css, App.js and App.css right where they are, at the root level of the src directory.

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
In our heart react project you saw that we had a folder for components and another one for utility functions. It's a great idea to get in the habit of keeping folders like these in your projects, and also a great idea to try to think about writing your components and utility functions in such a way that they will be re-usable in other projects!

[SC]

[VO]

One thing that I think really helps is to lean on the work of other developers. People that have been developing React sites for a while usually have good reasons for doing what they do. There are a number of great resources for seeing how other people build React sites, and a few are listed at the bottom of this page.

[SC]

[VO]
Since the nucampsite will be built using redux, we've decided to organize our project in the way that is recommended by the redux team, who are some of the best and brightest react developers out there.

[SC]

[VO]
We're going to keep all of our app's data in a folder called app.

Inside that folder, we'll have a folder for assets, which is where we'll keep our images, and another folder called shared, which will contain the rest of the data, stored as javascript objects, that will form the core content of our app.

Keeping this data seperate will help us maintain seperation between the side-effects laden user interface, which is most of our React app, and the actual data and logic of our app.

One of the great advantages of this, as we've already discussed, is that if sometime later we want to keep our data but change it's presentation, we can easily do that.

We also know that this is a mutation-free zone. We want to make sure that we keep this data intact!

[SC]

[VO]
Then, we'll have a folder called components, for those generalized bits of code that can be used in multiple places in our App, or even re-used in other projects.

A good example of a component that will be re-used throughout an app, or even, with a few changes, used in multiple different apps, is a Header.

[SC]

[VO]
Next, we'll have a folder called 'features'. Features are just what they sound like, logical slices of a web app.

[SC]

[VO]
For instance, if we had a shopping cart, we could put all of the various components and logic that we need to build that shopping cart into a folder called cart inside our features folder.

[SC]

[VO]
If components are like base-level atoms that we can use to build larger structures, features are a step up from that. Keeping all of the code of a feature together really helps with the mental load of trying to remember where things are and how they fit together.

[SC]

[VO]
And finally, at the highest level of organization, we'll have a folder called pages, where we'll keep larger view containers.

These are just like what they sound like -- entire pages. A page will generally use multiple components and maybe even multiple features, and generally, it's something that we'll navigate to, by following a link.

[SC]

[VO]
For instance, in our site, we'll have a HomePage, and an AboutPage, and several other pages.

[SC]

[VO]
And, finally, we'll have a folder called utils, which will contain some utilities, similar to our getRandomColor utility. This utilities won't be components, they'll just be chunks of javascript that we can use in this project and, oftentimes, re-use in other projects. We'll put some functions for form validation in here.

[SC]

[VO]
Now, as I said, this is just one way of structuring a React app, and our choice to use this is informed by the knowledge that we'll be using redux, and the redux team recommends this approach. I've used this approach in many web apps myself and I can say, I like it a lot and find it incredibly useful, and I hope you will, too.

But there are a lot of opinions out there on how best to structure React apps and over time, and hopefully, you'll also develop your own strong and well-informed opinions!

[SC]

[VO]
And now the moment of truth has arrived!

In the next video, we'll create our nucampsite app and scaffold the structure that I just laid out.

I'll see you there.

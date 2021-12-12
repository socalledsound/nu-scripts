https://reactjs.org/docs/faq-structure.html
https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/
https://redux.js.org/faq/code-structure

[SC]
STRUCTURING A REACT APP
[VO]
Hi there and welcome back. In this video I want to talk a little bit about some of the possible ways you can structure a React app.

[SC]
there are many ways to structure a react app
[VO]
And the first best thing I can say is, there is no right or wrong way.

The structure you choose will depend on what sort of project you're building, and, most likely, the sort of project that you're building will change, as you build it!

But there are some important guidelines that might help you build better apps. In this video, we'll take a look at a few of those.

[SC]

[VO]
And the first of those is, don't mess with what create-react-app gives you. Generally, everything you do to build your React app should be done inside the src folder.

[SC]
update README.md

[VO]
Even as a seasoned developer, there will rarely a good reason to add files or folders or make modifications to the files structure outside of the src folder, other than to maybe update the README.md with your own personal information. If you do change the files outside of the src folder, be very careful, you run the risk of breaking your app.

[SC]
[VO]
Aside from installing some packages using the terminal, everything that we do in this course will be inside the src folder.

[SC]

[VO]
It's also important that you leave the index.js, App.js and App.css right where they are, at the root level of the src directory.

[SC]

[VO]
In a simple, fun one-off project, you might just write all of your code in the App.js file, and not bother with imports. You can write all of your components right there on that page if you want to.

[SC]

[VO]
But fairly quickly, you'll likely find that the amount of code on that page gets overwhelming. At that point, it's time to think about organizing the files in a way that makes sense.

[SC]

[VO]
There are, as I said, countless ways to do this, and you can also innovate your own methods.

[SC]

[VO]
One thing that most developers do is to have a folder for assets like images or logos.

[SC]

[VO]
And another folder for re-usable components that are shared throughout the app.

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

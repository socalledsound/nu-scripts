#

[SC]

I HEART MAPPING

[VO]
Welcome back.

[SC]
show components
[VO]
In the last video, we talked a bit about this idea of using components to compose web pages and web sites.

[SC]

[VO]
One way to do this

[SC]

[VO]
WE're going to take that simple Heart Component that we previously wrote, and use it to build a whole page full of hearts. If you've been paying attention, it shouldn't be too hard.

[SC]

[VO]
But let's start by refactoring this site a little bit. Right now we've got a bunch of stuff on this App.js file, and it's starting to feel a little cramped and disorganized, so let's start by cleaning this up.

[SC]
highlight source folder selection
[VO]
In your vs code directory, I want you to make sure that the src folder is selected, like this.

[SC]

[VO]

Then, add a folder named assets, like this....

[SC]

[VO]
And another named components.

[SC]

[VO]
Next, we're going to move our svg files in to the assets folder

[SC]
making the files
[VO]
And in our components folder we're going to make a few javascript files, one for our Header component, one for our Heart component, and one for the new component that we'll write in this video, our HeartsList component.

[SC]

[VO]

Next, we'll just copty our Header into Header.js -- and all that we have to add is an export statement. So at the bottom of the file we'll say export default Header

[SC]

[VO]
And then we'll import that into our App component.
[SC]

[VO]
And then we'll do both of those steps with our Heart component, and we should be ready to go with a much more organized situation.

[SC]

[VO]

[SC]

[VO]

[SC]

[VO]
[SC]

[VO]
[SC]

[VO]
[SC]

[VO]

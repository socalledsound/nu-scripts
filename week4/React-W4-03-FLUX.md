minae script:;


FLUX

In its beginnings, React developers tried to use React with the MVC pattern, with React used specifically for the View. 
However, Facebook began to encounter certain issues. They found that MVC did not scale well for a complex, large application like Facebook, which has many thousands of components. 
The main issues were that MVC became unpredictable at this scale, and it was very difficult to add new features, even very small ones, without causing unforeseen problems in other parts of the app. 
This was due to the bi-directional nature of MVC's data flow. You can see in this diagram the kind of complexity that would happen with MVC, and data going every which way. A small change in one part of the app could result in cascading effects that would cause bugs in other parts. 
So the engineers at Facebook came up with a new design pattern, or architecture, that they called Flux. Like MVC, it's an approach for how to structure your code. It can be considered as an evolution of MVC.
The key feature of Flux that sets it apart from MVC is that it has a strictly defined unidirectional data flow. Then instead of model, view, controller, it separates its concerns into Action, Dispatcher, Store, and View. When an Action of some kind enters the system, it goes to the Dispatcher. There's only one central Dispatcher, and it acts as a traffic controller. There can be multiple Stores, and they're all registered with the Dispatcher, and the Dispatcher will route actions to the appropriate stores. Stores are  repositories for the application state and logic. They are similar, though not identical concepts to Models in MVC.  Finally, the View updates whenever the Store says that something has changed. 
Then from the View, another Action could enter the system, due to some user interaction with the UI. The Dispatcher makes sure that once an action enters the system, no other actions are processed until it has finished updating the Store, so cascading effects are prevented and the data integrity is protected.
In the next video you will learn about Redux, which is a popular JavaScript state management library influenced by Flux.
https://facebook.github.io/flux/
https://youtu.be/nYkdrAPrdcw
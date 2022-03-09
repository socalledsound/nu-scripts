minae script/video works, I think?:

THE MVC DESIGN PATTERN

In the software development world, you will often read or hear people mention something called MVC, or one of its variants such as MVVM or MVA. You may also sometimes hear it called the MVC framework, but it's not a framework in the sense that Bootstrap or Angular is a framework. 

Instead, MVC is what's known as a software design pattern. It is not a library, it doesn't consist of any actual code at all. What it is, is a reusable approach for how to structure an application's code. 

The MVC design pattern, was first formally introduced back in the '70s for use with developing user interfaces for  desktop applications. Typically, MVC is not used for the entire application, but for developing the presentation layer of the application, the UI. Since then, it has become very popular in web development as well. 

A key concept of MVC lies in its separation of concerns. The separation of concerns in software development facilitates independent development of different parts of an app, not to mention independent testing and maintenance. With MVC, the presentation layer is divided into three parts: the model, the view, and the controller. 

Briefly, the Model part of MVC is concerned with the application state and logic. 
The View part of MVC is concerned with presenting information to the user.
The Controller part of MVC handles events and mediates between the Model and the View. 

We'll go into more detail about each:
The Model stores the main application logic and data for the front end - think of it as not a database, but the data that's been loaded into the application from the database, and the front-end code that sends requests to and receives data from the database. 
It will also respond to queries from the front end  - such as queries about its state, which usually come from the view. And it will respond to requests to change its state. which come from the controller. It may also be set up to automatically send out notifications to the view or controller when any changes are made to it. 

****

The View renders the model into a form suitable for display, typically a UI element. The view can query the Model directly for information about the application state so that it can adjust itself. 

The Controller receives information from the View, such as if a user submits data through an input element. Then it can process and relay that information to the Model, and instruct the Model to change its state. It can also send instructions to the View to make changes. 

While it's good to know generally about the MVC pattern as a developer, we will actually not be using MVC for our project. React state management is most often handled with a newer design pattern called Flux.  And for our app, we will be using a state management library called Redux, which owes some of its parentage to Flux. Let's discuss Flux next, then you will learn about Redux. 

--- 

##### SC



##### VO


--- 

##### SC



##### VO

--- 

##### SC



##### VO

--- 

##### SC



##### VO

--- 

##### SC



##### VO

--- 

##### SC



##### VO

--- 

##### SC



##### VO

--- 

##### SC



##### VO

--- 

##### SC



##### VO


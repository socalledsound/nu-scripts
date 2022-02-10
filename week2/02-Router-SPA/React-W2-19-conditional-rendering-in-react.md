React-W2-19-conditional-rendering-in-react


---
### SC

conditional rendering in React

### VO

Welcome back.



---
### SC

show comments page with coment form:
 wk4-06-commentsSlice+useDispatch


### VO



In the next exercise, we're going to add a new feature: comments.  As you can see here, ultimately this comments feature will ultimately not only display comments, but also give a visitor a chance to leave a comment about the selected campsite. 


---
### SC

show campsite with no comments -- set comments to null in the code


### VO

But what if a camspite doesn't have any comments at all yet?  

In that case, we may want to display a simple default message that says that there aren't any comments yet.

---
### SC

const currentUser = null;

const Main = () => {

    if(currentUser){
        return (
            <SomethingSpecial />
        )
    } else {
        return (
            <LoginPage />
        )
    }


}

### VO

This is where conditional rendering comes in.  Using if expressions, we can specify that a React component only render certain parts of our UI if certain conditions are met.

Here, you can see we have a variable named currentUser, and it's set to null.

Using an if/else expression, we can check to see if there's a currrentUser -- and if there is, we can show them SomethingSpecial.

If there isn't we'll take them to a login page.


---
### SC

const comments = [];

const Comments = () => {

    if(comments && comments.length > 0){
        return (
             <Col md='5' className='m-1'>
                {
                    comments.map((comment) => {
                        return (
                                <Comment key={comment.id} comment={comment}/>
                        );
                    }) 
                }
                 </Col>
        )
    } else {
        return (
            <Col md='5' className='m-1'>
                <p>there aren't any comments yet</p>
            </Col>
        )
    }


}


### VO

Or if we have an array of comments, we might want to check and make sure, first that it exists and second that it has something in it, which we can do using the logical && operator.  If it does actually exist and has more than zero comments in it, we can render those comments using the map method, and if it doesn't we can just display a message.

---
### SC

const username = 'Sam';

const UserInfo = () => {

        return (
            <Col md='5' className='m-1'>
            {
                username &&
                <p>{username}</p>
            }
            </Col>
        )
    }


### VO
Or, if we only want to display a value if it exists, and don't want to render anything if it doesn't, we can use an INLINE IF with a logical && operator.

Here, you can see that we've got a username variable, and a UserInfo component that will render that userName if it it has a value that isn't falsy.  So if it's set to null or undefined, React will ignore the code that follows it, but if it has a value, React will use that value and render the text to the screen.

---
### SC

Conditional Rendering in React

1. if/else operator
2. inline if with logical &&
3. ternary operator

### VO
Sp you've seen two different ways to conditionally render React components.  

First, you can use an if/else operator to render different UI for different states of your application.

Or, if you only want to return some UI if a certain condition is met, you can simplify the if expression using the logical && operator.

And next week, when we discuss the ternary operator, you'll learn another useful shorthand syntax for conditional rendering.

---
### SC

show comments page again

### VO
In the next exercise, you'll get some practice with conditional rendering as we start to build out this comments feature.


I'll see you there.


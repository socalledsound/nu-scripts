React-W4-17-useDispatch

--- 

##### SC

useDispatch



##### VO

welcome back.

--- 

##### SC

focus arrow on each of these

campsitesSlice
partnersSlice
promotionsSlice



##### VO

In the last few videos you've been updating a lot of slices.  You used createSlice to make a campsitesSlice, a partnersSlice and a promotionsSlice.


--- 

##### SC



##### VO

And then you brought each of those into the store.

--- 

##### SC

const selectMe = (state) => {
    return state.me.data
}


##### VO

And you updated all of your selectors to point at the redux store.

--- 

##### SC

useSelector:
    takes in a selector and provides it with the current state

    const me = useSelector(selectMe);



##### VO

And used the very handy useSelector hook to supply those selectors with the currentState of the redux store.

--- 

##### SC

dispatch(action) => currentState

In redux, we update the current state by dispatching an action


##### VO

But one thing that you HAVEN'T done yet is, update the store from your react application, by dispatch an action.  Remember, in redux, if we want to modify the state that is maintained by the store, we use the dispatch method of the store.  And how do we get that dispatch method?  Can you guess?




--- 

##### SC

React Redux library:

    <Provider store={store }>
        <App />
    </Provider>


    useSelector : hook for selecting pieces of state
    useDispatch : hook for dispatching actions

##### VO

Remember, the react redux library provides us with the Provider, into which we pass our store as a prop. 

And then we can use useSelector hook to select pieces of that state, and useDispatch hook to dispatch actions.


--- 

##### SC

    import { useDispatch } from 'react-redux';


##### VO

When we use the useDispatch hook, we'll first import it, along with an action that we want to dispatch.



--- 

##### SC

    const dispatch = useDispatch();

##### VO
And then, by convention, we'll create an aptly named variable named dispatch and set it equal to the return value of useDispatch.


--- 

##### SC

    const dispatch = useDispatch();
    ....
    dispatch(myAction)

##### VO

This step isn't strictly necessary, but it's a cleaner syntax, and it means that when we want to dispatch an action we can just call our dispatch variable and pass in an action that we want to dispatch.



--- 

##### SC

    useDispatch()(myAction)

##### VO

Or if we want to really show off how much we know about functional programming, we can just remember that useDispatch RETURNS the dispatch function, and directly invoke it.  But I really don't recommend that!  People will be confused and probably dislike you.


--- 

##### SC

    const dispatch = useDispatch();
    ....
    dispatch(myAction)

##### VO

Much better is the standard syntax.

--- 

##### SC

focus arrow/outline follows the text

            import { useState } from 'react';
            import { useDispatch } from 'react-redux';
            import { Formik, Field, Form, ErrorMessage } from 'formik';
            import {
                Button,
                Modal,
                ModalHeader,
                ModalBody,
                Label,
                FormGroup,
            } from 'reactstrap';
            import { validateComments } from '../../utils/validateComments';
            import { addComment } from './commentsSlice';

            const CommentForm = ({ campsiteId }) => {
                const [isModalOpen, setIsModalOpen] = useState(false);
            
                const dispatch = useDispatch();

                const toggleModal = () => {
                    setIsModalOpen(!isModalOpen);
                };

                const handleSubmit = (values) => {
                    const payload = {
                        campsiteId: +campsiteId, // could use parseInt here instead?
                        rating: values.rating,
                        author: values.author,
                        text: values.commentText,
                        date: new Date(Date.now()).toISOString(),
                    };
                    dispatch(addComment(payload));
                    setIsModalOpen(false);
                };

                return (
                    <>
                        <Button outline onClick={toggleModal}>
                            <i className='fa fa-pencil fa-lg' /> Add Comment
                        </Button>
                        <Modal isOpen={isModalOpen} toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>Add Comment</ModalHeader>
                            <ModalBody>
                            <Formik
                                    initialValues={{
                                        rating: undefined,
                                        author: '',
                                        commentText: '',
                                    }}
                                    onSubmit={handleSubmit}
                                    validate={validateComments}
                                >
                                    <Form>
                                        <FormGroup>
                                            <Label htmlFor='rating'>Rating</Label>
                                            <Field
                                                name='rating'
                                                as='select'
                                                className='form-control'
                                            >
                                                <option>Select...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Field>
                                            <ErrorMessage name='rating'>
                                                {(msg) => (
                                                    <p className='text-danger'>{msg}</p>
                                                )}
                                            </ErrorMessage>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='author'>Your Name</Label>
                                            <Field
                                                name='author'
                                                placeholder='Your Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='author'>
                                                {(msg) => (
                                                    <p className='text-danger'>{msg}</p>
                                                )}
                                            </ErrorMessage>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='commentText'>Comment</Label>
                                            <Field
                                                name='commentText'
                                                as='textarea'
                                                rows='12'
                                                className='form-control'
                                            />
                                        </FormGroup>
                                        <Button type='submit' color='primary'>
                                            Submit
                                        </Button>
                                    </Form>
                                </Formik>
                            </ModalBody>
                        </Modal>
                    </>
                );
            }

            export default CommentForm



##### VO

In the next video, you'll get some practice with useDispatch.

We'll start by importing it into our CommentForm, 



##### SC

focus outline around dispatch, arrow on the payload at approproiate moment

       const handleSubmit = (values) => {
        const payload = {
            campsiteId: +campsiteId, // could use parseInt here instead?
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date(Date.now()).toISOString(),
        };
        dispatch(addComment(payload));
        setIsModalOpen(false);
    };

##### VO

and then we'll use it to dispatch an action, WITH A PAYLOAD, from our handleSubmit function.


--- 

##### SC

    const commentsSlice = createSlice({
        name: 'comments',
        initialState,
        reducers: {
            addComment: (state, action) => {
                console.log(action.payload);
                console.log(state.data);
                const newComment = {
                    id: state.data.length + 1,
                    ...action.payload
                }
                // state.data.push(newComment);
                state.data.concat([newComment]);
            },
        },
    })

##### VO

Then we'll create our commentsSlice, and when we do we'll add a case reducer function to handle this action.....


##### SC

export const { addComment } = commentsSlice.actions;

##### VO

And then we'll export the action from our commentsSlice.....

--- 

##### SC
focus on

    import { addComment } from './commentsSlice';

in CommentForm.js

##### VO

...and finally, we'll bring that action in to our CommentForm so that we can succecssfully dispatch it.



--- 

##### SC

    export const commentsReducer = commentsSlice.reducer;

    export const { addComment } = commentsSlice.actions;

    export const selectCommentsByCampsiteId = (campsiteId) => state => state.comments.data.filter(comment => comment.campsiteId === parseInt(campsiteId));


##### VO

And of course, we'll also export our reducer and update our selectors, as we've done with our other slices, and we'll add that reducer to our store and useSelector in our Comments component and, after all of that....

--- 

##### SC

show adding comment to nucampsite

##### VO

We will be able to add comments to our comments page!

In other words, we're finally starting to get to the fun part of react and redux, where we dispatch actions to our store and the view gets updated.

It'll be a little bit of work, but I think it will also be a little bit of fun, so, when you're ready, join me there.



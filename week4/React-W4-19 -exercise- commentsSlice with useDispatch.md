
    React-W4-15 - commentsSlice with useDispatch
    
    1. import COMMENTS
    2. set COMMENTS as data key on initialState
    3. create commentsSlice with addComment action case
    4. export commentsReducer + addCommment action
    5. create and export selectCommentsByCampsiteID selector
    6. add commentsReducer to store
    7. use useSelector in Comments
    8. add useDispatch to CommentForm and dispatch the new comment
    9. add date to new comment before dispatch in CommentForm


commentsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

const initialState = {
    data: COMMENTS,
}


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

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => state => state.comments.data.filter(comment => comment.campsiteId === parseInt(campsiteId));


CommentForm.js:
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

import React,{useState} from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component' ;
import './add.css';

const Add = ({ show, handleClose, addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        Title:"",
        rating:1,
        description:"",
        Poster:""
    })
    const onStarClick = (nextValue) => {
        setNewMovie({ ...newMovie, rate: nextValue })
    }

    const handleChange=(e) =>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter titre" onChange={handleChange} name="Title"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={newMovie.rate}
                                onStarClick={onStarClick}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicimageurl">
                            <Form.Label>image url</Form.Label>
                            <Form.Control type="password" placeholder="image url" onChange={handleChange} name="Poster" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicdescription">
                            <Form.Label>description</Form.Label>
                            <Form.Control as="textarea" placeholder="description" onChange={handleChange} name="description" />
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> {addMovie(newMovie);handleClose()}}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>



    )
}

export default Add;

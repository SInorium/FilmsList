import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import FilmsService from "../api/FilmsService";
import { Card, Accordion, Button } from "react-bootstrap";
import Comment from "./Comment";
import MyModal from "../elements/MyModal";
import Form from "../elements/Form";

const Film = ({ films }) => {
  let { slug } = useParams();

  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const currentFilm = films.find((film) => film.slug === slug);

  const [fetchComment, isLoading, postError] = useFetching(async () => {
    const response = await FilmsService.getComment(20);

    setComments(response.data);
  });

  useEffect(() => {
    fetchComment();
  }, []);

  const createComment = (newComment) => {
    setComments([...comments, newComment]);
    setShow(false);
  };

  const removeComment = ({ id: currentId }) => {
    setComments(comments.filter((c) => c.id !== currentId));
  };

  return (
    <Card style={{ width: "50" }}>
      <Card.Img
        variant="top"
        src={currentFilm?.large_cover_image}
        alt={"image " + currentFilm?.title}
      />
      <Card.Body>
        <Card.Title>{currentFilm?.title}</Card.Title>
        <Accordion color={"dark"} defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>summary</Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                {currentFilm?.summary || currentFilm?.synopsis}
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>comments ({comments.length})</Accordion.Header>
            <Accordion.Body>
              {isLoading ? (
                <h3>Загрузка комментариев...</h3>
              ) : (
                comments.map((comment, index) => (
                  <Comment
                    removeComment={removeComment}
                    comment={comment}
                    index={index}
                    key={comment.id}
                  />
                ))
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
      <Button variant="secondary" onClick={() => setShow(true)}>
        Create new comment
      </Button>

      <MyModal
        title={"Create new comment"}
        show={show}
        setShow={setShow}
        children={<Form create={createComment} />}
      />
    </Card>
  );
};

export default Film;

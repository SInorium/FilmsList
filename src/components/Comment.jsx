import React from "react";
import { Card, Button } from "react-bootstrap";

const Comment = ({ comment, removeComment, index }) => {
  return (
    <Card>
      <Card.Header>
        {index + 1}. {comment.name}
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{comment.body}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{comment.email}</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <Button onClick={() => removeComment(comment)} size={"sm"} theme="dark">
        удалить
      </Button>
    </Card>
  );
};

export default Comment;

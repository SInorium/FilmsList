import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "./Input";

const Form = ({ create }) => {
  const [comment, setComment] = useState({ name: "", body: "", email: "" });

  const addNewComment = () => {
    const newComment = { ...comment, id: Date.now() };
    create(newComment);
    setComment({ name: "", body: "", email: "" });
  };

  return (
    <form>
      <Input
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
        value={comment.name}
        type={"text"}
        placeholder={"Name"}
      />
      <Input
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
        value={comment.body}
        type={"text"}
        placeholder={"Description"}
      />
      <Input
        onChange={(e) => setComment({ ...comment, email: e.target.value })}
        value={comment.email}
        type={"text"}
        placeholder={"Email"}
      />
      <Button
        onClick={addNewComment}
        size={"sm"}
        theme={"light"}
        children={"create comment"}
      />
    </form>
  );
};

export default Form;

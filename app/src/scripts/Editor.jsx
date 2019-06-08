import React from "react";
import { firestore } from "firebase";
import "../styles/Editor.css"
import { Input } from "./Components/Input";
import { TextArea } from "./Components/TextArea";
import { ARTICLE_PATH } from "./Constants";
import { Dialog } from "./Components/Dialog";
const { useState } = React;

export function Editor({ isOpen, onClose }) {
  const [state, setState] = useState({ title: "", body: "" });
  const { title, body } = state;

  function onTitleChange(event) {
    setState({ ...state, title: event.target.value });
  }

  function onBodyChange(event) {
    setState({ ...state, body: event.target.value });
  }

  async function sendArticle() {
    if (!title && !body) return;
    const db = await firestore();
    db.collection(ARTICLE_PATH).add({ title, body, createdAt: Date.now() });
    setState({ title: "", body: "" });
  }

  return (
    // eslint-disable-next-line
    <Dialog isOpen={isOpen} title="記事を書く" okButtonLabel="投稿する" onOk={() => ((onClose && onClose()),sendArticle())} onCancel={onClose}>
      <Input placeholder="タイトル" value={title} onChange={onTitleChange} />
      <TextArea placeholder="本文" rows={body.split("\n").length} value={body} onChange={onBodyChange} />
    </Dialog>
  )
}

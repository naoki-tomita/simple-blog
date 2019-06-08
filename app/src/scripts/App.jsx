import React from 'react';
import '../styles/App.css';
import { firestore } from "firebase";
import { Article } from './Article';
import { Editor } from './Editor';
import { ARTICLE_PATH } from './Constants';
import { Header } from './Header';
const { useState, useEffect } = React;

export function App() {
  const [state, setState] = useState({ articles: [], isEditorOpen: false });
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const { articles } = state;

  async function fetchArticles() {
    const db = await firestore();
    db.collection(ARTICLE_PATH)
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const fetchedArticles = [];
        snapshot.forEach(it => fetchedArticles.push({ id: it.id, ...it.data() }));
        setState({ ...state, articles: fetchedArticles });
      });
  }

  function openEditor() {
    setIsEditorOpen(true);
  }

  function closeEditor() {
    setIsEditorOpen(false);
  }

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <Header onEditorOpen={openEditor} />
    <div className="container">
      {articles.map(it => <Article key={it.id} title={it.title} body={it.body} />)}
    </div>
    <Editor isOpen={isEditorOpen} onClose={closeEditor} />
    </>
  );
}

import React from 'react';
import '../styles/App.css';
import { firestore } from "firebase";
import { Article } from './Article';
import { Editor } from './Editor';
import { ARTICLE_PATH } from './Constants';
const { useState, useEffect } = React;

export function App() {
  const [state, setState] = useState({ articles: [] });
  const { articles } = state;

  async function fetchArticles() {
    const db = await firestore();
    db.collection(ARTICLE_PATH)
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const articles = [];
        snapshot.forEach(it => articles.push({ id: it.id, ...it.data() }));
        setState({ ...state, articles });
      });
  }

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Editor />
      {articles.map(it => <Article key={it.id} title={it.title} body={it.body} />)}
    </div>
  );
}

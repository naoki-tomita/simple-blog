import React from 'react';
import '../styles/App.css';
import { firestore } from "firebase";
import { Article } from './Article';
import { Editor } from './Editor';
const { useState, useEffect } = React;

export function App() {
  const [state, setState] = useState({ articles: [] });
  const { articles } = state;

  async function fetchArticles() {
    const db = await firestore();
    db.collection("articles")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const articles = [];
        snapshot.forEach(it => articles.push({ id: it.id, ...it.data() }));
        setState({ ...state, articles });
      });
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <Editor />
      {articles.map(it => <Article key={it.id} title={it.title} body={it.body} />)}
    </div>
  );
}

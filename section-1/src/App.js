import './style.css';
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState('');
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

/* 
    What is React?
    Реакт отображает HTML для пользователей и изменяет его, 
    когда те, с ним взаимодействуют.

    JSX - позволяет писать HTML и JS код в одном файле.
    Все компоненты пишуться с заглавной буквы, чтобы 
    React мог отличить их от обычного html-элемента.
*/
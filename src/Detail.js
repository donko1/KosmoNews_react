import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CroppedImage from "./Img";

function countWords(sentence) {
  const words = sentence.split(" ");
  return words.length;
}

function calculateMinutes(sentence) {
  const wordsCount = countWords(sentence);
  const minutes = Math.ceil(wordsCount / 150);

  if (minutes === 1) {
    return "1 минута";
  } else if (minutes > 1 && minutes < 5) {
    return minutes + " минуты";
  } else {
    return minutes + " минут";
  }
}

const Detail = () => {
  const { arg } = useParams();
  const [news, setNews] = useState({});
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    fetch("/api/themes/")
      // fetch("http://localhost:8000/api/themes")
      .then((response) => response.json())
      .then(async (data) => {
        setThemes(data);
        const response = await fetch(`/api/${arg}/`);
        // const response = await fetch(`http://localhost:8000/api/${arg}/`);
        const data_1 = await response.json();
        setNews(data_1);
      });
  }, [arg]);

  // Форматирование даты
  const formatDate = (date) => {
    let months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    let today = new Date(date);
    let day = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let minutes = today.getMinutes();
    let hours = today.getHours();
    const intMinutes = parseInt(minutes, 10);
    const formattedMinutes = intMinutes < 10 ? `0${intMinutes}` : intMinutes;

    return `${hours}:${formattedMinutes}. ${day} ${month}`;
  };

  const themeList = Object.values(themes);
  const formattedDate = formatDate(news.date);
  let img = news.image;
  return (
    <Layout themes={themeList}>
      <div>
        <h1>{news.title}</h1>
        <h2>
          Время чтения:
          {news.article_text
            ? calculateMinutes(news.article_text)
            : "Расчет времени..."}
        </h2>
        <CroppedImage src={img} height={1000} width={1000} />
        <h3>{themes[news.theme]}</h3>
        <h4>{formattedDate}</h4>
        <h2>{news.article_text}</h2>
      </div>
    </Layout>
  );
};

export default Detail;

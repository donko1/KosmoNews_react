import Layout from "./Layout";
import { useState, useEffect } from "react";
import CroppedImage from "./Img";
import { useParams } from "react-router-dom";

const Index = (props) => {
  const { word } = useParams();
  if (props.url === "search") {
    var url = `search/${word}`;
  } else {
    var url = `${props.url}/`;
  }

  const [themes, setThemes] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/api/themes/")
      // fetch("http://localhost:8000/api/themes/")
      .then((response) => response.json())
      .then(async (data) => {
        setThemes(data);
        const response = await fetch(`/api/${url}`);
        // const response = await fetch(`http://localhost:8000/api/${url}`);
        const data_1 = await response.json();
        setNews(data_1);
      });
  }, [props.url]);
  const themeList = Object.values(themes);

  return (
    <Layout themes={themeList}>
      {news.map((item, number) => {
        let img = item.image;
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

        let today = new Date(item.date);
        let day = today.getDate();
        let month = months[today.getMonth()];
        let year = today.getFullYear();
        let minutes = today.getMinutes();
        let hours = today.getHours();
        const intMinutes = parseInt(minutes, 10);
        const formattedMinutes =
          intMinutes < 10 ? `0${intMinutes}` : intMinutes;

        let formattedDate = `${hours}:${formattedMinutes}`;
        return (
          <div>
            <a key={number} href={"/" + item.id}>
              <h1>{item.title}</h1>
              <h2>{formattedDate}</h2>
              <CroppedImage src={img} width={400} height={400} />
            </a>
          </div>
        );
      })}
    </Layout>
  );
};

export default Index;

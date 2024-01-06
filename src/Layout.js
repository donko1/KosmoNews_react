import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CroppedImage from "./Img";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    // onSearch(encodeURIComponent(query));
    navigate(`/search/${encodeURIComponent(query)}`);
    window.location.reload(false);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите запрос"
      />
      <button onClick={handleSearch}>Найти</button>
    </div>
  );
};

const Layout = ({ themes, children }) => {
  const [day, setDay] = useState("");
  useEffect(() => {
    fetch("/api/day/")
      // fetch("http://localhost:8000/api/day/")
      .then((response) => response.json())
      .then((data) => {
        setDay(data[0]);
      });
  }, [children]);
  const news = day;
  const img = news.image;

  return (
    <div>
      <h1>
        <a href="/">Главная</a>
      </h1>
      {themes.map((item, index) => (
        <h2 key={index} className={item}>
          <a href={`/${item.toString().split(",")[0]}`}>
            {item
              .toString()
              .match(/\d+(.*)$/)[1]
              .replace(",", "")}
          </a>
        </h2>
      ))}
      <h3>
        <a href="/aboutUs/">О нас</a>
        <a href="/contact/">Контакты</a>
      </h3>
      <SearchForm />
      <div>
        <a href={"/" + day.id}>
          <h1>Новость дня - {day.title}</h1>
          <CroppedImage src={img} width={200} height={200} />
        </a>
      </div>
      {children}
      <footer>
        <p>
          <a href="/confidenc/">Пользовательское соглашение</a>
        </p>
        <h1>2023 - KosmoNews</h1>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import Layout from "./Layout";

const AboutUs = () => {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    fetch("/api/themes/")
      // fetch("http://localhost:8000/api/themes")
      .then((response) => response.json())
      .then(async (data) => {
        setThemes(data);
      });
  }, []);
  const themeList = Object.values(themes);
  return (
    <Layout themes={themeList}>
      <p>
        Добро пожаловать на KosmoNews – ваш источник самых последних новостей,
        открытий и анализов в области космополитологии. Мы глубоко погружаемся в
        мир новостей, предлагая увлекательные статьи, интервью и мнения от
        ведущих экспертов и исследователей
      </p>
    </Layout>
  );
};

const Contact = () => {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    fetch("/api/themes/")
      // fetch("http://localhost:8000/api/themes")
      .then((response) => response.json())
      .then(async (data) => {
        setThemes(data);
      });
  }, []);
  const themeList = Object.values(themes);
  return (
    <Layout themes={themeList}>
      <p>Телефон: +71234567890 Почта: example@example.com</p>
    </Layout>
  );
};

const Confidenc = () => {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    fetch("/api/themes/")
      // fetch("http://localhost:8000/api/themes")
      .then((response) => response.json())
      .then(async (data) => {
        setThemes(data);
      });
  }, []);
  const themeList = Object.values(themes);
  return (
    <Layout themes={themeList}>
      <p>Наша политика. Мы ни за что не отвечаем</p>
    </Layout>
  );
};

export { AboutUs, Contact, Confidenc };

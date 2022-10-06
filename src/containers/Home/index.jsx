import React from 'react';
import Categories from '../../components/Categories';
import Sorts from '../../components/Sorts';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярності (За спаданням)',
    sortProperty: 'rating',
  });

  const sortBy = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'ask' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  const url = `https://633747455327df4c43d27a80.mockapi.io/pizzaItems?${category}&sortBy=${sortBy}&order=${order}`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((data) => {
      setItems(data.data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sorts value={sortType} onClickSorts={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Всі піци:</h2>
      <div className="content__items">
        {isLoading
          ? [new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

import React from 'react';
import Categories from '../../components/Categories';
import Sorts from '../../components/Sorts';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import Pagination from '../../components/Pagination';
import axios from 'axios';
import { SearchContext } from '../../App';
import { useState, useEffect, useContext } from 'react';

export default function Home() {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [curentPage, setcurentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярності (За спаданням)',
    sortProperty: 'rating',
  });

  const sortBy = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'ask' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  const url = `https://633747455327df4c43d27a80.mockapi.io/pizzaItems?page=${curentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`;

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sceletons = [new Array(6)].map((_, index) => <Skeleton key={index} />);

  //  Фильтрация для статического поиска с небольшим обемом данных
  // .filter((obj) => {
  //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // })

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((data) => {
      setItems(data.data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, curentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sorts value={sortType} onClickSorts={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Всі піци:</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination onChangePage={(number) => setcurentPage(number)} />
    </div>
  );
}

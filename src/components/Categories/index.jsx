import React from 'react';
import { useState } from 'react';

export default function Categories({ value, onClickCategory }) {
  const categories = ['Всі', "М'ясні", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
  // const [activeIndex, setActiveIndex] = useState(0);

  // const onClickCategories = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

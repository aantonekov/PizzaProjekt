import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/empty-cart.png';

export default function CartEmpty() {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Кошик порожній <icon>😕</icon>
        </h2>
        <p>
          Найімовірніше, ви не замовляли ще піцу.
          <br />
          Щоб замовити піцу, перейди на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </>
  );
}

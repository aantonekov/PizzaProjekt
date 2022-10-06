import React from 'react';
import style from './style.module.scss';

export default function NotFound() {
  return (
    <div>
      <h1 className={style.titleNotFound}>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
    </div>
  );
}

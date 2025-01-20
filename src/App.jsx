import "./App.css";
import { Card } from "../card";

import React from "react";

const products = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image:
      "https://basket-01.wbbasket.ru/vol142/part14267/14267188/images/big/1.webp",
    price: "12 999 som",
  },
  {
    id: 2,
    title: "Женские Кроссовки Adidas Superstar",
    image:
      "https://sezon.ua/image/catalog/image/easyfoto/14224/krossovki-zhenskie-kozhanye-581671-chernye-11.jpg",
    price: "9 999 som",
  },
  {
    id: 3,
    title: "Мужские Кроссовки Puma RS-X3",
    image:
      "https://basket-01.wbbasket.ru/vol142/part14267/14267188/images/big/1.webp",
    price: "10 499 som",
  },
  {
    id: 4,
    title: "Женские Кроссовки Reebok Classic Leather",
    image:
      "https://basket-01.wbbasket.ru/vol142/part14267/14267188/images/big/1.webp",
    price: "8 499 som",
  },
  {
    id: 5,
    title: "Мужские Кроссовки New Balance 574",
    image:
      "https://lauf.shoes/upload/iblock/c17/a6kiw1p2xiq4twmfr3wsropsq0v6z8oj/1Y8A2145_web.jpg",
    price: "11 999 som",
  },
  {
    id: 6,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image:
      "https://basket-01.wbbasket.ru/vol142/part14267/14267188/images/big/1.webp",
    price: "12 999 som",
  },
  {
    id: 7,
    title: "Женские Кроссовки Adidas Superstar",
    image:
      "https://sezon.ua/image/catalog/image/easyfoto/14224/krossovki-zhenskie-kozhanye-581671-chernye-11.jpg",
    price: "9 999 som",
  },
  {
    id: 8,
    title: "Мужские Кроссовки Puma RS-X3",
    image:
      "https://basket-01.wbbasket.ru/vol142/part14267/14267188/images/big/1.webp",
    price: "10 499 som",
  },
  {
    id: 9,
    title: "Женские Кроссовки Reebok Classic Leather",
    image:
      "https://basket-01.wbbasket.ru/vol142/part14267/14267188/images/big/1.webp",
    price: "8 499 som",
  },
  {
    id: 10,
    title: "Мужские Кроссовки New Balance 574",
    image:
      "https://lauf.shoes/upload/iblock/c17/a6kiw1p2xiq4twmfr3wsropsq0v6z8oj/1Y8A2145_web.jpg",
    price: "11 999 som",
  },
];

const App = () => {
  return (
    <div>
      <h1>Все кроссовки</h1>
      <div className="cards">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

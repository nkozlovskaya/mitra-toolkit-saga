# Mitra Toolkit Saga Project

SPA на React [Demo](https://nkozlovskaya.github.io/mitra-toolkit-saga/).

## Ключевые технологии, которые использовались в проекте

- React;
- React-bootstrap;
- React-router;
- Axios;
- Redux;
- Redux-saga;
- Redux Toolkit;
- Git;

### Описание задачи

Создать сайт-галерею, где присутствуют 3 страницы (роута):

- «Галерея» (главная страница), где располагаются картинки.
- «Обо мне», где располагается краткая информация обо мне.
- Подробности о картинке (куда необходимо вывести поля краткую информацию о картинке – заголовок, id, ссылка)
  Получить данные о картинках необходимо через фейковое api

В данном проекте использовался сервис с фотографиями https://unsplash.com/

### Подробное описание

1. «Галерея» (главная страница)

- Содержит 4 категории, в каждой категории присутствуют 6 картинок (итого нужно подгрузить с сервера только 24 первых картинки и разбить их по 4м категориям).
  В этом проекте в качестве категорий были выбраны города Лондон, Париж, Берлин и Москва. И для каждого города выводилось 6 фотографий достопримечательностей из каждого города
  
  <img width="1674" alt="Снимок экрана 2022-10-31 в 21 44 15" src="https://user-images.githubusercontent.com/64790767/199086274-f1c28cfb-acb8-4a15-957a-f7bb60f82bb5.png">
  
- При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше).

- Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки («Галерея» и «Обо мне»), а также отображаться ваш аватар, имя и почтовый адрес.

<img width="1676" alt="Снимок экрана 2022-10-31 в 21 44 22" src="https://user-images.githubusercontent.com/64790767/199086569-7c2d6e67-f446-4037-bf0a-6d46fa7e16df.png">


2. «Обо мне»

- Краткая информация обо мне (ссылка на мое резюме с hh.ru)

<img width="674" alt="Снимок экрана 2022-10-31 в 21 44 30" src="https://user-images.githubusercontent.com/64790767/199086699-c1041343-bbe1-4769-88f0-84b78fea34d9.png">

<img width="1444" alt="Снимок экрана 2022-10-31 в 21 44 38" src="https://user-images.githubusercontent.com/64790767/199086731-9f3b5204-c353-456e-ab42-e6431e76063a.png">


3. «Подробности о картинке»

- Карточка с фотографией и кратким описанием изображения на ней

<img width="1672" alt="Снимок экрана 2022-10-31 в 21 44 57" src="https://user-images.githubusercontent.com/64790767/199086607-9f36f08f-9f61-45a4-b9f6-e9cc4dfdf952.png">


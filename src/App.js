import React from 'react';

import './App.css';

const questions = [
  "Типы списков в HTML?",
  "Модульная простая",
  "Что такое валидация? И какие типы проверок HTML документа вы знаете?",
  "Какой тэг использовать для того, что бы сверстать кнопку?",
  "Разница между display: none и visibility: hidden?",
  "Что такое мета-тэги?",
  "Что такое вендорные префиксы? И для чего они используются?",
  "Когда происходит Reflow и Repaint?",
  "Как можно сгруппировать опции внутри тэга <select>?",
  "Что такое селектор? И какие селекторы существуют?",
  "Если представить HTML5 как открытую веб-платформу, из каких блоков он состоит?",
  "Разница между URI и URL?",
  "Почему хорошей практикой считается располагать <link> для подключения CSS стилей внутри тэга <head>, а <script> для подключения JS ставить перед закрывающимся тэгом </body>?",
  "Расскажите о свойстве pointer-events",
  "Для какого тэга используется атрибут alt и зачем он нужен?",
  "Что такое семантика? Какие семантичные тэги вы знаете?",
  "Что такое OSI модель?",
  "SOLID",
  "Для чего используют атрибут inputmode",
  "Какие фильтры есть в CSS?",
  "Atomic design",
  "FSD (Feature Slice Design)",
  "Для чего используется элемент <datalist>?",
  "Как исправлять специфичные проблемы со стилями для разных браузеров?",
  "Разница между <script>, <script async> и <script defer>?",
  "Что такое веб-хранилище (web storage)?",
  "Расскажите о свойстве text-rendering",
  "Разница между блочным и строчным (инлайновым) элементами?",
  "Что такое Progressive Web Application",
  "Что такое Web Worklet?",
  "Какие CSS-препроцессоры вы знаете? Преимущества их использования?",
  "Что такое BOM?",
  "Есть ли у HTML элементов свои дефолтные специфичные стили?",
  "Для чего используется атрибут decoding",
  "Что такое CSS? И для чего он используется?",
  "Для чего используется атрибут enterkeyhint",
  "Что такое Babel и для чего он используется?",
  "Что такое CDN?",
  "Назовите псевдоэлементы для подсветки текста?",
  "Разница между PUT и POSTзапросами?",
  "Что такое srcset? Как работает srcset?",
  "Для чего используются тэги <sub> и <sup>?",
  "MVP",
  "Расскажите о свойстве outline",
  "Что такое прогрессивный рендеринг?",
  "Что такое JWT?",
  "Что такое HTTP cookie? Для чего они используются?",
  "Разница между cookie, sessionStorage и localStorage?",
  "Как работает JSONP?",
  "Для чего используют атрибут novalidate",
  "Из чего состоит HTTP запрос?",
  "Что Такое API?",
  "Tree shaking это?",
  "Способы задания цвета в CSS?",
  "Как семантически верно сверстать навигационное меню?",
  "Разница между HTTP/1 и HTTP/2?",
  "Что такое WebSocket? В чем принцип его работы?",
  "Что такое History API в браузере?",
  "Как можно скрыть элемент разметки не используя CSS и JS?",
  "Что такое инлайновый стиль? Можно ли его переопределить?",
  "Расскажите о meta-теге с name=\"viewport\"?",
  "Расскажите о свойстве text-decoration-skip-ink",
  "Что такое блокирующие и неблокирующие ресурсы?",
  "Что такое безопасный и идемпотентный метод?",
  "Для чего используется атрибут pattern",
  "Что такое <iframe>?",
  "Безопасные и идемпотентные методы?",
  "Разница между протоколами TCP и UDP?",
  "Что такое Core Web Vitals? Какие основные метрики туда входят?",
  "Для чего используют data-атрибуты?",
  "Почему не стоит использовать краткую запись свойств CSS?",
  "В каких случаях лучше использовать <canvas>, а в каких <svg>?",
  "Что описывается в тэге <head>?",
  "Что такое модель зрелости Ричардсона?",
  "Что такое элемент <output> в HTML5?",
  "Разница между адаптивным (adaptive) и отзывчивым (responsive) дизайнами?",
  "Для чего используются тэги <tr>, <th>, <td>?",
  "Что такое CSS-правило?",
  "Что такое CSS спрайт? И для чего он используется?",
  "Основные этапы проверок валидности HTML-документа?",
  "Для чего используется элемент <picture>?",
  "Что такое “трехстороннее рукопожатие” (Triple handshake)?",
  "Разница между Reset.css и Normalize.css?",
  "Что такое Веб-компоненты и какие технологии в них используются?",
  "Что такое плавающие элементы (floats)? Как они работают?",
  "Что такое категории контента в HTML5?",
  "Что такое WebSQL и IndexedDB, а также их различия?",
  "Что такое кроссбраузерность?",
  "Для чего нужен паттерн PRPL?",
  "Для чего используется тэг <label>",
  "MVC",
  "Опишите базовую структуру HTML-страницы?",
  "Что такое CSS-атрибут (attr)?",
  "Как семантически правильно сверстать картинку с подписью?",
  "В каком случае лучше использовать translate() вместо абсолютного позиционирования?",
  "Что такое SSL/TLS? Зачем они используются в веб-разработке?",
  "Что такое Flash Of Unstyled Content (FOUC)? Как его избежать?",
  "Назовите критические этапы рендеринга?",
  "Методы повышения безопасности веб-приложений?",
  "Что такое межсайтовый скриптинг (XSS)?",
  "Что такое HTML и для чего он используется?",
  "Для чего используется псевдокласс :invalid?",
  "Как можно изменить форму картинки или HTML элемента?",
  "Разница между feature detection, feature inference и анализом строки user-agent?",
  "Плюсы и минусы <canvas> и <svg>?",
  "Разница между идентификацией, аутентификацией, авторизацией?",
  "Плюсы и минусы методологии БЭМ?",
  "Варианты добавление CSS стилей на страницу?",
  "Что такое специфичность селектора? Как считать вес селектора?",
  "Разница между host и domain?",
  "Способы уменьшения времени загрузки веб-страницы?",
  "Разница между margin и padding?",
  "Что такое поток документа?",
  "Чем отличается <article> от <section>?",
  "Расскажите о свойстве scrollbar-gutter",
  "Что такое Web Workers?",
  "Разница между SSR и SSG и CSR?",
  "Глобальные ключевые слова в CSS?",
  "Что такое IP-адрес?",
  "Что такое псевдоэлементы? И для чего они используются?",
  "Типы <input> элементов в HTML?",
  "Что такое Service Workers?",
  "Разница между layout, painting и compositing?",
  "Что такое CSS препроцессор?",
  "Порядок наложения элементов в CSS (Stacking Order)?",
  "Что такое <svg> и <canvas>?",
  "Какая разница между тэгами <strong><em> и <b><i>?",
  "Что такое CORS?",
  "Какие категории считаются основными категориями контента?",
  "Виды аутентификации?",
  "Что такое элемент <canvas>? И для чего он используется?",
  "Как с помощью CSS определить, поддерживается ли свойство в браузере?",
  "Разница между классом и идентификатором в CSS?",
  "Механизм установки сеанса между клиентом и сервером?",
  "Что такое ApplicationCache в HTML5?",
  "Какие глобальные атрибуты есть в HTML?",
  "Особенности разработки мультиязычных сайтов?",
  "Что такое HTTP",
  "Что такое свойство valueAsNumber?",
  "Что такое GraphQL?",
  "Какие CSS-свойства используются для создания анимаций и плавных переходов?",
  "Расскажите про свойство display в CSS?",
  "Какие методы может иметь HTTPзапрос?",
  "Что такое безопасные (Secure) и HttpOnly Cookies?",
  "Разница между preload, prefetch, preconnect и prerender?",
  "Разница между кнопкой и ссылкой в HTML?",
  "Разница между <meter> и <progress>?",
  "Что такое z-index? Как формируется контекст наложения?",
  "Для чего используется ключевое слово currentColor в CSS?",
  "Что такое перечисление селекторов?",
  "Блочная модель CSS?",
  "Расскажите об особенностях стилизации <svg>?",
  "Опишите весь процесс получения страницы после ввода адреса в браузере",
  "Какие псевдоклассы были добавлены в CSS3?",
  "Что такое IndexedDB в браузере? Преимущества IndexedDB?",
  "Как поддерживать страницы в браузерах с ограниченными функциями?",
  "Какие есть HTTP коды?",
  "Для чего нужен атрибут autocomplete?",
  "Как работает мультиплексирование в HTTP/2?",
  "Что такое DOM?",
  "Что такое схлопывание границ (margin collapsing)?",
  "Почему очищать кэш важно? Как это можно сделать?",
  "Что такое doctype? И для чего он используется?",
  "Что такое атрибут target? Какие значения он принимает?",
  "Что такое безопасные (Secure) и HttpOnly cookies?",
  "Разница между HTTP и HTTPS?",
  "Микросервисная",
  "Что такое Content Security Policy (CSP)?",
  "Разница между cookie, sessionStorage и localStorage?",
  "Что такое REST? Что такое REST и RESTful api? Принципы REST-архитектуры?",
  "Принципы и подходы для обеспечения масштабируемости и поддерживаемости CSS-кода?",
  "Разница между Progressive Enhancement и Graceful Degradation?",
  "Разница между <canvas> и <svg>?",
  "Разница между Long-Polling, Websockets и Server-Sent Events?",
  "Почему стоит использовать семантические теги в верстке?",
  "Что такое прогрессивный SSR?",
  "Типы позиционирования в CSS?",
  "Что такое OWASP Top 10?"
];

const filtered = questions.filter((item, index) => [1, 10,13,16,17,19,20,21,35,44,45,49,51,55,56,60,61,62,68,70,73,74,77,78,79,83,85,88,92,98,99,102,103,104,105,106,109,110,112,113,114,117,118,122,123,124,128,129,130,131,133,134,136,144,150,153,154,155,157,158,161,163,167,170,172,175,177].includes(index));

export default function App() {
  return (
    <div className='container'>
      {
        // eslint-disable-next-line react/no-array-index-key
        filtered.map((item, index) => <div key={index}><span>{index + 1}. </span> {item}</div>)
      }
    </div>
  );
}

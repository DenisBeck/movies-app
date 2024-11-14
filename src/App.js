import React from 'react';

import './App.css';

const questions = [
  'Что такое React?',
  'Основные хуки React Query',
  'Что такое Middleware',
  'Техники оптимизации React?',
  'Что такое TypeScript?',
  'Разница между управляемыми (controlled) и не управляемыми (uncontrolled) компонентами?',
  'Что такое ReactDOMServer?',
  'Что такое перечисление (enum)?',
  'Хуки (Подробнее)',
  'Разница между типом (type) и интерфейсом (interface)?',
  'Недостатки хуков?',
  'Методы жизненного цикла компонента в React?',
  'Что такое условный рендеринг (Conditional Rendering)? Как его выполнить?',
  'Что такое синтетические события в React?',
  'useQueries',
  'Что такое PureComponent?',
  'Для чего в TypeScript используют ключевое слово declare?',
  'React Query',
  'Разница между createElement() и cloneElement()?',
  'Минусы использования TypeScript?',
  'Что такое декораторы в TypeScript?',
  'Что такое React Fiber?',
  'createAction',
  'Разница между абстрактным классом (abstract class) и интерфейсом (interface)?',
  'Что такое директивы с тремя наклонными чертами (Triple-Slash Directives), их типы?',
  'Разница между типами “Объединение” (|) и “Пересечение” (&)?',
  'Что такое Flux?',
  'Что такое «бурение пропсов» (Prop Drilling)? Как его избежать?',
  'Разница между Redux и Flux?',
  'Как передавать пропсы в React Router?',
  'Как React обрабатывает, или ограничивает использование пропсов определенного типа?',
  'Что такое декораторы?',
  'Плюсы использования TypeScript?',
  'Что такое React Reconciliation?',
  'Что такое строгий режим в React? Его преимущества?',
  'Какие типы данных может возвращать метод render?',
  'Разница между компонентом и контейнером?',
  'Назовите особенности TypeScript?',
  'useInfiniteQuery',
  'Что такое редьюсер (Reducer)?',
  'createAsyncThunk',
  'Что такое Reselect и как он работает?',
  'Что такое «опрос» (Polling)? Как его реализовать в React?',
  'Что такое внешние объявления переменных (ambient declaration) в TypeScript?',
  'Что такое Компонент высшего порядка (Higher-Order Component/HOC)?',
  'Разница между классовым и функциональным компонентами?',
  'Что такое React-ссылка (ref)? Как создать ссылку?',
  'Что Такое JSX?',
  'Как реализовать однократное выполнение операции при начальном рендеринге?',
  'Является ли React реактивным?',
  'Что триггерит перерендер компонента?',
  'Поддерживает ли TypeScript перегрузку функций?',
  'Что такое «единственный источник истины» (Single Source of Truth)?',
  'configureStore',
  'Какие элементы ООП поддерживаются в TypeScript?',
  'Что такое синтетические события (SyntheticEvent) в React?',
  'Разница между элементом и компонентом?',
  'useQuery',
  'Что такое инверсия наследования (Inheritance Inversion)?',
  'Что такое Virtual DOM? Как он работает с React?',
  'Для чего нужен атрибут key при рендере списков?',
  'Как вы отлавливаете ошибки в TypeScript коде?',
  'Что делает метод shouldComponentUpdate?',
  'Назовите основную цель React Fiber?',
  'Что такое Redux? Ключевые принципы Redux?',
  'Разница между useEffect(), componentDidMount()и useLayoutEffect()?',
  'Разница между рендерингом и монтированием?',
  'Что такое события указателя (Pointer Events)?',
  'Модификаторы доступа в TypeScript?',
  'Назовите преимущества использования React?',
  'Как выглядит поток данных в Redux-приложении?',
  'Что такое «ленивая» (Lazy) функция?',
  'Как в React реализовать двустороннее связывание данных?',
  'Перечислите особенности React?',
  'Что такое фрагмент (Fragment)? Почему фрагмент лучше, чем div?',
  'Как TypeScript поддерживает необязательные и дефолтные параметры в функции?',
  'Стадии жизненного цикла компонента в React?',
  'Для чего предназначен метод registerServiceWorker() в React?',
  'createSlice',
  'Плюсы и минусы Redux?',
  'Что такое общие типы (generic) в TypeScript?',
  'Как создать и использовать Store?',
  'Что такое поднятие состояния вверх (Lifting State Up)?',
  'Что такое компонент-переключатель (Switching Component)?',
  'Чем React Router отличается от обычной маршрутизации?',
  'Разница между теневым (Shadow) и виртуальным (Virtual) DOM?',
  'Что такое JSX в TypeScript? Какие режимы JSX поддерживает TypeScript?',
  'Что такое сhildren?',
  'Преимущества хуков?',
  'Разница между React и ReactDOM?',
  'createEntityAdapter',
  'Разница между внутренним (Internal Module) и внешним модулями (External Module)?',
  'Разница между типами void, never и unknown?',
  'useMutation',
  'Какие хуки были добавлены в React Router версии 5?',
  'Разница между состоянием(state) и пропсами(props)?',
  'Что такое портал (Portal)?',
  'Как отрендерить HTML код в React-компоненте?',
  'Можно ли использовать TypeScript в серверной разработке?',
  'Лучшие практики безопасности в React?',
  'Что такое .map файл, как и зачем его использовать?',
  'createReducer',
  'Что такое контекст (Context)?',
  'RTK Query',
  'Для чего в TypeScript используется NoImplicitAny?',
  'Разница между memo и useMemo?',
  'Какие области видимости доступны в TypeScript?',
  'Разница между React State и Redux State?',
  'useQueryClient',
  'Что такое предохранители (Error Boundaries)?',
  'Основные компоненты TypeScript?',
  'Типы в TypeScript?',
  'Что такое React хуки (Hooks)?',
  'createApi RTK Query',
  'Зачем в setState() нужно передавать функцию?',
];

// const filtered = questions.filter((item, index) => [2,5,7,9,12,14,15,16,23,27,30,34,36,39,43,45,48,54,61,63,75,76,80,85,86,88,89,91,92,93,97,99,100,107,110,113,114,124,125,129,130,132,134,140,154,156,158,160,161,165,166,169,173,178,179,184,186,191,195,196,197].includes(index + 1))

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

shuffle(questions);

console.log(questions);

export default function App() {
  return (
    <div className='container'>
      {
        // eslint-disable-next-line react/no-array-index-key
        questions.map((item, index) => <div key={index}><span>{index + 1}. </span> {item}</div>)
      }
    </div>
  );
}

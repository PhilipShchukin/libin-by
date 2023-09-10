# LIBIN-BY

Сделано приложение для поиска одежды.

Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

### React

-   Функциональные компоненты c хуками в приоритете над классовыми.
-   Есть разделение на умные и глупые компоненты
    умные и глупые [SearchComponent](https://github.com/PhilipShchukin/libin-by/blob/main/src/components/SearchComponent.tsx) /
     [ProductBlock](https://github.com/PhilipShchukin/libin-by/blob/main/src/components/ProductBlock.tsx) и т.д.
-   Есть рендеринг списков: [HomePage](https://github.com/PhilipShchukin/libin-by/blob/main/src/pages/HomePage.tsx) и т.д.
-   Реализована хотя бы одна форма: [AuthForm](https://github.com/PhilipShchukin/libin-by/blob/main/src/components/AuthForm.tsx).
-   Есть применение Контекст API: [Theme-context](https://github.com/PhilipShchukin/libin-by/blob/main/src/store/theme-context.tsx).
-   Есть применение предохранителя: [ErrorBoundary](https://github.com/PhilipShchukin/libin-by/blob/main/src/components/ErrorBoundary.tsx).
-   Есть хотя бы один кастомный хук: нет в проекте.
-   Хотя бы несколько компонентов используют PropTypes: [AuthForm](https://github.com/PhilipShchukin/libin-by/blob/main/src/components/AuthForm.tsx).
-   Поиск не должен триггерить много запросов к серверу, использован в компоненте [SearchComponent](https://github.com/PhilipShchukin/libin-by/blob/main/src/components/SearchComponent.tsx).
-   Есть применение lazy + Suspense: [Routes](https://github.com/PhilipShchukin/libin-by/blob/main/src/App.tsx).

### Redux

-   Используем Modern Redux with Redux Toolkit: [store](https://github.com/PhilipShchukin/libin-by/blob/main/src/store/store.ts).
-   Используем слайсы: [productSlice](https://github.com/PhilipShchukin/libin-by/blob/main/src/store/slices/productSlice.ts).
-   Есть хотя бы одна кастомная мидлвара: [saveUserData](https://github.com/PhilipShchukin/libin-by/blob/main/src/utils/saveUserData.ts).
-   Используется RTK Query: нет в проекте.

## 2 уровень

-   Использован TypeScript.

## Дополнительно
- Использована библиотека react-hook-form для форм регистрации и входа
- Использована библиотека react-error-boundary для предохранителя
- Использована библиотека ant-design для предохранителя

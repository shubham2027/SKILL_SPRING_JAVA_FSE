# Week 5: React Applications & Hands-On Exercises

All Week 5 React exercises are implemented within the [myfirstreact](myfirstreact) project.

## Hands On Covered

### 1. Welcome to React
- Basic React application setup and JSX heading component.

### 2. Basic Components Navigation (Home, About, Contact)
- Created functional components:
  - [Home.js](myfirstreact/src/components/Home.js)
  - [About.js](myfirstreact/src/components/About.js)
  - [Contact.js](myfirstreact/src/components/Contact.js)

### 3. Student Score Calculator (`scorecalculatorapp`)
- Created [CalculateScore.js](myfirstreact/src/components/CalculateScore.js) functional component accepting `Name`, `School`, `Total`, and `goal` as props.
- Formatted and styled using [mystyle.css](myfirstreact/src/Stylesheets/mystyle.css).
- Calculates percentage/average score dynamically.

### 4. Blog App (`blogapp` - Fetch API & Class Components)
- Created [Post.js](myfirstreact/src/Post.js) model class with `id`, `title`, and `body` properties.
- Created class-based component [Posts.js](myfirstreact/src/components/Posts.js).
- Used Fetch API inside `componentDidMount()` to load data from `https://jsonplaceholder.typicode.com/posts`.
- Implemented `componentDidCatch()` hook for error handling.

### 5. Academy Cohorts Dashboard (CSS Modules & Dynamic Styling)
- Created CSS Module [CohortDetails.module.css](myfirstreact/src/components/CohortDetails.module.css) with `.box` styling and `dt` tag selector.
- Created component [CohortDetails.js](myfirstreact/src/components/CohortDetails.js) with dynamic `<h3>` font colors (`green` for `"Ongoing"` cohorts, `blue` for others).

### 6. Trainers App (`TrainersApp` - React Router SPA)
- Created model class [trainer.js](myfirstreact/src/trainer.js) with `TrainerId`, `Name`, `Email`, `Phone`, `Technology`, and `Skills`.
- Created mock dataset [TrainersMock.js](myfirstreact/src/TrainersMock.js).
- Components: [Trainerlist.js](myfirstreact/src/components/Trainerlist.js) and [TrainerDetails.js](myfirstreact/src/components/TrainerDetails.js) using `useParams()` hook and React Router DOM.

### 7. Online Shopping App (`shoppingapp` - Class Components & Props)
- Created class component [Cart.js](myfirstreact/src/components/Cart.js) with `itemname` and `price` properties.
- Created class component [OnlineShopping.js](myfirstreact/src/components/OnlineShopping.js) containing an array of 5 cart items, mapping and rendering them as table rows.

---

## Main Entry Point

All exercise components are preserved and imported in [App.js](myfirstreact/src/App.js).

## How to Run

From the `Week 5/myfirstreact` folder:

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

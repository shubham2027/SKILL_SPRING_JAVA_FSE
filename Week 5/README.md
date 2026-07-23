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

### 8. People Counter App (`counterapp` - Class Component & State)
- Created a separate React project [counterapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/counterapp).
- Component: [CountPeople.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/counterapp/src/components/CountPeople.js)
- Features:
  - Tracks `entrycount` and `exitcount` using component constructor and state.
  - Implements `UpdateEntry()` to increment entry count when the **Login** button is clicked.
  - Implements `UpdateExit()` to increment exit count when the **Exit** button is clicked.
  - Styled with a premium glassmorphic dark interface including crowd indicators and a capacity progress bar.

### 9. Cricket App (`cricketapp` - Map, Filter, Destructuring, Spread Merge)
- Created a separate React project [cricketapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp).
- Components:
  - [ListofPlayers.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp/src/components/ListofPlayers.js): Displays players using `map` and filters players with scores below 70 using ES6 arrow functions.
  - [IndianPlayers.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp/src/components/IndianPlayers.js): Splits players into Odd and Even teams using array destructuring, and merges T20/Ranji teams using the spread operator.
- Conditional rendering:
  - Switches between components on the home page [App.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp/src/App.js) based on a `flag` variable inside an `if-else` statement.

### 10. Office Space Rental App (`officespacerentalapp` - JSX & Attributes)
- Created a separate React project [officespacerentalapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/officespacerentalapp).
- Features:
  - Header element rendering dynamic JSX string variables.
  - Image element displaying the office space lobby image dynamically from attributes.
  - Single object `ItemName` details displaying office Name, Rent, and Address.
  - List of objects mapping and looping to display more office options.
  - Conditional CSS styling applied to render the Rent in red if `<=` 60000, and green if `>` 60000.

### 11. Event Handling & Currency Converter App (`eventexamplesapp`)
- Created a separate React project [eventexamplesapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/eventexamplesapp).
- Features:
  - React State and Custom Handler methods mapping multiple functions to a single event (e.g. Increment button triggers both state increment and alert greeting message).
  - Synthetic event handling via standard onClick event (OnPress handler alerting "I was clicked").
  - Passing arguments to event handlers (Say Welcome button passing "welcome" parameter).
  - Component [CurrencyConvertor.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/eventexamplesapp/src/components/CurrencyConvertor.jsx) utilizing state variables for Amount and Currency, invoking `handleSubmit` to convert Euros to Rupees at a rate of 80, preventing browser reload.
  - Beautiful glassmorphic UI card designs with modern typography, layout, hover scaling, and active animations.

### 12. Ticket Booking App (`ticketbookingapp` - Conditional Rendering)
- Created a separate React project [ticketbookingapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/ticketbookingapp).
- Features:
  - Conditional rendering using components and props.
  - Login/Logout state handling that toggles between Guest Page and User Page.
  - Displays Flight Details to all users, but displays a Ticket Booking Form only to logged-in users.
  - Employs simple unstyled HTML elements as requested to focus solely on functional requirements.

### 13. Blogger App (`bloggerapp` - Multi-style Conditional Rendering)
- Created a separate React project [bloggerapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/bloggerapp).
- Features:
  - 3 primary details sections: `Course Details`, `Book Details`, and `Blog Details` separated by solid green vertical borders as shown in the screenshot.
  - Variable-based rendering (Element Variables) inside components using variables like `const bookdet = (...)`.
  - Multiple demonstration styles of conditional rendering:
    1. **If-Else / Dropdown Selector** to toggle specific views.
    2. **Logical AND (&&)** using checkboxes to toggle columns individually.
    3. **Ternary Operator** using a show/hide toggle button.

### 14. Employee Management App (`employeemanagementapp` - Context API)
- Created a separate React project [employeemanagementapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/employeemanagementapp).
- Features:
  - Theme state (`'light'` / `'dark'`) sharing using React Context API.
  - Custom context defined in [ThemeContext.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/employeemanagementapp/src/ThemeContext.js).
  - Context Provider wrapping the entire App JSX inside [App.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/employeemanagementapp/src/App.jsx).
  - Intermediate component [EmployeesList.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/employeemanagementapp/src/components/EmployeesList.jsx) does not receive or pass the theme prop down, avoiding prop drilling.
  - Nested child component [EmployeeCard.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/employeemanagementapp/src/components/EmployeeCard.jsx) consumes the value of the context using `useContext(ThemeContext)` to dynamically style button class names.

### 15. Ticket Raising App (`ticketraisingapp` - Class Component State & Events)
- Created a separate React project [ticketraisingapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/ticketraisingapp).
- Features:
  - Form raise-complaint component [ComplaintRegister.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/ticketraisingapp/src/components/ComplaintRegister.jsx) built as a React Class Component.
  - Implements dynamic field binding via constructor-bound method `handleChange`.
  - Implements form submit prevention and alert generating logic via `handleSubmit`.
  - Generates a random Transaction ID (`NumberHolder`) on loading and displays a clean popup on submission.

---

## Main Entry Points

- All `myfirstreact` exercise components are preserved and imported in [App.js](myfirstreact/src/App.js).
- The `counterapp` exercise renders [CountPeople.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/counterapp/src/components/CountPeople.js) directly inside its main entry point [App.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/counterapp/src/App.js).
- The `cricketapp` exercise renders [ListofPlayers.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp/src/components/ListofPlayers.js) or [IndianPlayers.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp/src/components/IndianPlayers.js) conditionally based on a flag inside [App.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/cricketapp/src/App.js).
- The `officespacerentalapp` exercise renders office info and loops over more office space items inside its entry point [App.js](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/officespacerentalapp/src/App.js).
- The `eventexamplesapp` exercise renders the button triggers, counter state, and `<CurrencyConvertor />` inside its main entry [App.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/eventexamplesapp/src/App.jsx).
- The `ticketbookingapp` exercise renders the Login/Logout actions, `<Greeting />` state, and user-specific view content in [App.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/ticketbookingapp/src/App.jsx).
- The `bloggerapp` exercise renders the components dynamically inside [App.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/bloggerapp/src/App.jsx).
- The `employeemanagementapp` exercise sets up the `<ThemeContext.Provider />` and renders the list in [App.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/employeemanagementapp/src/App.jsx).
- The `ticketraisingapp` exercise renders the `<ComplaintRegister />` class component inside [App.jsx](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%205/ticketraisingapp/src/App.jsx).

## How to Run

### Run `myfirstreact` Application:
From the `Week 5/myfirstreact` folder:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Run `counterapp` Application:
From the `Week 5/counterapp` folder:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Run `cricketapp` Application:
From the `Week 5/cricketapp` folder:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Run `officespacerentalapp` Application:
From the `Week 5/officespacerentalapp` folder:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Run `eventexamplesapp` Application:
From the `Week 5/eventexamplesapp` folder:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) to view the application in the browser.

### Run `ticketbookingapp` Application:
From the `Week 5/ticketbookingapp` folder:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) to view the application in the browser.

### Run `bloggerapp` Application:
From the `Week 5/bloggerapp` folder:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) to view the application in the browser.

### Run `employeemanagementapp` Application:
From the `Week 5/employeemanagementapp` folder:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) to view the application in the browser.

### Run `ticketraisingapp` Application:
From the `Week 5/ticketraisingapp` folder:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in terminal) to view the application in the browser.

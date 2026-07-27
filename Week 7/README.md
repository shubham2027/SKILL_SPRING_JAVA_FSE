# Week 7 – Angular Student Course Portal

This directory contains a complete Angular Single Page Application (SPA) showcasing modern enterprise frontend development practices, client-side routing, protected views, reactive forms, global state management, and HTTP interceptors.

---

# Folder Structure

```
Week 7
├── README.md
└── angularapp
    ├── db.json
    ├── package.json
    ├── tsconfig.json
    └── src
        ├── main.ts
        ├── index.html
        ├── styles.css
        └── app
            ├── app.ts
            ├── app.html
            ├── app.css
            ├── app.config.ts
            ├── app.routes.ts
            ├── components
            │   ├── course-card
            │   ├── course-summary-widget
            │   ├── header
            │   └── notification
            ├── directives
            │   └── highlight.ts
            ├── guards
            │   ├── auth-guard.ts
            │   └── unsaved-changes-guard.ts
            ├── interceptors
            │   ├── auth-interceptor.ts
            │   ├── error-handler-interceptor.ts
            │   └── loading-interceptor.ts
            ├── models
            │   └── course.model.ts
            ├── pages
            │   ├── course-detail
            │   ├── course-list
            │   ├── courses-layout
            │   ├── enrollment-form
            │   ├── home
            │   ├── not-found
            │   ├── reactive-enrollment-form
            │   └── student-profile
            ├── pipes
            │   └── credit-label-pipe.ts
            ├── services
            │   ├── course.ts
            │   ├── enrollment.ts
            │   ├── loading.ts
            │   └── notification.ts
            └── store
                ├── course.actions.ts
                ├── course.effects.ts
                ├── course.reducer.ts
                └── course.selectors.ts
```

---

# Hands-on Project: Angular Student Course Portal

The directory [angularapp](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp) contains a complete Angular SPA (Single Page Application) that demonstrates modern enterprise frontend development practices with state management, routing guards, and validation.

### Key Capabilities & Architectural Features:

#### 1. State Management (NgRx)
Uses **NgRx Store** and **NgRx Effects** to manage course state globally, isolating components from direct API requests and facilitating a unidirectional data flow.
- [course.actions.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/store/course.actions.ts): Action triggers for loading courses, success, and failure.
- [course.reducer.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/store/course.reducer.ts): Pure function state transitions for handling course data, load indicators, and error tracking.
- [course.effects.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/store/course.effects.ts): Handles side-effects to load courses asynchronously from the `CourseService` backend.
- [course.selectors.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/store/course.selectors.ts): Memoized selectors to retrieve specific slices of state (`courses`, `loading`, `error`).

#### 2. Advanced Client-side Routing & Protected Views
Implemented in [app.routes.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/app.routes.ts) featuring:
- **Child Routes & Layouts**: Nesting [CourseList](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/pages/course-list/course-list.ts) and [CourseDetail](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/pages/course-detail/course-detail.ts) under `CoursesLayout`.
- **Lazy Loading**: Dynamically loads components (e.g. `EnrollmentForm`, `ReactiveEnrollmentForm`) to optimize initial bundle sizes.
- **Route Guards**: 
  - [authGuard](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/guards/auth-guard.ts): Restricts access to `/profile` and `/enroll` pages unless logged in.
  - [unsavedChangesGuard](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/guards/unsaved-changes-guard.ts): Prevents accidental navigation away from the reactive enrollment form if it has unsaved changes.

#### 3. Enterprise Forms & Validation
- **Template-driven Forms**: [enrollment-form.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/pages/enrollment-form/enrollment-form.ts) for straightforward data capture.
- **Reactive Forms & Form Arrays**: [reactive-enrollment-form.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/pages/reactive-enrollment-form/reactive-enrollment-form.ts) provides robust control, implementing dynamic fields via `FormArray` for adding/removing multiple courses, along with:
  - *Synchronous Custom Validator*: `noCourseCode` (rejects course IDs starting with 'XX').
  - *Asynchronous Custom Validator*: `simulateEmailCheck` (simulates checking if an email is already taken using a deferred Promise).

#### 4. Custom Directives, Pipes & Components
- **Reusable Card**: [course-card.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/components/course-card/course-card.ts) displays course information using `@Input()` and `@Output()` decorators, hook checks (`ngOnChanges`), and local enrollment toggling.
- **Directives**: [highlight.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/directives/highlight.ts) applying styles dynamically to DOM elements.
- **Pipes**: [credit-label-pipe.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/pipes/credit-label-pipe.ts) formats course credits into user-friendly labels.

#### 5. HTTP Interceptors & Services
Interceptors defined globally in the application context:
- [auth-interceptor.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/interceptors/auth-interceptor.ts): Inject authentication tokens.
- [loading-interceptor.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/interceptors/loading-interceptor.ts): Communicates with [loading.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/services/loading.ts) service to monitor API call durations.
- [error-handler-interceptor.ts](file:///d:/CODES/SKILL%20SPRING%20JAVA%20FSE/Week%207/angularapp/src/app/interceptors/error-handler-interceptor.ts): Handles API exceptions centrally.

---

# How to Run the Angular Application

To get the application up and running locally, follow these steps:

### 1. Prerequisites
- Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.
- Ensure the Angular CLI is installed (`npm install -g @angular/cli`).

### 2. Setup Dependencies
Navigate to the `angularapp` directory and install the necessary npm dependencies:
```bash
cd "Week 7/angularapp"
npm install
```

### 3. Run Mock Backend Service
The application relies on a mock REST API. Start the JSON Server to watch `db.json` on port 3000:
```bash
npm run server
```
This serves the mock courses database at `http://localhost:3000/courses`.

### 4. Run Angular Development Server
In a separate terminal, start the Angular development server:
```bash
npm start
```
By default, the application will boot up and be accessible at `http://localhost:4200/`.

---

# Key Learning Outcomes

After completing the exercises in this module, I understood:

- **Enterprise Angular Development (SPAs, lazy loading, sub-routing, route protection).**
- **State Management with NgRx Store & Effects.**
- **Reactive Forms (FormArrays, Custom Sync and Async Validators).**
- **Angular Services, HTTP Client, Interceptors, Pipes, and Directives.**

---

# Technologies Studied

- **Angular (v21)**
- **NgRx (Store, Effects)**
- **RxJS**
- **TypeScript**
- **JSON Server (Mock Backend)**

---

# Conclusion

This hands-on application provides a deep dive into advanced frontend practices with Angular, focusing on real-world capabilities like routing protection, robust state management with NgRx, and form-handling validation patterns.

---

# Author

**SHUBHAM KUMAR SINGH**
- **Email:** [skshubhamskkr@gmail.com](mailto:skshubhamskkr@gmail.com)
- **GitHub:** [shubham2027](https://github.com/shubham2027)
- **Education:** B.Tech Computer Science and Engineering
- **University:** Lovely Professional University

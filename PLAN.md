### 📝 Project Plan for University Schedule App

#### 1. Routing
- [x] **Set up React Router** for navigation between different views (e.g., Today’s Schedule, Weekly Schedule, Edit Schedule).
    - [x] Create route paths for `/today`, `/week`, `/next`, and `/edit`.
    - [x] Define a default route (e.g., `/today`) to serve as the home view.
    - [x] Implement a basic navigation component (or sidebar) to allow users to switch between views easily.

#### 2. Internationalization (i18n)
- [x] **Install and configure `react-i18next`** to support English and Ukrainian.
    - [ ] Define English and Ukrainian translations for all UI elements, labels, and date formats.
    - [x] Create a `LanguageSwitcher` component to allow users to toggle between languages.
    

#### 3. Display Classes (Current, Today, Weekly)
- [x] **Today’s Schedule Display**:
    - [x] Create a `TodaySchedule` component to display classes for the current day.
    - [ ] Implement logic to highlight the "current" or "next" class based on the current time.
    - [ ] Add a message like "No more classes today" if the last class has passed.

- [ ] **Weekly Schedule Display**:
    - [ ] Create a `WeekSchedule` component to show classes for each day of the week.
    - [ ] Add navigation options to move between different weeks (e.g., "Previous Week", "Next Week").

- [ ] **Next Class Display**:
    - [ ] Create a `NextClass` component that displays only the upcoming class for the day.
    - [ ] Display a message if there are no more classes for the day.

#### 4. Import JSON
- [ ] **Create Import functionality** in an `ImportExport` component:
    - [ ] Add a file input to upload a JSON file.
    - [ ] Parse and validate the imported JSON to ensure compatibility.
    - [ ] Update the app’s schedule data with the imported data.
    - [ ] Provide error handling for incorrect or corrupted JSON files.

#### 5. Edit Current Schedule
- [ ] **Implement the Schedule Editor** in a `ScheduleEditor` component:
    - [ ] Create form fields for adding, editing, and deleting class entries (course name, time, location).
    - [ ] Display the current schedule in an editable format.
    - [ ] Ensure that changes in the schedule are reflected in real-time in other components.
    - [ ] Validate user inputs to avoid time conflicts and ensure format consistency.

#### 6. Export JSON
- [ ] **Add Export functionality** in the `ImportExport` component:
    - [ ] Implement an “Export JSON” button to generate a JSON file of the current schedule.
    - [ ] Format the JSON file for easy readability and compatibility with the import function.
    - [ ] Ensure the JSON includes all necessary schedule information.

#### 7. Additional Components and Utilities
- [ ] **ClassCard Component**:
    - [ ] Create a reusable `ClassCard` component to display class details (e.g., time, location, course name).
    - [ ] Use this component in `TodaySchedule`, `WeekSchedule`, and `NextClass` for consistent styling.

- [ ] **Time Utilities**:
    - [ ] Build helper functions to handle time-based calculations (e.g., determining the next class).
    - [ ] Use these utilities in `TodaySchedule` and `NextClass` components.

#### 8. Styling and UI
- [ ] **Responsive Design**:
    - [ ] Ensure the app is fully responsive for both mobile and desktop use.
    - [ ] Use CSS framework (like Tailwind CSS or styled-components) to handle styling efficiently.

#### 9. Testing and Optimization
- [ ] **Testing**:
    - [ ] Test routing to ensure each page loads correctly and displays the appropriate information.
    - [ ] Verify correct behavior of i18n by toggling between languages.
    - [ ] Test JSON import and export for compatibility and error handling.
    - [ ] Confirm schedule editing functionality works without conflicts.
    - [ ] Check that the app correctly calculates and displays the next or current class in real-time.

- [ ] **Optimization**:
    - [ ] Optimize time-checking logic to prevent unnecessary re-renders.
    - [ ] Ensure that language switching doesn’t cause performance issues.

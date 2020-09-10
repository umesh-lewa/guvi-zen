Collection Relationships

One Student -> Can have multiple courses
One Course -> Can be taken by many students
Relationship = Many to Many
Student Document will have reference to Multiple Course ObjectIDs
Course Document will have reference to Multiple Student ObjectIDs

One Student -> Can have multiple tasks
Relationship = One to Many
Student Document will have reference to Multiple dailyTasks ObjectIDs

One Student -> Can have multiple Codekata entries
Relationship = One to Many
Student Document will have reference to Multiple Codekata ObjectIDs

One Student -> Can have multiple Companydrives
Relationship = One to Many
Student Document will have reference to Multiple CompanyDrives ObjectIDs

One Student -> Can have multiple atttendances
Relationship = One to Many
Student Document will have reference to Multiple atttendance ObjectIDs

Multiple Students -> Can belong to One mentor
Relationship = Many to One
Mentors Document will have reference to Multiple Student ObjectIDs
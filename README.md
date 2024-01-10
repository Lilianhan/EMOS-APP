Century Butler APP (Employee Side Apps)
The Century Butler APP is a mobile application designed for employee use, featuring a range of functionalities. Key highlights include:

Framework and Compilation:

Utilizes Uni-app front-end application framework for cross-platform compatibility.
Compiles and publishes the app to iOS, Android, and WeChat mini app.
Security Integration:

Integrates SpringBoot with Shiro+JWT to implement the RBAC permission model.
Automatically renews tokens to address expiration issues.
Message Handling:

Utilizes RabbitMQ to cache message data.
Implements asynchronous threads for staggered database writes, optimizing message loading.
Data Visualization:

Incorporates VUE Graphic Page Statistics to display employee data graphics.
Facial Recognition:

Installs a facial recognition mirror in Docker.
Implements face recognition technology for the check-in function.
API Documentation and Testing:

Uses Swagger to build REST APIs and facilitate web method testing.
Location Services:

Leverages Tencent location service to obtain GPS location and address for check-in and work hours validation.
Online Meeting Integration:

Utilizes Tencent Cloud TRTC service and integrates SDK packages for online meeting functions.



Development Environment Setup
Databases
MySQL: Ensure MySQL is installed and configured for the relational database needs of the application.
MongoDB: Set up MongoDB to handle document-oriented storage requirements.
Redis: Configure Redis for caching and session management.
Tools
Maven: Use Maven for efficient project management and dependency resolution.
HBuilderX: Employ HBuilderX as the primary IDE for UNI-APP mobile development.
VirtualBox: Set up a VirtualBox with CentOS to create a virtual environment for development.
Backend Technologies
Spring Boot Project:

Configure connections to MySQL, MongoDB, and Redis.
Leverage Maven for streamlined project management.
Security Features:

Create custom exception classes for error handling.
Wrap web response objects for consistency.
Utilize Swagger for REST API documentation.
Implement defenses against Cross-Site Scripting (XSS) attacks.
Integrate Shiro and JWT for robust authentication.
User Management:

Develop user registration and login functionality.
Implement the registration of super administrators.
Incorporate Role-Based Access Control (RBAC) for precise permission management.
Frontend Development with UNI-APP
Mobile App Development:

Create intuitive login and registration pages.
Implement registration of new users with emphasis on business logic.
Develop super administrator registration functionality.
Define global paths and encapsulate Ajax requests for smooth interactions.
Tab Navigation and Cloud Services:

Implement a bottom Tab navigation for the mobile app.
Set up and integrate Tencent Cloud Object Storage Service.
Design and Implementation of Features:

Design an engaging homepage with a hero area and column navigation.
Develop face recognition for the sign-in functionality.
Implement caching for system constant data.
Integrate Shiro authentication and authorization for security.
Mobile App Development
Attendance and Face Recognition:

Implement face recognition for sign-in on the backend, frontend, and mobile.
Develop functionality for creating new employee face model data.
Design and develop pages for successful attendance.
System Notifications and Meeting Management:

Implement a robust system notification module.
Develop comprehensive meeting management functionality.
Online Video Conferencing:

Implement an effective online video conferencing feature.
Deployment
Dockerization:

Containerize the face recognition module in Docker for scalability.
System Testing:

Thoroughly test the entire system for functionality and performance.

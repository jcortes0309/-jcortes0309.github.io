# Convo Buddy
<img src="public/img/screenshots/convo_buddy.png" alt="Convo Buddy" width="250px"/>
######
[Live Project](54.148.11.254:3000)   |   [Overview](https://github.com/jcortes0309/mongo_crm/#overview)   |   [What I Used](https://github.com/jcortes0309/mongo_crm#what-i-used)   |   [MVP](https://github.com/jcortes0309/mongo_crm#mvp-minimum-viable-product)   |   [Challenges](https://github.com/jcortes0309/mongo_crm#challenges--solutions)   |   [Code](https://github.com/jcortes0309/mongo_crm#code-snippets)   | [Screenshots](https://github.com/jcortes0309/mongo_crm#screenshots)   | [Contribute](https://github.com/jcortes0309/mongo_crm#contribute-to-convo-buddy)

## Overview:
Convo Buddy is a free tool that helps ESL teachers get the conversation started. Features more than 250 hand-picked questions intended to help English language learners practice speaking. Questions can be generated one at a time or viewed all at once.

##What I used:
**Languages:**  
* HTML5
* CSS
* JavaScript (Node.js)

**Frameworks:**  
* Angular
* Bootstrap
* Express

**Other:**  
* MongoDB
* Apache
* Amazon Web Services EC2
* Font Awesome


## MVP (Minimum Viable Product):
My priority was to create a tool that ESL teachers would genuinely find useful. Thus, my priority in this project was a straightforward, polished product that would work well across all modern devices and browsers.

**Initial MVP**
* Robust application that looks and functions consistently across all devices and browsers (tested for real-world use)
* Individual display of questions and ability to go back, advance, and shuffle the current collection
* View for all of the available questions, organized by category
* Ability for users to send in their own questions if they want to contribute

**Stretch Goals**
* Ability for users to create an account, log in, and modify questions and categories however they pleased. Changes would be visible while they were logged in and revert to the standard after logging out
* Even tighter animations and even heavier testing to ensure perfect view and functionality across all devices

## Challenges & Solutions:
Below are some of the most notable challenges I came across while making this project:

1.  **Challenge:**
    Creating a database schema that would keep not only the questions and categories organized, but also allow for the stretch goal of user modification later down the line if time allowed.

    **Solution:**
    In the schema, both the categories and the questions include 'userId' and 'parentId' fields. The idea is that if a user were logged in and wanted to modify one, a copy would be created and linked to both the user and the original version. From that point forward, the user would see their modified version of that category or question instead of the original, and it could later be modified again or deleted. Essentially, the user would have a personalized overlay of questions and categories that would sit on top of the default selection.

2.  **Challenge:**
    Maintaining the state the searched questions and the currently selected question between state changes.

    **Solution:**
    I ended up using an Angular service to store the questions array and the current index of the array. This opened up space in my controller and adheres to Angular best practices by avoiding relying on its global scope ($rootScope) to hold on to data.

3.  **Challenge:**
    Having the categories menu display the categories that are included in the current search as selected, regardless of state change or if the user makes modifications and closes the menu without searching.

    **Solution:**
    The architecture of the questions and categories in my app involves a lot of nested objects. At first, I tried to simply make a new variable that referenced the categories, but then I realized that objects in JavaScript reference by value (meaning that my created variable was pointing at the same set of objects that were being modified, thus modifying the new variable). My solution was to utilize Angular's 'deep copy' method to take a snapshot of the object when the categories menu was opened and then use that if I needed to restore the original state later on.

4. **Challenge:**
    Implementing the fade animation on the individual question when going forwards or backwards.

    **Solution:**
    This was tricky because the way the app is set up, the searched questions are all put into a big array and then rendered on the screen one at a time. Unfortunately, cycling through the contents of an array that way isn't animatable (at least in Angular), so what I had to find a way to render the questions that was. My solution was to create a separate array exclusively for the currently displayed question and animate its entrance and exit instead.

## Code Snippets

Mongoose schema for categories and questions:

Search by category functionality:

Grab the requested questions from the database:


## Screenshots
![What is this?](public/img/screenshots/wit_modal.png)
![Main page](public/img/screenshots/main.png)
![Categories](public/img/screenshots/categories.png)
![Questions](public/img/screenshots/questions.png)
![Tablet](public/img/screenshots/tablet.png)
![Phone](public/img/screenshots/mobile.png)


##Project History
01/05/2017 - Project Completion and Deployment  
12/19/2016 - Project Start

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Lesson.create([
    { id: 1, title: "Frontend course", description: "become hero from zero.HTML5,CSS3,Javascript and React.js course.", image: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?size=626&ext=jpg&ga=GA1.2.2002534242.1607677178", user_id: 1, charge: 0}
    { id: 2, title: "Node.js and React.js course", description: "Node.js and React.js course. In this lesson, you will make ECsite with Node.js and React.js", image: "https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg?size=626&ext=jpg&ga=GA1.2.2002534242.1607677178", user_id: 1, charge: 0}    
])
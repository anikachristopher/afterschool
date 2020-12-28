# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Schedule.delete_all

malik = Child.create(name: "Malik", age: "9", grade: "fourth")
malik.schedules.create([
    {weekday: "Monday", subject: "Math", content: "Completed chapter 1 of Go Math"},
    {weekday: "Monday", subject: "Reading", content: "Completed chapter 1 of Lost"},
    {weekday: "Monday", subject: "Creative Writing", content: "Wrote a story about my favorite things to eat"},
    {weekday: "Tuesday", subject: "Math", content: "Completed chapter 2 of Go Math"},
    {weekday: "Tuesday", subject: "Reading", content: "Read chapter 2 of Lost"},
    {weekday: "Tuesday", subject: "Creative Writing", content: "Wrote a summary aboout chapter 2 of Lost"},
    {weekday: "Wednesday", subject: "Math", content: "Practiced mental math with multiplication"},
    {weekday: "Wednesday", subject: "Reading", content: "Read chapter 3 & 4 of Lost"},
    {weekday: "Wednesday", subject: "Creative Writing", content: "Wrote 5 paragraphs using 5 words from my Word Search book"},
    {weekday: "Thursday", subject: "Math", content: "Completed chapter 3 of Go Math"},
    {weekday: "Thursday", subject: "Reading", content: "Read chapter 5 of Lost"},
    {weekday: "Thursday", subject: "Creative Writing", content: "Wrote a summary aboout chapter 5 of Lost"},
    {weekday: "Friday", subject: "Math", content: "Practiced mental math with division"},
    {weekday: "Friday", subject: "Reading", content: "Read chapter 6 & 7 of Lost"},
    {weekday: "Friday", subject: "Creative Writing", content: "Wrote 5 paragraphs using 5 words from my Word Search book"},


])


# Schedule.delete_all

# malik = Child.create(name: "Malik", age: "9", grade: "fourth")
# john = Child.create(name: "John", age: "8", grade: "third")
# amanda = Child.create(name: "Amanda", age: "10", grade: "fourth")

# malik.schedules.create([
#     {weekday: "Monday", subject: "Math", content: "Completed chapter 1 of Go Math"},
#     {weekday: "Tuesday", subject: "Math", content: "Completed chapter 2 of Go Math"},
#     {weekday: "Wednesday", subject: "Reading", content: "Read chapter 3 & 4 of Lost"},
#     {weekday: "Thursday", subject: "Creative Writing", content: "Wrote a summary aboout chapter 5 of Lost"},
#     {weekday: "Friday", subject: "Creative Writing", content: "Wrote 5 paragraphs using 5 words from my Word Search book"}
# ])

# john.schedules.create([
#     {weekday: "Monday", subject: "Reading", content: "Completed chapter 1 of Lost"},
#     {weekday: "Tuesday", subject: "Reading", content: "Read chapter 2 of Lost"},
#     {weekday: "Wednesday", subject: "Math", content: "Practiced mental math with multiplication"},
#     {weekday: "Thursday", subject: "Math", content: "Completed chapter 3 of Go Math"},
#     {weekday: "Friday", subject: "Math", content: "Practiced mental math with division"}
# ])

# amanda.schedules.create([
#     {weekday: "Monday", subject: "Creative Writing", content: "Wrote a story about my favorite things to eat"},
#     {weekday: "Tuesday", subject: "Creative Writing", content: "Wrote a summary aboout chapter 2 of Lost"},
#     {weekday: "Wednesday", subject: "Creative Writing", content: "Wrote 5 paragraphs using 5 words from my Word Search book"},
#     {weekday: "Thursday", subject: "Reading", content: "Read chapter 5 of Lost"},
#     {weekday: "Friday", subject: "Reading", content: "Read chapter 6 & 7 of Lost"}
# ])



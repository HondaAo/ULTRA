# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Course.create([
    { title: "Ninja", charge: 9.99 },
    { title: "Golem", charge: 19.99 },
    { title: "Dragon", charge: 29.99 },
])
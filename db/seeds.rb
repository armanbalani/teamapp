# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'



image_urls = []
profile_images = []

unsplash_images = Unsplash::Photo.search('web design', rand(1..10), 80)

unsplash_images.each do |image|
    if image.width / image.height >= 1
        image_urls << image.urls.regular
        profile_images << image.user.profile_image.large
    end
end


20.times do |id|
    Blog.create!(
        title: Faker::Lorem.sentence(word_count: rand(5..6)).chomp('.'),
        description: Faker::Lorem.paragraph_by_chars(number: rand(105..133)),
        author: Faker::Name.name, 
        image_url: image_urls.pop,
        publish_date: Faker::Date.between(from: '2021-06-23', to: '2021-08-20'),
        author_image: profile_images.pop
    )
end











#   create_table "blogs", force: :cascade do |t|
#     t.string "title"
#     t.text "description"
#     t.string "author"
#     t.string "image_url"
#     t.date "publish_date"
#     t.string "author_image"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end
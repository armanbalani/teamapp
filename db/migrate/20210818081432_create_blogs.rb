class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :description
      t.string :author
      t.string :image_url
      t.date :publish_date

      t.timestamps
    end
  end
end

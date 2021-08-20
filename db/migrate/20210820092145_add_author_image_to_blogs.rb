class AddAuthorImageToBlogs < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :author_image, :string
  end
end

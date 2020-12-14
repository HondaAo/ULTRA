class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :description
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end

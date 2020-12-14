class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :image
      t.string :title
      t.string :video
      t.belongs_to :lesson, foreign_key: true
      t.timestamps
    end
  end
end

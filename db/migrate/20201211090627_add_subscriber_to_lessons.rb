class AddSubscriberToLessons < ActiveRecord::Migration[6.0]
  def change
    add_column :lessons, :charge, :integer, default: 0
  end
end

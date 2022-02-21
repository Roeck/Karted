class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :product_id
      t.integer :rating
      t.string :comment

      t.timestamps
    end
  end
end

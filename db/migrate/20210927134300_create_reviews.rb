class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :description
      t.integer :score
      t.references :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end

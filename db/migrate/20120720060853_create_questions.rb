class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :votes
      t.text :content

      t.timestamps
    end
  end
end

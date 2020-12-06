class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :weekday
      t.string :subject
      t.string :content
      t.belongs_to :child
      t.timestamps
    end
  end
end

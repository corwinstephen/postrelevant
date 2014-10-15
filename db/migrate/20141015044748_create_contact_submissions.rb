class CreateContactSubmissions < ActiveRecord::Migration
  def change
    create_table :contact_submissions do |t|
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end

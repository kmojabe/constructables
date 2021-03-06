# == Schema Information
#
# Table name: steps
#
#  id         :bigint(8)        not null, primary key
#  project_id :integer          not null
#  title      :string           not null
#  body       :string           not null
#  step_index :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord
  validates :project_id, :title, :body, :step_index, presence: true
  
  belongs_to :project
end

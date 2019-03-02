class Joke < ApplicationRecord
  resourcify
  belongs_to :user
end

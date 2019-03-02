class User < ApplicationRecord
  rolify
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable,
  :confirmable

  after_create :assign_default_role
  
  has_many :jokes

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self, *args).deliver_later
  end

  def assign_default_role
    self.add_role(:user) if self.roles.blank?
  end

  def admin?
    has_role? :admin
  end

  def moderator?
    has_role? :moderator
  end

  def user?
    has_role? :user
  end
end

Rails.application.routes.draw do
  devise_for :users
  resources :jokes
  root to: 'pages#index'
end

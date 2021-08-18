Rails.application.routes.draw do
  resources :blogs, only: [:index, :show] do
  end
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

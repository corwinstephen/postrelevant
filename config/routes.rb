Postrelevant::Application.routes.draw do
  match 'contact', to: 'pages#contact', via: [:get, :post]
  get 'approach', to: 'pages#approach'

  root 'pages#index'
end

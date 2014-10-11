Postrelevant::Application.routes.draw do
  match 'contact', to: 'pages#contact', via: [:get, :post]

  root 'pages#index'
end

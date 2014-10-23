Postrelevant::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  match 'contact', to: 'pages#contact', via: [:get, :post]
  get 'approach', to: 'pages#approach'

  resources :contact_submissions, only: [:create] do
    collection do
      get 'thanks'
    end
  end

  root 'pages#index'
end

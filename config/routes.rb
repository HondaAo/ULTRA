Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'page#index'
  post 'signup', to: 'registrations#signup'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'get_lessons', to: 'lessons#get_lessons'
  get 'get_lessons/:id', to: 'lessons#get_lesson'
  post 'lessons', to: 'lessons#create'
  post 'register_lesson/:id', to: 'users#register'
  get 'mylessons', to: 'users#mylessons'
  get 'get_user/:id', to: 'users#get_user'
  get 'search_lesson/:param', to: 'lessons#search'
  get 'get_course/:id', to: 'courses#get_course'
  post 'subscription', to: 'payments#create'
  post 'create_video', to: 'videos#create'
  get '*path', to: 'page#index', via: :all
end

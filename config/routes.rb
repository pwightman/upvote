Upvote::Application.routes.draw do
  resources :questions do
    get "upvote", on: :member   # This creates the route /questions/:id/upvote
    get "downvote", on: :member  # This creates the route /questions/:id/downvote
  end
end

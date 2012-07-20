Upvote::Application.routes.draw do
  # the resources method creates a bunch of RESTful routes for you. One of them
  # is /questions/:id/edit, yes? Well you can create your own custom RESTful actions
  # by passing a block into the method and making your own get/post/put/delete which
  # indicate the HTTP method used. You could use post just as easily if that's your
  # preference.
  resources :questions do
    get "upvote", on: :member    # This creates the route GET /questions/:id/upvote
    get "downvote", on: :member  # This creates the route GET /questions/:id/downvote
  end
end

# Now let's look at these methods, go to app/controllers/questions_controller.rb

class QuestionsController < ApplicationController
  before_filter :get_question, only: [:upvote, :downvote]

  # Your typical index action
  def index
    @questions = Question.all
  end

  # If someone goes to this URL, then you get an upvote.
  def upvote
    # Increase the vote count. You would probably also want to perform other checks to
    # make sure the same IP doesn't upvote multiple times, etc.
    @question.votes += 1
    if @question.save
      # Render out the new vote count.
      render json: { votes: @question.votes } # Sends back a 200 status, jQuery's success callback will be called
    else
      # You could also render back some error JSON if you wanted
      head :bad_request # Sends back a 403 status, jQuery's error callback will be called
    end
  end

  # Same stuff here
  def downvote
    @question.votes -= 1
    if @question.save
      render json: { votes: @question.votes }  # Sends back a 200 status, jQuery's success callback will be called
    else
      head :bad_request # Sends back a 403 status, jQuery's error callback will be called
    end
  end

  # Head over to app/views/questions/index.html.erb

  private

    def get_question
      @question = Question.find(params[:id])
    end
end

class QuestionsController < ApplicationController
  before_filter :get_question, only: [:upvote, :downvote]

  def index
    @questions = Question.all
  end

  def upvote
    @question.votes += 1
    if @question.save
      render json: { votes: @question.votes } # Sends back a 200 status, jQuery's success callback will be called
    else
      head :bad_request # Sends back a 403 status, jQuery's error callback will be called
    end
  end

  def downvote
    @question.votes -= 1
    if @question.save
      render json: { votes: @question.votes }  # Sends back a 200 status, jQuery's success callback will be called
    else
      head :bad_request # Sends back a 403 status, jQuery's error callback will be called
    end
  end

  private

    def get_question
      @question = Question.find(params[:id])
    end
end

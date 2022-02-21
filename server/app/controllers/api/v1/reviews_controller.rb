class Api::V1::ReviewsController < ApplicationController
  before_action :set_product, except: [:destroy]

  def index
    render json: @product.reviews
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def create
    @review = @product.reviews.new(review_params)
    @review.save
    render json: @product
  end

  private

    def set_product
      @product = Product.find(params[:product_id])
    end

    def review_params
      params.require(:review).permit(:product_id, :rating, :comment)
    end

end
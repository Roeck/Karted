class Product < ApplicationRecord
  has_many :reviews

  def update_product
      self.numReviews = self.reviews.length;

    ratingsArray = []
    self.reviews.each do |review|
        ratingsArray << review.rating
    end

    if ratingsArray != []
      self.rating = (ratingsArray.reduce(:+) / self.reviews.length.to_f)
    end
      self.save
    end

end
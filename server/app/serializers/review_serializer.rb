class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :rating, :comment
end
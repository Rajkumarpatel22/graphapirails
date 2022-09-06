module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :content, String, null: true
    #  remove the following line
    #  field :user_id, Integer, null: false
    #  add the next line
    field :user, Types:UserType, null:false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users,[Types::UserType],null: false,
    description: 'get Users'
    def users
      User.all
    end
    field :posts,[Types::PostType],null: false,
    description: 'get Posts'
    def posts 
      Post.all
    end
    field :post, Types::PostType, null: false do
      argument :id, ID, required: true
      description 'find post by id'
    end
    def post(id:)
      Post.find(id)
    end
    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
      description 'find user by id'
    end
    def user(id:)
      user = User.find(id)
    end
  end
end

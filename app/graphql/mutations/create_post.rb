class Mutations::CreatePost < Mutations::BaseMutation
  argument :username, String, required: true
  argument :email, String, required: true
  argument :id, String, required: true
  argument :content, String, required: true
  argument :title, String, required: true

  field :user, Types::UserType, null: false
  field :post, Types::PostType, null: false
  field :errors, [String], null: false

  def resolve(id: ,content:, title:)
    user = User.find(id)
    post = user.posts.new(content: content,  title: title)

    if post.save
      { post: post, errors: [] }
    else
      { post: nil, errors: post.errors.full_messages }
    end
  end
end
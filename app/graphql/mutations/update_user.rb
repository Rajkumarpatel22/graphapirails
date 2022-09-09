class Mutations::UpdateUser < Mutations::BaseMutation
  argument :id, ID , Integer, required: true
  argument :username, String, required: true
  argument :email, String, required: true

  field :user, Types::UserType, null: false
  field :errors, [String], null: false

  def resolve(id:, username:, email:)
    user = User.find(id)
    user.update(username: username,  email: email)


    if user.update(username: username,  email: email)
      { user: user, errors: [] }
    else
      { user: nil, errors: user.errors.full_messages }
    end
  end
end
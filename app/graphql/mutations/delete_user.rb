class Mutations::DeleteUser < Mutations::BaseMutation
  argument :id, ID ,Integer, required: true

  field :user, Types::UserType, null: false
  field :errors, [String], null: false

  def resolve(id:)
    user = User.find(id)

    if user.destroy
      { user: user, errors: [] }
    else
      { user: nil, errors: user.errors.full_messages }
    end
  end
end
module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :delete_user, mutation: Mutations::DeleteUser
    field :update_user, mutation: Mutations::UpdateUser
  end
end

import React from "react"
import { Card, Avatar } from "antd"
import UserInfoGroup from "./InfoGroup"
import UserActions from "./Actions"

const UserCard = ({
  user,
  favoriteStatus,
  toggleFavorite,
  handleEdit,
  deleteCard
}) => {
  const AvatarContainer = () => (
    <div className="avatar-container">
      <Avatar className="user-avatar" size={180} src={user.avatarUrl} />
    </div>
  )

  return (
    <Card
      key={user.id}
      hoverable
      className="user-card"
      cover={<AvatarContainer />}
    >
      <div className="user-details">
        <h3>{user.name}</h3>
        <UserInfoGroup user={user} />
        <UserActions
          user={user}
          favoriteStatus={favoriteStatus[user.id]}
          toggleFavorite={toggleFavorite}
          handleEdit={handleEdit}
          deleteCard={deleteCard}
        />
      </div>
    </Card>
  )
}

export default UserCard

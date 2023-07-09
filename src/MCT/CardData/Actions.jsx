import React from "react"
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteFilled
} from "@ant-design/icons"

const UserActions = ({
  user,
  favoriteStatus,
  toggleFavorite,
  handleEdit,
  deleteCard
}) => {
  return (
    <div className="user-actions">
      {favoriteStatus ? (
        <HeartFilled
          className="action-button"
          style={{
            color: "red",
            transition: "color 0.3s"
          }}
          onClick={() => toggleFavorite(user.id)}
        />
      ) : (
        <HeartOutlined
          className="action-button"
          style={{
            color: "red",
            transition: "color 0.3s"
          }}
          onClick={() => toggleFavorite(user.id)}
        />
      )}
      <EditOutlined
        className="action-button"
        style={{
          color: "black"
        }}
        onMouseEnter={({ currentTarget }) => {
          currentTarget.style.color = "blue"
        }}
        onMouseLeave={({ currentTarget }) => {
          currentTarget.style.color = "black"
        }}
        onClick={() => handleEdit(user)}
      />
      <DeleteFilled
        className="action-button"
        style={{
          color: "black"
        }}
        onMouseEnter={({ currentTarget }) => {
          currentTarget.style.color = "blue"
        }}
        onMouseLeave={({ currentTarget }) => {
          currentTarget.style.color = "black"
        }}
        onClick={() => deleteCard(user.id)}
      />
    </div>
  )
}

export default UserActions

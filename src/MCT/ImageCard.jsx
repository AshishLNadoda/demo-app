import { useEffect, useState } from "react"
import { Form } from "antd"
import axios from "axios"
import UserCard from "./CardData/Card"
import UserModal from "./CardData/Modal"
import "./ImageCard.css"

const ImageCard = () => {
  const [userData, setUserData] = useState([])
  const [favoriteStatus, setFavoriteStatus] = useState({})
  const [editingUser, setEditingUser] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      const usersWithAvatars = data.map(user => ({
        ...user,
        avatarUrl: `https://api.dicebear.com/6.x/avataaars/svg?seed=${getRandomSeed()}`
      }))
      setUserData(usersWithAvatars)
    } catch (error) {
      console.log("Error:", error)
    }
  }

  const getRandomSeed = () => {
    const seeds = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ]
    const randomIndex = Math.floor(Math.random() * seeds.length)
    return seeds[randomIndex]
  }

  const toggleFavorite = userId => {
    setFavoriteStatus(prevState => ({
      ...prevState,
      [userId]: !prevState[userId]
    }))
  }

  const deleteCard = userId => {
    setUserData(prevData => prevData.filter(user => user.id !== userId))
  }

  const handleEdit = user => {
    setEditingUser(user)
    setIsModalVisible(true)
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website
    })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEditingUser(null)
    form.resetFields()
  }

  const handleSave = values => {
    const updatedUser = {
      ...editingUser,
      name: values.name,
      email: values.email,
      phone: values.phone,
      website: values.website
    }
    setUserData(prevData =>
      prevData.map(user => (user.id === updatedUser.id ? updatedUser : user))
    )
    setIsModalVisible(false)
    setEditingUser(null)
    form.resetFields()
  }

  const renderLoadingMessage = () => {
    return (
      <div className="sk-circle">
        {[...Array(12)].map((_, index) => (
          <div key={index} className={`sk-circle${index + 1} sk-child`} />
        ))}
      </div>
    )
  }

  const renderUserCards = () => {
    return (
      <div className="image-card">
        {userData.map(user => (
          <UserCard
            key={user.id}
            user={user}
            favoriteStatus={favoriteStatus}
            toggleFavorite={toggleFavorite}
            handleEdit={handleEdit}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    )
  }

  return (
    <>
      {userData.length === 0 ? renderLoadingMessage() : renderUserCards()}
      {editingUser && (
        <UserModal
          visible={isModalVisible}
          user={editingUser}
          form={form}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      )}
    </>
  )
}

export default ImageCard

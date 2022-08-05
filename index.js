if (process.env.NODE_ENV === "development") require("dotenv").config()

const fetch = require("node-fetch")
const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 5000

const twitter_access_token = process.env.TWITTER_ACCESS_TOKEN

if (!twitter_access_token)
  throw new Error("Twitter access token is not defined in the environment.")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/profile/by-id/:userId", async (req, res) => {
  const userId = req.params.userId

  if (!userId)
    res.status(400).json({
      error: "Missing or invalid user ID",
    })

  const response = await fetch(`https://api.twitter.com/2/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${twitter_access_token}`,
    },
  })

  const data = await response.json()

  if (data.data) {
    res.json({
      message: "User found",
      user: data.data,
    })
  } else {
    res.json({
      message: "No such user",
    })
  }
})

app.get("/profile/by-username/:username", async (req, res) => {
  const username = req.params.username

  if (!username)
    res.status(400).json({
      error: "Missing or invalid username",
    })

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/${username}`,
    {
      headers: {
        Authorization: `Bearer ${twitter_access_token}`,
      },
    }
  )

  const data = await response.json()

  if (data.data) {
    res.json({
      message: "User found",
      user: data.data,
    })
  } else {
    res.json({
      message: "No such user",
    })
  }
})

app.use((req, res) => {
  res.status(404).json({
    error: "No such resource",
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})

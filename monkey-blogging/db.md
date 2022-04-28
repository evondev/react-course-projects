# Post

- id
- title
- slug
- image
- createdAt
- status: 1(approved) 2(pending) 3(reject)
- hot(true or false)
- content
- userId
- categoryId

# Category

- id
- name
- slug
- status: 1(approved) 2(unapproved)
- createdAt

# User

- id
- displayName
- email
- password
- avatar
- status: 1(active) 2(pending) 3(ban)
- role: 1(Admin) 2(Mod) 3(User)
- permissions: "ADD_POST"
- createdAt

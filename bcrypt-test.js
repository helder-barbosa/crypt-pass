const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync('fullstack', salt)

console.log(bcrypt.compareSync('fullstack', hash))
module.exports = (req, res) => {
    const users = require('../GET.json')

    const user = users.find(user => user.id == req.params.user_id)

    res.json({
        id: user.id,
        name: user.name
    })
}
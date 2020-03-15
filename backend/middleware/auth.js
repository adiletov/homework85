const User = require('../modules/user');


const auth = async (req, res, next) => {
    const AuthorizationHeader = req.get('Authorization');

    if (!AuthorizationHeader) {
        return res.status(401).send({error: 'Ой ой что пошло не так!'})
    }

    const [type, token] = AuthorizationHeader.split(' ');

    if (type !== 'Token' || !token) {
        return res.status(401).send({error: 'Ой ой что пошо не так!'})
    }

    const user = await User.findOne({token});

    if (!user) {
        res.status(401).send({error: 'Unauthorized'})
    }
    req.user = user;
    next();
};

module.exports = auth;
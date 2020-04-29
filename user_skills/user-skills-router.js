const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const UserSkills = require('./user-skills-model')

router.get('/', restricted, (req, res) => {
    const userId = req.decodedJwt.userId;
    USerSkills
    .findSkills(userId)
    .then(skills => {
        console.log('User skills')
        console.log(skills);
        res.json(skills)
    })
    .catch(err => res.send(err))
})


router.post('/:skillID', restricted, (req, res) => {
    const { skillId } = req.params;
    const email = req.decodedJwt.email;
    const userId = req.decodedJwt.userId;
    const skill = req.body;
    USerSkills
    .savePuzzle(skill, email)
    .then(skill => {
        res.json(skill)
        console.log(email)
    })
    .catch(err => res.send(err))
})

module.exports = router;

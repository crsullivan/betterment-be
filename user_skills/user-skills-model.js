const db = require('../knex/dbconfig')

module.exports = {
    findSkills,
    saveSkill,
    findUserSkillsByID
};

function findSkills(userId) {
    return db('user_skills').where({'user_id': userId});
}

async function saveSkill(skill, email) {
    
    return await db('user_skills')
        .insert({
            ...skill,
        }).catch(e => {
            throw e;
        })
    }

function findUserSkillsByID(email) {
    return db('skills as s')
    .select('s.*')
    .where({ skillID })}

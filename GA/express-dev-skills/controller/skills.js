var Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll() 
    });
}


//--- not working properly---
function create(req, res) {
         Skill.create(req.body);
            return res.redirect('/skills')
};



   module.exports = {
     index,
     create
 };
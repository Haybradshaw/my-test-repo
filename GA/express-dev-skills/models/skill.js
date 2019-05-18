const skills = [
    {skill:'pingpong'},
    {skill:'socer'},
    {skill:'woodwork'},
    {skill:'cooking'}
];

module.exports = {
    getAll,
    create
};

function getAll() {
    return skills;
}; 

function create(skill) {
    skills.push(skill)
};
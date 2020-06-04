const fs = require('fs')
const data = require('./data.json')
const { age } = require('./utils')
const Intl = require('intl')

exports.initial =  function(req, res){
    return res.render('teacher/Teachers')
}

exports.create = function(req,res){
    return res.render('teacher/create')
}

exports.show = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Professor não localizado')



    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        schooling: '',
        lesson: foundTeacher.school_subjects.split(',') ,
        create_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.create_at)
    }

    return res.render('teacher/show', { teacher })
}

//cria o novo professor.
exports.post = function(req, res){

    const keys = Object.keys(req.body)
    /* validaçao */
    for(let key of keys){
        if(req.body[key] == "") {
            return res.send('Por favor preencher todos os campos')
        }
    }

    /* descontruindo objeto */
    let { avatar_url, name , birth, schooling, typeclass, school_subjects} = req.body
    
    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)
    const create_at = Date.now()

    /* savamento de dados */
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        typeclass,
        school_subjects,
        create_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('erro ao requisitar dados')

        return res.redirect('/teachers')
    })

}
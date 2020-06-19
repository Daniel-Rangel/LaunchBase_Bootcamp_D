const fs = require('fs')
const data = require('../data.json')
const { age ,  graduation, date } = require('../utils')
const Intl = require('intl')

exports.initial =  function(req, res){
    return res.render('teacher/teachers', {teachers : data.teachers })
}

exports.create = function(req,res){
    return res.render('teacher/create')
}

exports.show = function(req, res){
    const { id } = req.params

    console.log(id)

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('parou não localizado')


    
    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        schooling: graduation(foundTeacher.schooling),
        lesson: foundTeacher.school_subjects.split(',') ,
        create_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.create_at)
    }

    return res.render('teacher/show', { teacher })
}


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

exports.edit = function(req, res){

    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("teacher not found")

    

    const teacher ={
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    res.render('teacher/edit', {teacher})
}


exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex){
        if(id == teacher.id){
            index = foundIndex
            return true
        }
    })

    if(!foundTeacher) return res.send("teacher not found")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile('data.json', JSON.stringify(data,null,2) , function(err){
        if(err) return res.send('write error')
    })

    res.redirect(`/teachers/${id}`)
}

exports.delete = function(req, res){
    const { id } = req.body
    console.log(id)
    const filteredTeacher = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeacher

    fs.writeFile('data.json', JSON.stringify(data,null,2), function(err){
        if(err) return res.send('erro ao deletar')
    })

    return res.redirect('/teachers')
}
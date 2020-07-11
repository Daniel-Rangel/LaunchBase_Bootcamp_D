const fs = require('fs')
const data = require('../data.json')
const { age , date, grade } = require('../utils')
const Intl = require('intl')

exports.initial =  function(req, res){
    return res.render('student/students', {students : data.students })
}

exports.create = function(req,res){
    return res.render('student/create')
}

exports.show = function(req, res){
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundStudent) return res.send('Professor não localizado')


    
    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        schooling: grade(foundStudent.schooling)
    }

    return res.render('student/show', { student })
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
    let { avatar_url, name , birth, email, schooling, hours} = req.body
    
    birth = Date.parse(birth)

    let id = 1
    const laststudents = data.students[data.students.length - 1]
    if(laststudents){
        id = laststudents.id + 1
    }

    /* savamento de dados */
    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        email,
        schooling,
        hours
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('erro ao requisitar dados')

        return res.redirect(`students/${id}`)
    })

}

exports.edit = function(req, res){

    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundStudent) return res.send("student not found")

    

    const student ={
        ...foundStudent,
        birth: date(foundStudent.birth)
    }

    res.render('student/edit', {student})
}

exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, foundIndex){
        if(id == student.id){
            index = foundIndex
            return true
        }
    })

    if(!foundStudent) return res.send("student not found")

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile('data.json', JSON.stringify(data,null,2) , function(err){
        if(err) return res.send('write error')
    })

    res.redirect(`/students/${id}`)
}

exports.delete = function(req, res){
    const { id } = req.body
    console.log(id)
    const filteredStudent = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudent

    fs.writeFile('data.json', JSON.stringify(data,null,2), function(err){
        if(err) return res.send('erro ao deletar')
    })

    return res.redirect('/students')
}
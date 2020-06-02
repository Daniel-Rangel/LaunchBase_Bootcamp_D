const fs = require('fs')
const data = require('./data.json')

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

        return res.redirect('/Teachers')
    })

}
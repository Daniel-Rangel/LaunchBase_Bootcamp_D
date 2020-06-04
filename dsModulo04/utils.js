module.exports = {
    age: function(times){
        const today = new Date()
        const dateBirth = new Date(times)

        let year = today.getFullYear() - dateBirth.getFullYear()
        const month = today.getMonth() - dateBirth.getMonth()

        if(month < 0 || month == 0 && today.Date() <= dateBirth.Date() ){
            year = year - 1
        }

        return year
    },
    graduation: function(schooling){
        let skill

        switch(schooling){
            case 'EMC':
                skill = 'Ensino Médio Completo'
                break;
            case 'ESC':
                skill = 'Ensino Superior Completo'
                break;
            case 'MDr':
                skill ='Mestrado e Doutorado'
                break;
            default:
                skill = 'Não tem valor selecionado';
        }

        return skill
    }

}
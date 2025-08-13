const PF = require("./PessoaFisica.js")

class Aluno extends PF
{
    #matricula
    #curso

    setMatricula(matricula)
    {
        if (matricula)
        {
            this.#matricula = matricula;
            return true
        } else {return false}
    }
    getMatricula()
    {
        return this.#matricula
    }

    setCurso(curso)
    {
        if (curso)
        {
            this.#curso = curso
            return true
        } else {return false}
    }
    getCurso()
    {
        return this.#curso
    }
}
module.exports = Aluno

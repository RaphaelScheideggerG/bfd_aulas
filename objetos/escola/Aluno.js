class Aluno 
{
    #matricula; // atribui matricula como atributo de aluno

    setMatricula(matricula)
    {
        this.#matricula = matricula;
    }

    getMatricula()
    {
        return this.#matricula;
    }
}

module.exports = Aluno;

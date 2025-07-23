/*
-------------------
Nome da classes
-------------------
-matrícula: Number
-curso: String
-escola: String
-------------------
+boolean setMatricula(matricula: Number)
+Number getMatricula() -> Não faz sentido retornar void na função get

+boolean setCurso(curso: String)
+String getCurso() -> Não faz sentido retornar void na função get

+boolean setEscola(escola : String)
+String getEscola() -> Não faz sentido retornar void na função get
*/


class Aluno 
{
    #matricula; // atribui matricula como atributo de aluno
    #curso; // atribui matricula como atributo de aluno
    #escola; // atribui matricula como atributo de aluno

    //Métodos matricula
    setMatricula(matricula)
    {
        this.#matricula = matricula;
    }

    getMatricula()
    {
        return this.#matricula;
    }


    //Método curso
    setCurso(curso)
    {
        this.#curso = curso;
    }

    getCurso()
    {
        return this.#curso;
    }

    
    //Método escola
    setEscola(escola)
    {
        this.#escola = escola;
    }

    getEscola()
    {
        return this.#escola;
    }
}

module.exports = Aluno;

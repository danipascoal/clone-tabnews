function status(request, response) {
  /* o método send não consegue definir o charset (character set) utilizado */
  /* response.status(200).send("alunos do curso.dev são pessoas acima da média"); */
  /* melhor utilizar o método json que utiliza o charset=utf-8, 
    e é escrito da seguinte forma: json({"chave" : "valor"}) */
  response
    .status(200)
    .json({ chave: "alunos do curso.dev são pessoas acima da média" });
}

export default status;

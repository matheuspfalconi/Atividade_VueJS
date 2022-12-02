let vm = new Vue({
				el: "#app",
				data: {
					abas: {
	                    autores: true,
	                    livros: false,
	                    cadastrar_autor: false,
	                    editar_autor: false,
	                    cadastrar_livro: false,
	                    editar_livro: false,	
 	                },

					variavel: 1,
	                
	                variavelLivro: -1,
 	                
 	                temp_autor: {
 	                	id: -1,
 	                	src: "",
 	                	nome: "",
 	                },

 	                listaAutores: [
	                    {id: 1,
	                    src: "https://s4.static.brasilescola.uol.com.br/be/2022/07/retrato-de-machado-de-assis.jpg",
	                    nome: "Machado de Assis",
	                    },
	                    {id: 2,
	                    src: "http://1.bp.blogspot.com/-DRmtvzjZ34A/UZY9kwIaqBI/AAAAAAAAJLw/gS-ZGhTHrkM/s1600/guimaraes_rosa.jpg",
	                    nome: "Guimarães Rosa",
	                    },
	                ],

 	                temp_livro: {
 	                	id: -1,
 	                	titulo: "",
	                    src: "",
	                    preco: 0,
	                    editora: "",
	                    ano: "",
	                    idAutor: 0
 	                },

 	                listaLivros: [
 	                {
 	                	id: 1,
 	                	titulo: "Dom Casmurro",
 	                	src: "https://upload.wikimedia.org/wikipedia/commons/0/05/DomCasmurroMachadodeAssis.jpg",
 	                	preco: 23.50,
 	                	editora: "Casmurros",
 	                	ano: "2006",
 	                	idAutor: 1,
 	                },
 	                {
 	                	id: 2,
 	                	titulo: "Memórias Póstumas de Brás Cubas",
 	                	src: "https://i.zst.com.br/thumbs/12/26/9/1458070635.jpg",
 	                	preco: 23.50,
 	                	editora: "Casmurros",
 	                	ano: "2006",
 	                	idAutor: 1,
 	                },
 	                {
 	                	id: 3,
 	                	titulo: "Grande Sertão: Veredas",
 	                	src: "https://m.media-amazon.com/images/I/91TxMwdCA8L.jpg",
 	                	preco: 23.50,
 	                	editora: "Guimarães",
 	                	ano: "2006",
 	                	idAutor: 2,
 	                }],

                	editarOn: false,
                	variavel: 1,
				},


				methods: {
					trocarAbas(num) {
	                    switch (num) {
	                        case 1:
	                            this.abas.autores = true
	                            this.abas.livros = false
	                            this.abas.cadastrar_autor = false
	                            this.abas.editar_autor = false
	                            this.abas.cadastrar_livro = false
	                            this.abas.editar_livro = false
	                            break

	                        case 2:
	                            this.abas.autores = false
	                            this.abas.livros = true
	                            this.abas.cadastrar_autor = false
	                            this.abas.editar_autor = false
	                            this.abas.cadastrar_livro = false
	                            this.abas.editar_livro = false
	                            break

	                        case 3:
	                            this.abas.autores = false
	                            this.abas.livros = false
	                            this.abas.cadastrar_autor = true
	                            this.abas.editar_autor = false
	                            this.abas.cadastrar_livro = false
	                            this.abas.editar_livro = false
	                            break

	                        case 4:
	                            this.abas.autores = false
	                            this.abas.livros = false
	                            this.abas.cadastrar_autor = false
	                            this.abas.editar_autor = true
	                            this.abas.cadastrar_livro = false
	                            this.abas.editar_livro = false
	                            break

	                    	case 5:
	                            this.abas.autores = false
	                            this.abas.livros = false
	                            this.abas.cadastrar_autor = false
	                            this.abas.editar_autor = false
	                            this.abas.cadastrar_livro = true
	                            this.abas.editar_livro = false
	                            break

	                    	case 6:
	                            this.abas.autores = false
	                            this.abas.livros = false
	                            this.abas.cadastrar_autor = false
	                            this.abas.editar_autor = false
	                            this.abas.cadastrar_livro = false
	                            this.abas.editar_livro = true
	                            break
	                    	}

	                	},

	                salvarAutor() {
	                    if (this.temp_autor.id > 0) {

	                        let aux_autor = this.listaAutores.find(t => t.id == this.temp_autor.id)

	                        aux_autor.id = this.temp_autor.id
	                        aux_autor.nome = this.temp_autor.nome
	                        aux_autor.src = this.temp_autor.src

	                        this.listaAutores[this.temp_autor.id - 1] = aux_autor
	                        this.limparformAutor()
	                        this.trocarAbas(1)

	                    }
	                    else {
	                        this.temp_autor.id = this.listaAutores.length + 1
	                        let novo_autor = Object.assign({}, this.temp_autor)
	                        this.listaAutores.push(novo_autor)
	                        this.limparformAutor()
	                        this.trocarAbas(1)
	                    }
                	},

                	salvarLivro() {
	                    if (this.editarOn) {

	                        let aux_livro = this.listaLivros.find(f => f.id == this.temp_livro.id)

	                        aux_livro.id = this.temp_livro.id
	                        aux_livro.titulo= this.temp_livro.titulo
	                        aux_livro.src = this.temp_livro.src
	                        aux_livro.preco = this.temp_livro.preco
	                        aux_livro.ano = this.temp_livro.ano
	                        aux_livro.idAutor = this.temp_autor.id

	                        this.listaLivros[this.temp_livro.id - 1] = aux_livro
	                        this.limparformLivro()
	                        this.trocarAbas(2)

	                    }
	                    else {
	                        this.temp_livro.id = this.listaLivros.length + 1
	                        this.temp_livro.idAutor = this.temp_autor.id
	                        let novo_livro = Object.assign({}, this.temp_livro)
	                        this.listaLivros.push(novo_livro)
	                        this.limparformLivro()
	                        this.trocarAbas(2)
	                    }
                	},

                	limparformAutor() {
	                    this.temp_autor.nome = ""
	                    this.temp_autor.id = -1
	                    this.temp_autor.src = ""
	                },

	                limparformLivro() {
 	                	this.temp_livro.id = -1
 	                	this.temp_livro.titulo = ""
	                    this.temp_livro.src = ""
	                    this.temp_livro.preco = 0
	                    this.temp_livro.editora = ""
	                    this.temp_livro.ano = ""
	                    this.temp_livro.isbn = ""
	                    this.temp_livro.idAutor = -1
                    	this.editarOn = false
	                },

	                deleteAutor(index) {
                    	this.listaAutores.splice(index, 1)
	                },

	                deleteLivro(index) {
                    	this.listaLivros.splice(index, 1)
	                },

	                editAutor(index) {
	                    this.temp_autor.id = this.listaAutores[index].id
	                    this.temp_autor.nome = this.listaAutores[index].nome
	                    this.temp_autor.src = this.listaAutores[index].src

	                    this.abas.autores = false
	                    this.abas.editar_autor = true
	                },

	                editLivro(index) {
	                    this.temp_livro.id = this.listaLivros[index].id
	                    this.temp_livro.titulo = this.listaLivros[index].titulo
	                    this.temp_livro.src = this.listaLivros[index].src
	                    this.temp_livro.ano = this.listaLivros[index].ano
	                    this.temp_livro.editora = this.listaLivros[index].editora
	                    this.temp_livro.preco = this.listaLivros[index].preco

	                    this.editarOn = true;

	                    this.abas.livros = false
	                    this.abas.editar_livro = true
	                },

	                mostrarLivros(index) {
	                	this.temp_autor.id = this.listaAutores[index].id
	                	this.temp_autor.nome = this.listaAutores[index].nome

	                	this.abas.autores = false
	                	this.abas.livros = true
	                }
                }
			})

class Usuario {

    constructor ( nombre, apellido, libros, mascotas ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {

        console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
    };

    addMascota() {

        this.mascotas.push('Perro')

        console.log(`${this.mascotas}`)

    };

    countMascotas() {

        const contar = this.mascotas.length

        console.log(contar)
        
    };

    addBook() {

        const libro1 = [{
            nombre: "El ultimo Maradona",
            año: 2014,
            autor: "Andres Burgo"
        }]

        this.libros.push(libro1)

        console.log(`${this.libros}`)
    };

    getBookNames() {

         

    }

};

const usuario1 = new Usuario('Diego', 'Maradona', 

                            [ {
                            nombre: "Yo soy el Diego",
                            año: 2000,
                            autor: "Diego Maradona"
                            },

                            {
                            nombre: "Mexico 86, como ganamos la Copa",
                            año: 2016,
                            autor: "Daniel Arcucci"
                            }], 

                            ["Gato", "Tortuga"]);



usuario1.getFullName();
usuario1.addMascota();
usuario1.countMascotas();
usuario1.addBook();
usuario1.getBookNames();




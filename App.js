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

    addMascota(mascota) {

        this.mascotas.push(mascota)

        console.log(`${this.mascotas}`)

    };

    countMascotas() {

        const contar = this.mascotas.length

        console.log(contar)
        
    };

    addBook(nombre, autor) {

        this.libros.push(`Nombre: ${nombre}, Autor: ${autor}`)

        console.log(`${this.libros}`)
    };

    getBookNames() {

        const mostrarLibro = (e) => {
            return e
        }

         const salida = this.libros.map((mostrarLibro))

         console.log(salida)

    }

};

const usuario1 = new Usuario('Diego', 'Maradona', [], ["Gato", "Tortuga"]);



usuario1.getFullName();
usuario1.addMascota("Perro");
usuario1.countMascotas();
usuario1.addBook("El ultimo 10", "Diego Armando Maradona");
usuario1.getBookNames();




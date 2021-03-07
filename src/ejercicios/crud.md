# Referencia al Documento
const usuariosRef = db.collection('usuarios');

## Objeto
const usuario = {
    nombre: 'Lorenzo',
    activo: false,
    fechaNaci: 0,
    salario: 1750
}


## insert into usuarios....

db.collection('usuarios')
    .add( usuario )
    .then( docRef => {
        console.log( docRef )
    })
    .catch( e => console.log('error', e ))


usuariosRef
      .doc('ZnvhfTEj3MhpDcewgNkh')
      .update({
          activo: true
      });

## update usuarios set activo = false where.... 

## Destructivo
      usuariosRef
      .doc('ZnvhfTEj3MhpDcewgNkh')
      .set({
          activo: true,
          edad: 30,
          casado: true,
          id: 2131
      });

## delete from usuarios where id = 'xx'
usuariosRef
      .doc('ZnvhfTEj3MhpDcewgNkh')
      .delete()
      .then( () => console.log('Borrado') )
      .catch( e => console.log('error', e ));


## select * from usuarios;
 usuariosRef
         .onSnapshot ( retornaDocumentos )

 usuariosRef.get().then( snap => retornaDocumentos(snap) )


    select * from usuarios
     -- where salario > 1800 
        And activo == true 
        

usuariosRef.where('salario','>=', 1800)
           .where('activo','==', true)
      .get().then( retornaDocumentos );
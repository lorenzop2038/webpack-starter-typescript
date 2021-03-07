import db from  './firebase/config';

const usuario = {
    nombre: 'Maria',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

// insert into usuarios....

//db.collection('usuarios')
//    .add( usuario )
//    .then( docRef => {
//        console.log( docRef )
//    })
//    .catch( e => console.log('error', e ))


//usuariosRef
//      .doc('ZnvhfTEj3MhpDcewgNkh')
//      .update({
//          activo: true
//      });

// update usuarios set activo = false where.... 

//Destructivo
//      usuariosRef
//      .doc('ZnvhfTEj3MhpDcewgNkh')
//      .set({
//          activo: true,
//          edad: 30,
//          casado: true,
//          id: 2131
//      });

// delete from usuarios where id = 'xx'
//usuariosRef
//      .doc('ZnvhfTEj3MhpDcewgNkh')
//      .delete()
//      .then( () => console.log('Borrado') )
//      .catch( e => console.log('error', e ));


// select * from usuarios;
usuariosRef
      .onSnapshot( snap => {

        const usuarios: any[] = [];
          
         snap.forEach( snapHijo => {
              usuarios.push({
                  id: snapHijo.id,
                  ...snapHijo.data()
              })
         });

         console.log(usuarios)
      })
   

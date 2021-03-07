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
      usuariosRef
      .doc('ZnvhfTEj3MhpDcewgNkh')
      .set({
          activo: true,
          edad: 30,
          casado: true,
          id: 2131
      });


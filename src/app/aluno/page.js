import db from "../lib/db.js"
export default async () => {
    const usuario = await db.query("select * from usuario")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         usuario.rows.map( 
            a => (
               <div>
                  {a.nome} é visitante da clínica {a.project}
               </div>
            ) 
         )
      }
   </div>
 </>);
}
import '../styles/app.css';

export default function Banner(){
  return (
    <section className='container'>
       <div className="container-flash">
           <div className='container-info__banner'>
               <p>¡Hola mundo!</p>
               <p>Soy <span>RevayDev</span></p>
               <p>Front-Ent Developer</p>
           </div>
           <div className='flash'></div>
       </div>
    </section>
  )
}

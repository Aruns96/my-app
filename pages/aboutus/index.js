import Link from "next/link"


const AboutusPage = () => {
  const  details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ]
  return (
    <>
    <div>aboutus</div>
    <ul>
       {
        details.map(i=>(
          <li key={i.id}><Link href={`/aboutus/${i.id}`}>{i.name}</Link></li>
        ))
       }
    </ul>
    </>

  )
}

export default AboutusPage
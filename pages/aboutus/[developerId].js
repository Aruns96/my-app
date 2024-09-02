import {useRouter } from 'next/router'

const developer = () => {
  const router = useRouter()
    const  details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
       const devId = (router.query.developerId)
       console.log(devId)
       const res  = details.filter(i=>i.id==devId)
       console.log(res)
     
      
  return (
    
    <div>{res.length>0 ? res.map(i=>(
      <div key={i.id}>
      <h1>{i.name}</h1>
      </div>
    )):<h1>no dev available</h1>}</div>
  )
}

export default developer
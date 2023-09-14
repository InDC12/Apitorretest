'use client'
import styles from '../page.module.css'
import {useState} from 'react'
import ListOfUsers from '../request/page'
import getServerSideProps from '../../components/serverApirendering'

export default function NameInput() {
    
    const torreQuery = {
        query:'',
        identityType: "person",
        meta:false,
        limit:10,
        torreGgId:"1570744",
        excludeContacts:true,
        excludedPeople:[]
    }
    const [name, setName] = useState(torreQuery)
    const [array, setArray] = useState([])

    const handleChange = async (e) => {
        e.preventDefault();
        await handleArrayChange();
        setName(({...name,
            query:e.target.value,
        }))

    }
    const handleArrayChange = async () => {
        const dataUser = await getServerSideProps(name)
        setArray(dataUser)
    }
    
  return (
    <main className={styles.main} >
      <input className={styles.center} type='search' onChange={handleChange}></input>
{      array.slice(0,10).map( array => (
            <article key={array.ardaId}>
                <button name={array.username}>{array.name}</button>
            </article>
        ))}
    </main>
  )
}



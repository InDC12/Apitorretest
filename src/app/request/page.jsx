
export default async function ListOfUsers ({name}) {
    if(name.query !== '') {
        const res = await fetch('https://torre.ai/api/entities/_searchStream', {
            headers:{
              "Content-Type": "application/json"
            },
            method:'POST',
            body:JSON.stringify(name)
          })
         const repo = (await res.text()).match(/.+/g).map(JSON.parse);
         return repo
    }

    return repo.slice(0,10).map( repo => (
            <article key={repo.id}>
                <h2>{repo.name}</h2>
            </article>
        ))

    
}




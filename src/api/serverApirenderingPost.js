export default async function getServerSideProps(name) {
    const res = await fetch('https://torre.ai/api/entities/_searchStream', {
        headers:{
          "Content-Type": "application/json"
        },
        method:'POST',
        cache: 'force-cache',
        body:JSON.stringify(name)
      })
     const repo = (await res.text()).match(/.+/g).map(JSON.parse);
      return  repo
}
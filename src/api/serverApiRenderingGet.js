export default async function getServerSidePropsGet(username) {
    console.log (username)
    const res = await fetch(`https://torre.bio/api/bios/${username}`, {         
        headers:{
        "Content-Type": "application/json"
        }
      })
     const repo = (await res.text()).match(/.+/g).map(JSON.parse);
      return  repo
}
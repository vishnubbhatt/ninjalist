import styles from '../../styles/Ninjas.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()

    const paths = data.map( ninja => {
        return{
            params: {id: ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    const data = await res.json()

    return{
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    return ( 
        <>
        <div className={styles.details}>
            <h1 className={styles.h1}>{ninja.name}</h1>
            <p className={styles.p}>Email: { ninja.email}</p>
            <p className={styles.p}>Website: { ninja.website}</p>
            <p className={styles.p}>City: { ninja.address.city}</p>
        </div>
        </>
     );
}
 
export default Details;
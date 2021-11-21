import Link from 'next/link'
import Head from 'next/head'

const FirstPost = () => {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <div>
                <h1>This is first Post.</h1>
                <h2><Link href="/"><a>Return to Homepage</a></Link></h2>
            </div>
        </>
    )
}

export default FirstPost
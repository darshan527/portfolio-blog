import Link from 'next/link'

const FirstPost = () => {
    return (
        <div>
            <h1>This is first Post.</h1>
            <h2><Link href="/"><a>Return to Homepage</a></Link></h2>
        </div>
    )
}

export default FirstPost
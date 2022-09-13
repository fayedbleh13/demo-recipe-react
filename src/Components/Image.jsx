export default function Image({src, alt}) {
    return (
        <>
            <img className="rounded-t-lg" src={src} alt={alt}/>
        </>
    )
}
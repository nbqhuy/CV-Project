function ErrorCard ({text}){
    return (
        <div className={"card card-error"}>
            <p>{text}</p>
        </div>
    )
}
function SuccessCard ({text}){
    return (
        <div className={"card card-success"}>
            <p>{text}</p>
        </div>
    )
}

export {
    ErrorCard,
    SuccessCard
}
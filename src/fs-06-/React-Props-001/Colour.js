const Cards = (props)=>{
    return(
        <div className="card" onClick={()=>{
            navigator.clipboard.writeText(props.colorCode)
            console.log(props.colorCode,props.colorName);
            const app = document.getElementById("app")
            app.style.backgroundColor = props.colorCode;

        }} style={{backgroundColor:props.colorCode}}>
            <div className="detail">
                <h3 id="color-code">{props.colorCode}</h3>
                <h6 style={{color:props.colorCode}} >{props.colorName}</h6>
            </div>
        </div>
    )
}

export default Cards;
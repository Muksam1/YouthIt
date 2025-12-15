const Button = ({ label, onClick, type = "button", color  }) => {
    return(
        <>
        <button className={`${color}px-4 py-2 text-black border-4 rounded-4xl hover:bg-amber-500 cursor-pointer transition `}
        type ={type} onClick={onClick}
        style={{backgroundColor: color}}>
        
            {label} 
            
        </button>
        </>
    )
}

export default Button;
import './Button.css';
const Button = ({children, type = 'primary', onClick}) =>{
    const btnClass = `btn btn-${type}`;
    return(
        <button className= {btnClass} onClick = {onClick}>
            {children}
        </button>
    );
}

export default Button;
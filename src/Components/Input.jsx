
export default function Input({type, value, placeholder, onChange, handleClick, className, ariaLabel, ariaDescribedBy}) {
    return (
        <input 
            className={className}
            type={type} 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange}
            onClick={handleClick}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy} 
        />
    )
}
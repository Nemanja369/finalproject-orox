

const Select = ({options, machine, setMachine}) => {

    return ( 
        <select value={machine} onChange={(e)=>{
            setMachine(e.target.value)
        }}>
            {[...(new Set(options))].map(option => <option key={option} value={option}>{option}</option>)}
        </select>
     );
}
 
export default Select;
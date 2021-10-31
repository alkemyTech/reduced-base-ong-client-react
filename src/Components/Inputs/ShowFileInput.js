import { Button, InputLabel, FormHelperText} from '@material-ui/core';
import { isFile } from '../../Utils/validation';
import '../../Styles/inputs.css';

const ShowFileInput = (props) => {
    const {btnText, name, value, color, accept, errorMessage, className, ...events} = props;
    return (
        <div className={`show-file-input ${className || ''}`}>
            <input type="file" name={name} id={name} {...events} accept={accept} className="hide"/>
            <label htmlFor={name}>
                <Button variant="contained" color={color} component="span">
                    {btnText}
                </Button>
            </label>
            {isFile(value) && <InputLabel className='show-file-input__file-name'>Archivo subido: {value.name}</InputLabel>}
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </div>
    )
}

export { ShowFileInput };

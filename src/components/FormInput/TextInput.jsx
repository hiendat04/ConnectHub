import { TextField } from "@mui/material";

const TextInput = ({ onChange, value, name, type = "text" }) => {
  return (
    <TextField name={name} value={value} onChange={onChange} type={type} />
  );
};
export default TextInput;

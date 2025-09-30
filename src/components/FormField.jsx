import { Controller } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
const FormField = ({ control, label, name, Component, type }) => {
  return (
    <div>
      <p className="mb-1 font-bold text-sm text-[#4B465C]">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              type={type}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};
export default FormField;

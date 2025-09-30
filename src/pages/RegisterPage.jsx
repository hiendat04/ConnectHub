import FormField from "@components/FormField";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { control } = useForm();
  return (
    <div className="bg-[#F8F7FA] flex items-center justify-center h-screen">
      <div className="bg-white w-[450px] h-fit px-8 py-10">
        <img src="/connect-hub-logo.png" className="mx-auto mb-6"/>
        <form className="flex flex-col gap-4">
          <FormField
            name="fullName"
            label="Full Name"
            control={control}
            Component={TextInput}
          />
          <FormField
            name="email"
            label="Email"
            control={control}
            Component={TextInput}
          />
          <FormField
            name="password"
            label="Password"
            control={control}
            type="password"
            Component={TextInput}
          />
          <Button variant="contained">Sign up</Button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login">Sign in instead</Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;

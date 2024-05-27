import { Input } from "@nextui-org/react";
import { INPUTS } from "../../data/inputs";

export default function Login() {
  return (
    <form className="wrapper flex place-content-around px-5">
      {INPUTS.map(({ id, name, type, label }) => (
        <Input
          key={id}
          type={type}
          label={label}
          name={name}
        />
      ))}
     
    </form>
  );
}

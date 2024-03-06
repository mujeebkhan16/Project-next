// components/Form.tsx
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { SubmitHandler } from "react-hook-form";
interface Field {
  id: number;
  name: string;
  fieldType: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required: boolean;
  listOfValues?: string[];
}

interface Props {
  fields: Field[];
}

const Form: React.FC<Props> = ({ fields }) => {
  const { register, handleSubmit, } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    alert("Data Stored in Local storage");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.id}>
          {field.fieldType === "TEXT" && (
            <TextField
              name={field.name}
              label={field.name}
              defaultValue={field.defaultValue}
              //   error={!!errors[field.name]}
              //   helperText={errors[field.name] && "Field is required"}
              style={{ marginTop: "1rem" }}
              {...register(field.name)}
              type={field.fieldType}
              required={field.required}
            />
          )}
          {field.fieldType === "LIST" && (
            <FormControl style={{ marginTop: "1rem" }}>
              <InputLabel>{field.name}</InputLabel>
              <Select
                name={field.name}
                defaultValue={field.defaultValue}
                {...register(field.name)}
                required={field.required}
                // error={!!errors[field.name]}
              >
                {field.listOfValues?.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {field.fieldType === "RADIO" && (
            <FormControl
              style={{ marginTop: "1rem" }}
              required={field.required}
            >
              <label>{field.name}</label>
              {field.listOfValues?.map((value, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name={field.name}
                    value={value}
                    defaultChecked={field.defaultValue === value}
                    {...register(field.name)}
                  />
                  {value}
                </div>
              ))}
            </FormControl>
          )}
        </div>
      ))}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;

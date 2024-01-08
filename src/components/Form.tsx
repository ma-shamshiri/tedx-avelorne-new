import React, { ChangeEvent, FormEvent } from "react";
import * as Joi from "joi";
import Input from "./Input";

interface FormProps {
  schema: Record<string, any>;
}

interface FormState {
  data: Record<string, any>;
  errors: Record<string, string>;
}

class Form extends React.Component<FormProps, FormState> {
  state: FormState = {
    data: {},
    errors: {},
  };

  validate = (): Record<string, string> | null => {
    const options = { abortEarly: false };
    const { error } = (Joi as any).validate(
      this.state.data,
      this.props.schema,
      options
    );

    if (!error) return null;

    const errors: Record<string, string> = {};
    for (const item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({
    name,
    value,
  }: {
    name: string;
    value: any;
  }): string | null => {
    const obj = { [name]: value };
    const schema = { [name]: this.props.schema[name] };

    const { error } = (Joi as any).validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: input } = event;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label: string) {
    return (
      <button
        disabled={!!this.validate()}
        className="btn btn-primary"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  }

  renderInput(name: string, type: string = "text", placeholder: string) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        placeHolder={placeholder}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  // Placeholder for the doSubmit method. You should implement it in the child components.
  doSubmit = () => {
    // Your implementation goes here.
  };
}

export default Form;

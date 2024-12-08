// src/hooks/useForm.tsx
import { useState } from 'react';

interface FormValues {
  [key: string]: any;
}

interface UseFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  validate?: (values: FormValues) => FormValues;
}

const useForm = ({ initialValues, onSubmit, validate }: UseFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(values);
      }
    } else {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
  };
};

export default useForm;
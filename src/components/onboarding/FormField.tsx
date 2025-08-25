import React from 'react';
import { FormField as FormFieldType } from '../../types';

interface FormFieldProps {
  field: FormFieldType;
  onChange: (value: any) => void;
}

export const FormField: React.FC<FormFieldProps> = ({ field, onChange }) => {
  const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {field.label}
      </label>
      {field.type === 'text' || field.type === 'number' ? (
        <input
          type={field.type}
          placeholder={field.placeholder}
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : field.type === 'textarea' ? (
        <textarea
          placeholder={field.placeholder}
          rows={4}
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : field.type === 'select' ? (
        <select
          className={baseClasses}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select an option</option>
          {field.options?.map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
};
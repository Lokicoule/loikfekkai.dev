interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  onChange,
  name,
  required = false,
  ...props
}) => {
  return (
    <div className="relative z-0 w-full mb-10 group text-sm ">
      <textarea
        id={name}
        name={name}
        className="block autofill:bg-transparent py-2.5 px-0 w-full text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:gradient-underline-fixed focus:outline-none peer"
        onChange={onChange}
        required={required}
        {...props}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-tertiary transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 duration-300 transition-all"
      >
        {label} {required && "*"}
      </label>
    </div>
  );
};

export default TextAreaField;

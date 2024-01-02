function TextField({ label, value, name, onChange }) {
  return (
    <div className="">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        autoComplete="off"
        className="textField_input"
      />
    </div>
  );
}

export default TextField;

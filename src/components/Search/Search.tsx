export default function Search({ value, onChange, label }: {
  value?: string,
  onChange?: () => void,
  label?: string
}) {
  return (
    <div>
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
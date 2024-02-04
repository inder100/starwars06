import React from "react";
type Props = {
  input: string;
  setInput: Function;
  label: string;
};

function Searchbar({ input, setInput,label }: Props) {
  return (
    <input
      type="search"
      value={input}
      placeholder={label}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default Searchbar;

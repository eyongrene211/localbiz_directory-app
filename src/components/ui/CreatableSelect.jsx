"use client";
import { useState }    from "react";
import CreatableSelect from "react-select/creatable";

export default function FruitSelect() {
  const [value, setValue] = useState(null);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  return (
    <div style={{ width: 300 }}>
      <CreatableSelect
        isClearable
        options={options}
        placeholder="Type or choose a fruit..."
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onCreateOption={(inputValue) => {
          // Fires when user presses Enter on a value that isn’t in the list
          const newOption = { value: inputValue.toLowerCase(), label: inputValue };
          setValue(newOption);
          options.push(newOption); // or manage in your own state
        }}
      />
    </div>
  );
}

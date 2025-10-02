import CreatableSelect   from "react-select/creatable";
import "./react-select.css";

export default function ScheduleSelect() {
  const timeOptions = [
  { value: "7:00AM",  label: "7:00 AM"  },
  { value: "7:30AM",  label: "7:30 AM"  },
  { value: "8:00AM",  label: "8:00 AM"  },
  { value: "8:30AM",  label: "8:30 AM"  },
  { value: "9:00AM",  label: "9:00 AM"  },
  { value: "9:30AM",  label: "9:30 AM"  },
  { value: "10:00AM", label: "10:00 AM" },
  { value: "10:30AM", label: "10:30 AM" },
  { value: "11:00AM", label: "11:00 AM" },
  { value: "11:30AM", label: "11:30 AM" },
  { value: "12:00PM", label: "12:00 PM" },
];

  return (
    <div className="">
      <CreatableSelect
        className="react-select-container "
        classNamePrefix="react-select"
        isClearable
        options={timeOptions}
        placeholder="Select time..."
      />
    </div>
  );
}






// import React             from 'react';

// import CreatableSelect   from 'react-select/creatable';
// import { colourOptions } from '../data';

// export default () => <CreatableSelect isClearable options={colourOptions} />
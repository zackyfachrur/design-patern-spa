/* eslint-disable react/prop-types */

export default function InputComponents({
  labelContent,
  labelFor,
  inputType,
  inputId,
  inputName,
}) {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor={labelFor}
      >
        {labelContent}
      </label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white outline-none focus:ring-2 focus:ring-indigo-600"
        name={inputName}
        id={inputId}
        type={inputType}
      />
    </div>
  );
}

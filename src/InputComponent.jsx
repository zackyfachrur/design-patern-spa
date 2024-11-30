/* eslint-disable react/prop-types */

export default function InputComponents({
  labelContent,
  labelFor,
  inputType,
  inputId,
  inputName,
  inputPlaceHolder,
}) {
  return (
    <div className="mt-6">
      <label
        className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
        htmlFor={labelFor}
      >
        {labelContent}
      </label>
      <input
        placeholder={inputPlaceHolder}
        className="block w-full px-4 py-3 mt-2 bg-white border-2 rounded-lg text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
        name={inputName}
        id={inputId}
        type={inputType}
      />
    </div>
  );
}

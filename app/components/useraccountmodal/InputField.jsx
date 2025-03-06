const InputField = (props) => {
  return (
    <div className="flex flex-col w-full gap-2 min-w-8">
        <input
        className="p-2 border-2 outline-none rounded-md px-5 w-full"
        {...props}
    />
    {props.error && <p className="px-2 text-red-500 text-sm text-left">{props.errormessage}</p>}
    </div>
  )
}

export default InputField
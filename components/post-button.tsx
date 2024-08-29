'use client'
import { useFormStatus } from 'react-dom'


export default function PostButton() {
  const {pending} = useFormStatus()
  return (
    <button disabled={pending} type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
    Submit
  </button>
  )
}

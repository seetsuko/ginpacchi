'use client'

import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from '@/pages/StaffRegister'

type Props = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
  item: string
  placeholder: string
}

export const TextForm = ({ label, register, required, item, placeholder }: Props) => {
  return (
    <div>
      <label>
        {item}
        <input type='text' placeholder={placeholder} {...register(label, { required })} />
      </label>
    </div>
  )
}

"use client"

type Props = {
  buttonName: string
}

export const Button = ({buttonName}:Props) => {
  return (
    <button type="submit">
      {buttonName}
    </button>
  );
}

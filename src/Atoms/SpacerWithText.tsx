export interface ISpacerWithTextProps {
  text: string
}

export function SpacerWithText(props: ISpacerWithTextProps) {
  return (
    <div className="mb-2 mt-2">
      <div className="w-full flex justify-center  ">
        <div className="mist " />
        {props.text}
        <div className="mist" />
      </div>
    </div>
  )
}

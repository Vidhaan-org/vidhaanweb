import { Switch } from "@headlessui/react"

const Toggle = ({
  title,
  toggleEnabled,
  setToggleEnabled,
}: {
  title?: string
  toggleEnabled: boolean
  setToggleEnabled: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Switch.Group>
      <div className={`grid ${title ? "grid-cols-2" : "flex"} items-center`}>
        {title && (
          <Switch.Label className="mr-4" passive>
            {title}
          </Switch.Label>
        )}
        <Switch
          checked={toggleEnabled}
          onChange={setToggleEnabled}
          className={`${
            toggleEnabled ? "bg-lime-600" : "bg-red-600"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
        >
          <span
            className={`${
              toggleEnabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}

export default Toggle

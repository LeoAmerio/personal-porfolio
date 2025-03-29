import Image from "next/image"

interface TechIconProps {
  name: string
  icon: string
}

export function TechIcon({ name, icon }: TechIconProps) {
  return (
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center" title={name}>
      <Image src={icon || "/placeholder.svg"} alt={name} width={32} height={32} />
    </div>
  )
}


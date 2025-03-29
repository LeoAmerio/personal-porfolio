import Image from "next/image"

export function Profile() {
  return (
    <div className="flex items-center gap-4">
      <Image src="/109082282.jpeg" alt="Profile" width={60} height={60} className="rounded-full" />
      <div>
        <h1 className="text-2xl font-mono">Leonardo Amerio</h1>
        <p className="text-gray-400">FullStack Developer Ssr.</p>
      </div>
    </div>
  )
}

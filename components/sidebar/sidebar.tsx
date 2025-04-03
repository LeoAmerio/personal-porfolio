import { Profile } from "./profile"
import { Bio } from "./bio"
import { SocialLinks } from "./social-links"

export function Sidebar() {
  return (
    <div className="space-y-8">

      <Profile />
      <Bio />
      <SocialLinks />
    </div>

  )
}

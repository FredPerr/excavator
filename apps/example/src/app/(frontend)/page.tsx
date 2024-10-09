import { Button } from '@fredperr/excavator-ui/primitives'
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Button>Click me</Button>
    </div>
  )
}

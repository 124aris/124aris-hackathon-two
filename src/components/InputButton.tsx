import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Input email address"/>
      <Button type="submit" className="rounded-none">Get Started</Button>
    </div>
  )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-md items-center space-x-3 px">
      <Input type="email" placeholder="Input email address" className=" border-gray-600 rounded-none"/>
      <Button type="submit" className="rounded-none px-5 bg-black">Get Started</Button>
    </div>
  )
}
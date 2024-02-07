import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "@/styles/inputbutton.css"
 
export default function InputWithButton() {
  return (
    <div className="input-button">
      <Input type="email" placeholder="Input email address" className="input"/>
      <Button type="submit" className="button">Get Started</Button>
    </div>
  )
}
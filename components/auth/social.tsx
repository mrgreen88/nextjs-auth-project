"use client"

import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full flex gap-2 items-center justify-center"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
        Google
      </Button>
      <Button
        size="lg"
        className="w-full flex gap-2 items-center justify-center"
        variant="outline"
        onClick={() => {}}
      >
        <FaFacebook className="h-5 w-5" />
        Facebook
      </Button>
    </div>
  )
}

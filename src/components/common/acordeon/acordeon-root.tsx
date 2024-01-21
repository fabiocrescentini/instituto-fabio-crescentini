'use client'
import { Accordion } from '@chakra-ui/react'
export function AcordeonRoot({ children }: { children: React.ReactNode }) {
  return (
    <Accordion
      defaultChecked={true}
      allowToggle
      borderColor="transparent"
      border="transparent"
    >
      {children}
    </Accordion>
  )
}

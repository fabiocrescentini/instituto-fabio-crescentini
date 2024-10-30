'use client'

import { Button } from '@/components/common/button'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <Button.Root
      href="https://linktr.ee/drfabiocrescentini"
      onClick={() =>
        gtag_report_conversion_cad('https://linktr.ee/drfabiocrescentini')
      }
    >
      <Button.Text>Agendar uma consulta</Button.Text>
      <Button.Icon icon={FaWhatsapp} />
    </Button.Root>
  )
}

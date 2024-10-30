'use client'

import { Button } from '@/components/common/button'
import { Specialty } from '@/data/types/specialty'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact({ specialty }: { specialty: Specialty }) {
  return (
    <Button.Root href={specialty.urlLink} onClick={specialty.gtag_conversion}>
      <Button.Text>Agendar uma consulta</Button.Text>
      <Button.Icon icon={FaWhatsapp} />
    </Button.Root>
  )
}

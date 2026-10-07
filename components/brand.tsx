import Image from 'next/image'

/**
 * Logo oficial SRV Security (escudo dorado con águila).
 * `sm` (360px) para navbar/footer/avatar; `lg` (800px) para el hero.
 */
export function SrvLogo({
  variant = 'sm',
  className,
  priority = false,
}: {
  variant?: 'sm' | 'lg'
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src={variant === 'lg' ? '/logo-srv.webp' : '/logo-srv-sm.webp'}
      alt="SRV Security — Asistencia y Monitoreo GPS"
      width={variant === 'lg' ? 800 : 360}
      height={variant === 'lg' ? 568 : 255}
      priority={priority}
      className={className}
    />
  )
}


'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BopeLogo } from '@/components/brand'
import { cn } from '@/lib/utils'
import { OPEN_PROMO_EVENT } from '@/components/promo-modal'

function openPromo() {
  window.dispatchEvent(new Event(OPEN_PROMO_EVENT))
}

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Monitoreo GPS', href: '#tecnologia' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'LinkedIn & Contacto', href: '#contacto' },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <BopeLogo className="h-11 w-auto" priority />
          <span className="flex flex-col leading-none">
            <span className="font-sans text-base font-semibold tracking-[0.18em] text-foreground">
              BOPE SECURITY
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Asistencia y Monitoreo GPS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={openPromo}
            className="inline-flex items-center rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold/20"
          >
            Portal Clientes
            <span className="ml-2 rounded-full bg-gold/20 px-2 py-0.5 text-[9px] font-semibold tracking-widest text-gold">Próximamente</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/60 lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm uppercase tracking-widest text-muted-foreground hover:bg-secondary hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              openPromo()
            }}
            className="mt-2 rounded-md border border-gold/40 bg-gold/10 px-3 py-2 text-center text-sm font-semibold uppercase tracking-widest text-gold"
          >
            Portal Clientes
            <span className="ml-2 rounded-full bg-gold/20 px-2 py-0.5 text-[9px] font-semibold tracking-widest text-gold">Próximamente</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

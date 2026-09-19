'use client'

import { motion } from 'framer-motion'
import { ShieldAlert, FileCode, Lock, ScrollText } from 'lucide-react'

const services: {
  id: string
  icon: typeof ShieldAlert
  title: string
  desc: string
  status?: string
}[] = [
  {
    id: '01',
    icon: ShieldAlert,
    title: 'Detección Nativa de Jamming 4G/GPS',
    desc: 'Los equipos con detección nativa (Teltonika FMC920) registran la interferencia 4G/GPS y permiten reconstruir el recorrido cuando recuperan señal. Las alertas automáticas están en desarrollo.',
    status: 'En piloto',
  },
  {
    id: '02',
    icon: FileCode,
    title: 'Trazabilidad Forense de Ruta',
    desc: 'Bitácora de incidentes inalterable (append-only) y reconstrucción forense del trayecto ante ataques por inhibidores.',
    status: 'En piloto',
  },
  {
    id: '03',
    icon: Lock,
    title: 'Modo Estacionamiento Seguro',
    desc: 'Bloqueo electrónico de partida durante reposo o pernoctada. Nunca se inmoviliza un vehículo en movimiento.',
    status: 'Próximamente',
  },
  {
    id: '04',
    icon: ScrollText,
    title: 'Expediente Legal para Aseguradoras',
    desc: 'Matrices de riesgo en ruta, protocolos preventivos y documentación pensada para la Ley 21.720 sobre inhibidores y la Ley 21.719 de protección de datos (vigente desde el 1 de diciembre de 2026).',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Capacidades Operativas
          </span>
          <h2 className="mt-4 text-balance font-sans text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            Servicios de seguridad logística de grado táctico
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/50 hover:gold-glow"
            >
              <div className="tactical-grid absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-sans text-4xl font-bold text-border transition-colors group-hover:text-gold/30">
                  {s.id}
                </span>
              </div>
              {s.status && (
                <span className="relative mt-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
                  {s.status}
                </span>
              )}
              <h3 className="relative mt-6 font-sans text-xl font-semibold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-3 text-pretty leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

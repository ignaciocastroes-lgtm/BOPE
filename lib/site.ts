/** Dirección oficial del sitio y el interruptor de publicación. */
// Provisorio: sin dominio propio todavía, se usa la URL de Vercel hasta tener uno.
export const SITE_URL = 'https://bope1.vercel.app'

/**
 * Mientras el sitio no tenga luz verde, no debe aparecer en Google.
 * Al dar la luz verde: poner NEXT_PUBLIC_SITE_LIVE=true en Vercel y volver a
 * desplegar. Sin la variable, el sitio se marca `noindex` y robots.txt lo
 * bloquea.
 */
export const INDEXABLE = process.env.NEXT_PUBLIC_SITE_LIVE === 'true'

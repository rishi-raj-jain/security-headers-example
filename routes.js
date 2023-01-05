// This file was automatically added by edgio init.
// You should commit this file to source control.

const { Router } = require('@edgio/core/router')

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' *.github.com *.layer0.co;
  style-src 'self' 'unsafe-inline' *.githubassets.com *.googleapis.com;
  img-src 'self';
  media-src 'none';
  connect-src *;
  font-src 'self' *.gstatic.com;
`

export default new Router()
  .get({}, ({ setResponseHeader }) => {
    setResponseHeader('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ''))
    setResponseHeader('X-Content-Type-Options', 'nosniff')
    setResponseHeader('X-Frame-Options', 'DENY')
    setResponseHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    setResponseHeader('Cross-Origin-Embedder-Policy', 'unsafe-none')
    setResponseHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups')
    setResponseHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
    setResponseHeader('Referrer-Policy', 'origin-when-cross-origin')
    setResponseHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  })
  .static('dist')

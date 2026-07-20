# Evoramail Landing (Angular 17)

Landing page basada en la estructura de Delivery Makers, con creatividades Evoramail.

## Stack

- Angular 17 (standalone components)
- Bootstrap 5.3.2
- TypeScript + SCSS
- Inter (Google Fonts)

## Cómo arrancar (VS Code)

Usa siempre `npm.cmd` / `npx.cmd` en PowerShell:

```powershell
$env:Path = "C:\node-portable\node-v24.18.0-win-x64;" + $env:Path
cd C:\Landings\evoramail
npm.cmd start
```

Abre: http://127.0.0.1:4200/

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Home / landing |
| `/contacta` | Formulario de contacto |
| `/gracias` | Confirmación |
| `/terminos-y-condiciones` | Términos |
| `/politica-de-privacidad` | Privacidad |
| `/politica-de-cookies` | Cookies |

## Build producción

```powershell
npm.cmd run build
```

Salida en `dist/evoramail-app/`.

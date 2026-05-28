# dp-sanity-cms-v3

Sanity Content Studio v3 for administrasjon av innhold på tvers av flere NAV-applikasjoner knyttet til dagpenger.

## Om prosjektet

Dette er et sentralisert CMS som håndterer innhold for:

- **Dagpengersøknad** - Søknadsskjemaer og spørsmål
- **Mine dagpenger** - Visning av dagpengestatus
- **Meldekort** - Meldekort for brukere og saksbehandlere
- **Saksbehandling** - Brevmaler og behandlingsinformasjon
- **Produktside dagpenger** - Offentlig informasjon om dagpenger
- **Brukerdialog** - Ny dagpengesøknad

### Hovedfunksjoner

- **Flerspråklig støtte** - Bokmål, Nynorsk og Engelsk
- **Multi-workspace** - Separate produksjons- og utviklingsmiljøer
- **NAV SSO** - Integrert SAML-autentisering
- **Tilpasset struktur** - Organisert etter applikasjonsdomene
- **Automatisk backup** - Scheduled dataset-eksporter
- **Live preview** - Forhåndsvisning av produktsider

## Kom i gang

### Forutsetninger

- Node.js versjon 20.17.0 (se `.nvmrc`)
- Tilgang til NAV SSO

### Installasjon

```bash
pnpm install
```

### Login

Logg inn med NAV SSO:

```bash
npx sanity login --sso navikt
```

### Utvikling

Start lokal utviklingsserver:

```bash
pnpm run dev
```

Studio åpnes på `http://localhost:3333`

## Prosjektstruktur

```
dp-sanity-cms-v3/
├── schema/                    # Innholdstyper (schemas)
│   ├── soknad/               # Søknadsskjemaer
│   ├── mine-dagpenger/       # Mine dagpenger-appen
│   ├── rapportering/         # Rapporteringsapp
│   ├── saksbehandling/       # Saksbehandling og brevmaler
│   ├── produktside/          # Produktside dagpenger
│   └── brukerdialog/         # Brukerdialog
├── components/               # React-komponenter
│   ├── alert-text/          # Varslingskomponenter
│   ├── read-more/           # Utvidbart innhold
│   └── timeline/            # Tidslinje-komponenter
├── migrations/              # Database-migrasjoner
├── desk-structure.ts        # Tilpasset desk structure
├── sanity.config.ts         # Hovedkonfigurasjon
└── sanity.cli.ts           # CLI-konfigurasjon
```

## Viktige filer

### Konfigurasjon

- **sanity.config.ts** - Hovedkonfigurasjon med workspaces, plugins og internasjonalisering
- **desk-structure.ts** - Tilpasset organisering av innhold i Studio
- **sanity.cli.ts** - CLI-innstillinger (peker på produksjonsdataset)

### Schema-organisering

Alle schemas er organisert i mapper etter applikasjonsdomene. Hvert schema har:

- `languageField` - Skjult felt for flerspråklig håndtering
- `textIdField` - Unik identifikator for innholdsreferanser
- Preview-konfigurasjon for bedre UX i lister

## Tilgjengelige scripts

```bash
# Utvikling
pnpm run dev              # Start lokal utviklingsserver
pnpm start                # Alias for dev

# Bygg og deploy
pnpm run build            # Bygg produksjonsstudio
pnpm run deploy           # Deploy til Sanity hosted studio

# Validering
pnpm run type-check       # TypeScript validering

# Data-håndtering
pnpm run backup                        # Eksporter produksjonsdata
pnpm run copyProdDataToDevelopment    # Kopier prod til dev dataset

# GraphQL
pnpm run deploy-graphql   # Deploy GraphQL API
```

## Flerspråklig innhold

Prosjektet bruker `@sanity/document-internationalization` plugin for å håndtere innhold i tre språk:

- **nb** (Norsk Bokmål) - Grunnspråk
- **nn** (Norsk Nynorsk)
- **en** (Engelsk)

Alle dokumenter har et skjult `language`-felt. Desk structure filtrerer automatisk til å vise kun grunnspråk-dokumenter, med oversettelser tilgjengelig via plugin-grensesnittet.

## Autentisering

Prosjektet bruker NAV SSO (SAML) for autentisering:

```typescript
// I sanity.config.ts
auth: {
  mode: 'replace',
  redirectOnSingle: true,
  providers: [
    {
      name: 'saml',
      title: 'NAV SSO',
      url: 'https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37',
      logo: '/static/navlogo.svg',
    },
  ],
}
```

## Deploy og CI/CD

### GitHub Actions Workflows

#### Deploy (`.github/workflows/deploy.yaml`)

- Trigger: Push til `main`-branch
- Bygger studio med `pnpm run build`
- Laster opp til NAIS CDN (`dp-sanity-cms-v3/dev`)
- Bruker NAIS workload identity for autentisering

#### Backup (`.github/workflows/backup.yaml`)

- Trigger: Scheduled (hvert 16. dag)
- Eksporterer produksjonsdataset
- Lagrer som GitHub Actions artifacts

#### Cloud Backup (`.github/workflows/cloud-backup.yaml`)

- Trigger: Manuell
- Kopierer dataset til cloud backup

## NAV Design System

Prosjektet bruker NAV Design System for styling og komponenter:

```json
"@navikt/ds-react": "^6.17.0",
"@navikt/ds-css": "^6.17.0",
"@navikt/ds-icons": "^3.4.3"
```

## Workspace-oppsett

Prosjektet har to workspaces:

### Production

- Dataset: `production`
- Base path: `/production`
- Ikon: 🏢
- Subtitle: "Produksjonsdata"

### Development

- Dataset: `development`
- Base path: `/development`
- Ikon: 🛠️
- Subtitle: "Utviklingsdata"

## Plugins

- **@sanity/vision** - GROQ query testing tool
- **@sanity/document-internationalization** - Flerspråklig innholdshåndtering

## Utvikling

### Pre-commit hooks

Prosjektet bruker Husky og lint-staged for pre-commit validering:

- Linting av JS/TS-filer
- TypeScript type-checking
- Prettier formattering

### TypeScript

Prosjektet bruker strict TypeScript-konfigurasjon for bedre type-sikkerhet.

## Nyttige ressurser

- [Sanity dokumentasjon](https://www.sanity.io/docs)
- [NAV Design System](https://aksel.nav.no/)
- [NAIS dokumentasjon](https://doc.nais.io/)

## Backup-strategi

- **Automatisk backup**: Hver 16. dag via GitHub Actions
- **Cloud backup**: Manuell trigger tilgjengelig
- **Dataset-eksport**: Via npm script (`pnpm run backup`)
- **Artifacts**: Lagres i GitHub Actions (90 dagers retention)

## Hjelp og support

- Problemer? Opprett et issue i GitHub
- Spørsmål om Sanity? Se [Sanity dokumentasjon](https://www.sanity.io/docs)
- NAIS-relatert? Se [NAIS dokumentasjon](https://doc.nais.io/)

## Lisens

Prosjektet eies av NAV (Arbeids- og velferdsetaten).

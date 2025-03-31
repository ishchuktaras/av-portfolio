# Architektura fotografického portfolia

Tento dokument popisuje architekturu fotografického portfolia, které je postaveno na Next.js s App Routerem a využívá Repository Pattern pro oddělení datové vrstvy od business logiky.

## Přehled architektury

Aplikace je strukturována jako monorepo s jasně oddělenými zodpovědnostmi:

```mermaid
graph TD
    A[UI Components] --> B[API Layer]
    B --> C[Repository Layer]
    C --> D[Database]
    E[Server Actions] --> B
    F[API Routes] --> B


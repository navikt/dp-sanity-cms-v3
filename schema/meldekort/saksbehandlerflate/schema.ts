import { sideSchemas } from './sider/schema'
import { modalSchemas } from './modaler/schema'
import { fellesSchemas } from './fellesKomponenter/schema'

export const saksbehandlerflateSchemas = [...sideSchemas, ...modalSchemas, ...fellesSchemas]

// @ts-nocheck
import { getCliClient } from 'sanity/cli'

/**
 * This migration script renames the document type from `meldekortFyllUtTabell`
 * to `meldekortAktivitetsTabell` and updates the document ID accordingly.
 *
 * 1. Take a backup of your dataset with:
 * npx sanity@latest dataset export
 *
 * 2. Run the script:
 * npx sanity@latest exec ./scripts/renameMeldekortFyllUtTabell.ts --with-user-token
 */

const OLD_TYPE = 'meldekortFyllUtTabell'
const NEW_TYPE = 'meldekortAktivitetsTabell'

// This will use the client configured in ./sanity.cli.ts
const client = getCliClient()

const fetchDocuments = () =>
  client.fetch(
    `*[_type == $oldType][0...100] {
      _id,
      _rev,
      ...
    }`,
    { oldType: OLD_TYPE },
  )

const migrateNextBatch = async () => {
  const documents = await fetchDocuments()

  if (documents.length === 0) {
    console.log('No more documents to migrate!')
    return null
  }

  console.log(`Migrating ${documents.length} document(s)...`)

  const transaction = client.transaction()

  documents.forEach((doc) => {
    const oldId = doc._id
    const newId = oldId.replace(OLD_TYPE, NEW_TYPE)

    // Create new document with new _id and _type
    const { _id, _rev, _type, ...docWithoutMeta } = doc
    transaction.create({
      ...docWithoutMeta,
      _id: newId,
      _type: NEW_TYPE,
    })

    // Delete old document
    transaction.delete(oldId)

    console.log(`  ${oldId} -> ${newId}`)
  })

  await transaction.commit()

  return migrateNextBatch()
}

migrateNextBatch().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_5ytKH1m` ON `posts` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  collection.indexes = []

  return dao.saveCollection(collection)
})

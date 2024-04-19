/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syo45bql",
    "name": "post_body",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syo45bql",
    "name": "slate_body",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})

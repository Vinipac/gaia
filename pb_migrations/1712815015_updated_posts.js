/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  // remove
  collection.schema.removeField("yiwpwccu")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yiwpwccu",
    "name": "text",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("syo45bql")

  return dao.saveCollection(collection)
})

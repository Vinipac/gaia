/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sblnqhs2",
    "name": "slug",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  // remove
  collection.schema.removeField("sblnqhs2")

  return dao.saveCollection(collection)
})

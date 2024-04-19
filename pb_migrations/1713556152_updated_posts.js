/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75i6cyrmcb3xble")

  collection.viewRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qd3duohk",
    "name": "post_text_temporary",
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

  collection.viewRule = null

  // remove
  collection.schema.removeField("qd3duohk")

  return dao.saveCollection(collection)
})

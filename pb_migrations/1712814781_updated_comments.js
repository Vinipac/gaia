/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("infbtxybuyh138b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "morytcb7",
    "name": "parent_comment",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "infbtxybuyh138b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("infbtxybuyh138b")

  // remove
  collection.schema.removeField("morytcb7")

  return dao.saveCollection(collection)
})

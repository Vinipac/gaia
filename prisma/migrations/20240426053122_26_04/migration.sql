/*
  Warnings:

  - You are about to drop the column `slug` on the `Post` table. All the data in the column will be lost.
  - The `content` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "slug",
ALTER COLUMN "title" DROP NOT NULL,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB;

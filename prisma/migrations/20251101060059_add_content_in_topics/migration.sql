/*
  Warnings:

  - You are about to drop the column `audio_url` on the `topics` table. All the data in the column will be lost.
  - Added the required column `content` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topics" DROP COLUMN "audio_url",
ADD COLUMN     "content" TEXT NOT NULL;

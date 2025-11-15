/*
  Warnings:

  - Made the column `content` on table `topics` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "topics" ALTER COLUMN "content" SET NOT NULL;

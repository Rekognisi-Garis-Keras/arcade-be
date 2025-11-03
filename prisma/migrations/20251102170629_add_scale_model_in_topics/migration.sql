/*
  Warnings:

  - Added the required column `scale_model` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topics" ADD COLUMN     "scale_model" TEXT NOT NULL;

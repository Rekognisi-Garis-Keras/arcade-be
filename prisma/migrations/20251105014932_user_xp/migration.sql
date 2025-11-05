/*
  Warnings:

  - You are about to drop the column `score` on the `quiz_results` table. All the data in the column will be lost.
  - Added the required column `xp` to the `quiz_results` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quiz_results" DROP COLUMN "score",
ADD COLUMN     "xp" INTEGER NOT NULL;

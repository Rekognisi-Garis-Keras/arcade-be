/*
  Warnings:

  - You are about to drop the column `finished` on the `topics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "topics" DROP COLUMN "finished";

-- CreateTable
CREATE TABLE "topic_finisheds" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "finished_at" TIMESTAMP(3),

    CONSTRAINT "topic_finisheds_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "topic_finisheds_user_id_topic_id_key" ON "topic_finisheds"("user_id", "topic_id");

-- AddForeignKey
ALTER TABLE "topic_finisheds" ADD CONSTRAINT "topic_finisheds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topic_finisheds" ADD CONSTRAINT "topic_finisheds_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

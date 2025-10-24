-- CreateTable
CREATE TABLE "quiz_results" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quiz_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quiz_results_uuid_key" ON "quiz_results"("uuid");

-- AddForeignKey
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

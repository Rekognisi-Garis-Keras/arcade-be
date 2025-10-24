-- CreateTable
CREATE TABLE "quiz_answers" (
    "id" SERIAL NOT NULL,
    "result_id" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL,

    CONSTRAINT "quiz_answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "quiz_answers" ADD CONSTRAINT "quiz_answers_result_id_fkey" FOREIGN KEY ("result_id") REFERENCES "quiz_results"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

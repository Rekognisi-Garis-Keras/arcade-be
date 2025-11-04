-- DropForeignKey
ALTER TABLE "public"."quiz_answers" DROP CONSTRAINT "quiz_answers_result_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."quiz_results" DROP CONSTRAINT "quiz_results_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."quiz_results" DROP CONSTRAINT "quiz_results_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."quizzes" DROP CONSTRAINT "quizzes_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."topics" DROP CONSTRAINT "topics_subject_id_fkey";

-- AlterTable
ALTER TABLE "quizzes" ADD COLUMN     "explain" TEXT;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_answers" ADD CONSTRAINT "quiz_answers_result_id_fkey" FOREIGN KEY ("result_id") REFERENCES "quiz_results"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "user_xps" (
    "user_id" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_xps_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "user_xps" ADD CONSTRAINT "user_xps_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "lamp" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "on" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lamp_pkey" PRIMARY KEY ("id")
);

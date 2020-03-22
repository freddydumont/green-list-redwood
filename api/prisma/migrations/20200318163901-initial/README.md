# Migration `20200318163901-initial`

This migration has been generated by Frederick Morin at 3/18/2020, 4:39:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."User" (
    "committeeRecruitmentConsent" BOOLEAN NOT NULL DEFAULT false ,
    "contactPreference" TEXT NOT NULL DEFAULT 'email' ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "dateOfBirth" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "email" TEXT NOT NULL DEFAULT '' ,
    "firstName" TEXT NOT NULL DEFAULT '' ,
    "gender" TEXT NOT NULL DEFAULT 'male' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "lang" TEXT NOT NULL DEFAULT 'fr' ,
    "lastName" TEXT NOT NULL DEFAULT '' ,
    "location" TEXT NOT NULL DEFAULT '' ,
    "otherSkills" TEXT   ,
    "phone" TEXT   ,
    "updatedAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' 
) 

CREATE TABLE "quaint"."SkillDomain" (
    "domain" TEXT NOT NULL DEFAULT '' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT
) 

CREATE TABLE "quaint"."Skill" (
    "domain" INTEGER NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "skill" TEXT NOT NULL DEFAULT '' ,FOREIGN KEY ("domain") REFERENCES "SkillDomain"("id") ON DELETE RESTRICT ON UPDATE CASCADE
) 

CREATE TABLE "quaint"."Availability" (
    "availability" TEXT NOT NULL DEFAULT '' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT
) 

CREATE TABLE "quaint"."_SkillDomainToUser" (
    "A" INTEGER NOT NULL  ,
    "B" INTEGER NOT NULL  ,FOREIGN KEY ("A") REFERENCES "SkillDomain"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

CREATE TABLE "quaint"."_SkillToUser" (
    "A" INTEGER NOT NULL  ,
    "B" INTEGER NOT NULL  ,FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

CREATE TABLE "quaint"."_AvailabilityToUser" (
    "A" INTEGER NOT NULL  ,
    "B" INTEGER NOT NULL  ,FOREIGN KEY ("A") REFERENCES "Availability"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")

CREATE UNIQUE INDEX "quaint"."SkillDomain.domain" ON "SkillDomain"("domain")

CREATE UNIQUE INDEX "quaint"."Skill.skill" ON "Skill"("skill")

CREATE UNIQUE INDEX "quaint"."Availability.availability" ON "Availability"("availability")

CREATE UNIQUE INDEX "quaint"."_SkillDomainToUser_AB_unique" ON "_SkillDomainToUser"("A","B")

CREATE UNIQUE INDEX "quaint"."_SkillToUser_AB_unique" ON "_SkillToUser"("A","B")

CREATE UNIQUE INDEX "quaint"."_AvailabilityToUser_AB_unique" ON "_AvailabilityToUser"("A","B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200318163901-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,64 @@
+datasource DS {
+  provider = "sqlite"
+  url = env("DATABASE_URL")
+}
+
+generator photonjs {
+  provider = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+
+model User {
+  id                          Int            @id @default(autoincrement())
+  createdAt                   DateTime       @default(now())
+  updatedAt                   DateTime       @updatedAt
+  firstName                   String
+  lastName                    String
+  dateOfBirth                 DateTime
+  gender                      Gender
+  lang                        Language
+  location                    String
+  phone                       String?
+  email                       String         @unique
+  contactPreference           ContactBy
+  skillDomains                SkillDomain[]
+  skills                      Skill[]
+  otherSkills                 String?
+  availabilities              Availability[]
+  committeeRecruitmentConsent Boolean        @default(false)
+}
+
+model SkillDomain {
+  id     Int     @id @default(autoincrement())
+  domain String  @unique
+  skills Skill[]
+  users  User[]
+}
+
+model Skill {
+  id     Int         @id @default(autoincrement())
+  skill  String      @unique
+  domain SkillDomain
+  users  User[]
+}
+
+model Availability {
+  id           Int    @id @default(autoincrement())
+  availability String @unique
+  users        User[]
+}
+
+enum Gender {
+  male female
+}
+
+enum ContactBy {
+  email phone text
+}
+
+enum Language {
+  fr en
+}
```


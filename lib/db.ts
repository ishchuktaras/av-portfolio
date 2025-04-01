import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { getDb as getMockDb } from "./mock-db"

// Create a more serverless-friendly connection
let db: ReturnType<typeof drizzle> | null = null

try {
  // Check if DATABASE_URL is available
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not defined - using mock database")
    throw new Error("No database connection string")
  }

  // Create connection
  const client = postgres(process.env.DATABASE_URL, {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10,
  })

  // Initialize drizzle with the postgres client
  db = drizzle(client)

  console.log("Database connection initialized")
} catch (error) {
  console.error("Failed to initialize database connection:", error)
  // We'll handle the fallback to mock data in the routes
  db = null
}

// Export the db instance or mock db if real db is not available
export const getDb = () => {
  if (db) return db
  return getMockDb()
}

// Run migrations (for development)
export async function runMigrations() {
  if (process.env.NODE_ENV === "development" && db) {
    try {
      console.log("Running migrations...")
      await migrate(db, { migrationsFolder: "drizzle" })
      console.log("Migrations completed")
    } catch (error) {
      console.error("Migration failed:", error)
    }
  }
}

// Export the db instance
export { db }


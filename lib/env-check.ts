// Kontrola, zda jsou k dispozici všechny potřebné proměnné prostředí Firebase
export function checkFirebaseEnvVars() {
  const requiredVars = [
    "NEXT_PUBLIC_FIREBASE_API_KEY",
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "NEXT_PUBLIC_FIREBASE_APP_ID",
  ]

  const missingVars = requiredVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    console.warn(`Chybí následující proměnné prostředí Firebase: ${missingVars.join(", ")}`)
    return false
  }

  return true
}

// Kontrola, zda je Firebase API klíč platný (není demo klíč)
export function isValidFirebaseApiKey() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  return apiKey && apiKey !== "demo-api-key" && apiKey.length > 10
}


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccess(null)
    setError(null)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")

      setSuccess("Vaše zpráva byla úspěšně odeslána. Brzy se vám ozvu.")
    } catch (err) {
      setError("Při odesílání zprávy došlo k chybě. Zkuste to prosím znovu.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="bg-muted/30 py-6 sm:py-12">
        <div className="container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Kontakt</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Máte zájem o spolupráci nebo máte dotaz? Neváhejte mě kontaktovat.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2 sm:pb-4">
                  <CardTitle className="text-xl sm:text-2xl">Napište mi</CardTitle>
                  <CardDescription>Vyberte si z možností níže a já se vám co nejdříve ozvu.</CardDescription>
                </CardHeader>
                <CardContent>
                  {success && (
                    <Alert className="mb-4 sm:mb-6 bg-primary/10 border-primary text-primary">
                      <AlertDescription>{success}</AlertDescription>
                    </Alert>
                  )}

                  {error && (
                    <Alert className="mb-4 sm:mb-6" variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="name">Jméno</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Vaše jméno"
                          required
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="vas@email.cz"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label>Typ služby</Label>
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          "Portrétní fotografie",
                          "Módní fotografie",
                          "Komerční fotografie",
                          "Filmový záznam",
                          "Spolupráce s modelkami",
                          "Jiné",
                        ].map((service) => (
                          <Button
                            key={service}
                            type="button"
                            variant={subject === service ? "default" : "outline"}
                            className="justify-start h-auto py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm"
                            onClick={() => setSubject(service)}
                          >
                            {service}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label>Co vás zajímá?</Label>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2">
                        {[
                          "Ceník služeb",
                          "Termíny focení",
                          "Lokace focení",
                          "Spolupráce",
                          "Ukázky prací",
                          "Konzultace",
                        ].map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`interest-${interest}`}
                              className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setMessage((prev) => (prev ? `${prev}\n- ${interest}` : `- ${interest}`))
                                } else {
                                  setMessage((prev) => prev.replace(`\n- ${interest}`, "").replace(`- ${interest}`, ""))
                                }
                              }}
                            />
                            <Label htmlFor={`interest-${interest}`} className="text-xs sm:text-sm font-normal">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="message">Doplňující informace (nepovinné)</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Máte nějaké další požadavky nebo otázky?"
                        rows={3}
                        className="text-xs sm:text-sm"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Odesílám...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          Odeslat zprávu
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader className="pb-2 sm:pb-4">
                  <CardTitle className="text-xl sm:text-2xl">Kontaktní informace</CardTitle>
                  <CardDescription>Můžete mě kontaktovat i přímo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium">Email</p>
                        <a
                          href="mailto:info@anhelina.cz"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
                        >
                          info@anhelina.cz
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium">Telefon</p>
                        <a
                          href="tel:+420123456789"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
                        >
                          +420 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full mt-0.5">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium">Adresa</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Jihlava, Česká republika</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t">
                    <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Sociální sítě</p>
                    <div className="flex gap-2">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-1.5 sm:p-2 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-1.5 sm:p-2 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


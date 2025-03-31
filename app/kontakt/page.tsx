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
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-muted-foreground">
            Máte zájem o spolupráci nebo máte dotaz? Neváhejte mě kontaktovat.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Napište mi</CardTitle>
                  <CardDescription>Vyplňte formulář a já se vám co nejdříve ozvu.</CardDescription>
                </CardHeader>
                <CardContent>
                  {success && (
                    <Alert className="mb-6 bg-primary/10 border-primary text-primary">
                      <AlertDescription>{success}</AlertDescription>
                    </Alert>
                  )}

                  {error && (
                    <Alert className="mb-6" variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Jméno</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Vaše jméno"
                          required
                        />
                      </div>
                      <div className="space-y-2">
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

                    <div className="space-y-2">
                      <Label htmlFor="subject">Předmět</Label>
                      <Input
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="O čem nám píšete"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Zpráva</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Vaše zpráva..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Odesílám...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
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
                <CardHeader>
                  <CardTitle>Kontaktní informace</CardTitle>
                  <CardDescription>Můžete mě kontaktovat i přímo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a href="mailto:info@anhelina.cz" className="text-sm text-muted-foreground hover:text-primary">
                          info@anhelina.cz
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Telefon</p>
                        <a href="tel:+420123456789" className="text-sm text-muted-foreground hover:text-primary">
                          +420 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Adresa</p>
                        <p className="text-sm text-muted-foreground">Jihlava, Česká republika</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-3">Sociální sítě</p>
                    <div className="flex gap-2">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Instagram className="h-5 w-5 text-primary" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="h-5 w-5 text-primary" />
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


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BusinessWebsite() {
  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">

      {/* Floating Luffy Corner Symbol */}
      <motion.img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAGQAZADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9QKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"
        alt="Symbol"
        className="fixed bottom-6 right-6 w-20 h-20 rounded-full shadow-2xl border border-[#6ee7f9]/30 z-50"
        animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Gradient Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background: `
          radial-gradient(circle at 20% 30%, rgba(20,184,166,0.15), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(139,92,246,0.15), transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08), transparent 60%)
          `,
        }}
      />

      {/* Header */}
      <header className="bg-black/70 backdrop-blur border-b border-[#8b5cf6]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              VEL's
            </h1>
            <p className="text-xs text-[#c4b5fd]">Gear Five</p>
          </motion.div>

          <nav className="space-x-6 hidden md:block text-sm">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <motion.a
                key={name}
                href={link}
                className="hover:text-teal-300"
                whileHover={{ scale: 1.1 }}
              >
                {name}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            ECM Repair & Key Programming
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#a5b4fc] max-w-xl mx-auto mb-10"
          >
            Professional automotive electronic solutions. Advanced ECU / ECM repair,
            immobilizer solutions, and vehicle key programming.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-2xl px-10 py-6 text-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-black hover:opacity-90">
              Contact Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 border-t border-[#8b5cf6]/20">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16 text-[#c4b5fd]"
          >
            Services
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: "ECM / ECU Repair",
              text: "Complete diagnosis and repair of engine control modules, powertrain ECUs, and automotive electronic control systems.",
            },{
              title: "Key Programming",
              text: "Smart key programming, immobilizer pairing, lost key solutions, and remote key learning for multiple vehicle brands.",
            },{
              title: "Diagnostics & Coding",
              text: "Advanced vehicle diagnostics, module coding, and electronic system troubleshooting using professional tools.",
            }].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <Card className="rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] border border-[#38bdf8]/20">
                  <CardContent className="p-8">
                    <h4 className="text-lg font-semibold mb-3 text-teal-300">{service.title}</h4>
                    <p className="text-[#a5b4fc] text-sm leading-relaxed">{service.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-[#6366f1]/20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl font-semibold mb-6 text-[#c4b5fd]">About VEL's</h3>
          <p className="text-[#a5b4fc] leading-relaxed text-sm">
            VEL's Gear Five provides professional automotive electronic repair
            services focusing on reliability, precision, and advanced diagnostic
            technology. We specialize in solving complex ECM and immobilizer
            related issues for modern vehicles.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-[#38bdf8]/20">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-16 text-[#c4b5fd]"
          >
            Contact
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: Phone,
              text: "+91 XXXXX XXXXX",
            },{
              icon: Mail,
              text: "your@email.com",
            },{
              icon: MapPin,
              text: "Tamil Nadu, India",
            }].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="rounded-2xl bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] border border-[#22d3ee]/20">
                    <CardContent className="p-6 text-center">
                      <Icon className="mx-auto mb-3 text-[#38bdf8]" />
                      <p className="text-sm text-[#a5b4fc]">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-[#818cf8] text-xs border-t border-[#6366f1]/20">
        © {new Date().getFullYear()} VEL's Gear Five. All rights reserved.
      </footer>

    </div>
  );
}

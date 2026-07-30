import { useState } from 'react'

const inputStyle = {
  width: '100%',
  background: 'var(--surface)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: 'var(--white)',
  padding: '1.1rem 1.2rem',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'all 0.3s',
  resize: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
}

const inputErrorStyle = {
  ...inputStyle,
  borderColor: '#e74c3c',
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', service: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.fname.trim()) e.fname = 'First name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!validateEmail(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Please describe your project'
    return e
  }

  const handleSubmit = async () => {
    const validationErrors = validate()
    setErrors(validationErrors)
    setSubmitError('')
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '1d96aa0a-940c-4a9b-ae0a-5d8100b686da',
          subject: `New Enquiry from ${form.fname} ${form.lname}`.trim(),
          from_name: 'Nexlifyy Website',
          name: `${form.fname} ${form.lname}`.trim(),
          email: form.email,
          company: form.company || 'Not provided',
          service: form.service || 'Not specified',
          message: form.message,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        setForm({ fname: '', lname: '', email: '', company: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined })
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--black)', padding: '8rem 4%', position: 'relative', overflow: 'hidden' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,168,76,0.04), transparent)' }}
      />

      <div
        className="mx-auto grid items-start gap-24"
        style={{ maxWidth: 1100, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {/* Info */}
        <div className="reveal-left">
          <div className="flex items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
            <span className="w-8 h-px bg-gold" />
            Get In Touch
          </div>
          <h2 className="font-display text-cream mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
            Let's Build<br /><em className="text-gold">Something</em><br />Remarkable
          </h2>
          <p className="text-text2 mb-12" style={{ fontSize: '0.9rem', lineHeight: 1.9 }}>
            Ready to transform your digital presence? Tell us about your project. We'll reply within 24 hours with a clear strategy and proposal.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: '✉', label: 'Email Us', value: 'hello@nexlifyy.com' },
              { icon: '◎', label: 'Available In', value: 'Canada · USA · Worldwide' },
              { icon: '⏱', label: 'Response Time', value: 'Within 24 Hours' },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center flex-shrink-0 text-gold"
                  style={{ width: 36, height: 36, border: '1px solid rgba(201,168,76,0.2)', fontSize: '1rem' }}
                >
                  {d.icon}
                </div>
                <div>
                  <div className="text-text3 uppercase tracking-widest mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}>{d.label}</div>
                  <div className="text-text" style={{ fontSize: '0.9rem' }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="reveal-right flex flex-col gap-6">
          <div className="contact-name-grid gap-6">
            <div className="form-group relative">
              <input name="fname" value={form.fname} onChange={change} placeholder="First Name"
                style={errors.fname ? inputErrorStyle : inputStyle} aria-required="true" />
              <label className="absolute top-[1.1rem] left-[1.2rem] text-text3 pointer-events-none transition-all duration-300" style={{ fontSize: '0.85rem' }}>First Name</label>
              {errors.fname && <span className="text-[#e74c3c] mt-1 block" style={{ fontSize: '0.72rem' }}>{errors.fname}</span>}
            </div>
            <div className="form-group relative">
              <input name="lname" value={form.lname} onChange={change} placeholder="Last Name" style={inputStyle} />
              <label className="absolute top-[1.1rem] left-[1.2rem] text-text3 pointer-events-none transition-all duration-300" style={{ fontSize: '0.85rem' }}>Last Name</label>
            </div>
          </div>

          <div className="form-group relative">
            <input type="email" name="email" value={form.email} onChange={change} placeholder="Email Address"
              style={errors.email ? inputErrorStyle : inputStyle} aria-required="true" />
            <label className="absolute top-[1.1rem] left-[1.2rem] text-text3 pointer-events-none transition-all duration-300" style={{ fontSize: '0.85rem' }}>Email Address</label>
            {errors.email && <span className="text-[#e74c3c] mt-1 block" style={{ fontSize: '0.72rem' }}>{errors.email}</span>}
          </div>

          <div className="form-group relative">
            <input name="company" value={form.company} onChange={change} placeholder="Company Name" style={inputStyle} />
            <label className="absolute top-[1.1rem] left-[1.2rem] text-text3 pointer-events-none transition-all duration-300" style={{ fontSize: '0.85rem' }}>Company Name</label>
          </div>

          <div className="relative">
            <select name="service" value={form.service} onChange={change}
              style={{ ...inputStyle, color: form.service ? 'var(--white)' : 'var(--text3)' }}>
              <option value="" disabled>Select a Service</option>
              {['Web Design & Development','E-Commerce Build','Landing Page','Brand Identity','SEO & Digital Marketing','Full Digital Transformation'].map(s => (
                <option key={s} style={{ background: 'var(--surface)' }}>{s}</option>
              ))}
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gold pointer-events-none" style={{ fontSize: '0.8rem' }}>↓</span>
          </div>

          <div className="form-group relative">
            <textarea name="message" value={form.message} onChange={change} rows="4" placeholder="Tell us about your project"
              style={errors.message ? inputErrorStyle : inputStyle} aria-required="true" />
            <label className="absolute top-[1.1rem] left-[1.2rem] text-text3 pointer-events-none transition-all duration-300" style={{ fontSize: '0.85rem' }}>Project Details</label>
            {errors.message && <span className="text-[#e74c3c] mt-1 block" style={{ fontSize: '0.72rem' }}>{errors.message}</span>}
          </div>

          {submitError && (
            <div className="text-[#e74c3c]" style={{ fontSize: '0.82rem', padding: '0.8rem 1rem', background: 'rgba(231,76,60,0.08)', border: '1px solid rgba(231,76,60,0.2)' }}>
              {submitError}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting || submitted}
            className="relative overflow-hidden group self-start transition-all duration-500"
            style={{
              background: submitted ? '#2ecc71' : (submitting ? 'var(--text3)' : 'var(--gold)'),
              color: 'var(--black)',
              border: 'none', padding: '1.1rem 3rem',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              cursor: submitting || submitted ? 'default' : 'pointer',
              fontWeight: 500,
              opacity: submitting ? 0.7 : 1,
            }}
          >
            <span className="relative z-[1]">
              {submitted ? 'Message Sent! ✦' : submitting ? 'Sending...' : 'Send Message ✦'}
            </span>
            {!submitting && !submitted && (
              <span
                className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"
                style={{ background: 'var(--white2)' }}
              />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

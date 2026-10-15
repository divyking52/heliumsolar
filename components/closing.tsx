"use client";

import { FormEvent, useState } from "react";
import { COPY, SITE } from "@/lib/content";

export function Closing() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="closing-vision" className="bg-white px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="max-w-[420px] whitespace-pre-line text-[36px] leading-none font-medium tracking-[-0.036em] text-ink md:text-[44px]">
          {COPY.closingTitle}
        </p>
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.4] tracking-[-0.01em] text-muted">
          {COPY.closingBody}
        </p>
        <p className="mt-4 text-[14px] text-muted">
          <a href={SITE.phoneHref} className="hover:text-brand">
            {SITE.phone}
          </a>
          {" · "}
          <a href={SITE.emailHref} className="hover:text-brand">
            {SITE.email}
          </a>
        </p>

        <form onSubmit={onSubmit} className="mt-14 max-w-[720px]">
          <label className="block border-b border-black/15 py-4">
            <span className="mb-2 block text-[16px] tracking-[-0.01em]">Name</span>
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent text-[16px] outline-none placeholder:text-black/30"
            />
          </label>
          <label className="block border-b border-black/15 py-4">
            <span className="mb-2 block text-[16px] tracking-[-0.01em] uppercase">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full bg-transparent text-[16px] outline-none placeholder:text-black/30"
            />
          </label>
          <label className="block border-b border-black/15 py-4">
            <span className="mb-2 block text-[16px] tracking-[-0.01em] uppercase">Message</span>
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Tell us about your site or energy needs..."
              className="w-full resize-none bg-transparent text-[16px] outline-none placeholder:text-black/30"
            />
          </label>
          <button
            type="submit"
            className="mt-8 text-[20px] font-medium tracking-wide text-brand transition-opacity hover:opacity-60"
          >
            {sent ? "SENT" : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}

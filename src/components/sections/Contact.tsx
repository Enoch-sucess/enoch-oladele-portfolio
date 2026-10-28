import Reveal from "../ui/Reveal";
import { useState, type FormEvent } from "react";
import BracketButton from "../ui/BracketButton";
import SectionHeading from "../ui/SectionHeading";
import { socialLinks } from "../../data/portfolio";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrppqwbl";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

const emailLink = socialLinks.find((link) => link.icon === "email")?.href;

const fieldClasses =
  "w-full border-b-2 border-l-2 border-black bg-transparent px-3 py-3 text-sm text-black placeholder:text-muted focus-visible:outline-none";

const labelClasses = "text-xs font-bold uppercase tracking-[0.2em] text-black";

const errorClasses = "mt-1 text-xs font-semibold text-red-700";

const validate = (data: FormData): Errors => {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    errors.message = "Please write at least 10 characters.";
  }

  return errors;
};

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Block double submits while a request is running.
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const foundErrors = validate(data);

    setErrors(foundErrors);

    const firstInvalid = (["name", "email", "message"] as FieldName[]).find(
      (field) => foundErrors[field],
    );

    if (firstInvalid) {
      setStatus("idle");
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="px-6 pb-section pt-section md:px-12 lg:px-20"
    >
      <Reveal>
        <SectionHeading title="Contact" />
      </Reveal>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-ink/80">
        Have a project in mind, or a role you think I would be a good fit for?
        Send me a message and I will get back to you.
      </p>

      <Reveal>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 flex max-w-xl flex-col gap-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New message from your portfolio"
          />

          {/* Honeypot: hidden from people, bots tend to fill it in. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className={labelClasses}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              aria-required="true"
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={fieldClasses}
            />
            {errors.name && (
              <p id="contact-name-error" className={errorClasses}>
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className={labelClasses}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              aria-required="true"
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
              className={fieldClasses}
            />
            {errors.email && (
              <p id="contact-email-error" className={errorClasses}>
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              maxLength={2000}
              placeholder="Your message"
              aria-required="true"
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className={`${fieldClasses} resize-y`}
            />
            {errors.message && (
              <p id="contact-message-error" className={errorClasses}>
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-black">
              <BracketButton type="submit">
                {status === "sending" ? "Sending..." : "Submit"}
              </BracketButton>
            </div>

            <div aria-live="polite" className="text-center text-sm">
              {status === "success" && (
                <p className="font-semibold text-green-800">
                  Thank you, your message has been sent. I will get back to you
                  soon.
                </p>
              )}
              {status === "error" && (
                <p className="font-semibold text-red-700">
                  Something went wrong and your message was not sent. Please try
                  again
                  {emailLink && (
                    <>
                      {" "}
                      or email me directly at{" "}
                      <a href={emailLink} className="underline">
                        {emailLink.replace("mailto:", "")}
                      </a>
                    </>
                  )}
                  .
                </p>
              )}
            </div>
          </div>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;

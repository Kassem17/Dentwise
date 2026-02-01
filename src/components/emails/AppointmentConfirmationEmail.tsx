import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AppointmentConfirmationEmailProps {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  duration: string;
  price: string;
}

export default function AppointmentConfirmationEmail({
  doctorName,
  appointmentDate,
  appointmentTime,
  appointmentType,
  duration,
  price,
}: AppointmentConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your dental appointment has been confirmed</Preview>

      <Body style={main}>
        <Container style={container}>
          {/* ===== Header ===== */}
          <Section style={header}>
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0wo6f4RuvdK7BCFrIuMKrfsUI4r9MxhcnQ&s"
              width="48"
              height="48"
              alt="DentWise"
              style={logo}
            />
            <Text style={brand}>DentWise</Text>
          </Section>

          {/* ===== Content ===== */}
          <Heading style={h1}>Appointment Confirmed 🦷</Heading>

          <Text style={text}>Hi there,</Text>

          <Text style={text}>
            Your dental appointment has been successfully booked. Below are the
            details of your visit:
          </Text>

          {/* ===== Appointment Details ===== */}
          <Section style={appointmentDetails}>
            <Text style={detailLabel}>Doctor</Text>
            <Text style={detailValue}>{doctorName}</Text>

            <Text style={detailLabel}>Appointment Type</Text>
            <Text style={detailValue}>{appointmentType}</Text>

            <Text style={detailLabel}>Date</Text>
            <Text style={detailValue}>{appointmentDate}</Text>

            <Text style={detailLabel}>Time</Text>
            <Text style={detailValue}>{appointmentTime}</Text>

            <Text style={detailLabel}>Duration</Text>
            <Text style={detailValue}>{duration}</Text>

            <Text style={detailLabel}>Cost</Text>
            <Text style={detailValue}>{price}</Text>

            <Text style={detailLabel}>Location</Text>
            <Text style={detailValue}>Dental Center</Text>
          </Section>

          <Text style={text}>
            Please arrive at least <strong>15 minutes early</strong>. If you
            need to reschedule or cancel, contact us at least 24 hours in
            advance.
          </Text>

          {/* ===== CTA ===== */}
          <Section style={buttonContainer}>
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/appointments`}
              style={button}
            >
              View My Appointments
            </Link>
          </Section>

          {/* ===== Footer ===== */}
          <Text style={footer}>
            Best regards,
            <br />
            <strong>The DentWise Team</strong>
          </Text>

          <Text style={footerText}>
            Need help? Contact us at{" "}
            <Link href="mailto:support@dentwise.com">support@dentwise.com</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ===================== */
/* ======= STYLES ====== */
/* ===================== */

const main = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
};

const container = {
  margin: "0 auto",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
};

/* Header */
const header = {
  background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
  padding: "28px",
  textAlign: "center" as const,
};

const logo = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  padding: "6px",
};

const brand = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  marginTop: "12px",
  letterSpacing: "0.4px",
};

/* Typography */
const h1 = {
  color: "#111827",
  fontSize: "26px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "32px 24px 12px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "12px 24px",
};

/* Appointment Card */
const appointmentDetails = {
  backgroundColor: "#f9fafb",
  borderRadius: "12px",
  padding: "24px",
  margin: "24px",
  border: "1px solid #e5e7eb",
};

const detailLabel = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
  marginBottom: "4px",
};

const detailValue = {
  color: "#111827",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "16px",
};

/* CTA */
const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 24px",
};

const button = {
  backgroundColor: "#2563eb",
  borderRadius: "10px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "14px 32px",
  display: "inline-block",
};

/* Footer */
const footer = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "32px 24px 12px",
};

const footerText = {
  color: "#9ca3af",
  fontSize: "13px",
  lineHeight: "22px",
  margin: "0 24px 32px",
  textAlign: "center" as const,
};

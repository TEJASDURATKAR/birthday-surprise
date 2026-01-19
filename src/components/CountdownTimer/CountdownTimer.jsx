import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./CountdownTimer.css";

export default function CountdownTimer() {
  // 👉 SET BIRTHDAY DATE HERE
  const birthdayDate = new Date("2026-12-14T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = birthdayDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <Container>
        <h2 className="countdown-title">
          Countdown to Your Special Day 🎉
        </h2>

        {timeLeft ? (
          <div className="countdown-grid">
            <CountBox value={timeLeft.days} label="Days" />
            <CountBox value={timeLeft.hours} label="Hours" />
            <CountBox value={timeLeft.minutes} label="Minutes" />
            <CountBox value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <h3 className="birthday-live">
            🎂 Happy Birthday My Love 💜 🎂
          </h3>
        )}
      </Container>
    </section>
  );
}

function CountBox({ value, label }) {
  return (
    <div className="count-box">
      <span className="count-number">{value}</span>
      <span className="count-label">{label}</span>
    </div>
  );
}

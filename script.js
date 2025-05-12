function handleFeedback(event) {
  event.preventDefault();
  const feedback = document.querySelector(
    '#feedbackForm input[name="feedback"]'
  ).value;
  const userEmail = prompt("Please enter your email address:");
  if (userEmail) {
    const mailtoLink = `mailto:jpranayakhil066@gmail.com?subject=Portfolio Feedback&body=${encodeURIComponent(
      `Feedback: ${feedback}\nFrom: ${userEmail}`
    )}`;
    window.location.href = mailtoLink;
  }
}

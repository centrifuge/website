const CTAForm = ({ children }) => {
  const sendEmail = async (source, formValue) => {
    const sendEmailLambdaUrl = "/.netlify/functions/sendEmail";

    const payload = {
      subject: `Inquiry: ${source}`,
      body: {
        source,
        ...formValue
      }
    };

    try {
      const response = await fetch(sendEmailLambdaUrl, {
        method: "POST",
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.log(`Sending mail failed with ${response.statusText}`);
        return false;
      }
    } catch (e) {
      console.log(`Sending mail failed with ${e}`);
      return false;
    }
    return true;
  };

  return children(sendEmail);
};

export default CTAForm;

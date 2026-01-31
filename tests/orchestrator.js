import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
<<<<<<< HEAD
      maxTimeout: 1000,
=======
>>>>>>> e058e998f31919a22f858fef4bf4efd60274dbbf
    });
    
    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
    };
  }
};

export default {
  waitForAllServices,
};

const axios = require('axios');

// Function to send webhook
const sendWebhook = async (event, data) => {
  const endpoint = process.env.AWS_API_GATEWAY_ENDPOINT;
  if (!endpoint) {
    console.error('AWS API Gateway endpoint is not configured.');
    return;
  }

  try {
    const response = await axios.post(endpoint, {
      event: event,
      data: data,
    });
    console.log(`Webhook for ${event} sent successfully:`, response.data);
  } catch (error) {
    console.error(`Failed to send webhook for ${event}:`, error);
  }
};

exports = {
  onTicketCreateHandler: function (args) {
    console.log("> onTicketCreateHandler: ", args);
    sendWebhook('TicketCreate', args);
  },
  onTicketUpdateHandler: function (args) {
    console.log("> onTicketUpdateHandler: ", args);
    sendWebhook('TicketUpdate', args);
  },
  onTicketDeleteHandler: function (args) {
    console.log("> onTicketDeleteHandler: ", args);
    sendWebhook('TicketDelete', args);
  },
  onConversationCreateHandler: function (args) {
    console.log("> onConversationCreateHandler: ", args);
    sendWebhook('ConversationCreate', args);
  },
  onConversationUpdateHandler: function (args) {
    console.log("> onConversationUpdateHandler: ", args);
    sendWebhook('ConversationUpdate', args);
  },
  onConversationDeleteHandler: function (args) {
    console.log("> onConversationDeleteHandler: ", args);
    sendWebhook('ConversationDelete', args);
  },
  onAgentCreateHandler: function (args) {
    console.log("> onAgentCreateHandler: ", args);
    sendWebhook('AgentCreate', args);
  },
  onAgentUpdateHandler: function (args) {
    console.log("> onAgentUpdateHandler: ", args);
    sendWebhook('AgentUpdate', args);
  },
  onAgentDeleteHandler: function (args) {
    console.log("> onAgentDeleteHandler: ", args);
    sendWebhook('AgentDelete', args);
  },
};

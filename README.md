# Vercel deployment events in Discord

This is an extremely simple next.js app that enables you to show Vercel deployment events in Discord.

![image](https://github.com/rewbs/vercel-to-discord/assets/74455/7566e76c-d848-4284-9ecf-eefee2ca6437)

## Setup

1. Configure Vercel to emit a webhook to your instance of this app when deployments occur. The endpoint should be: `https://<wherever-you-deploy-this-service>/api/vercel-webhook`

![image](https://github.com/rewbs/vercel-to-discord/assets/74455/d62d4ad1-6c8a-4839-8b57-c3f92487465d)


2. Configure your Discord server with a webhook for receiving messages and sending them to a specific channel:

![image](https://github.com/rewbs/vercel-to-discord/assets/74455/25162948-fc16-4865-b356-584d1566c704)


3. Deploy the service with the following envionment variables:

```
# Get this from the Vercel webui when setting up your webhook
VERCEL_WEBHOOK_INTEGRATION_SECRET=VAn**********************

# Get this from the Discord UI when setting up a destination webhook
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/**************/39NQ**************************************************************
```



## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run locally:

```bash
pnpm dev
```

Then expose it on the internet via your favourite port-forwarding tool (ngrok, or vs code port forwarding etc...).

Make sure you've set up the appropriate env vars as per setup instructions above.

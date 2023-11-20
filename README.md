# Vercel deployment events in Discord

This is an extremely simple next.js app that enables you to show Vercel deployment events in Discord.

![image](https://github.com/rewbs/vercel-to-discord/assets/74455/7566e76c-d848-4284-9ecf-eefee2ca6437)

## Setup

The app requires 2 envionment variables:

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

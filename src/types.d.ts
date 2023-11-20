// Rough types for Vercel Webhook events as per https://vercel.com/docs/observability/webhooks-overview/webhooks-api

export interface VercelWebhookEvent {
    id: string;
    region?: string;
    payload: Payload;
    createdAt: number;
    type: "deployment.created"
    | "deployment.succeeded"
    | "deployment.ready"
    | "deployment.canceled"
    | "deployment.error"
    | "deployment.check-rerequested"
    | "project.created"
    | "project.removed"
    | "integration-configuration.scope-change-confirmed"
    | "integration-configuration.removed"
    | "integration-configuration.permission-upgraded"
    | "domain.created";
}

export interface Payload {
    user: Project;
    team: Project;
    alias: string[];
    deployment: Deployment;
    links: Links;
    name: string;
    plan: string;
    project: Project;
    regions: string[];
    target: null;
    type: string;
    url: string;
}

export interface Deployment {
    id: string;
    meta: { [key: string]: string };
    name: string;
    url: string;
    inspectorUrl: string;
}

export interface Links {
    deployment: string;
    project: string;
}

export interface Project {
    id: string;
}
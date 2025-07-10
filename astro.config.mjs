import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.dataflow.zone/',
  integrations: [
    starlight({
      title: "Dataflow",
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/greenlogo.png",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      social: {},
      sidebar: [
        {
          label: "Get Started",
          items: [
            {
              label: "Introduction to Dataflow",
              link: "/get-started/introduction-to-dataflow/",
            },
            {
              label: "Access & Onboarding",
              link: "/get-started/access-and-onboarding/",
            },
            {
              label: "Quickstart Guide",
              link: "/get-started/quickstart-guide/",
            },
            {
              label: "Support & Help",
              link: "/get-started/support-and-help/",
            },
          ],
        },
        {
          label: "Workspace",
          items: [
            {
              label: "Overview",
              link: "/workspace/overview/",
            },
            {
              label: "Studio",
              items: [
                {
                  label: "Overview",
                  link: "/workspace/studio/overview/",
                },
                {
                  label: "Launch Server",
                  link: "/workspace/studio/launch-studio-server/",
                },
                {
                  label: "Explore & Engineer Data",
                  link: "/workspace/studio/explore-and-engineer-data/",
                },
                {
                  label: "Workflows (Airflow DAGs)",
                  link: "/workspace/studio/workflows/",
                },
                {
                  label: "MLFlow",
                  link: "/workspace/studio/mlflow/",
                },
                {
                  label: "Visualisation & Apps",
                  link: "/workspace/studio/visualisation-and-apps/",
                },
                {
                  label: "Environments",
                  link: "/workspace/studio/environments/",
                },
                {
                  label: "Variables & Secrets",
                  link: "/workspace/studio/variables-and-secrets/",
                },
                {
                  label: "Connections",
                  link: "/workspace/studio/connections/",
                },
                {
                  label: "Git Settings",
                  link: "/workspace/studio/git-settings/",
                },
                {
                  label: "Spark",
                  link: "/workspace/studio/spark/",
                },
              ],
            },

            {
              label: "Runtimes",
              items: [
                {
                  label: "Overview",
                  link: "/workspace/runtime/overview/",
                },
              ],
            },
            {
              label: "Admin",
              items: [
                {
                  label: "Overview",
                  link: "/workspace/admin/overview/",
                },
                {
                  label: "Users & Permissions",
                  link: "/workspace/admin/users-roles-teams/",
                },
                {
                  label: "Studio Server Access",
                  link: "/workspace/admin/manage-server-access/",
                },
                {
                  label: "Manage Environments",
                  link: "/workspace/admin/manage-environment/",
                },
                {
                  label: "Runtime Settings",
                  link: "/workspace/admin/runtime-settings/",
                },
                {
                  label: "Manage Spark",
                  link: "/workspace/admin/manage-spark/",
                },
              ],
            },
          ],
        },
        {
          label: "Reference",
          items:[
            {
              label:'Connections and Secrets',
              link:"/reference/connection-and-secrets"
            },
           {
              label:'Streamlit chatBot',
              link:"/reference/streamlit-chatbot"
            }
          ],
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({}),
  ],
});

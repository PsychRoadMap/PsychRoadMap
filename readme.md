# PsychRoadMap

PsychRoadMap is a web application that allows [Lindenwood University](https://www.lindenwood.edu/) psychology students to enter courses they've taken at the university and have career paths recommeneded to them.

<https://psychroadmap.netlify.app/>

## Development Setup

### Frontend

The PsychRoadMap frontend is built using [React](https://react.dev/), [Vite](https://vite.dev/), [Tailwind 4.0](https://tailwindcss.com/), and [Flowbite/Flowbite-React](https://flowbite.com/).

1. Download [Node.JS](https://nodejs.org/en)
2. Install Vite `npm install vite@latest --force`
3. Install Tailwind `npm install tailwindcss @tailwindcss/vite --force`
4. Install Flowbite-React `npm i flowbite-react --force`
5. Start development server `npm run dev`

### Backend

The PsychRoadMap backend is built using [Supabase](https://supabase.com/).

**For local development:**

1. Install [Docker](https://www.docker.com/)
2. Install [Deno](https://deno.com/)
3. Install [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=npx)
4. Add `ONET_USERNAME` and `ONET_PASSWORD` to `supabase/.env`
5. Start Supabase locally `supabase start --env-file .env`

**View logs:** `supabase functions serve`\
**Run unit tests:** Inside the [`supabase/`](./supabase/) directory run `deno test --allow-all`.

## Deployment

The frontend site is hosted on [Netlify](https://www.netlify.com/) and the backend is hosted on [Supabase](https://supabase.com/). Netlify has been configured to auto deploy to the project linked above. A Github Actions pipeline has been configured to automatically deploy the Supabase Edge Functions and database configurations on `main` [here](.github/workflows/deploy-supabase.yml).

## Resources

- [O\*Net Online](https://www.onetonline.org/)

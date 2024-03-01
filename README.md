This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


<h2>Overview Of the Project</h2>

<p>Make an account using Google Oauth. The User will be provided with his/her Profile Page, where they can edit the profile by adding extra information. The user can share their profile with the share profile button</p>

## Home Page
![Screenshot 2024-03-01 153935](https://github.com/gana-18/ConnectIn-ProfilePage/assets/81679141/72a9908e-1e61-48f6-9876-1940bf195ffb)



## Profile Page(Sample)
![Screenshot 2024-03-01 154301](https://github.com/gana-18/ConnectIn-ProfilePage/assets/81679141/2769bc76-b977-473b-a80b-5b50db434308)


<p>To run locally create a new file ".env.local"
for this project, the env variables are</p>
<ul>
  <li>MONGO_URI</li>
  <li>GOOGLE_CLIENT_ID</li>
  <li>GOOGLE_CLIENT_SECRET</li>
  <li>SECRET</li>
  <li>NEXT_PUBLIC_URL</li>
</ul>

<h3>System Design Involved 🤔?</h3>
I would say Yes! Not that much advanced but the concepts required for a successful web service

1) Microservices Architecture:
Divide the application into smaller services like user management, profile management, and content delivery. This makes the application modular, scalable, and easy to maintain.

2) Caching:
Use caching mechanisms for frequently accessed data like user profiles. This reduces the load on the database and improves response times.

3) Lazy and eager loading of Images

4) Asynchronous Processing

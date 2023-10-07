# Assignment 1 (Dev-flow)

**Ques 1 : Create a complete routing structure for an e-commerce project using different routes . Here are the expected routes :**

● Home page: “/ ”

● Product listing page: “/products”

● Product detail page: “/products/{productId}”

● Shopping cart page: “/cart”

● Checkout page: “/checkout”

● Order confirmation page: “/order/{orderId}”

●User account page: “/account”

● Login page: “/login”

● Registration page: “/register”

● Search results page: “/search?q{searchQuery}”

**Ques 2: Explain how Next.js routing differ from React.js routing?**

**Ans:** *We first install every necessary package from react router dom, ofc after installing react router dom first. We initialize our app, and wrap every thing in <Router>,  <Routes> and then <Route>*

![Screenshot 2023-10-07 180025.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6ccd8bf9-1652-4e9d-bb6e-77b334574681/e5a280e3-fefd-4091-8f67-eeeeeb4b9d8d/Screenshot_2023-10-07_180025.png)

*And here is an example of nested dynamic routing and as you can see things get dicey pretty quick*

![Screenshot 2023-10-07 180042.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6ccd8bf9-1652-4e9d-bb6e-77b334574681/8eec7ce1-13fa-4b32-8275-a688e93d246a/Screenshot_2023-10-07_180042.png)

*But in Next.js :-*

*Next.js, aims to simplify the process, by using a “file-based” router system.*

*Meaning,*

*● Folders are used to define route*

*● Files are used to create UI for the route segment*

*For instance, to convert the previous React.js routing example into Next.js, we only need to create two folders named about and contact.*

*We’ll create a special file associated with that route segments inside each folder, such as page.js or page.jsx .*

**Ques 3: What is the purpose of route groups, and how they can be created in Next.js?**

In Next.js, route groups are used to group related routes together. They provide a way to organize and manage routes more efficiently. Route groups can be created by creating a folder with the desired group name and placing the related route files inside that folder. Each route file within the group folder represents a specific route within the group.

**Ques 4: What is a dynamic route, and why should we create dynamic routes in web applications?**

A dynamic route is a route that includes parameters or placeholders in the URL. These parameters can change dynamically based on user input or other factors. Dynamic routes allow us to create more flexible and personalized web applications. They enable us to handle different types of data and display specific information based on the dynamic parameters in the URL.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

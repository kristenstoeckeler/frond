import Image from "next/image";

export default async function Home() {
    // Simulate fetching data on the server
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const products = await res.json();

  interface Todo {
    userId: number,
    id: number;
    title: string;
    completed: boolean;
  }


  return (
    <>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">This is the home page</h1>
      <a href="products" className="mt-10 inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Our Products</a>
    </>
  );
}

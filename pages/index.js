import Link from 'next/link';
import Layout from '../components/layout';
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Entreprenuership & Innovation at core
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Welcome the the entreprenuership & innovation cell of Mahindra
                University. We strive for something something. Lorem Ipsum sit
                dolor amet
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Link
                  href="/dashboard"
                  className="inline-block rounded-lg bg-amber-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-amber-600 hover:bg-amber-700 hover:ring-amber-700"
                >
                  Dashboard{" "}
                  <span className="text-amber-200" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/blogs"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Blogs{" "}
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  )
}

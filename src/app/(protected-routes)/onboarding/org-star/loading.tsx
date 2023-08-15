export default function Loading() {
  return (
    <main className="flex h-screen w-full  bg-backgroundOrgStar bg-cover bg-no-repeat text-center text-2xl text-zinc-50">
      <div className="flex w-full items-center justify-center gap-10">
        <div role="status" className="w-full max-w-md animate-pulse">
          <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200/30 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-full max-w-[360px] rounded-full bg-gray-200/30 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200/30 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200/30 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200/30 dark:bg-gray-700"></div>
          <div className="h-2 max-w-[360px] rounded-full bg-gray-200/30 dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>

        <div
          role="status"
          className="flex h-72 w-full max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300/30 dark:bg-gray-700"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </main>
  )
}

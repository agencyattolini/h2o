export default function Index() {
  return (
    <>
      <section className="h-screen bg-[#00000060] flex justify-center items-center">
        <h1 className="p-5 text-3xl font-extrabold text-white uppercase md:text-4xl">
          404, page not found
        </h1>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`../cms/pages/404.json`);
  const seo = await import(`../cms/config/seo.json`);
  const header = await import(`../cms/config/header.json`);

  return {
    props: {
      seo: seo.default,
      header: header.default,
      data: data.default,
    },
  };
}

export default function PageNotFound() {
  return (
    <section class="flex py-16 flex-col md:flex-row justify-center items-center gap-8 min-h-[calc(100vh-96px-136px)] md:min-h-[calc(100vh-96px-88px)]">
      <img src="/404 Page Not Found _Flatline.svg" alt="404" />
      <div class="flex flex-col gap-4 text-center p-4">
        <h1 class="text-5xl text-brown">Ups!</h1>
        <p>Wir konnten die angegebene Seite nicht finden.</p>
        <a class="text-gray" href="/">Zurück zur Homepage</a>
      </div>
    </section>
  );
}

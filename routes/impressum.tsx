export default function Impressum() {
  return (
    <section class="p-2 flex flex-col justify-center md:flex-row md:justify-evenly flex-wrap items-center gap-8 min-h-[calc(100vh-96px-136px)] md:min-h-[calc(100vh-96px-88px)]">
      <h2 class="text-brown text-2xl">Impressum</h2>
      <table class="my-4">
        <tbody>
          <tr>
            <th>Firmenname</th>
            <td>3P Immobilienentwicklung GmbH</td>
          </tr>
          <tr>
            <th>Office</th>
            <td>
              Neustiftgasse 20<br /> 1070 Wien<br /> Austria
            </td>
          </tr>
          <tr>
            <th>Sitz</th>
            <td>
              Johann-Strauß-Promenade 80<br />
              2000 Stockerau<br />
              Austria
            </td>
          </tr>
          <tr>
            <th>Geschäftsführerin</th>
            <td>Mag. Jolanta Pfister</td>
          </tr>
          <tr>
            <th>FN-Nummer</th>
            <td>537813 b</td>
          </tr>
          <tr>
            <th>UID-Nummer</th>
            <td>ATU75759948</td>
          </tr>
          <tr>
            <th>Firmenbuchgericht</th>
            <td>Landesgericht Korneuburg</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

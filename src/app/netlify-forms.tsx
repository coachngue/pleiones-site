export default function NetlifyForms() {
  return (
    <form
      name="demande-mission"
      method="POST"
      data-netlify="true"
      hidden
    >
      <input type="hidden" name="form-name" value="demande-mission" />
      <input type="text" name="organisation" />
      <input type="text" name="pays" />
      <input type="text" name="type_mission" />
      <input type="text" name="budget" />
      <textarea name="description"></textarea>
      <input type="email" name="email" />
    </form>
  );
}

import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../Contacts";

export async function CreateActionContact() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function updateActionContact({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function deleteContactAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}

export async function updateFavouriteAction({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

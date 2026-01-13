import Contact from "../models/contact.model.js";

// CREATE
export const createContact = async (req, res) => {
  const contact = await Contact.create({
    ...req.body,
    userId: req.user._id
  });
  res.status(201).json(contact);
};

// READ ALL (only logged-in user's contacts)
export const getContacts = async (req, res) => {
  const contacts = await Contact.find({
    userId: req.user._id,
    isDeleted: false
  }).sort({ name: 1 });

  res.json(contacts);
};

// READ ONE
export const getContactById = async (req, res) => {
  const contact = await Contact.findOne({
    _id: req.params.id,
    userId: req.user._id
  });

  if (!contact)
    return res.status(404).json({ message: "Not found" });

  res.json(contact);
};

// UPDATE
export const updateContact = async (req, res) => {
  const updated = await Contact.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );

  res.json(updated);
};

// DELETE (soft delete)
export const deleteContact = async (req, res) => {
  await Contact.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    { isDeleted: true }
  );

  res.json({ message: "Deleted" });
};

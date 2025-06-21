import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { toast } from "react-toastify";
import apiClient from "../../helpers/apiClient";
import { FilePenLine, Trash, Plus } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ContentManager = ({ apiBaseUrl, fields, title, singleEntry = false }) => {
  const [items, setItems] = useState([]);
  const [formEntries, setFormEntries] = useState([{ id: Date.now(), data: {} }]);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldOptions, setFieldOptions] = useState({});

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: ["", "center", "right", "justify"] }],
      [{ color: ["#7A7A7E", "#000", "#ffffff", "#f0f0f0", "#2b6843"] }],
      ["link"],
      ["clean"],
    ],
  };

  useEffect(() => {
    const options = {};
    fields.forEach((field) => {
      if (field.type === "select" && field.options) {
        options[field.name] = field.options.reduce((acc, opt) => {
          acc[opt.value] = opt.label;
          return acc;
        }, {});
      }
    });
    setFieldOptions(options);
    fetchItems();
  }, [fields]);

  const fetchItems = async () => {
    try {
      const response = await apiClient.get(apiBaseUrl);
      const data = Array.isArray(response.data) ? response.data : [];
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
      toast.error(error.response?.data?.error || "Failed to load items");
      setItems([]);
    }
  };

  const validateEntry = (entry) => {
    for (const field of fields) {
      if (field.required && (entry.data[field.name] === undefined || entry.data[field.name] === "")) {
        return `${field.label} is required`;
      }
      if (field.type === "number" && entry.data[field.name]) {
        const value = parseFloat(entry.data[field.name]);
        if (field.min !== undefined && value < field.min) {
          return `${field.label} must be at least ${field.min}`;
        }
        if (field.max !== undefined && value > field.max) {
          return `${field.label} must be at most ${field.max}`;
        }
      }
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      for (const entry of formEntries) {
        const validationError = validateEntry(entry);
        if (validationError) {
          toast.error(validationError);
          setIsSubmitting(false);
          return;
        }

        const formData = new FormData();
        fields.forEach((field) => {
          const value = entry.data[field.name];
          if (field.type === "file" && editingId && !(value instanceof File)) {
            return;
          }
          if (value !== null && value !== undefined && value !== "") {
            formData.append(field.name, value);
          }
        });

        if (editingId) {
          await apiClient.patch(`${apiBaseUrl}${editingId}/`, formData);
          toast.success("Item updated successfully");
        } else {
          await apiClient.post(apiBaseUrl, formData);
          toast.success("Item created successfully");
        }
      }

      setFormEntries([{ id: Date.now(), data: {} }]);
      setEditingId(null);
      fetchItems();
    } catch (error) {
      console.error("Error saving item:", error);
      const errorMessage =
        error.response?.data?.image?.[0] ||
        error.response?.data?.error ||
        error.response?.data?.eat_page_create?.[0] ||
        "Failed to save item";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    const sanitizedData = {};
    fields.forEach((field) => {
      if (field.name === 'eat_page_create' || field.name === 'tab_name') {
        sanitizedData[field.name] = item[field.name]?.id || item[field.name] || '';
      } else {
        sanitizedData[field.name] = item[field.name] || (field.type === "textEditor" ? "" : item[field.name]);
      }
    });
    setFormEntries([{ id: Date.now(), data: sanitizedData }]);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await apiClient.delete(`${apiBaseUrl}${id}/delete_and_reset/`);
      toast.success("Item deleted successfully");
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error(error.response?.data?.error || "Failed to delete item");
    }
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    const orderData = reorderedItems.map((item, index) => ({
      id: item.id,
      order: index,
    }));

    try {
      await apiClient.post(`${apiBaseUrl}reorder/`, { order: orderData });
      setItems(reorderedItems);
      toast.success("Order updated successfully");
    } catch (error) {
      console.error("Error reordering items:", error);
      toast.error(error.response?.data?.error || "Failed to reorder items");
    }
  };

  const handleInputChange = (e, entryId, isQuill = false, fieldName = null) => {
    if (isQuill) {
      setFormEntries((prev) =>
        prev.map((entry) =>
          entry.id === entryId
            ? { ...entry, data: { ...entry.data, [fieldName]: e } }
            : entry
        )
      );
      return;
    }

    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          toast.error("File size must be under 5MB");
          return;
        }
        if (!["image/png", "image/jpeg", "image/webp", "image/gif"].includes(file.type)) {
          toast.error("Only PNG, JPEG, WebP, and GIF images are allowed");
          return;
        }
        setFormEntries((prev) =>
          prev.map((entry) =>
            entry.id === entryId
              ? { ...entry, data: { ...entry.data, [name]: file } }
              : entry
          )
        );
      } else {
        setFormEntries((prev) =>
          prev.map((entry) =>
            entry.id === entryId
              ? { ...entry, data: { ...entry.data, [name]: null } }
              : entry
          )
        );
      }
    } else {
      setFormEntries((prev) =>
        prev.map((entry) =>
          entry.id === entryId
            ? { ...entry, data: { ...entry.data, [name]: value } }
            : entry
        )
      );
    }
  };

  const addFormBlock = () => {
    if (singleEntry && items.length > 0) {
      toast.error("Only one entry is allowed");
      return;
    }
    setFormEntries((prev) => [...prev, { id: Date.now(), data: {} }]);
  };

  const removeFormBlock = (entryId) => {
    if (formEntries.length === 1) {
      toast.error("At least one form entry is required");
      return;
    }
    setFormEntries((prev) => prev.filter((entry) => entry.id !== entryId));
  };

  const ShowCard = ({ item, index, fields }) => (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
        >
          <div className="bg-white shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col">
              {item.image && (
                <img
                  src={item.image}
                  alt="Content"
                  className="w-full h-40 object-cover mb-3 brightness-80"
                />
              )}
              <div>
                <p className="text-sm text-gray-500">ID: {item.id}</p>
                {fields
                  .filter((field) => field.name !== "image")
                  .map((field) => (
                    <div key={field.name} className="mb-2">
                      <p className="text-sm font-medium text-gray-700">{field.label}:</p>
                      {field.type === "select" ? (
                        <p className="text-gray-600 text-sm">
                          {fieldOptions[field.name]?.[item[field.name]] ||
                            item[`${field.name}_label`] ||
                            `No ${field.label.toLowerCase()}`}
                        </p>
                      ) : field.type === "textEditor" ? (
                        <div
                          className="text-gray-600 text-sm line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: item[field.name] || `No ${field.label.toLowerCase()}`,
                          }}
                        />
                      ) : (
                        <p className="text-gray-600 text-sm">
                          {item[field.name] || `No ${field.label.toLowerCase()}`}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600 focus:outline-none"
                  aria-label={`Edit item ${item.id}`}
                >
                  <FilePenLine size={18} />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 flex items-center justify-center space-x-2 text-red-500 hover:text-red-600 focus:outline-none"
                  aria-label={`Delete item ${item.id}`}
                >
                  <Trash size={18} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );

  return (
    <div className="mx-auto">
      <h2 className="text-lg font-medium mb-6 text-gray-800">{title}</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        {formEntries.map((entry, entryIndex) => (
          <div key={entry.id} className="mb-4 p-4 bg-gray-100 shadow">
            {!singleEntry && formEntries.length > 1 && (
              <div className="flex items-center justify-end mb-4">
                <button
                  type="button"
                  onClick={() => removeFormBlock(entry.id)}
                  className="bg-red-400 text-white px-4 py-2 text-sm hover:bg-red-500 transition-colors duration-200 flex items-center"
                  aria-label={`Remove entry ${entryIndex + 1}`}
                >
                  <Trash size={18} className="mr-2" />
                  Remove
                </button>
              </div>
            )}
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label
                  htmlFor={`${field.name}-${entry.id}`}
                  className="block text-xs font-medium text-gray-800 mb-1"
                >
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === "file" ? (
                  <input
                    id={`${field.name}-${entry.id}`}
                    type="file"
                    name={field.name}
                    onChange={(e) => handleInputChange(e, entry.id)}
                    className="w-full file:text-sm border-none focus:outline-none opacity-80 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-indigo-100 file:text-indigo-500 hover:file:bg-indigo-200"
                    accept={field.accept}
                    aria-required={field.required}
                  />
                ) : field.type === "textEditor" ? (
                  <ReactQuill
                    id={`${field.name}-${entry.id}`}
                    value={entry.data[field.name] || ""}
                    onChange={(value) => handleInputChange(value, entry.id, true, field.name)}
                    modules={quillModules}
                    placeholder={field.placeholder || ""}
                    className="bg-white"
                    style={field.name === 'content' ? { height: '400px', padding: '0px 0px 42px 0px' } : {}}
                    aria-required={field.required}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={`${field.name}-${entry.id}`}
                    name={field.name}
                    value={entry.data[field.name] || ""}
                    onChange={(e) => handleInputChange(e, entry.id)}
                    className="w-full text-sm p-2 border border-gray-800 focus:outline-indigo-500 focus:ring focus:ring-indigo-500 opacity-80"
                    aria-required={field.required}
                  >
                    <option value="">Select an option</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={`${field.name}-${entry.id}`}
                    type={field.type}
                    name={field.name}
                    value={entry.data[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={(e) => handleInputChange(e, entry.id)}
                    min={field.min}
                    max={field.max}
                    className="w-full text-sm p-2 border border-gray-800 focus:outline-indigo-500 focus:ring focus:ring-indigo-500 opacity-80"
                    aria-required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="flex items-center justify-start space-x-4">
          {!singleEntry && (
            <button
              type="button"
              onClick={addFormBlock}
              className="bg-green-500 text-white px-4 py-2 text-sm hover:bg-green-600 transition-colors duration-200 flex items-center"
              aria-label="Add another entry"
            >
              <Plus size={18} className="mr-2" />
              Add Block
            </button>
          )}
          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-500 text-white px-4 py-2 text-sm hover:bg-indigo-600 transition-colors duration-200"
              aria-label={editingId ? "Update item" : "Save all entries"}
            >
              {editingId ? "Update" : "Save"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormEntries([{ id: Date.now(), data: {} }]);
                }}
                className="bg-gray-300 text-gray-800 px-4 py-2 text-sm hover:bg-gray-400 transition-colors duration-200"
                aria-label="Cancel editing"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-wrap -mx-2"
              role="list"
              aria-label="Content list"
            >
              {Array.isArray(items) && items.length > 0 ? (
                items.map((item, index) => (
                  <ShowCard key={item.id} item={item} index={index} fields={fields} />
                ))
              ) : (
                <p className="text-gray-500 text-sm w-full text-center py-4">
                  No items to display
                </p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ContentManager;
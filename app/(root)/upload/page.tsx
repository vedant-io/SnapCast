"use client";

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { ChangeEvent, FormEvent, useState } from "react";

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "",
  });
  const [error, setError] = useState("");

  const video = useFileInput(MAX_VIDEO_SIZE);

  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (!video.file || !thumbnail.file) {
        setError("Please upload video and thumbnail");
        return;
      }
      if (!formData.title || !formData.description) {
        setError("Please fill in all the details");
        return;
      }

      //Upload the video to bunny
      //Upload the thumbnail to DB
      //Attach thumbnail
      //Create a new DB entry for the video details (URLS, metadat)
    } catch (error) {
      console.log("Error Submitting Form: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a Video</h1>

      {error && <div className="error-field">{error}</div>}
      <form
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
        onSubmit={handleSubmit}
      >
        <FormField
          id="title"
          label="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
        />
        <FormField
          id="description"
          label="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe what this video is about"
          as="textarea"
        />

        <FileInput
          id="video"
          label="video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.onChange}
          type="video"
        />
        <FileInput
          id="thumbnail"
          label="thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.onChange}
          type="video"
        />

        <FormField
          id="visibility"
          label="visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
};

export default page;

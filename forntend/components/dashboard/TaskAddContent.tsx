import React, { useEffect, useState } from "react";
import { PlaystationX } from "tabler-icons-react";
import { backend_api } from "../../utils/Url";
import CustomButton from "../utils/CustomButton";
import TextEditor from "./TextEditor";

interface Props {
  type: string;
  setTaskContentType: Function;
  taskId: number;
}

function TaskAddContent({ type, taskId, setTaskContentType }: Props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [errorMessage, setErrorMessasge] = useState<String>("");
  const [file, setFile] = useState<{ name: string; fileItem: File | null }>({
    name: "",
    fileItem: null,
  });
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const setUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile({ name: e.target.name, fileItem: e.target.files[0] });
    }
  };

  const handelUpload = async () => {
    setLoading(true);
    if (data) {
      const dataBody = {
        data: {
          taskId: taskId,
          textContent: data,
        },
      };
      const res = await fetch(`${backend_api}/api/task-contents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataBody),
      });
      const taskContent = await res.json();
      if (taskContent.data) {
        setTaskContentType(false);
      } else if (taskContent.error) {
        setErrorMessasge(taskContent.error.message);
      }
      console.log("taskContent", taskContent);
    }

    if (file.fileItem) {
      const formData = new FormData();
      formData.append(file.name, file.fileItem);
      formData.append(
        "data",
        JSON.stringify({
          taskId: taskId,
        })
      );
      const res = await fetch(`${backend_api}/api/task-contents`, {
        method: "POST",

        body: formData,
      });
      const taskContent = await res.json();
      if (taskContent.data) {
        setTaskContentType(false);
      } else if (taskContent.error) {
        setErrorMessasge(taskContent.error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="absolute top-0 left-0 p-8 w-full h-full z-20 bg-textColor-white">
      <div className="relative w-full pb-4 flex justify-between items-center">
        <div className="font-bold ">Text Editor</div>
        <div
          onClick={() => setTaskContentType("")}
          className=" text-textColor-100 cursor-pointer"
        >
          <PlaystationX className="w-8 h-8" />
        </div>
      </div>

      {type === "text" ? (
        <div className="">
          <TextEditor
            name="description"
            onChange={(data: any) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
            value={data}
          />
        </div>
      ) : (
        <div className="">
          {type === "image" && (
            <div>
              <form>
                <input
                  type={"file"}
                  onChange={(e) => setUpload(e)}
                  name="files.img"
                />
                <button type="submit"></button>
              </form>
            </div>
          )}
          {type === "sound" && (
            <div>
              <form>
                <input
                  type={"file"}
                  onChange={(e) => setUpload(e)}
                  name="files.sound"
                />
                <button type="submit"></button>
              </form>
            </div>
          )}
          {type === "vedio" && (
            <div>
              <form>
                <input
                  type={"file"}
                  onChange={(e) => setUpload(e)}
                  name="files.vedio"
                />
                <button type="submit"></button>
              </form>
            </div>
          )}
        </div>
      )}

      <div className="my-8">
        {loading ? (
          <div className="bg-blue-100 text-textColor-white font-semibold">
            Save...
          </div>
        ) : (
          <div onClick={handelUpload}>
            <CustomButton title={"Save"} bg />
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskAddContent;

import Link from "next/link";
import { GripVertical } from "tabler-icons-react";
import { inventedTeam } from "../../utils/inventedTeam";
import ProcessState from "./ProcessState";
import TasksIcons from "./TasksIcons";

interface Props {
  type?: string;
  contentId: string;
  task: Tasks;
}
export default function Task({ task, type, contentId }: Props) {
  const user: User | undefined = inventedTeam.find(
    (u) => u.id === task.attributes.memberId
  );
  return (
    <div className="flex space-x-1 w-full items-center my-3 relative">
      <GripVertical className="w-6 h-6 text-gray-100 hover:text-textColor-100 cursor-pointer transtion duration-200" />
      <div className=" bg-textColor-white rounded p-4 border border-gray-100 flex-1">
        <div className="flex items-center space-x-2">
          <TasksIcons
            type={task.attributes.type}
            title={task.attributes.title}
          />

          <ProcessState processType={task.attributes.state} />
        </div>

        <div className="flex justify-between items-center font-semibold">
          <Link
            href={`/dashboard/content/${contentId}/${task.attributes.slug}`}
          >
            {" "}
            {task?.attributes.title}
          </Link>

          <div className="flex items-center space-x-1">
            <img
              src={user ? user.img : "/img/images.jpg"}
              alt=""
              className="w-7 h-7 rounded-full border-2 border-blue-100 object-cover object-center"
            />
            <p className="font-bold text-sm">{user ? user.name : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

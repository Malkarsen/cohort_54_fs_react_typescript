import { useContext } from "react";

import { BlogManagementContext } from "homeworks/Homework_13_React_useContext/components/BlogManagement/BlogManagement";
import { MessageField } from "./styles";

function Message() {
  const message = useContext(BlogManagementContext);

  return <MessageField>{message}</MessageField>;
}

export default Message;

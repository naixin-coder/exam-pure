import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const list = [
    { title: "第一题", path: "/home" },
    { title: "第二题", path: "/user" },
    { title: "第三题", path: "/user" },
  ];
  const navClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      {list.map((l) => (
        <div
          key={l.title}
          onClick={() => {
            navClick(l.path);
          }}
        >
          {l.title}
        </div>
      ))}
    </div>
  );
};
export default List;

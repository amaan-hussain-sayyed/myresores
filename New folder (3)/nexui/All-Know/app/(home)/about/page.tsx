import { title } from "@/components/primitives";
import Table from "@/components/Table";
import { columns, users, statusOptions } from "@/data/user";
export default function AboutPage() {
  const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];
  return (
    <div>
      <h1 className={title({color:"blue"})}>About </h1>
      <Table
        INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
        columns={columns}
        statusOptions={statusOptions}
        Datas={users}
      />

     
    </div>
  );
}

import { getConnection } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcryptjs";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const password = await hash('admin', 8);

  connection.query(
    `INSERT INTO USERS(id, name, email, driver_license, username, password, "isAdmin", created_at)
      VALUES('${id}', 'admin', 'admin@rentals.com.br', '988389993' ,'adminR', '${password}', true, 'now()')
    `
  );

  await connection.close();
}

create().then(() => console.log('User admin created!'));

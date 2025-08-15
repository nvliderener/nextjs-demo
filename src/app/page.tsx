/**
 * 操作 postgres数据库
 * 联合.env 文件一起
 */

import { revalidatePath } from 'next/cache';
import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`);

export default async function Home() {
  const userList = await sql`SELECT * FROM users`;
  console.log(userList)
  async function signup(formDdata: FormData) {
    'use server'
    const name = formDdata.get('name')
    const password = formDdata.get('password')
    console.log(name, password)
    await sql`INSERT INTO users (username, password) VALUES (${name},${password})`
    revalidatePath('/')
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <form action={signup}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="border-2" />
        </div>
        {/* <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </div> */}
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="border-2" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {
        userList.map(
          (u, index) => (<div key={index}>{u.username}----{u.password}</div>)
        )
      }
    </div>
  );
}

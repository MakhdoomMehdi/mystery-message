import NextAuth from "next-auth";
import { authOptions } from "./options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// export async function GET(request:Request, context: any){
//     console.log(context);
//     handler();
// }

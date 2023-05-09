import kv from "@vercel/kv";

export default async function Home() {
    await kv.set("user_1_session", "session_token_value");
    const session = await kv.get("user_1_session");
    return <main></main>;
}

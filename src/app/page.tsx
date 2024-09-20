import AdvisorList from "@/components/AdvisorList";

export const revalidate = 29;

export default async function Home() {
  const resp = await fetch(`${process.env.MOCK_URL}listings`);
  const { data: advisors } = await resp.json();

  return (
    <div>
      <AdvisorList advisors={advisors} />
    </div>
  );
}

import ViewDetails from "@/components/viewDetails";

const Page = async ({ params }: { params: Promise< { id: string }> }) => {
  const { id } = await params;
  return (
    <>
    <ViewDetails id={id}/>
    </>
  );
}
export default Page;

  
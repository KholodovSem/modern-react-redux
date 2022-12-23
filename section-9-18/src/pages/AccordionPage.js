import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "Can i use React on a project?",
      content: "You can use React on any project you want"
    },
    {
      id: 2,
      label: "Can i use JavaScript on a project?",
      content: "You can use JavaScript on any project you want"
    },
    {
      id: 3,
      label: "Can i use CSS on a project?",
      content: "You can use CSS on any project you want"
    },
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
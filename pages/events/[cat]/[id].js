import SingleEvent from '../../../src/components/events/single-event';
// import { getAllPostIds, getPostData } from '../../../lib/posts'

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() { 
  // const paths = getAllPostIds()

  const data = await import('../../../data/data.json');
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => { //går gjennom produkter
    return { 
      params: {
        cat: path.specCategory, //cat er lik produktens kategori
        id: path.id, //id til produktet
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };

}

export async function getStaticProps(context) {
  
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import('../../../data/data.json');
  const eventData = allEvents.find((ev) => id === ev.id); //finne ut om id er lik produktens id

  return {
    props: { data: eventData },
  };
}
